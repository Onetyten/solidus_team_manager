import React from 'react';

export default function TeamList({ teams, projects }) {
  return (
    <div className='mt-28 lg:mt-40 flex'>
      <div className='flex w-full mt-4'>
        <div className='w-full flex flex-col justify-end sm:items-center items-end'>
          {teams.map((team) => {
            const teamProjects = projects.filter(
              (project) => project.selectedTeam === team
            );

            return (
              <div key={team} className='cursor-pointer mt-7 bg-dark p-10 w-[75%] mr-4 sm:ml-[12%] sm:mr-0 lg:ml-0 lg:mr-0 sm:p-5 sm:w-4/6 rounded-2xl'>
                <div className='flex items-center justify-between'>
                  <h4 className='text-accent w-full text-center text-xl'>
                    {team}
                  </h4>
                </div>
                <div className='mt-4'>
                  {teamProjects.length > 0 ? (
                    teamProjects.map((project) => (

                      <div key={project.name} className='bg-my-blue border-2 border-white text-center text-white mb-4 p-4 rounded-lg'>
                        <p className='mt-2 font-semibold'>Project Name: {project.name}</p>
                        <p className='mt-2'>Status: {project.id}</p>
                        <p className='mt-2'>Start Date: {project.startDate}</p>
                        <p className='mt-2'>End Date: {project.endDate}</p>
                      </div>
                    ))
                  ) : (
                    <p className='text-white text-center'>No projects assigned to this team</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
