///Step 1: Create index.js
///Step 2: Add this "start": "node index.js" to package.json
///Step 3: Declare the variables
const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');//Step 6
require('dotenv').config()//Step 6
const port = process.env.PORT || 5000;

//Step 4: Middleware
app.use(cors());
app.use(express.json());

//After setup the client
//Step 6: Connect with MongoDB
const uri = `mongodb+srv://${process.env.address}:${process.env.pass}@cluster0.203kw13.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    //Step 11: 
    const coffeeCollection = client.db("56CoffeePHeroDB").collection('coffee');

    //Step 12:Get all the coffee collections
    app.get('/coffee', async(req, res)=>{
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    //Step 18:Update a coffee
    app.get('/coffee/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    })

    //Step 9: Store input values for sending to server
    app.post('/coffee', async(req, res) =>{
      const newCoffee = req.body;
      console.log(newCoffee);
      
      //Step 11:
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
    });

    //Step 16:Delete a coffee
    app.delete('/coffee/:id', async(req, res) =>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id)}
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
//Step 6: end



//Step 5: For checking the server
app.get('/', (req, res) =>{
    res.send("Coffee making server is running...");

})
app.listen(port, () =>{
    console.log(`Coffee server is running on port: ${port}`);
})