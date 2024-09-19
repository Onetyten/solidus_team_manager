import React, { useState, useEffect } from 'react';
import ProjectTag from './ProjectTag';

export default function ProjectAssignment(props) {
  const{teams, selectedTeam, setSelectedTeam, projects, setProjects} = props


  

// ProjectAssignment.jsx
const handleProjectChange = (
  projectName,
  tagId = null,
  newProject = null,
  action = null,
  newTeam = null
) => {
  if (action === "Delete") {
    // Delete the project by filtering it out
    setProjects(prevProjects =>
      prevProjects.filter(project => project.name !== projectName)
    );
  } else if (action === "Move") {
    // Move the project to a different status (tag)
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.name === projectName ? { ...project, id: tagId } : project
      )
    );
  } else if (action === "UpdateTeam") {
    // Update the project's assigned team
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.name === projectName ? { ...project, selectedTeam: newTeam } : project
      )
    );
  } else if (newProject) {
    // Add a new project if it does not already exist
    if (!projects.some(project => project.name === newProject.name)) {
      setProjects(prevProjects => [...prevProjects, newProject]);
    } else {
      alert("Project with this name already exists!");
    }
  }
};






  return (
    <div className="flex justify-center items-center w-[99%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 ml-20 mt-40 gap-5 w-[90%] grid-flow-row-dense">
        <ProjectTag name="Backlog" id="Backlog" projects={projects.filter(project => project.id === "Backlog")} handleProjectChange={handleProjectChange} teams = {teams} selectedTeam ={selectedTeam} setSelectedTeam={setSelectedTeam} />
        <ProjectTag name="Ready" id="Ready" projects={projects.filter(project => project.id === "Ready")} handleProjectChange={handleProjectChange} teams = {teams} selectedTeam ={selectedTeam} setSelectedTeam={setSelectedTeam} />
        <ProjectTag name="In process" id="Inprocess" projects={projects.filter(project => project.id === "Inprocess")} handleProjectChange={handleProjectChange} teams = {teams} selectedTeam ={selectedTeam} setSelectedTeam={setSelectedTeam}/>
        <ProjectTag name="Done" id="Done" projects={projects.filter(project => project.id === "Done")} handleProjectChange={handleProjectChange} teams = {teams} selectedTeam ={selectedTeam} setSelectedTeam={setSelectedTeam} />
      </div>
    </div>
  );
}
