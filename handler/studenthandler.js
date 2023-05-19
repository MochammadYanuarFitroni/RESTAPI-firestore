const { db } = require("../config/admin");
const { customAlphabet } = require('nanoid')

exports.createStudent = async (req, res) => {
    const students = db.collection("student")
    const nanoid = customAlphabet('123ABC', 5)
    const studentId = nanoid()
    const data = {
        nama: req.body.nama,
        jurusan: req.body.jurusan,
        fakultas: req.body.fakultas
    }

    try{
        await students.doc(studentId).set(data)
        return res.status(200).send({status: "success", message: "Student created successfully"})
    }catch(e){
        return res.status(500).send({status: "failed", message: e})
    }
} 

exports.getAllStudents = async (req, res) => {
    const students = db.collection("student")

    try{
        const get = await students.get();
        const data = get.docs.map(doc => doc.data())
        res.status(200).send({status:"success", data: data});
    }
    catch(e){
        return res.status(500).send({status: "failed", message: e})
    }
}

exports.getStudentById = async (req, res) => {
    const students = db.collection("student")
    const studentId = req.params.id

    try{
        const get = await students.doc(studentId).get()
        const data = {
            id: get.id,
            nama: get.data().nama,
            jurusan: get.data().jurusan,
            fakultas: get.data().fakultas
        }
        res.status(200).send({status:"success", data: data});
    }
    catch(e){
        return res.status(500).send({ general: "Something went wrong, please try again"})
    }
}

exports.updateStudent = async (req, res) => {
    const students = db.collection("student")
    const studentId = req.params.id
    const data = {
        nama: req.body.nama,
        jurusan: req.body.jurusan,
        fakultas: req.body.fakultas
    }

    try{
        const get = students.doc(studentId)
        await get.update(data)
        res.status(200).send({status:"success", data: "Student updated successfully"});
    }
    catch(e){
        return res.status(500).send({ general: "Something went wrong, please try again"})
    }
}

exports.deleteStudent = async (req, res) => {
    const students = db.collection("student")
    const studentId = req.params.id

    try{
        const get = students.doc(studentId)
        await get.delete()
        res.status(200).send({status:"success", data: "Student deleted successfully"});
    }
    catch(e){
        return res.status(500).send({ general: "Something went wrong, please try again"})
    }
}