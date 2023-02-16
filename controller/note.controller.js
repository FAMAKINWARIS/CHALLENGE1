const Note = require('../model/noteSchema.model');

exports.createNote = async (req,res)=>{
  const {title,description}= req.body;
    try
     {
        // validation
         if((!title && description)){
           res.status(400).json('Please input all field');
        };
        const note = await Note.create(
            {
            title,
            description,
        });
        return res.status(200).json({message: 'Note successfully created', note});
    } catch (error) {
        console.log(error);
    res.status(500).json({
      message: "internal sever error",
      error: error.message
    });
    };
};

exports.deleteSingleNoteById = async (req, res) => {
  const id = req.params.id;
try {
await Note.findByIdAndDelete(id);
return res.status(200).json({message: "deleted Successfully"});
} catch (error) {
console.log(error);
return res.status(500).json({ Message: "internal server error" });
};
};

exports.updateSingleNoteById = async (req, res) => {
  const id = req.params.id
  const {title, description} = req.body
  try {
    const notes = await Note.findByIdAndUpdate(id, {title, description},{ new: true });
    return res.status(200).json({message: "updated successfully", notes});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "internal server error" });
  }
};

exports.viewNotes=async(req,res)=>{
    try {
        const notes = await Note.find();
        res.status(200).json({message: 'All created Notes',notes})
    } catch (error) {
        console.log(error);
    return res.status(500).json({
      message: "internal sever error",
      error: error.message
    });
    }
};

exports.getSingleNoteByTitle = async (req, res) => {
  const title = req.params.title;
    try {
      const notes = await Note.findOne({ title: req.params.title });
      return res.status(200).json(notes);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "internal server error" });
    }
  };


