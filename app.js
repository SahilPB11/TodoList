const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}))

// get a value
app.get('/', (req, res) => {
    res.send("mango khayeg")
})

app.listen(5000, () => {
    console.log(`Port is running at server 5000`);
});