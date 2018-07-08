import {MongoClient} from "mongodb"

require("dotenv").config();
const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;
let reaction;

MongoClient.connect(url, {useNewUrlParser: true}).then((client) => {
    console.log("connected mongo");
    const db = client.db(dbName);
    reaction = db.collection("reaction");
});