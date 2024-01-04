
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{display: 'block'}}>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Home;