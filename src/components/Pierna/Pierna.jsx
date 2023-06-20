import { useState, useEffect } from 'react';

import frontLeg from '../../assets/Img/Pierna/frontLeg.png';
import arrow from '../../assets/Img/arrow.png';
import arrowR from '../../assets/Img/arrowR.png';

import './Pierna.css';

export const Pierna = () => {
    const [legImg, setLegImg] = useState([]);
    const [frontLegID, setFrontLegID] = useState([]);

    useEffect(() => {
        setLegImg([frontLeg]);
        setFrontLegID([
            {
                id: 'femoral',
                nombre: 'Femoral'
            },
            {
                id: 'safena-magna',
                nombre: 'Safena Magna'
            },
            {
                id: 'poplitea',
                nombre: 'PoplÍtea'
            },
            {
                id: 'descendente-de-la-rodilla',
                nombre: 'Descendente De La Rodilla'
            },
            {
                id: 'tibial-posterior',
                nombre: 'Tibial Posterior'
            },
            {
                id: 'femoral-profunda',
                nombre: 'Femoral Profunda'
            },
            {
                id: 'circunfleja-femoral',
                nombre: 'Circunfleja Femoral'
            },
            {
                id: 'recurrente-tibial-anterior',
                nombre: 'Recurrente Tibial Anterior'
            },
            {
                id: 'inferior-medial-de-la-rodilla',
                nombre: 'Inferior Medial De La Rodilla'
            },
            {
                id: 'peronea',
                nombre: 'Peronea'
            },
            {
                id: 'safaena-menor',
                nombre: 'Safaena Menor'
            },
            {
                id: 'digital-dorsal',
                nombre: 'Digital Dorsal'
            },
        ])
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className='leg-section'>
                <article className='leg-section__imgs'>
                    {legImg.map((src, key) => {
                        return (
                            <div key={key} className='leg-img-container'>
                                <img src={src} alt="pierna y su sistema circulatorio" />
                                {frontLegID.map((obj) => {
                                    return (
                                        <div id={obj.id} key={obj.id}>
                                            {(obj.id === 'femoral') ||
                                                (obj.id === 'safena-magna') || 
                                                (obj.id === 'descendente-de-la-rodilla') || 
                                                (obj.id === 'inferior-medial-de-la-rodilla') ? (
                                                <img src={arrowR} alt="flecha para las partes del sistema" />
                                            ) :
                                                (
                                                    <img src={arrow} alt="flecha para las partes del sistema" />
                                                )}
                                            <p>{obj.nombre}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </article>
            </section>
        </>
    );
};