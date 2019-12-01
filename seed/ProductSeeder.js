var Product=require('../models/product');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
var products=[
    new Product({
     imagePath:'images/p1.jpg',
     title: 'Đồ chơi(barbie)',
     price:375000,   
    }),
    new Product({
        imagePath:'images/p2.jpg',
        title: 'Đồ chơi(todos)',
        price:475000,   
       }),
    new Product({
        imagePath:'images/p3.jpg',
        title: 'Đồ chơi(robot)',
        price:255000,   
       }),
    new Product({
        imagePath:'images/p4.jpg',
        title: 'Đồ chơi(Super)',
        price:465000,   
       }),
    new Product({
        imagePath:'images/p5.jpg',
        title: 'Đồ chơi(Flower)',
        price:355000,   
       }),    
    new Product({
        imagePath:'images/p6.jpg',
        title: 'Đồ chơi(barbie)',
        price:175000,   
       }),  
    new Product({
        imagePath:'images/p7.jpg',
        title: 'Đồ chơi(barbie)',
        price:315000,   
       }),
    new Product({
        imagePath:'images/p8.jpg',
        title: 'Đồ chơi(barbie)',
        price:372000,   
       }),
    new Product({
        imagePath:'images/p9.jpg',
        title: 'Đồ chơi(barbie)',
        price:575000,   
       }),
];
var done=0;
for(var i=0;i<products.length;i++)
{
    products[i].save(function(err,result){
        done++;
        if(done===products.length)
        {
            exit();
        }
    });
}
function exit()
{
mongoose.disconnect();
}