import React, { useState,useEffect } from 'react';
import ProjectElement from './ProjectElement';

export default function ProjectTag(props) {
  const { name, id, projects, handleProjectChange,teams} = props;

  const [showAdd, setShowAdd] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedTeam, setSelectedTeam] = useState(
    teams.length > 0 ? teams[0] : "Unassigned"
  );

  function toggleShowAdd() {
    setShowAdd(!showAdd);
  }

  function handleAddNewProject() {
    const today = new Date().toISOString().split('T')[0];
  
    const newProject = {
      name: newProjectName,
      id: id,
      startDate: startDate || today,
      endDate: endDate || today,
      selectedTeam: selectedTeam, // Use the selected team from the form
    };
  
    handleProjectChange(newProjectName, id, newProject);
    setNewProjectName('');
    setStartDate('');
    setEndDate('');
    setShowAdd(false);
  }

  useEffect(() => {
    console.log(teams);
  }, [projects]);


  
  return (
    <div className="border-2 border-dark p-2 sm:p-4 rounded-xl w-full mb-16 bg-dark">
      <h2 className="text-lg sm:text-xl pb-3 text-white">{name}</h2>
      {projects.map((project) => (
        <ProjectElement key={project.name} project={project} handleProjectChange={handleProjectChange} teams = {teams} selectedTeam= {selectedTeam} setSelectedTeam = {setSelectedTeam} />
      ))}

      <div className="flex flex-col items-center w-full justify-center mt-6">
        <i
          className={`${showAdd ? "fa-minus" : "fa-plus"} fa-solid text-2xl bg-dark text-white p-5 rounded-full hover:text-accent`}
          onClick={toggleShowAdd}
        ></i>

        {showAdd && (
          <div className="mt-6 bg-dark p-8 mb-6 flex flex-col w-full items-center justify-center rounded-2xl">

          <div className='flex w-full justify-between mb-10 items-center'>
            <input
            type="text"
            placeholder="Project name"
            className="text-black p-4 rounded-md"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            />

            <div className="flex flex-col justify-center items-center mt-4">


              <p className="text-white mb-8">Assign to team:</p>
              <select
                className="bg-my-grey p-2 rounded-lg"
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
              >
                {teams.map((team) => (
                  <option key={team} value={team}>
                    {team}
                  </option>
                ))}
              </select>
            </div>
          </div>






          
          <div className="flex w-full justify-between">
            <div className="flex flex-col justify-center items-center">
              <p className="text-white mb-8">Start date:</p>
              <input
                type="date"
                className="bg-my-grey text-dark p-2 rounded-lg"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
        
            <div className="flex flex-col justify-center items-center">
              <p className="text-white mb-8">End date:</p>
              <input
                type="date"
                className="bg-my-grey text-dark p-2 rounded-lg"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        

        
          <button className="mt-4 bg-accent text-white p-4 rounded-md" onClick={handleAddNewProject}>
            Add new Project
          </button>
        </div>
        
        )}
      </div>
    </div>
  );
}
