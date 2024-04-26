import React from 'react';
import teamData from '../../assets/members/team.json';

const Team = () => {
  return (
    <div className=''>
      <div className="opacity-10 ellipsis z-10"></div>
      <div className="ellipsis opacity-30 ellipsis-purple z-10"></div>
      <div className="ellipsis opacity-30 ellipsis-blue z-10" />
      <div className="ellipsis opacity-30 ellipsis-yellow z-10 md:hidden" />
      <div className="bg-zinc-900 w-[50%] md:w-[30%] lg:w-[10%] md:text-xl xl:text-3xl mx-auto rounded-t-2xl z-20 mt-10 text-white text-xl font-bold flex justify-center items-center h-10 lg:h-16">
        Equipo
      </div>
      <div className="opacity-100 bg-zinc-900 w-[75%] md:w-[90%] lg:w-[80%] xl:w-[65%] mx-auto mb-48 rounded-2xl rounded-br-2xl rounded-bl-2xl z-20 ">
        <div className="grid grid-cols md:grid-cols-2 px-2 lg:ml-12 2xl:ml-24 ">
          {teamData.equipo.map((member) => (
            <div key={member.id} className='flex flex-col md:flex-row mt-6 md:ml-7 lg:ml-0'>
              <div className="text-center">
                <img src={member.foto} alt={member.nombre} className="w-48 h-48 md:w-36 md:h-36 lg:w-48 lg:h-48 2xl:ml-6  mx-auto rounded-full border-2 border-white mt-4 md:mb-12 " width={0} height={0} />
              </div>
              <div className='flex flex-col justify-center items-center md:items-start  ml-6 md:max-w-[150px] lg:max-w-[150px] 2xl:max-w-[300px] md:ml-4 '>
                <p className="text-xl font-extrabold md:mt-2 text-white mt-4 xl:text-2xl 2xl:text-2xl ">{member.nombre}</p>
                <p className="mt-2 text-white mb-4 xl:text-xl 2xl:text-xl">{member.posicion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
