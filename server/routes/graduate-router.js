const graduateRouter = require('express').Router()

const {getGraduates, getGraduatesById, updateGraduate, deleteGraduate,graduateRegister,graduateLogin} = require('../controllers/graduate-ctrl');
const {authToken,checkUserType}= require('../middleware/auth-middleware')

graduateRouter.get('/',getGraduates);
graduateRouter.get('/byId/:id', getGraduatesById);
graduateRouter.post('/register',graduateRegister);
graduateRouter.post('/login',graduateLogin);
graduateRouter.put('/update/:id',authToken, updateGraduate);
graduateRouter.delete('/delete/:id',authToken, deleteGraduate);

module.exports = graduateRouter

