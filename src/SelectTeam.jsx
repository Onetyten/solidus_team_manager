import React from 'react'

export default function SelectTeam(props) {
    const{ selectedTeam,handleSelectedTeam,teams} = props
  return (
    <div className='fixed left-1/2 top-20 transform -translate-x-1/2 w-screen'>
        <select
            name="" id="" className='sm:text-lg text-md text-white text-center bg-dark py-2 mb-10 w-full rounded-b-sm' value={selectedTeam} onChange={handleSelectedTeam}
        >
            {teams.map((team) => (
            <option key={team} value={team} className='opacity-10 sm:text-lg text-sm'>
                {team}
            </option>
            ))}
        </select>
  </div>
  )
}
