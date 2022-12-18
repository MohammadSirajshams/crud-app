const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/crud-routes")
const cors = require("cors")

const app = express()

//Middlewares
app.use(express.json())
app.use(cors())
app.use("/cards",router)  //localhost:5000/cards

// admin1234


mongoose.connect("mongodb+srv://user123:admin1234@cluster0.jsie1tz.mongodb.net/Crud-app").
then(()=>
    console.log("Database is connected"))
.catch((err)=>{
        console.log(err)
})


PORT =5000
const server=app.listen(PORT,()=>{
    console.log(`Server is working on http://localhost:${PORT}`);
})