import db from "./database";
import model from "./server/discography/model";
import discography from "./discography.json" 

const insertData = async () => {
  // reset database
  db.dropDatabase();

  // insert characters into database
  await Character.insertMany(characters);

  // insert houses into database
  await House.insertMany(houses);

  // close db connection (done)
  db.close();
};

insertData();
