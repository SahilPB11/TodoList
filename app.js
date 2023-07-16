const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(bodyParser.urlencoded({extended:true}))
let newItemsList = [];
// get a value
app.get('/', (req, res) => {
    let options = {weekday : "long", year : 'numeric', month: 'long', day: 'numeric'};
    const today = new Date();
    const day = today.toLocaleDateString("en-US", options);
    res.render("list", {kindofday : day, newItemsList : newItemsList});
})

app.post('/', (req, res) => {
    let newItem = req.body.newItem;
    newItemsList.push(newItem);
    res.redirect('/');
})

app.listen(5000, () => {
    console.log(`Port is running at server 5000`);
});