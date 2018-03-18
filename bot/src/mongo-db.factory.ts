import * as mongoose from 'mongoose';

export class MongoDbFactory {
  constructor(private connectionString: string) { }

  createDb() {
    //Set up default mongoose connection
    mongoose.connect(this.connectionString, { promiseLibrary: global.Promise });

    //Get the default connection
    var db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    return db;
  }
}
