// THIS FILE WILL ONLY BE USED TO INSERT SOME DUMMY DATA INTO THE DATABASE

const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
  console.log('Mongo Conmection Open');
  })
  .catch(err => {
  console.log(err)
  })

// const p = new Product({
//   name: 'Ruby Grapfruit',
//   price: 1.99,
//   category: 'fruit'
// })
  
// p.save()
//   .then(p => {
//   console.log(p);
//   })
//   .catch(e => {
//   console.log(e);
// })

const seedProducts = [
  {
    "name": "apple",
    "price": 1.99,
    "category": "fruit"
  },
  {
    "name": "banana",
    "price": 0.99,
    "category": "fruit"
  },
  {
    "name": "orange",
    "price": 1.49,
    "category": "fruit"
  },
  {
    "name": "carrot",
    "price": 0.69,
    "category": "vegetable"
  },
  {
    "name": "broccoli",
    "price": 1.49,
    "category": "vegetable"
  },
  {
    "name": "tomato",
    "price": 1.29,
    "category": "vegetable"
  }
]

Product.insertMany(seedProducts)
  .then(res => {
  console.log(res);
  })
  .catch(e => {
  console.log(e);
})