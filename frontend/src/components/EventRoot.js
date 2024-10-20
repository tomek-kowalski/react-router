import EventNavigation from './EventsNavigation.js'
import { Outlet } from 'react-router-dom';

function EventsRootLayout() {

    return (
        <>
            <EventNavigation/>
            <Outlet/>
        </>
    );

}

export default EventsRootLayout;