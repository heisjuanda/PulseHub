import { useEffect, useState } from "react";

import leftArm from '../../assets/Img/Brazos/leftArm.png';
//import rigthArm from '../../assets/Img/Brazos/rigthArm.png';
import arrow from '../../assets/Img/arrow.png';
import arrowR from '../../assets/Img/arrowR.png';

import './Brazo.css';

export const Brazo = () => {

    const [brazoImg, setBrazoImg] = useState([]);
    const [leftArmID, setleftArmID] = useState([]);

    useEffect(() => {
        setBrazoImg([leftArm]);
        setleftArmID([
            {
                id: 'cefalica',
                nombre: 'Cefálica'
            },
            {
                id: 'cefalica-accesoria',
                nombre: 'Cefálica Accesoria'
            },
            {
                id: 'basilica',
                nombre: 'Basílica'
            },
            {
                id: 'braquial',
                nombre: 'Braquial'
            },
            {
                id: 'profunda-del-brazo',
                nombre: 'Profunda Del Brazo'
            },
            {
                id: 'radial',
                nombre: 'Radial'
            },
            {
                id: 'metarcarpiana-dorsal',
                nombre: 'Metarcarpiana Dorsal'
            },
            {
                id: 'mediana-antebraqual',
                nombre: 'Mediana Antebraqual'
            },
            {
                id: 'interosea-anterior',
                nombre: 'Interósea Anterior'
            },
            {
                id: 'colateral-del-radio',
                nombre: 'Colateral Del Radio'
            },
            {
                id: 'colateral-media',
                nombre: 'Colateral Media'
            },
        ]);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className='arm-section'>
                <article className='arm-section__imgs'>
                    {brazoImg.map((src, key) => {
                        return (
                            <div key={key} className="arms-container">
                                <img src={src} alt="brazo sistema circulatorio" />
                                {key < 1 ? (
                                    leftArmID.map((obj) => {
                                        return (
                                            <div id={obj.id} key={obj.id}>
                                                {(obj.id === 'cefalica') ||
                                                    (obj.id === 'cefalica-accesoria') ||
                                                    (obj.id === 'profunda-del-brazo') || 
                                                    (obj.id === 'radial') || 
                                                    (obj.id === 'colateral-del-radio') ||
                                                    (obj.id === 'colateral-media') ? (
                                                    <img src={arrowR} alt="flecha para las partes del sistema" />
                                                ) : (
                                                    <img src={arrow} alt="flecha para las partes del sistema" />
                                                )}
                                                <p>{obj.nombre}</p>
                                            </div>
                                        );
                                    })
                                ) : null}
                            </div>
                        );
                    })}
                </article>
            </section>
        </>
    );
};