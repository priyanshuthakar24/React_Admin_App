import React, { useEffect, useState } from 'react';
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda,Resize ,DragAndDrop} from '@syncfusion/ej2-react-schedule';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { Header } from '../components';

const Calendar = () => {
    const dataManager = new DataManager({
        url: 'http://localhost:4001/api/getData',
        crudUrl: 'http://localhost:4001/api/crudActions',
        adaptor: new UrlAdaptor(),
        crossDomain: true
    });



    return (

        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="App" title="Calendar" />
        <ScheduleComponent height='650px' eventSettings={{
            dataSource: dataManager, fields: {
                subject: { name: 'subject' },
                isAllDay: { name: 'isallday' },
                location: { name: 'location' },
                description: { name: 'description' },
                startTime: { name: 'starttime' },
                endTime: { name: 'endtime' },
                startTimezone: { name: 'starttimezone' },
                endTimezone: { name: 'endtimezone' },
                recurrenceID: { name: 'recurrenceid' },
                recurrenceRule: { name: 'recurrencerule' },
                recurrenceException: { name: 'recurrenceexception' },
                followingID: { name: 'followingid' },
            }
        }} >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda,Resize,DragAndDrop]} />
        </ScheduleComponent>
        </div>
    );
};

export default Calendar
// <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
//     <Header category='App' title='Calendar' />
//     <ScheduleComponent
//         height="650px"
//         eventSettings={{ dataSource: scheduleData }}
//         selectedDate={new Date(2021, 0, 10)}
//     >
//         <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
//     </ScheduleComponent>
// </div>


// 1) solution
// const [events, setEvents] = useState([]);

// useEffect(() => {
//   gapi.load('client:auth2', initClient);
// }, []);
// const initClient = () => {
//     gapi.client.init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         discoveryDocs: DISCOVERY_DOCS,
//         scope: SCOPES,
//     }).then(() => {
//         gapi.auth2.getAuthInstance().signIn().then(fetchEvents);
//     });
// };
// const fetchEvents = () => {
//     gapi.client.calendar.events.list({
//         calendarId: 'primary',
//         timeMin: (new Date()).toISOString(),
//         showDeleted: false,
//         singleEvents: true,
//         maxResults: 10,
//         orderBy: 'startTime',
//     }).then(response => {
//         const events = response.result.items.map(event => ({
//             Id: event.id,
//             Subject: event.summary,
//             StartTime: new Date(event.start.dateTime || event.start.date),
//             EndTime: new Date(event.end.dateTime || event.end.date),
//         }));
//         setEvents(events);
//     });
// };