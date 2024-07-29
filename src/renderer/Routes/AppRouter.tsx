import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Products from '../pages/Products';
import Home from '../pages/Home';
import Customers from '../pages/Customer';
import Service from '../pages/Service';
import Sale from '../pages/Sale';

const AppRouter: React.FC = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/sale' element={<Sale />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/customers' element={<Customers />}/>
                    <Route path='/products' element={<Products />}/>
                </Routes>
            </Router>
        </>
    );
}

export default AppRouter;