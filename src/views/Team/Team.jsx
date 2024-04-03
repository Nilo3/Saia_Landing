import React from 'react';
import teamData from '../../assets/members/team.json';

const Team = () => {
    return (
      <div className=''>
        <div className="opacity-10 ellipsis z-10"></div>
        <div className="ellipsis opacity-30 ellipsis-purple z-10"></div>
        <div className="opacity-100 bg-zinc-900 w-[75%] mx-auto mb-48 rounded-2xl z-20 mt-12">
          <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 px-2">
            {teamData.equipo.map((member) => (
              <div key={member.id} className="text-center ">
                <img src={member.foto} alt={member.nombre} className="w-48 h-48 mx-auto rounded-full mt-4" width={0} height={0} />
                <p className="text-2xl font-extrabold md:mt-2 text-white ">{member.nombre}</p>
                <p className="mt-2 text-white mb-12">{member.posicion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Team;