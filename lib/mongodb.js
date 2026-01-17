import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  console.warn("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      maxPoolSize: 5,
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, {
    maxPoolSize: 5,
  });
  clientPromise = client.connect();
}

export default clientPromise;
