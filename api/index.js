const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
});

app.get('/fruits', (req, res)=>{
    res.send({
        apple: 4,
        banana: 5,
        orange: 7
    })
})
