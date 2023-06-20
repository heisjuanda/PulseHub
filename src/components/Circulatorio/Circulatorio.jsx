import { useCallback, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import humanBody from '../../assets/Img/Inicio/human.webp';
import humanHeadSystem from '../../assets/Img/Inicio/head.webp';
import humanTorsoSystem from '../../assets/Img/Inicio/torso.webp';
import humanArmSystem from '../../assets/Img/Inicio/arm.webp';
import humanLegSystem from '../../assets/Img/Inicio/leg.webp';

import './Circulatorio.css';

export const Circulatorio = () => {

    const history = useNavigate();

    const [isOpenHeadSystem, setIsOpenHeadSystem] = useState(true);
    const [isOpenTorsoSystem, setIsOpenTorsoSystem] = useState(true);
    const [isOpenArmSystem, setIsOpenArmSystem] = useState(true);
    const [isOpenLegSystem, setIsOpenLegSystem] = useState(true);

    const headBodySystemRef = useRef();
    const torsoBodySystemRef = useRef();
    const armBodySystemRef = useRef();
    const legBodySystemRef = useRef();

    const handleShowHeadSystem = useCallback(() => {
        if (isOpenHeadSystem) {
            if (headBodySystemRef.current) {
                headBodySystemRef.current.style.transform = `translateX(58vw) scale(1)`;
                headBodySystemRef.current.style.opacity = `1`;
                setIsOpenHeadSystem(!isOpenHeadSystem);
            }
        } else {
            if (headBodySystemRef.current) {
                headBodySystemRef.current.style.transform = `translateX(0vw) scale(0)`;
                headBodySystemRef.current.style.opacity = `0`;
                setIsOpenHeadSystem(!isOpenHeadSystem);
            }
        }
    }, [isOpenHeadSystem]);

    const handleShowTorsoSystem = useCallback(() => {
        if (isOpenTorsoSystem) {
            if (torsoBodySystemRef.current) {
                torsoBodySystemRef.current.style.transform = `translateX(62vw) scale(1)`;
                torsoBodySystemRef.current.style.opacity = `1`;
                setIsOpenTorsoSystem(!isOpenTorsoSystem);
            }
        } else {
            if (torsoBodySystemRef.current) {
                torsoBodySystemRef.current.style.transform = `translateX(0vw) scale(0)`;
                torsoBodySystemRef.current.style.opacity = `0`;
                setIsOpenTorsoSystem(!isOpenTorsoSystem);
            }
        }
    }, [isOpenTorsoSystem]);

    const handleShowArmSystem = useCallback(() => {
        if (isOpenArmSystem) {
            if (armBodySystemRef.current) {
                armBodySystemRef.current.style.transform = `translateX(58vw) scale(1)`;
                armBodySystemRef.current.style.opacity = `1`;
                setIsOpenArmSystem(!isOpenArmSystem);
            }
        } else {
            if (armBodySystemRef.current) {
                armBodySystemRef.current.style.transform = `translateX(0vw) scale(0)`;
                armBodySystemRef.current.style.opacity = `0`;
                setIsOpenArmSystem(!isOpenArmSystem);
            }
        }
    }, [isOpenArmSystem]);

    const handleShowLegSystem = useCallback(() => {
        if (isOpenLegSystem) {
            if (legBodySystemRef.current) {
                legBodySystemRef.current.style.transform = `translateX(58vw) scale(1)`;
                legBodySystemRef.current.style.opacity = `1`;
                setIsOpenLegSystem(!isOpenLegSystem);
            }
        } else {
            if (legBodySystemRef.current) {
                legBodySystemRef.current.style.transform = `translateX(0vw) scale(0)`;
                legBodySystemRef.current.style.opacity = `0`;
                setIsOpenLegSystem(!isOpenLegSystem);
            }
        }
    }, [isOpenLegSystem]);

    useEffect(() => {
        const areDefined = headBodySystemRef.current && torsoBodySystemRef.current && armBodySystemRef.current && legBodySystemRef.current;
        if (areDefined) {
            const allRef = [headBodySystemRef.current, torsoBodySystemRef.current, armBodySystemRef.current, legBodySystemRef.current];
            const allLink = ['/craneo', '/tronco', '/miembro-superior', '/miembro-inferior'];
            allRef.forEach((ref, id) => {
                ref.addEventListener('click', () => {
                    history(`${allLink[id]}`);
                })
            });
        }
    }, []);

    return (
        <div className='body-container'>
            <img src={humanBody} alt="cuerpo humano partido en dos" />

            <div onClick={handleShowHeadSystem} className='body-head'></div>
            <div ref={headBodySystemRef} className='body-head__system'>
                <img src={humanHeadSystem} alt="cabeza humana mostrando el sistema circulatorio" />
            </div>

            <div onClick={handleShowTorsoSystem} className='body-torso'>
                <div className='torso-shoulder'></div>
                <div className='torso-torso'></div>
                <div className='torso-final'></div>
            </div>
            <div ref={torsoBodySystemRef} className='body-torso__system'>
                <img src={humanTorsoSystem} alt="cabeza humana mostrando el sistema circulatorio" />
            </div>

            <div onClick={handleShowArmSystem} className='body-arm'>
                <div className='arm-bicep'></div>
                <div className='arm-arm'></div>
                <div className='arm-hand'></div>
            </div>
            <div ref={armBodySystemRef} className='body-arm__system'>
                <img src={humanArmSystem} alt="cabeza humana mostrando el sistema circulatorio" />
            </div>

            <div onClick={handleShowLegSystem} className='body-leg'>
                <div className='leg-leg'></div>
            </div>
            <div ref={legBodySystemRef} className='body-leg__system'>
                <img src={humanLegSystem} alt="cabeza humana mostrando el sistema circulatorio" />
            </div>

        </div>
    );
};