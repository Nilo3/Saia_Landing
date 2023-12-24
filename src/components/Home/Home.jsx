import React from 'react';
import backgroundImage from "../../assets/back2.jpg";
import LandingCards from '../LandingCards/LandingCards';
import champions from '../../JSONS/champions.json'; // Importa los datos de los campeones


const Home = () => {
    return (
        <div className='h-full w-full'>
            <div 
                name="home" 
                className='h-screen w-full bg-center md:bg-top ' 
                style={{
                    backgroundImage: `url(${backgroundImage})`,

                    backgroundSize: 'cover',
                }}
            > 
            </div>
            <div className='bg-gray-800 p-12 flex items-center flex-col opacity-90' >
                <h1 className=' landinginfo text-white text-center text-4xl ml-12'>INICIA TU ESTRATEGIA</h1>
                <h5 className='landinginfo text-yellow-500 text-bold text-center text-l ml-12'>SACA VENTAJA DESDE EL PICK</h5>
                <p className='text-white landinginfo text-xl text-center ml-12 mt-12 '>Adéntrate en el mundo de League of Legends, donde aprenderás a contrarrestar a otros campeones y a dominar la Grieta del Invocador.</p>
                <p className='text-white landinginfo text-xl text-center ml-12 mt-2'>Participa en nuestra trivia y gana premios increíbles.</p>
                <p className='text-white landinginfo text-xl text-center ml-12 mt-2'>¡Prepárate para llevar tu juego al siguiente nivel!</p>
            </div>
                <div className='flex flex-col items-center md:flex-row justify-between bg-gray-700 opacity-95'
                 style={{
                    backgroundImage: `url(https://technology.riotgames.com/sites/default/files/articles/39/fowheader.jpg)`,
                    backgroundSize: 'cover',
                }}>
                {champions.map(champion => ( 
                    <LandingCards 
                        key={champion.id} 
                        id={champion.id}
                        photo={champion.photo}
                        name={champion.name}
                        text={champion.text}
                    />
                ))}
                </div>
        </div>
    );
};

export default Home;