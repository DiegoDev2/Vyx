// lib/mongodb.ts
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

const clientPromise = client.connect().then(() => client);

export default clientPromise;

