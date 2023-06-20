import { useState, useEffect, useCallback } from 'react';

import './Quiz.css';

export const Quiz = () => {

    const allQuestions = [
        {
            pregunta: '¿Cuál es la principal función del sistema circulatorio?',
            opciones: [
                'Transportar oxígeno y nutrientes a las células.',
                'Eliminar desechos metabólicos.',
                'Regular la temperatura corporal.',
                'Todas las anteriores.'
            ],
            respuesta: 3,
            seleccion: '',
        },
        {
            pregunta: '¿Cuál es el órgano principal del sistema circulatorio?',
            opciones: [
                'Corazón.',
                'Pulmones.',
                'Riñones.',
                'Hígado.'
            ],
            respuesta: 0,
            seleccion: '',
        },
        {
            pregunta: '¿Cuál es el componente principal de la sangre responsable del transporte de oxígeno?',
            opciones: [
                'Glóbulos rojos.',
                'Glóbulos blancos.',
                'Plaquetas',
                'Plasma'
            ],
            respuesta: 0,
            seleccion: '',
        },
        {
            pregunta: '¿Qué tipo de vasos sanguíneos llevan sangre oxigenada desde los pulmones al corazón?',
            opciones: [
                'Venas.',
                'Arterias.',
                'Capilares.',
                'Vasos linfáticos.'
            ],
            respuesta: 1,
            seleccion: '',
        },
        {
            pregunta: '¿Cuál es la válvula que separa la aurícula y el ventrículo izquierdos?',
            opciones: [
                'Válvula tricúspide.',
                'Válvula mitral.',
                'Válvula pulmonar.',
                'Válvula aórtica.'
            ],
            respuesta: 1,
            seleccion: '',
        },
        {
            pregunta: '¿Cuántas cavidades tiene el corazón humano?',
            opciones: [
                '2.',
                '3.',
                '4.',
                '5.'
            ],
            respuesta: 2,
            seleccion: '',
        },
        {
            pregunta: '¿Cuál es el nombre del mayor vaso sanguíneo que sale del corazón?',
            opciones: [
                'Vena cava.',
                'Aorta.',
                'Pulmonar.',
                'Coronaria.'
            ],
            respuesta: 1,
            seleccion: '',
        },
        {
            pregunta: '¿Qué es la presión arterial?',
            opciones: [
                'La fuerza con la que el corazón bombea sangre.',
                'La cantidad total de sangre en el cuerpo.',
                'La resistencia de los vasos sanguíneos al flujo de sangre.',
                'La velocidad a la que circula la sangre por el cuerpo.'
            ],
            respuesta: 2,
            seleccion: '',
        },
        {
            pregunta: '¿Cuál es la función de las arterias?',
            opciones: [
                'Llevar sangre oxigenada desde el corazón hacia los tejidos.',
                'Llevar sangre desoxigenada hacia el corazón desde los tejidos.',
                'Regular el flujo sanguíneo mediante la constricción y dilatación.',
                'Formar nuevos glóbulos rojos en la médula ósea.'
            ],
            respuesta: 0,
            seleccion: '',
        },
        {
            pregunta: '¿Qué es la circulación sistémica?',
            opciones: [
                'El flujo de sangre desde el corazón a los pulmones.',
                'El flujo de sangre desde el corazón al resto del cuerpo.',
                'El flujo de sangre desde los tejidos hacia el corazón.',
                'El flujo de sangre entre las arterias y las venas.'
            ],
            respuesta: 1,
            seleccion: '',
        },
    ];

    // eslint-disable-next-line no-unused-vars
    const [indexQuestion, setIndexQuestion] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [wasSent, setWasSent] = useState(false);

    useEffect(() => {
        const handleRandomQuestions = () => {
            setIndexQuestion([]);
            const newIndexQuestion = [];
            for (let i = 0; i < 4; i++) {
                let index;
                do {
                    index = Math.floor(Math.random() * allQuestions.length);
                } while (newIndexQuestion.includes(index));
                newIndexQuestion.push(index);
            }
            setIndexQuestion(newIndexQuestion);

            const selectedQuestions = newIndexQuestion.map((index) => allQuestions[index]);
            setQuestions(selectedQuestions);
        };
        handleRandomQuestions();
    }, []);


    const handleOptionChange = useCallback((questionIndex, optionIndex) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[questionIndex].seleccion = optionIndex;
            return updatedQuestions;
        });
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        questions.forEach((respuesta) => {
            if (respuesta.seleccion !== '') {
                if (respuesta.respuesta === parseInt(respuesta.seleccion)) {
                    setScore((prevScore) => prevScore + 1);
                }
            }
        });

        setWasSent(true);
    }, [questions]);

    const handleCloseModal = useCallback((event) => {
        event.preventDefault();
        setWasSent(false);
        setScore(0);
    }, []);


    return (
        <>
            {wasSent ? (
                <div className='modal'>
                    <div className='result-form'>
                        <div>
                            <h2>Puntaje:</h2>
                            <p>
                                <b>
                                    {`${score}/4`}
                                </b>
                            </p>
                        </div>
                        <button onClick={handleCloseModal}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            ) : null}
            <div className='container-form'>
                <form onSubmit={handleSubmit} className='form-quiz'>
                    {questions.map((question, index) => (
                        <div key={index} className='form-title'>
                            <h4>{question.pregunta}</h4>
                            {(wasSent) && (question.respuesta !== parseInt(question.seleccion)) ? (
                                <div className='bad-answer'>
                                    <i className="fa-solid fa-circle-xmark bad-question"></i>
                                </div>
                            ) : null}
                            {(wasSent) && (question.respuesta === parseInt(question.seleccion)) ? (
                                <div className='correct-answer'>
                                    <i className="fa-solid fa-circle-check correct-question"></i>
                                </div>
                            ) : null}
                            {question.opciones.map((opcion, opcionIndex) => (
                                <div key={opcionIndex} className='form-options'>
                                    <input
                                        type="radio"
                                        id={`opcion-${index}-${opcionIndex}`}
                                        name={`pregunta-${index}`}
                                        checked={question.seleccion === opcionIndex}
                                        onChange={() => handleOptionChange(index, opcionIndex)}
                                        required
                                    />
                                    <label
                                        htmlFor={`opcion-${index}-${opcionIndex}`}
                                    >
                                        {opcion}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className='send-form'>
                        <button disabled={wasSent ? true : false}  type="submit">Enviar respuestas</button>
                    </div>
                </form>
            </div>
        </>
    );
};