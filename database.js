let mongoose = require('mongoose')

const MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/tyler-the-creator-api";

// Uncomment to debug Mongoose queries
// mongoose.set('debug', true)

mongoose.set("returnOriginal", false);

mongoose
  .connect(MONGODB_URI)
  .catch((error) =>
    console.error("Error connecting to MongoDB: ", error.message)
  );

mongoose.connection.on("disconnected", () =>
  console.log(`Disconnected from MongoDB!`)
);


mongoose.connection.on("error", (error) =>
  console.error(`MongoDB connection error: ${error}`)
);





module.exports = mongoose.connection