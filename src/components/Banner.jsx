import React from 'react';

const Banner = () => {
    return (
        <div className='h-full w-full flex flex-col bg-black'>
             <div className="ellipsis z-10"></div>
            <div className='h-screen md:h-[70vh] w-full bg-center md:bg-top' > 
            <div className="flex flex-col md:flex-row items-center justify-center h-full">
            <div className='z-20 text-center md:text-start md:ml-6 2xl:mr-24 xl:w-96'>
                <h2 className='text-white text-3xl font-bold 2xl:text-4xl -mt-24 p-2 '>Conectando al ecosistema IA</h2>
                <h4 className='text-white text-sm mt-4 lg:text-xl 2xl:text-lg px-2'>La Sociedad Argentina de Inteligencia Artificial es una organización independiente, sin fines de lucro, dedicada a hacer investigaciones, generar encuentros, fortalecer los nuevos medios de educación y conscientizar a la sociedad sobre el desarrollo ético de la IA.</h4>
                <div className='flex justify-center items-center md:justify-start'>
                <a href="https://tally.so/r/mBdlK5" className='rounded-full text-center bg-transparent mt-4 xl:mt-8 xl:py-2 md:mt-4 px-5 py-1 w-60 text-md font-semibold bg-white text-black shadow-sm ring-2 ring-inset ring-white hover:bg-black hover:text-white'>Ser parte</a>
            </div>   
               </div>   
                <div className='z-20 px-2 lg:p-4'>
                <iframe
                    className="rounded-2xl border-2 border-white w-80 h-60 mt-12 md:-mt-20 md:w-[360px] md:h-[250px] lg:w-[600px] lg:h-[350px] lg:-mt-24 lg:ml-24 2xl:h-[350px] 2xl:w-[700px] 2xl:mr-24"
                    src="https://www.youtube.com/embed/P1G4ERdV0jk?si=7OXTtOSyVs9GEDSB"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </div>
            </div>         
        </div>
    );
};

export default Banner;