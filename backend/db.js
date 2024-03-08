const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb://GoFoodDatabase:OZKVX9pr1TDiKP3Z@ac-efu9ug7-shard-00-00.lls3zub.mongodb.net:27017,ac-efu9ug7-shard-00-01.lls3zub.mongodb.net:27017,ac-efu9ug7-shard-00-02.lls3zub.mongodb.net:27017/GoFoodMern?ssl=true&replicaSet=atlas-q1y6a9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
  // await mongoose.connect(
  //   mongoURI,
  //   { useNewUrlParser: true },
  //   { useUnifiedTopology: true },
  //   async (err, result) => {
  //     if (err) console.log("---", err);
  //     else {
  //       console.log("connected");
  //       const fetched_data = await mongoose.connection.db.collection(
  //         "food_items"
  //       );
  //       fetched_data.find({}).toArray(function (err, data) {
  //         if (err) console.log("err");
  //         else console.log();
  //       });
  //     }
  //   }
  // );
  mongoose.connect("mongodb://127.0.0.1:27017/FoodMon",{useNewUrlParser: true,useUnifiedTopology: true},()=>{
    console.log("Db connected");
  });
};

module.exports = mongoDB;
