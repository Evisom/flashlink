const { MongoClient, ServerApiVersion } = require('mongodb');

const fs = require('fs')

const key = fs.readFileSync(__dirname + '/key.pem')

const uri =
  "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";

const client = new MongoClient('mongodb+srv://cluster0.amvbo6d.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {    
    sslKey: key,
    sslCert: key,
    serverApi: ServerApiVersion.v1
});

async function run() {
  try {
    const database = client.db('flashlink');
    const movies = database.collection('links');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);