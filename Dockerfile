FROM amd64/node:16-alpine 
WORKDIR /app
COPY package*.json ./
# RUN npm install fastify-cli --global
RUN npm ci
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production
COPY . .
ARG addr
ARG port
ENV FASTIFY_ADDRESS=${addr}
ENV FASTIFY_PORT=${port}
EXPOSE ${port}
CMD [ "npm", "run", "start" ]
