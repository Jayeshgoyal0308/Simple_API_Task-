const express = require('express')
const https = require('https')
const axios = require('axios')
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/" , (req,res)=>{

    const url = "https://jsonplaceholder.typicode.com/users";

  axios.get(url).then(resp => {
    res.send(resp.data)
});  

})

app.listen(PORT , () => {
    console.log(`Server listening on PORT ${PORT}...`);
})

