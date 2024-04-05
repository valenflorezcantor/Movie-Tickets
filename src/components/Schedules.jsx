import React, { useState }from 'react'
import { Axios } from 'axios';


const Schedules = () => {
    const [selectedSchedule, setSelectedSchedule] = useState(null);

    const handleScheduleClick = (schedule) => {
        setSelectedSchedule(schedule);
    };

    return (
        <section className='seccion__horarios'>
            <article className='mb-2'>
                <p className='font-bold'>Horarios disponibles - fecha</p>
            </article>
            <article>
                <p>Elige el horario que prefieras</p>
            </article>
            <article className='mt-6 mb-4 font-bold'>
                <p>Macro plaza del Mar</p>
            </article>

            <section className='flex'>
                <article
                    className={`border mr-2 rounded-lg p-1 ${selectedSchedule === '10:20' ? 'bg-movie-genre-bg-color text-white' : ''} cursor-pointer`}
                    onClick={() => handleScheduleClick('10:20')}
                >
                    <p className=' font-bold'>10:20</p>
                </article>
                <article
                    className={`border mr-2 rounded-lg p-1 ${selectedSchedule === '10:30' ? 'bg-movie-genre-bg-color text-white' : ''} cursor-pointer`}
                    onClick={() => handleScheduleClick('10:30')}
                >
                    <p className=' font-bold'>10:30</p>
                </article>
                <article
                    className={`border mr-2 rounded-lg p-1 ${selectedSchedule === '10:40' ? 'bg-movie-genre-bg-color text-white' : ''} cursor-pointer`}
                    onClick={() => handleScheduleClick('10:40')}
                >
                    <p className=' font-bold'>10:40</p>
                </article>
            </section>

            <section className='seccion__boton'>
                <button className={`seleccionar__boletos text-white ${selectedSchedule ? 'bg-movie-genre-bg-color' : 'bg-disabled-blue'}`}>
                    Seleccionar boletos
                </button>
            </section>
        </section>
    );
};

export default Schedules;