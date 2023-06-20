import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Inicio } from '../components/Inicio/Inicio';
import { Craneo } from '../components/Craneo/Craneo';
import { Tronco } from '../components/Tronco/Tronco';
import { Brazo } from '../components/Brazo/Brazo';
import { Pierna } from '../components/Pierna/Pierna';
import { Sistema } from '../components/Sistema/Sistema';
import { Quiz } from '../components/Quiz/Quiz';
import { Acerca } from '../components/Acerca/Acerca';
import { Menu } from '../components/Menu/Menu';

export const RoutesConfiguration = () => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/craneo' element={<Craneo />} />
                <Route path='/tronco' element={<Tronco />} />
                <Route path='/miembro-superior' element={<Brazo />} />
                <Route path='/miembro-inferior' element={<Pierna />} />
                <Route path='/sistema-circulatorio' element={<Sistema/>} />
                <Route path='/acerca' element={<Acerca />} />
                <Route path='/quiz' element={<Quiz/>} />
            </Routes>
        </Router>
    );
};
