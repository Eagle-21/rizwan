import express from "express";
import mongoose from "mongoose"; 
const app = express()
const PORT=5100
const MONGO_URI = "mongodb+srv://admin:admin@ameen.9jgrf3p.mongodb.net/?retryWrites=true&w=majority&appName=ameen"

app.get('/',(req,res) => {
    res.send("backend running!")
})
app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
})

mongoose.connect(MONGO_URI)
.then( () => {console.log("mongo URI connected");} )
.catch(()=>{console.log("DB connection error")})

const UserSchema = mongoose.Schema(
{

name:String,
email:String

}
)

const user = mongoose.model('Users', UserSchema);

app.post('/users',async (req,res) => {
    try {
        const newUser = new User(req,body);
        await newUser.save();
        res.status(201).send("User Created");

    }
    catch(err){
        res.status(400).send("error:"+ err);

    }
})