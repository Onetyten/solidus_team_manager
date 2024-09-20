import React from 'react'

export default function Header(props) {
  const{selectedTeam,teamMemberCount} = props
  return (
    <div className='w-full top-12 sm:top-[72px] bg-dark py-1 sm:py-3 fixed '>
      <div className='flex justify-center w-full'>
        <h1 className='text-sm sm:text-xl text-white text-center border-white rounded-lg border-2 w-12'>
            {teamMemberCount}
          </h1>
      </div>

    </div>
  )
}
