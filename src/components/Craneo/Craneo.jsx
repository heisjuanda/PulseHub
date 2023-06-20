import { useEffect, useState } from 'react';

import frontHead from '../../assets/Img/Craneo/frontHead.png';
import lateralHead from '../../assets/Img/Craneo/lateralHead.png';
import backHead from '../../assets/Img/Craneo/backHead.png';
import arrow from '../../assets/Img/arrow.png';
import arrowR from '../../assets/Img/arrowR.png';

import './Craneo.css';

export const Craneo = () => {

    const [headImg, setHeadImg] = useState([]);
    const [frontHeadID, setFrontHeadID] = useState([]);
    const [lateralHeadID, setLateralHeadID] = useState([]);
    const [backHeadID, setBacklHeadID] = useState([]);

    useEffect(() => {
        setHeadImg([frontHead, lateralHead, backHead]);
        setFrontHeadID([
            {
                id: 'seno-sagital-superior',
                nombre: 'Seno Sagital Superior',
            },
            {
                id: 'parietal-posterior',
                nombre: 'Parietal Posterior',
            },
            {
                id: 'cerebral-media',
                nombre: 'Cerebral Media',
            },
            {
                id: 'facial',
                nombre: 'Facial',
            },
            {
                id: 'yugular-externa',
                nombre: 'Yugular Externa',
            },
        ]);
        setLateralHeadID([
            {
                id: 'seno-transverso',
                nombre: 'Seno Transverso',
            },
            {
                id: 'profunda-cervical',
                nombre: 'Profunda Cervical',
            },
            {
                id: 'angular',
                nombre: 'Angular',
            },
            {
                id: 'labial-superior',
                nombre: 'Labial Superior'
            },
            {
                id: 'seno-sagital-inferior',
                nombre: 'Seno Sagital Inferior'
            }
        ]);
        setBacklHeadID([
            {
                id: 'seno-sigmoideo',
                nombre: 'Seno Sigmoideo',
            },
            {
                id: 'seno-transverso1',
                nombre: 'Seno Transverso',
            },
            {
                id: 'yugular-interna',
                nombre: 'Yugular Interna',
            },
            {
                id: 'vertebral',
                nombre: 'Vertebral',
            },
        ]);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className='craneo-section'>
                <article className='craneo-section__imgs'>
                    {headImg.map((src, key) => {
                        return (
                            <div key={src} className='imgs-container'>
                                <img src={src} alt="cráneo sistema circulatorio" />
                                {key < 1 ? (
                                    frontHeadID.map((obj) => {
                                        return (
                                            <div id={obj.id} key={obj.id}>
                                                <img src={arrow} alt="flecha para las partes del sistema" />
                                                <p>{obj.nombre}</p>
                                            </div>
                                        );
                                    })
                                ) : null}
                                {key === 1 ? (
                                    lateralHeadID.map((obj) => {
                                        return (
                                            <div id={obj.id} key={obj.id}>
                                                {(obj.id === 'angular') || (obj.id === 'labial-superior') || (obj.id === 'seno-sagital-inferior') ? (
                                                    <img src={arrowR} alt="flecha para las partes del sistema" />
                                                ) : (
                                                    <img src={arrow} alt="flecha para las partes del sistema" />
                                                )}
                                                <p>{obj.nombre}</p>
                                            </div>
                                        );
                                    })
                                ) : null}
                                {key > 1 ? (
                                    backHeadID.map((obj) => {
                                        return (
                                            <div id={obj.id} key={obj.id}>
                                                <img src={arrow} alt="flecha para las partes del sistema" />
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