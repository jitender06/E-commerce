import mongoose from "mongoose";

// schema
// it is basically a object that will decide the structure of our data

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// we are basically selecting the schem and give it a name "users"

export const UserModel = mongoose.model("users", UserSchema);

// and we gonna use that model to make call to that userschema collection
