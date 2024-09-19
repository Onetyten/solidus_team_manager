// ProjectElement.jsx
import React, { useState, useEffect } from 'react';

export default function ProjectElement(props) {
  const { project, handleProjectChange, teams } = props;
  const { name, startDate, endDate, selectedTeam, id } = project;

  // Determine the initial value for selectedTeam
  const [currentTeam, setCurrentTeam] = useState(
    teams.length > 0 ? selectedTeam : "Unassigned"
  );

  // Update the team if the teams array changes
  useEffect(() => {
    if (teams.length === 0) {
      setCurrentTeam("Unassigned");
    } else if (teams.includes(currentTeam)) {
      // Ensure the current team is valid
      setCurrentTeam(currentTeam);
    } else {
      // Reset to "Unassigned" if the current team is no longer in the list
      setCurrentTeam("Unassigned");
    }
  }, [teams, currentTeam]);

  // Handle changes for status and team
  const handleChange = (event) => {
    const { name: fieldName, value } = event.target;
    
    if (fieldName === 'status') {
      if (value === "Delete") {
        handleProjectChange(project.name, null, null, "Delete");
      } else {
        handleProjectChange(project.name, value, null, "Move");
      }
    } else if (fieldName === 'team') {
      handleProjectChange(project.name, null, null, "UpdateTeam", value);
      setCurrentTeam(value); // Update local state for team
    }
  };

  return (
    <div className="grid w-full border-4 border-white mb-7 pt-4 bg-my-blue rounded-xl gap-7">
      <div className="flex w-full px-4 justify-between">
        <p>{name}</p>
        <div>
          <select 
            className="bg-my-grey p-2 ml-2 rounded-lg appearance-none" 
            name="status"
            onChange={handleChange} 
            value={id} // Set the value to the project's current id
          >
            <option value="Backlog">Backlog</option>
            <option value="Ready">Ready</option>
            <option value="Inprocess">In process</option>
            <option value="Done">Done</option>
            <option value="Delete" className="text-red-500 hover:text-red-500">Delete</option>
          </select>
        </div>
      </div>

      <div className="flex w-full px-4 justify-between items-center">
        <input
          type="date"
          value={startDate}
          className="bg-my-grey text-dark p-2 rounded-lg"
          readOnly
        />
        <i className="fa-solid fa-arrow-right"></i>
        <input
          type="date"
          value={endDate}
          className="bg-my-grey text-dark p-2 rounded-lg"
          readOnly
        />
      </div>

      <div className="flex w-full justify-between bg-dark text-white rounded-full">
        <select
          className="bg-dark w-full appearance-none pl-6 py-2"
          name="team"
          onChange={handleChange}
          value={currentTeam} // Use the local state for the team
        >
          <option value="Unassigned">Unassigned</option>
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
