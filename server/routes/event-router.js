const eventRouter = require("express").Router();
const {getEvents, getEventsById, addEvent,updateEvent,deleteEvent }= require("../controllers/event-ctrl");


eventRouter.get('/', getEvents);
eventRouter.get('/byId/:id', getEventsById);
eventRouter.post('/add', addEvent);
eventRouter.put('/update/:id', updateEvent);
eventRouter.delete('/delete/:id', deleteEvent);


module.exports = eventRouter;
