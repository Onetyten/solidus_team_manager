import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Employees from './Employees'
import Sidebar from './Sidebar'

function App() {
  const[openTab, setOpenTab] = useState(true)
  const[isLeft,setIsLeft] = useState(true)

  function toggleTab(){
    setOpenTab(!openTab)
    setIsLeft(!isLeft)
    
  }


  const[selectedTeam,setSelectedTeam] = useState(JSON.parse(localStorage.getItem('SelectedTeam'))||"Team A")
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employmentList'))||[
    {
      id: 1,
      fullName: "Todd Howard",
      designation: "Project Manager",
      gender: "Male",
      teamName: "Team A",
    },
    {
      id: 2,
      fullName: "Amanda Lopez",
      designation: "Junior Programmer",
      gender: "female",
      teamName: "Team A",
    },
    {
      id: 3,
      fullName: "Aisha Khan",
      designation: "UX/UI Designer",
      gender: "female",
      teamName: "Team A",
    },
    {
      id: 4,
      fullName: "Olivia Njeri",
      designation: "Software Tester",
      gender: "female",
      teamName: "Team A",
    },
    {
      id: 5,
      fullName: "Santiago Ruiz",
      designation: "IT Support Specialist",
      gender: "male",
      teamName: "Team A",
    },
    {
      id: 6,
      fullName: "Samuel Abimbola",
      designation: "Data Engineer",
      gender: "male",
      teamName: "Team B",
    },
    {
      id: 7,
      fullName: "Mahmoud Hussein",
      designation: "Backend Developer",
      gender: "male",
      teamName: "Team B",
    },
    {
      id: 8,
      fullName: "Luca Ferrari",
      designation: "Junior Programmer",
      gender: "male",
      teamName: "Team B",
    },
    {
      id: 9,
      fullName: "Diego Rodríguez",
      designation: "Database Administrator",
      gender: "male",
      teamName: "Team B",
    },
    {
      id: 10,
      fullName: "Charlotte Dupont",
      designation: "QA Engineer",
      gender: "female",
      teamName: "Team B",
    },
    {
      id: 11,
      fullName: "Arden Cho",
      designation: "Graphic Designer",
      gender: "female",
      teamName: "Team C",
    },
    {
      id: 12,
      fullName: "Sophia Patel",
      designation: "Machine Learning Engineer",
      gender: "female",
      teamName: "Team C",
    },
    {
      id: 13,
      fullName: "Maria Costa",
      designation: "AI Specialist",
      gender: "female",
      teamName: "Team C",
    },
    {
      id: 14,
      fullName: "Fatima Al-Farsi",
      designation: "AI Research Scientist",
      gender: "female",
      teamName: "Team C",
    },
    {
      id: 15,
      fullName: "Chen Wei",
      designation: "Data Analyst",
      gender: "male",
      teamName: "Team C",
    },
    {
      id: 16,
      fullName: "Gail Stillwell",
      designation: "Frontend Developer",
      gender: "male",
      teamName: "Team D",
    },
    {
      id: 17,
      fullName: "Jin Park",
      designation: "Backend Developer",
      gender: "male",
      teamName: "Team D",
    },
    {
      id: 18,
      fullName: "James Li",
      designation: "Scrum Master",
      gender: "male",
      teamName: "Team D",
    },
    {
      id: 19,
      fullName: "Liam Anderson",
      designation: "Game Developer",
      gender: "male",
      teamName: "Team D",
    },
    {
      id: 20,
      fullName: "Nina Petrova",
      designation: "Cybersecurity Analyst",
      gender: "female",
      teamName: "Team D",
    },
    {
      id: 21,
      fullName: "Carlos Mendes",
      designation: "Junior Programmer",
      gender: "male",
      teamName: "Team A",
    },
    {
      id: 22,
      fullName: "Emma Johansson",
      designation: "Cloud Architect",
      gender: "female",
      teamName: "Team B",
    },
    {
      id: 23,
      fullName: "Yuki Tanaka",
      designation: "Web Developer",
      gender: "male",
      teamName: "Team C",
    },
    {
      id: 24,
      fullName: "Kimberly Blake",
      designation: "DevOps Engineer",
      gender: "female",
      teamName: "Team D",
    },
    {
      id: 25,
      fullName: "Ibrahim Hassan",
      designation: "Systems Architect",
      gender: "male",
      teamName: "Team B",
    },
    {
      id: 26,
      fullName: "Isabella Rossi",
      designation: "Junior Programmer",
      gender: "female",
      teamName: "Team A",
    },
    {
      id: 27,
      fullName: "Ravi Sharma",
      designation: "Backend Developer",
      gender: "male",
      teamName: "Team D",
    }
  ]);
  
  function handleSelectedTeam(event){
    setSelectedTeam(event.target.value)
    console.log(event.target.value)
  }

  function handleEmployeeCardClicked(event){
    const transformedEmployees = employees.map((employees) => employees.id === parseInt(event.currentTarget.id)?(employees.teamName === selectedTeam)?{...employees,teamName:''}:{...employees,teamName:selectedTeam}:employees);
    setEmployees(transformedEmployees)
  }
  useEffect(()=>{
      localStorage.setItem('employmentList',JSON.stringify(employees))

  },[employees])

useEffect(()=>{
    localStorage.setItem('SelectedTeam',JSON.stringify(selectedTeam))

},[selectedTeam])


  return (
    <main className='bg-my-grey min-h-screen'>
      <div className='flex'>
        <Sidebar toggleTab = {toggleTab} openTab = {openTab} isLeft ={isLeft}/>

        {/* main page */}

        <div className='w-full col-span-3'>
          <Header selectedTeam = {selectedTeam} teamMemberCount ={employees.filter((employees) => employees.teamName === selectedTeam).length}  />

            
          <Employees selectedTeam = {selectedTeam} setSelectedTeam={setSelectedTeam} setEmployees={setEmployees} employees = {employees} handleSelectedTeam={handleSelectedTeam} handleEmployeeCardClicked = {handleEmployeeCardClicked}/>

        </div>

      </div>
    </main>
  )
}

export default App
