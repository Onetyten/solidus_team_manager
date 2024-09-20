import React from 'react';
import Header from './Header';

export default function SelectTeam(props) {
  const { selectedTeam, handleSelectedTeam, teams, teamMemberCounts} = props;

  return (
    <div className=' h-8 sm:h-12 '>
        <div className='w-full bg-dark py-2 mb-10 flex flex-col items-center justify-center'>
            <select name="" id="" className='sm:text-lg text-sm text-white text-center rounded-lg border-2 border-white bg-dark sm:p-4 p-1'
                value={selectedTeam}
                onChange={handleSelectedTeam}
            >
                {teams.map((team) => {
                return (
                    <option key={team} value={team} className='opacity-10 sm:text-lg text-sm'>
                    {team}
                    </option>
                );
                })}
           </select>
        </div>
       
    </div>
  );
}
