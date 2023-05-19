const express = require("express")
const { getAllStudents, createStudent, getStudentById, deleteStudent, updateStudent } = require('./handler/studenthandler')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/students", getAllStudents)
app.get("/student/:id", getStudentById)
app.post("/student/create", createStudent)
app.delete("/student/:id", deleteStudent)
app.put("/student/:id", updateStudent)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})