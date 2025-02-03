const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'))
app.get('/', (req,res)=>{
    res.render('main.html')
});
app.listen(port, ()=>{
    console.log('Listening on 3000');
});