import {Craneo} from '../Craneo/Craneo';
import {Tronco } from '../Tronco/Tronco';
import { Brazo } from '../Brazo/Brazo';
import { Pierna } from '../Pierna/Pierna'; 

import './Sistema.css';

export const Sistema = () => {
    return (
        <div className='sistema-container'>
            <Craneo />
            <Tronco />
            <Brazo />
            <Pierna />
        </div>
    );
};