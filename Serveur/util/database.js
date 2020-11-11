const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callBack) => {
  MongoClient.connect(
    "mongodb+srv://Dauph:Dauphin42@cluster0.mholo.mongodb.net/pinkypimp?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected !");
      _db = client.db();
      callBack();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No databse found !";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;