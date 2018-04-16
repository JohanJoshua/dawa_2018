var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
user = require('./models/user'),
category = require('./models/category'),
price = require('./models/price');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.set('view engine','jade');
//Routes of users
app.get('/',user.show);
app.get('/create',(req,res)=>{
	res.render('createUser');
});
app.post('/create',user.create);
app.post('/editView',user.editar);
app.post('/edit',user.update);
app.post('/delete',user.delete);

//Routes of categories
app.get('/category',category.show);
app.get('/createAjax',category.ajax);
app.get('/createCategory',category.send);
app.post('/createCategory',category.create);
app.post('/editViewCategory',category.editar);
app.post('/editCategory',category.update);
app.post('/deleteCategory',category.delete);

//Routes of prices
app.get('/price',price.show);
app.get('/createPrice',(req,res)=>{
	res.render('createPrice');
});
app.post('/createPrice',price.create);
app.post('/editViewPrice',price.editar);
app.post('/editPrice',price.update);
app.post('/deletePrice',price.delete);

app.listen(9090,()=>{
	console.log('Iniciando!');
});