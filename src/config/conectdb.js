import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Robert:RPM12022003@api-node.2nl8l.mongodb.net/Api-node?authSource=admin")

const db = mongoose.connection;

export default db

