const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))

// get a value
app.get('/', (req, res) => {
    let options = {weekday : "long", yaer : 'numeric', month: 'long', day: 'numeric'};
    const today = new Date();
    const day = today.toLocaleDateString("en-US", options);
    res.render("list", {kindofday : day});
})

app.listen(5000, () => {
    console.log(`Port is running at server 5000`);
});