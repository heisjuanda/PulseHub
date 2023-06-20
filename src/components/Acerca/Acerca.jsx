import './Acerca.css';

export const Acerca = () => {
    return (
        <section className='acerca-section'>
            <header className='acerca-title'>
                <h2>
                    Sobre Nosotros
                </h2>
            </header>
            <article className='acerca-content'>
                <div className='content__group'>
                    <h3>Integrantes:</h3>
                    <ol className='group-list'>
                        <li>
                            <p>
                                Karen Daniela Ríos Esteban
                            </p>
                        </li>
                        <li>
                            <p>
                                Maria Jose Contreras
                            </p>
                        </li>
                        <li>
                            <p>
                                Stephanny Maillith Valero
                            </p>
                        </li>
                        <li>
                            <p>
                                Lunna Liseth Gomez Cordoba
                            </p>
                        </li>
                    </ol>
                </div>
                <div className='content__objective'>
                    <p>
                        PulseHub es una aplicación desarrollada por estudiantes de medicina con el propósito de difundir la importancia del sistema circulatorio en el ser humano. Mediante contenido educativo, visualmente atractivo e interactivo, la aplicación busca crear conciencia y fomentar la comprensión de esta vital función corporal. PulseHub se presenta como una valiosa herramienta para explorar, aprender y apreciar la maravilla del sistema circulatorio.
                    </p>
                </div>
            </article>
        </section>
    );
};