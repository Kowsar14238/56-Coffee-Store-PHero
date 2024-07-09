///Step 1: Create index.js
///Step 2: Add this "start": "node index.js" to package.json
///Step 3: Declare the variables
const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');//Step 6
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