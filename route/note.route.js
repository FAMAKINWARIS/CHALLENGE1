const { createNote, deleteSingleNoteById, updateSingleNoteById, viewNotes, getSingleNoteByTitle } = require('../controller/note.controller');

const router = require('express').Router();

router.post('/create',createNote);
router.delete('/delete/:id',deleteSingleNoteById);
router.put('/update/:id',updateSingleNoteById);
router.get('/notes',viewNotes);
router.get('/note/:title',getSingleNoteByTitle);



module.exports = router;