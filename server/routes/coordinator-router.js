const coordinatorRouter = require("express").Router();
const {getCoordinators, register,login, deleteCoordinator, getCoordinatorById, updateCoordinator} = require("../controllers/coordinator-ctrl");
coordinatorRouter.get('/', getCoordinators);


coordinatorRouter.post('/register', register);
coordinatorRouter.post('/login', login);
coordinatorRouter.put('/update/:id', updateCoordinator);
coordinatorRouter.delete('/delete/:id', deleteCoordinator);
coordinatorRouter.get('/byId/:id', getCoordinatorById);



module.exports = coordinatorRouter;