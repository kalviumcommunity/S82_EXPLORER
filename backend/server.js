const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(express.json());
const placeRoutes = require('./routes/routes');
app.use('/api', placeRoutes);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })  
  .then(() => console.log('Connected to Database'))
  .catch(console.error);


const validateUser = require('./middlewares/validateUser');

const ObjectModel = require('./schema');
app.get("/",(req,res)=>{
  const dbState = mongoose.connection.readyState;
  if(dbState === 1){
  res.send("Connected to Database");
  }
  else{
    res.send("Not Connected to Database");
  }
})

const PlaceModel = require('./models/Place'); // Make sure the path is correct

app.post('/places', async (req, res) => {
  const { name, description, ingredients, userId } = req.body; // Assuming userId is passed from frontend

  try {
    const newPlace = new PlaceModel({
      name,
      description,
      ingredients,
      created_by: userId, 
    });

    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


app.get('/objects', async (req, res) => {
  try {
    res.json(await ObjectModel.find());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/ping', (req, res) => res.send('hello world'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
