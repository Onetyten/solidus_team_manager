import React, { useState,useEffect } from 'react'

export default function GroupedTeamMembers(props) {
  const { employees, selectedTeam, setSelectedTeam,teams,setTeams,handleAddTeam,handleRemoveTeam } = props
  const [newTeamName, setNewTeamName] = useState('');
  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers())
  const [showAdd, setShowAdd] = useState(false)
  

  function groupTeamMembers() {
    return teams.map(team => {
      const members = employees.filter(employee => employee.teamName === team);
      return { team, members, collapsed: selectedTeam === team ? false : true };
    });
  }

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData
    )
    setGroupedEmployees(transformedGroupData)
    setSelectedTeam(event.currentTarget.id)
  }

  function toggleShowAdd(){
    setShowAdd(!showAdd)
  }

  useEffect(() => {
    setGroupedEmployees(groupTeamMembers());
  }, [employees, teams, selectedTeam]);



  return (
    <div>
         <div className='flex justify-center w-full mt-4'>
        <div className='w-full flex flex-col justify-center items-center'>

        {groupedEmployees.map((item) => {
            return (
            <div key={item.team} className='cursor-pointer mt-7 bg-dark p-10 w-4/6 rounded-2xl'>
                {/* Use dynamic ID for the team */}
                <div className='flex items-center justify-between'>
                  <h4 id={item.team} className='text-white text-center text-2xl' onClick={handleTeamClick}>
                  Team Name : <span className='text-accent'>{item.team}</span> 
                  </h4>
                  <i className="fa-solid fa-trash text-3xl text-white hover:text-red-500" onClick={() => handleRemoveTeam(item.team)}></i>
                </div>
             

                {/* Toggle the visibility based on the collapsed state */}
                <div id={"hidden_" + item.team} className={`${item.collapsed ? "hidden" : ""}  bg-my-blue border-4 border-b-0 border-white text-center mt-4 p-4 rounded-xl`}>
                {item.members.map(member => {
                    return (
                    <div key={member.fullName} className='my-8 border-2 border-white p-8 rounded-3xl'>
                        <h5 className='mb-3  text-white text-xl'>
                            Full Name: <span>{member.fullName}</span> 
                        </h5>
                        <p >
                        Designation: <span>{member.designation}</span>
                        </p>
                    </div>
                    )
                })}
                </div>
            </div>
            )
        })}
        </div>
      </div>
      <div className='flex flex-col items-center w-full justify-center mt-6'>
        <i className="fa-solid fa-plus text-5xl  bg-dark text-white p-5 rounded-full hover:text-accent" onClick={toggleShowAdd}></i>
        {showAdd&&<div className="mt-6 bg-dark p-8 mb-6 rounded-2xl">
          <input
            type="text"
            placeholder="Enter new team name"
            value={newTeamName}
            onChange={(e) => setNewTeamName(e.target.value)}
            className="text-black px-4 py-2 rounded-md"
          />
          <button
            onClick={() => handleAddTeam(newTeamName)}
            className="ml-4 bg-accent text-white px-4 py-2 rounded-md">
            Add Team
          </button>
        </div>}
      </div>
    </div>
    
  )
}
