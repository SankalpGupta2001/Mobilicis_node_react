const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3099;
app.use(bodyParser.json());





mongoose.connect("mongodb://localhost:27017/mobiliciss", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    id:Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    car: String,
    phone_price: String,
    quote: String,
    income: String,
    city: String
  });

 

const User = mongoose.model('mobiss', userSchema);



app.get('/users', async (req, res) => {
    try {
      const users = await User.find({
        income: { $lt: 5 },
        car: { $in: ['BMW', 'Mercedes'] }
      }).exec();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/male-users', async (req, res) => {
    try {
      const users = await User.find({
        gender: 'Male',
        phone_price: { $gt: 10000 }
      }).exec();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/last-name-users', async (req, res) => {
    try {
      const users = await User.find({
        $expr: {
          $regexMatch: {
            input: '$email',
            regex: new RegExp(`\\b${'$lastName'}\\b`, 'i')
          }
        },
        $expr: { $gt: [{ $strLenCP: '$quote' }, 15] }
      }).exec();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/email-users', async (req, res) => {
    try {
      const users = await User.find({
        car: { $in: ['BMW', 'Mercedes', 'Audi'] },
        email: { $not: /\d/ }
      }).exec();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/top-cities', async (req, res) => {
    try {
      const topCities = await User.aggregate([
        {
          $group: {
            _id: '$city',
            count: { $sum: 1 },
            totalIncome: { $sum: '$income' }
          }
        },
        { $sort: { count: -1 } },
        { $limit: 10 },
        {
          $project: {
            _id: 0,
            city: '$_id',
            count: 1,
            averageIncome: { $divide: ['$totalIncome', '$count'] }
          }
        }
      ]);
      res.json(topCities);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  



  
  

app.listen(port, () => console.log(`Server listening on port ${port}`));
