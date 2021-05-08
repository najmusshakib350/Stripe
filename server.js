const mongoose = require('mongoose');
const dotenv=require('dotenv');

dotenv.config({
  path: './config.env',
});

//Database Connection Code Start
const DB ="mongodb://127.0.0.1:27017/testmongoose";
mongoose.connect(DB, {
  //mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connection Succesfull!!!!');
});
//Database Connection Code is end

const app = require('./app');

const server=app.listen(5000, () => {
  
    console.log(`This port number is 6000`);
});

