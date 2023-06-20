import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from 'react';

import Lottie from 'lottie-react';
import loader from '../../assets/lottie/55040-health-loader.json';

import './Menu.css';

export const Menu = () => {
    const history = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const firstLineRef = useRef();
    const secondLineRef = useRef();
    const thirdLineRef = useRef();

    const menuContainerRef = useRef();
    const menuOptionsContainerRef = useRef();
    const menuLinkOptionsRef = useRef([]);

    useEffect(() => {
        menuLinkOptionsRef.current = Array.from(document.querySelectorAll('.text-link__nav'));
    }, []);

    const handleMenuBton = useCallback((isOpen) => {
        const isDefined = firstLineRef.current && secondLineRef.current && thirdLineRef.current;
        if (isDefined) {
            if (isOpen) {
                firstLineRef.current.style.transform = 'translateY(9px) rotate(45deg)';
                secondLineRef.current.style.opacity = '0';
                thirdLineRef.current.style.transform = 'translateY(-9px) rotate(-45deg)';
            } else {
                firstLineRef.current.style.transform = 'translateY(0px) rotate(0deg)';
                secondLineRef.current.style.opacity = '1';
                thirdLineRef.current.style.transform = 'translateY(-0px) rotate(-0deg)';
            }
        }
    }, [firstLineRef, secondLineRef, thirdLineRef]);

    const handleMenu = useCallback(() => {
        const isDefined = menuContainerRef.current && menuLinkOptionsRef.current && menuOptionsContainerRef.current;
        if (isDefined) {
            if (!isOpen) {
                menuContainerRef.current.style.animation = 'showMenuContainer 0.3s linear forwards';
                handleMenuBton(!isOpen);
                setIsOpen(!isOpen);
                menuLinkOptionsRef.current.forEach((option) => {
                    setTimeout(() => {
                        option.style.opacity = '1';
                    }, 200);
                    menuOptionsContainerRef.current.style.display = 'block';
                });
            } else {
                menuLinkOptionsRef.current.forEach((option) => {
                    option.style.transitionDelay = '0s';
                    option.style.opacity = '0';
                    setTimeout(() => {
                        menuOptionsContainerRef.current.style.display = 'none';
                    }, 200);
                });
                menuContainerRef.current.style.animation = 'hideMenuContainer 0.3s linear forwards';
                handleMenuBton(!isOpen);
                setIsOpen(!isOpen);
                setTimeout(() => {
                    menuContainerRef.current.style.transform = 'translate(-100%, -100%) rotate(45deg)';
                }, 300);
            }
        }
    }, [isOpen, menuContainerRef, menuLinkOptionsRef, menuOptionsContainerRef, handleMenuBton, setIsOpen]);

    const handleCloseMenu = useCallback(() => {
        const isDefined = menuContainerRef.current && menuLinkOptionsRef.current && menuOptionsContainerRef.current;
        if (isDefined) {
            menuLinkOptionsRef.current.forEach((option) => {
                option.style.transitionDelay = '0s';
                option.style.opacity = '0';
                setTimeout(() => {
                    menuOptionsContainerRef.current.style.display = 'none';
                }, 200);
            });
            menuContainerRef.current.style.animation = 'hideMenuContainer 0.3s linear forwards';
            handleMenuBton(!isOpen);
            setIsOpen(!isOpen);
            setTimeout(() => {
                menuContainerRef.current.style.transform = 'translate(-100%, -100%) rotate(45deg)';
            }, 300);
        }
    }, [isOpen, menuContainerRef, menuLinkOptionsRef, menuOptionsContainerRef, handleMenuBton, setIsOpen]);

    return (
        <>
            <button className="burger-btn" data-type='menu' onClick={handleMenu}>
                <span ref={firstLineRef} id='burger-btn__one'></span>
                <span ref={secondLineRef} id='burger-btn__two'></span>
                <span ref={thirdLineRef} id='burger-btn__three'></span>
            </button>
            <div ref={menuContainerRef} className='menu-container'></div>
            <div ref={menuOptionsContainerRef} className='menu-options'>
                <nav className='menu-options__nav'>
                    <ol>
                        <li>
                            <div className='loader-container text-link__nav'>
                                <p>
                                    <span
                                        onClick={() => {
                                            history('/');
                                            handleCloseMenu()
                                        }}
                                    >
                                        Inicio
                                    </span>
                                    <span
                                        onClick={() => {
                                            history('/');
                                            handleCloseMenu()
                                        }}
                                    >
                                        <Lottie className='loader' animationData={loader} />
                                    </span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <p className='text-link__nav'>
                                <span
                                    onClick={() => {
                                        history('/acerca');
                                        handleCloseMenu()
                                    }}
                                >
                                    Sobre Nosotros
                                </span>
                            </p>
                        </li>
                        <li>
                            <p className='text-link__nav'>
                                <span
                                    onClick={() => {
                                        history('/sistema-circulatorio');
                                        handleCloseMenu()
                                    }}
                                >
                                    Sistema Completo
                                </span>
                            </p>
                        </li>
                        <li>
                            <p className='text-link__nav' id='text-close__nav'>
                                <span
                                    onClick={() => {
                                        history('/quiz');
                                        handleCloseMenu()
                                    }}
                                >
                                    Quiz
                                </span>
                            </p>
                        </li>
                    </ol>
                </nav>
            </div>
        </>
    );
};