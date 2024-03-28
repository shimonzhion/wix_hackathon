const classOfRouter = require('express').Router()
const {getClassesOf, getClassOfById, addClassOf, updateClassOf, deleteClassOf} = require('../controllers/classOf-ctrl');

classOfRouter.get('/', getClassesOf);
classOfRouter.get('/byId/:id', getClassOfById);
classOfRouter.post('/add', addClassOf);
classOfRouter.put('/update/:id', updateClassOf);
classOfRouter.delete('/delete/:id', deleteClassOf);

module.exports = classOfRouter;