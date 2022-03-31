import mongoose from "mongoose"
let schema = new mongoose.Schema({
  title: String,
  type: String,
  release_year: Number,
  Date: String,
  album_length: String,
  songs: [{}]

})
module.exports = schema
let model = mongoose.model("Discography", schema)
  
  module.exports = model


