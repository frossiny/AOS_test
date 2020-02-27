const express = require('express')
const db = require('./db')
// const bodyParser = require('body-parser')

const app = express()
const Port = 65530

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// var array = db.comptes.find();
// console.log(array);

app.post('/login', function(req, res){
	var array = db.comptes.find();
	console.log(req.body);
	console.log(array);
})

db.collection('comptes', function(err, collection){

	collection.findOne({email : "test@aos.fr"}, function(err, login){
		if (!err)
			console.log(login.email)
	} )
})

app.listen(Port, () => console.log(`Server running on port ${Port}`))
