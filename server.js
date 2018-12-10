const express = require('express');

var app = express();
var hbs = require('hbs');


app.set('view engine','hbs');

hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('currentYear',()=>{
	return new Date().getFullYear();
});

app.get('/about',(req,res)=>{
	res.render('about.hbs');
});

app.listen(3000);
