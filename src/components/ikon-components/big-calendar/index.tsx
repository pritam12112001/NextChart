'use client'
import { format, getDay, parse, startOfWeek } from "date-fns";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { EventData } from "./type";

// Localization settings
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

export default function BigCalendar({ events, extraParamsEvent } : { events: EventData[], extraParamsEvent : any }) {
    return (
        <Calendar
            localizer={localizer}
            events={events? events : []}
            startAccessor="start"
            endAccessor="end"
            views={[Views.DAY, Views.WEEK, Views.MONTH, Views.AGENDA, Views.WORK_WEEK]}
            defaultView={extraParamsEvent.defaultView == "day" ? Views.DAY : ( extraParamsEvent.defaultView == "week" ? Views.WEEK : Views.MONTH )}
            style={{ height: extraParamsEvent?.height || "500px", margin: extraParamsEvent?.margin || "10px" }}
        />
    );
}
