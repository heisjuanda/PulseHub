import { useState, useEffect } from 'react';

import frontTorso from '../../assets/Img/Torso/frontTorso.png';
import backTorso from '../../assets/Img/Torso/backTorso.png';
import arrow from '../../assets/Img/arrow.png';
import arrowR from '../../assets/Img/arrowR.png';

import './Tronco.css';

export const Tronco = () => {

    const [torsoImg, setTroncoImg] = useState([]);
    const [frontTorsoID, setFrontTorsoID] = useState([]);
    const [backTorsoID, setBackTorsoID] = useState([]);

    useEffect(() => {
        setTroncoImg([frontTorso, backTorso]);
        setFrontTorsoID([
            {
                id: 'vena-cava-superior',
                nombre: 'Vena Cava Superior',
            },
            {
                id: 'pericardio',
                nombre: 'Pericardio',
            },
            {
                id: 'vena-cava-inferior',
                nombre: 'Vena Cava Inferior',
            },
            {
                id: 'aorta-descendente',
                nombre: 'Aorta Descendente',
            },
            {
                id: 'lliaca-externa',
                nombre: 'LlÍaca Externa',
            },
            {
                id: 'vena-hepatica',
                nombre: 'Vena Hepatica',
            },
            {
                id: 'toracica-lateral',
                nombre: 'Torácica Lateral',
            },
        ]);
        setBackTorsoID([
            {
                id: 'intercostales',
                nombre: 'Intercostales',
            },
            {
                id: 'renal',
                nombre: 'Renal',
            },
            {
                id: 'axilar',
                nombre: 'Axilar',
            },
            {
                id: 'iliolumbar',
                nombre: 'Iliolumbar',
            },
            {
                id: 'arterias-pulmonares',
                nombre: 'Arterias Pulmonares',
            },
            {
                id: 'lumbar-ascendente',
                nombre: 'Lumbar Ascendente',
            },
            {
                id: 'lliaca-comun',
                nombre: 'Llíaca Común',
            },
        ]);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className='torso-section'>
                <article className='torso-section__imgs'>
                    {torsoImg.map((src, key) => {
                        return (
                            <div key={key} className='torsos-container'>
                                <img src={src} alt="cráneo sistema circulatorio" />
                                {key < 1 ? (
                                    frontTorsoID.map((obj) => {
                                        return (
                                            <div id={obj.id} key={obj.id}>
                                                {(obj.id === 'vena-hepatica') ||
                                                    (obj.id === 'toracica-lateral') ? (
                                                    <img src={arrowR} alt="flecha para las partes del sistema" />
                                                ) :
                                                    (
                                                        <img src={arrow} alt="flecha para las partes del sistema" />
                                                    )}
                                                <p>{obj.nombre}</p>
                                            </div>
                                        );
                                    })
                                ) : null}
                                {key === 1 ? (
                                    backTorsoID.map((obj) => {
                                        return (
                                            <div id={obj.id} key={obj.id}>
                                                {(obj.id === 'intercostales') ||
                                                    (obj.id === 'lumbar-ascendente') ||
                                                    (obj.id === 'lliaca-comun') ? (
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