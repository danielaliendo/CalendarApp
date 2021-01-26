import React, { useState, useEffect } from 'react';
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive, eventClearActiveEvent, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');
const localizer = momentLocalizer(moment);

// const events = [{
//     title: 'Cumpleaños del jefe',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours').toDate(),
//     bgcolor: '#fafafa',
//     notes: "Comprar el pastel",
//     user: {
//         _id: 123,
//         name: 'Fernando'
//     }
// }]


export const CalendarScreen = () => {

    const { uid } = useSelector(state => state.auth)

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

    const dispatch = useDispatch()

    // Read store events
    const { events, activeEvent } = useSelector(state => state.calendar)

    useEffect(() => {

        dispatch( eventStartLoading() )
 
    }, [dispatch])

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal())
    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e))
    }

    const onViewChange = (e) => {
        setLastView(e)
        localStorage.setItem('lastView', e)
    }

    const eventStyleGetter = (event) => {

        

        const style = {
            backgroundColor: ( uid === event.user._id ) ? '#367cf7' : '#9E9E9E',
            borderRadius: 0,
            border: 'none',
            opacity: 0.8,
            // : 0.8,
            display: 'block',
            color: 'white',
            position: 'relative'
        }

        return {
            style
        }
    }

    const onSelectSlot = (e) => {
        dispatch( eventClearActiveEvent() )
    }

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                onSelectSlot={ onSelectSlot }
                selectable={ true }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />
            <AddNewFab />
            {activeEvent && <DeleteEventFab />}
            <CalendarModal />
        </div>
    )
}
