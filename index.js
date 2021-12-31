import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv"


import STUDENTMODELs from "./StudentSchema/student_schema.js"



dotenv.config();
const app = express()
app.use(express.json())
const port = process.env.PORT || 8000;
const db = process.env.DB_URL;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database connected successfully")).catch((error) => console.log(`${error}`))

//Home route
app.get("/", (req, res) => {
    res.send("Welcome to Jacob's API")

});

//Get all students route

app.get("/students", async (req, res) => {
    const newUser = await STUDENTMODELs.find({})

    if (newUser) {
        return res.status(200).json(newUser)
    } else {
        return res.status(400).json({
            message: "Faild to get all user from Database"
        })
    }

})

//POST NEW USER TO DATABASE

app.post("/newStudent", async (req, res) => {
    try {
        const {first_name, last_name, school, date_of_birth } = req.body
        const newUser = await STUDENTMODELs.create({
            first_name,
            last_name,
            school,
            date_of_birth
        })
        if (newUser) {
            return res.status(200).json({
                message: "New student created successfully"
            })
        } else {
            return res.status(400).json({
                message: "Faild to create new user"
            })
        }

    } catch (error) {

    }
})


app.listen(port, () => {
    console.log("SERVER RUNNIG ON PORT.........")
})