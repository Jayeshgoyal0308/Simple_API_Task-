const express = require('express')
const https = require('https')
const axios = require('axios')
var cors = require('cors')
const app = express();
app.use(cors()) 


const PORT = process.env.PORT || 8000;

app.get("/routes" , (req,res)=>{

    const url = "https://jsonplaceholder.typicode.com/users";

  axios.get(url).then(resp => {
    console.log(resp.data);
    res.send(resp.data)
});  

})

app.listen(PORT , () => {
    console.log(`Server listening on PORT ${PORT}...`);
})

