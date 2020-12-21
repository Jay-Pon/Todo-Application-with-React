const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors())
app.use(express.json())

//ROUTES
//create student details
app.post("/add", async (req, res) => {
    try {
        const {name} = req.body;
        console.log(name)
        const student = await pool.query("INSERT INTO student (name) VALUES($1) RETURNING *", [name]);

        res.json(student.rows[0])
    } catch (err) {
        console.log("ERROR")
        console.error(err.message);
    }
})

//all students
app.get("/students", async (req, res) => {
    try {
        const all_students = await pool.query("SELECT * FROM student");
        res.json(all_students.rows)
    } catch (error) {
        console.error(error.message);
    }
})

//one student
app.get("/students/:id/", async (req, res) => {
    try {
        const {id} = req.params;
        const student = await pool.query("SELECT * FROM student WHERE id = $1", [id])
        res.json(student.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//update student
app.put("/edit/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        console.log(id, name)
        const student = await pool.query("UPDATE student SET name = $1 WHERE id = $2", [name, id])
        res.json("UPDATED")
    } catch (error) {
        console.error(error.message);
    }
})

//delete student
app.delete("/delete/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const student = await pool.query("DELETE FROM student WHERE id = $1", [id])
        res.json("DELETED");
    } catch (error) {
        console.error(error.message )
    }
})

app.listen(5000, () => {
    console.log("successfully listening on port 5000")
})