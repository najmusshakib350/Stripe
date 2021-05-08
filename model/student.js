const mongoose=require('mongoose');

const studentschema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    name:{
      type:String,
      require:true
  },
  token:{
    type:String,
    require:true
  }
});

const students=mongoose.model("students", studentschema);

module.exports=students;