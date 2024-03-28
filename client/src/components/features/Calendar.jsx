import React, { useState } from 'react';
import './EventCalendar.css';

const EventCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([
      {
        id: 1,
        date: '2024-03-27',
        title: 'JS Conference',
        color: '#e8a8b8',
        start: new Date('2024-03-27'),
        end: new Date('2024-03-27')
      },
      {
        id: 2,
        date: '2024-03-28',
        title: 'Vue Meetup',
        color: '#f8c9b4',
        start: new Date('2024-03-28T10:00'),
        end: new Date('2024-03-28T14:00')
      },
      {
        id: 3,
        date: '2024-03-24',
        title: 'Angular Meetup',
        color: '#d5c9e8',
        start: new Date('2024-03-24'),
        end: new Date('2024-03-30'),
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
      },
      {
        id: 4,
        date: '2024-03-01',
        title: 'React Workshop',
        color: '#ffc107',
        start: new Date('2024-02-28'),
        end: new Date('2024-03-03'),
        description: 'Learn React from scratch in this 5-day workshop'
      },
      {
        id: 5,
        date: '2024-03-15',
        title: 'Team Retrospective',
        color: '#28a745',
        start: new Date('2024-03-15T14:00'),
        end: new Date('2024-03-15T16:00')
      },
      {
        id: 6,
        date: '2024-03-20',
        title: 'Code Review',
        color: '#dc3545',
        start: new Date('2024-03-20T09:00'),
        end: new Date('2024-03-20T11:00')
      }
    ]);
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  const renderDays = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`blank-${i}`} className="day blank"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const eventsForDay = events.filter(event => event.date === date.toISOString().split('T')[0]);

      days.push(
        <div key={`day-${i}`} className="day" onClick={() => handleOpenModal(null, date)}>
          <div className="day-number">{i}</div>
          <div className="events">
            {eventsForDay.map((event, index) => (
              <div
                key={`event-${index}`}
                className="event"
                style={{ backgroundColor: event.color }}
                onClick={() => handleOpenModal(event)}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleOpenModal = (event, date) => {
    setShowModal(true);
    setEditingEvent(event ? { ...event } : { start: date, end: date, allDay: true });
  };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  //   setEditingEvent(null);
  // };

  const handleAddEvent = () => {
    const newEvent = {
      id: events.length + 1,
      date: editingEvent.start.toISOString().split('T')[0],
      title: editingEvent.title,
      color: editingEvent.color || '#e8a8b8',
      start: editingEvent.start,
      end: editingEvent.end,
      description: editingEvent.description
    };
    setEvents([...events, newEvent]);
    setShowModal(false);
    setEditingEvent(null);
  };

  const handleUpdateEvent = () => {
    setEvents(
      events.map(event =>
        event.id === editingEvent.id ? editingEvent : event
      )
    );
    setShowModal(false);
    setEditingEvent(null);
  };

  const handleRemoveEvent = () => {
    setEvents(events.filter(event => event.id !== editingEvent.id));
    setShowModal(false);
    setEditingEvent(null);
  };

  const handleInputChange = (e) => {
    setEditingEvent({
      ...editingEvent,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&#x25C0;</button>
        <div className="month-year">
          {currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
        </div>
        <button onClick={handleNextMonth}>&#x25BA;</button>
        <select>
          <option>Month</option>
        </select>
        <button className="add-event-button" onClick={() => handleOpenModal(null, currentDate)}>
          ADD EVENT
        </button>
      </div>
      <div className="day-headers">
        <div className="day">Sun</div>
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
      </div>
      <div className="days">{renderDays()}</div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editingEvent ? 'Edit an event' : 'Add an event'}</h2>
            <input
              type="text"
              name="title"
              placeholder="Summary"
              value={editingEvent?.title || ''}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={editingEvent?.description || ''}
              onChange={handleInputChange}
            ></textarea>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="allDay"
                  checked={
                    editingEvent?.start.getHours() === 0 &&
                    editingEvent?.end.getHours() === 23
                  }
                  onChange={handleInputChange}
                />
                All day event
              </label>
            </div>
            <div>
              <label>
                Start
                <input
                  type="date"
                  name="start"
                  value={editingEvent?.start.toISOString().split('T')[0] || ''}
                  onChange={(e) =>
                    setEditingEvent({
                      ...editingEvent,
                      start: new Date(
                        `${e.target.value}T${editingEvent?.start.toISOString().split('T')[1]}`
                      )
                    })
                  }
                />
                <input
                  type="time"
                  name="startTime"
                  value={editingEvent?.start.toISOString().split('T')[1].slice(0, 5) || ''}
                  onChange={(e) =>
                    setEditingEvent({
                      ...editingEvent,
                      start: new Date(
                        `${editingEvent?.start.toISOString().split('T')[0]}T${e.target.value}`
                      )
                    })
                  }
                />
              </label>
              <label>
                End
                <input
                  type="date"
                  name="end"
                  value={editingEvent?.end.toISOString().split('T')[0] || ''}
                  onChange={(e) =>
                    setEditingEvent({
                      ...editingEvent,
                      end: new Date(`${e.target.value}T${editingEvent?.end.toISOString().split('T')[1]}`)
                    })
                  }
                />
                <input
                  type="time"
                  name="endTime"
                  value={editingEvent?.end.toISOString().split('T')[1].slice(0, 5) || ''}
                  onChange={(e) =>
                    setEditingEvent({
                      ...editingEvent,
                      end: new Date(`${editingEvent?.end.toISOString().split('T')[0]}T${e.target.value}`)
                    })
                  }
                />
              </label>
            </div>
            <div className="modal-buttons">
              {editingEvent && <button onClick={handleRemoveEvent}>REMOVE</button>}
              <button onClick={editingEvent ? handleUpdateEvent : handleAddEvent}>
                {editingEvent ? 'SAVE' : 'ADD'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar; 