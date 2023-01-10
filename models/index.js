const { ObjectId } = require('fastify-mongodb')

module.exports = {

    readAllClasses: async (mongo) => {

        const collection = mongo.db.collection(process.env.COLLECTION_NAME_CLASSES)
        const result = await collection.find({}).toArray()
        return result
    },
    readClassbyName: async (mongo, name)=>{
        
        const collection = mongo.db.collection(process.env.COLLECTION_NAME_CLASSES)
        const result = await collection.findOne({
            name: name
        })
        return result
    },
    readClassbyMajor: async (mongo, major)=>{
        
        const collection = mongo.db.collection(process.env.COLLECTION_NAME_CLASSES)
        const result = await collection.findOne({
            major: major
        })
        return result
    },
    readClassbyTeacherId: async (mongo, teacherId)=>{
        
        const collection = mongo.db.collection(process.env.COLLECTION_NAME_TEACHERS_CLASSES)
        const result = await collection.find({
            teacherId : ObjectId(teacherId)
        }).toArray()
        
        return result
    },
    readClassbyStudentId: async (mongo, studentId)=>{

        const collection = mongo.db.collection(process.env.COLLECTION_NAME_USERS_CLASSES)
        const result = await collection.find({
            userId : Number(studentId)
        }).toArray()
        
        return result
    },
    readClassbyId: async (mongo,id) => {

        const collection = mongo.db.collection(process.env.COLLECTION_NAME_CLASSES)
        const result = await collection.findOne({
            _id: ObjectId(id)
        })
        return result
    },
    addAClass: async (mongo, userId, classId)=>{

        const collection = mongo.db.collection(process.env.COLLECTION_NAME_USERS_CLASSES)
        const result = await collection.insertOne({
            userId : userId,
            classId : classId
        })
        return result
    },
    deleteAClass: async (mongo, id)=>{

        const collection = mongo.db.collection(process.env.COLLECTION_NAME_USERS_CLASSES)
        const result = await collection.deleteOne({
            classId : id
        })
        return result
    },
    readAllTeachers: async (mongo) => {

        const collection = mongo.db.collection(process.env.COLLECTION_NAME_TEACHERS)
        const result = await collection.find({}).toArray()
        return result
    },
    readTeacherbyId: async (mongo, id)=>{

        const collection = mongo.db.collection(process.env.COLLECTION_NAME_TEACHERS)
        const result = await collection.findOne({
            _id: ObjectId(id)
        })
        return result
    }
}