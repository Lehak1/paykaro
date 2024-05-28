const express=require("express")
const mongoose=require("mongoose")
// mongodb+srv://lehakdutta:uzv4FRPN39uTcpTK@cluster0.0lusav5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const Mainrouter=require("./routes/index")
const app=express();
const cors=require("cors");

app.use(cors());
app.use(express.json())
app.use("/api/v1",Mainrouter);

mongoose.connect("mongodb+srv://lehakdutta:uzv4FRPN39uTcpTK@cluster0.0lusav5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => console.error('Could not connect to MongoDB...', err));



// app.listen(3000,"app is listening");