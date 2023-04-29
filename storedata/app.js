const express =  require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect("mongodb://localhost:27017/myfirstdata", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Then we have to define a schema. A schema is a structure, that gives information about how the data is being stored in a collection.
 const dataSchema  = {
    email: String,
    query: String,
 };
 //Then we have to create a model using that schema which is then used to store data in a document as objects.

 const data = mongoose.model('data', dataSchema);

 //define app, ejs, bodyParser
const app  = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));
//include the path in our app
app.use(express.static(__dirname + '/public'));

//Then, finally, we are able to store data in our document.
//read the data
app.get("/data", (req, res)=>{
res.render("data")
})
//insert(create) the data
app.post("/data", (req, res)=>{
    console.log(req.body.email);
   
    const data = new Data({
                email:req.body.email,
                query:req.body.query,
    });
    data.save((err)=>{
        if(err){
            throw err
        }else{
            res.render("data")
        }
    })
})
  
app.listen(3000, ()=>{
    console.log("App is running on port 3000")
})
