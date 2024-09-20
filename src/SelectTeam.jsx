import React from 'react';

export default function SelectTeam(props) {
  const { selectedTeam, handleSelectedTeam, teams, teamMemberCounts } = props;

  return (
    <div className='fixed left-1/2 h-12 transform -translate-x-1/2 w-screen'>
        <div className='w-full bg-dark py-2 mb-10 flex justify-center'>
            <select name="" id="" className='sm:text-lg text-md text-white text-center rounded-lg border-2 border-white bg-dark p-4'
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
