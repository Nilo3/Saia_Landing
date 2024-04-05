import React from 'react';

const Banner = () => {
    return (
        <div className='h-full w-full flex flex-col bg-black'>
             <div className="ellipsis z-10"></div>
            <div className='h-[51vh] w-full bg-center md:bg-top' > 
            <div className="flex flex-col md:flex-row items-center justify-center h-full">
            <div className='z-20 text-center md:text-start md:ml-6 lg:w-72 2xl:mr-24'>
                <h2 className='text-white text-4xl font-bold mt-24 2xl:text-4xl '>Conectando al ecosistema IA</h2>
                <h4 className='text-white text-sm mt-4 lg:text-xl 2xl:text-lg '>La Sociedad Argentina de Inteligencia Artificial es una organización independiente, sin fines de lucro dedicada a hacer investigaciones, generar encuentros, fortalecer los nuevos medios de educación y conscientizar a la sociedad sobre el desarrollo ético de la IA.</h4>
               </div>   
                <div className='z-20 px-4'>
                <iframe
                    className="rounded-lg  w-72 h-72 mt-12 md:mt-28 md:w-[360px] md:h-[250px] lg:w-[500px] lg:h-[315px] lg:mt-24 lg:ml-12 2xl:h-[400px] 2xl:w-[800px] 2xl:mr-24"
                    src="https://www.youtube.com/embed/iNbv-zkNON8?si=mxyml1euV4dj2G__"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center'>
                <a href="https://tally.so/r/mBdlK5" className='rounded-full text-center mt-24 mb-12 md:mt-20 bg-transparent px-5 py-3 w-60 text-md font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-white hover:text-black'>Ser parte</a>
            </div>            
        </div>
    );
};

export default Banner;