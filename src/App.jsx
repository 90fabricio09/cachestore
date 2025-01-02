import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Ticket from './components/Ticket.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
    return (
        <>
            <Navbar />
            <Ticket />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;