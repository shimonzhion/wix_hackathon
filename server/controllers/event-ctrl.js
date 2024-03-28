const EventModel = require("../models/event-model");
const {getAll, getById, create,deleteOne,updateOne}= require("./main");

const getEvents = (req, res) => {
  getAll(req, res, EventModel,"publisher");
};
const getEventsById = (req, res) => {
    getById(req, res, EventModel);
}
const addEvent = (req, res) => {
    create(req, res, EventModel);
}
const updateEvent = (req, res) => {
    updateOne(req, res, EventModel);
}
const deleteEvent = (req, res) => {
    deleteOne(req, res, EventModel);
}

module.exports = {
    getEvents,
    getEventsById,
    addEvent,
    updateEvent,
    deleteEvent
}