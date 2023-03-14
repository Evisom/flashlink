const md5 = require('md5');
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');
const credentials = __dirname+'/key.pem'

class Link {
    
    constructor(url, ip, code) {
        this.url = url;
        this.date = Date.now();
        this.ip = ip;
        this.code = code || md5(Math.floor(this.date) .toString() + '+' + this.url).slice(-5)
    }
    async database(callback) {
        
        const client = new MongoClient('mongodb+srv://cluster0.amvbo6d.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
            sslKey: credentials,
            sslCert: credentials,
            serverApi: ServerApiVersion.v1
        });
        try {
            await client.connect();
            const database = client.db("flashlink");
            const collection = database.collection("links");

            callback(collection, async ()=> {
                await client.close()
            })
            
          } catch(error) {
            callback(false, ()=>{})
          }
    }
    write(callback) {
        this.database(async (collection) => {
            if (!collection) {
                result = {
                    success: false 
                }
                callback(result)
            } else {
                this.getUrl((result) => {
                    if (result.length != 0) {
                        for (let i = 0; i < result.length; i++) {
                            if (Date.now() - result[i].date > 86400000) {
                                let l = Link(undefined, undefined, result[i].code)
                                l.remove()
                            }
                        }
                    }
                })
                let result = await collection.insertOne(this)
                console.log(result)
                result = {
                    success: result.acknowledged,
                    code: this.code 
                }
                callback(result)
            }
        })
    }
    getUrl(callback) {
        console.log(this.code)
        this.database(async(collection) => {
            collection.find({code: this.code}).toArray((err, result) => {
                if (err) {
                    callback(false);
                } else {
                    callback(result);
                 }
                console.log(result);
            })
        })
    }
    remove(callback) {
        this.database(async (collection) => {
            collection.deleteMany({code: this.code}, (err, res) => {
                if (err) {
                    callback(false)
                } else {
                    callback(true)
                }
            })
        })
    }
}

export default Link