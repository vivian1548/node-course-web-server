const express = require('express');
const hbs=require('hbs');

var app =express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view-engine','hbs');
hbs.registerHelper('currentyear',()=>{
return  new Date().getFullYear()
})


app.use('/',(re,res,next)=>{
  res.render('maintenance.hbs');
});

app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
  res.render('home.hbs',{
    bodytext:'this is the homePage'
  });
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{

    year:'2016'
  });
  // res.send('about Page');
});

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage:"something bad happened",
    errorCode:324
  });
});
app.listen(3000);
