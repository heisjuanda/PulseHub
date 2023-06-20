import { useEffect } from 'react';

import { Circulatorio } from '../Circulatorio/Circulatorio';

import Lottie from 'lottie-react';
import pulse from '../../assets/lottie/hearth pulse.json';

import './Inicio.css';

export const Inicio = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className='inicio-section'>
            <header className='inicio-section__title'>
                <div>
                    <h1>
                        PulseHub
                    </h1>
                    <Lottie className='pulse-title' animationData={pulse} />
                </div>
            </header>
            <article className='inicio-section__content'>
                <Circulatorio />
            </article>
        </section>
    );
};