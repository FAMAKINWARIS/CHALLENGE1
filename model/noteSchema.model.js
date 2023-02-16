const mongoose =require('mongoose');

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        maxLength:500,
    },
},
{
    timestamps: true,
  }
);

module.exports= mongoose.model("Note", noteSchema);