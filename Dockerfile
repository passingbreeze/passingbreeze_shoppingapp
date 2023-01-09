FROM amd64/node:16-alpine 
WORKDIR /app
COPY package*.json ./
# RUN npm install fastify-cli --global
RUN npm ci
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production
COPY . .
# first param means local work dir 
#the second one means app/
ENV FASTIFY_ADDRESS=0.0.0.0
ENV FASTIFY_PORT=8080
EXPOSE 8080
CMD [ "npm", "run", "start" ]
