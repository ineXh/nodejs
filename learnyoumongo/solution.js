var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
/*// //////////////////
// Exercise 3 Find
// //////////////////
var age = process.argv[2]
mongo.connect(url, function(err, db) {
  if (err) throw err
  var parrots = db.collection('parrots')
  console.log('hi')
  console.log(parrots)
  console.log('hi2')
  parrots.find({
    age: {
      $gt: +age
    }
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs)
    db.close()
  })
})
// /////////////////////
// Exercise 4 Find Limit
// Description: Find all documents where age is greate than first argument passed to your //script
// db.collection.find(query, projection)
// /////////////////////
var age = process.argv[2]
//console.log("age: " + age)
mongo.connect(url, function(err, db) {
  if (err) throw err
  var parrots = db.collection('parrots')
  //console.log(parrots)
  parrots.find(	{age: { $gt: +age}}, 
				{_id: false, name:true, age:true})
				.toArray(function(err, docs) {
						if (err) throw err
						console.log(docs)
						db.close()
					  })
})
// /////////////////////
// Exercise 5 Insert
// Description: Insert a document into the docs collection with 'firstName' and 'lastName'
// Use JSON.stringify to convert it to JSON
// /////////////////////
var firstName = process.argv[2]
var lastName = process.argv[3]
var doc = {
  firstName: firstName
, lastName: lastName
}
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('docs')
  collection.insert(doc, function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(doc))
    db.close()
  })
})
// /////////////////////
// Exercise 6 Update
// Description: Update a document in the users collection
// {"name":"Tina","age":30,"username":"tinatime"}, want to change from 30 to 40
// /////////////////////
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('users')
  collection.update({username: "tinatime"},{$set:{age:40}}, function(err, data) {
    if (err) throw err
    db.close()
  })
})
// /////////////////////
// Exercise 7 Remove
// Description: Removing a document with the given _id
// /////////////////////
var _id = process.argv[2];
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('users')
  collection.remove({_id:_id}}, function(err, data) {
    if (err) throw err
    db.close()
  })
})
// /////////////////////
// Exercise 8 Count
// Description: Count the number of documents where age is greater than the first arguemnt passed
// use parrots collection
// /////////////////////
var age = process.argv[2];
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('parrots')
  collection.count({age: { $gt: +age}}, function(err, count) {
    if (err) throw err
	console.log(count)
    db.close()
  })
})*/
// /////////////////////
// Exercise 9 Aggregate
// Description: Aggregation allows calculating the sum of a field of multiple documents or the average meeting particular criteria
// {"name":"Tshirt","size":"S","price",10,"quantity",12,"meta":{"vendor":"hanes","location":"US"}}
// calculate the average price for all tshirts that have the size given
// /////////////////////
var size = process.argv[2];
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('prices')
  collection.aggregate([{$match:{size:size}},
						{$group:{_id:'average', average:{$avg:'$price'}}}]  
  ).toArray(function(err, data) {
    if (err) throw err
	if (!data.length) {
      throw new Error('No results found')
    }
	var o = data[0]
    console.log(Number(o.average).toFixed(2))	
    db.close()
  })
})