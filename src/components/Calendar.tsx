import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = dayjsLocalizer(dayjs)

interface CalendarEvent {
  start: Date;
  end: Date;
  title: string;
}

interface CalendarProps {
  events?: CalendarEvent[];
}

const MyCalendar = ({ events = [] }: CalendarProps) => (
  <div className="flex flex-col items-center justify-center gap-4 max-w-[90%] mx-auto mb-8">
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      defaultView="week"
      style={{ height: 600, width: '100%' }}
      eventPropGetter={(event) => ({
        style: {
          borderRadius: '4px',
          opacity: 0.8,
          color: 'white',
          border: '0px',
          display: 'block'
        }
      })}
    />
  </div>
)

export default MyCalendar