import React from 'react'

export default function SelectTeam(props) {
    const{ selectedTeam,handleSelectedTeam,teams} = props
  return (
    <div className='fixed left-1/2 top-20 transform -translate-x-1/2 '>
        <select
            name="" id="" className='text-xl text-white text-center bg-dark py-2 mb-10 px-10 w-72 rounded-b-xl' value={selectedTeam} onChange={handleSelectedTeam}
        >
            {teams.map((team) => (
            <option key={team} value={team} className='opacity-10'>
                {team}
            </option>
            ))}
        </select>
  </div>
  )
}
