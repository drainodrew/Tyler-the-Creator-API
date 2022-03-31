let db = require("./database");
let Discography = require("./server/discography/model");
let discographies = require("./discography.json") 

const insertData = async () => {
  // reset database
  db.dropDatabase();

  // insert discography into database
  await Discography.insertMany(discographies);


  // close db connection (done)
  db.close();
};

insertData();
