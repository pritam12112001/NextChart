import BigCalendar from "@/components/ikon-components/big-calendar";
import { EventData } from "@/components/ikon-components/big-calendar/type";


const eventData: EventData[] = [
    {
        title: "Team Meeting 1",
        start: new Date("2024-12-12T12:00"),
        end: new Date("2024-12-12T14:00"),
        allDay: false,
        decription: "Test 1"
    },
    {
        title: "Team Meeting 2",
        start: new Date("2024-12-02"),
        end: new Date("2024-12-03"),
        allDay: true,
        decription: "Test 2"
    },
];

const extraParamsEvent: any = {
    height: 800,
    margin: "10px",
    defaultView: "month",
}

export default function Events() {
    return (
        <div className="container p-3 w-full">
            <BigCalendar events={eventData} extraParamsEvent={extraParamsEvent} />
        </div>
    );
}