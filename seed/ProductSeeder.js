var Product=require('../models/product');
var mongoose=require('mongoose');
var url1= "mongodb+srv://admin:admin@user-1712507-hgdqg.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(url1, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true}).then(
	() => {
		console.log('KN THANH CONG')
		

	},
	err => { /** handle initial connection error */
		console.log('KNOI loi~');
	}
);
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