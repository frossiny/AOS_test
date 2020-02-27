const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/aos_db', { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to mongoDB (db : aos_db)");
      })
    .catch(e => {
		console.error('Connection error', e.message)

		db.collection("comptes").find().toArray(function (error, results) {
			if (error) throw error;

			results.forEach(function(i, obj) {
				console.log(
					"ID : "  + obj._id.toString() + "\n",
					"Nom : " + obj.email + "\n" ,
					"Jeu : " + obj.psw ,
				);
			});
		});
    })

const db = mongoose.connection

module.exports = db
