import { useState, useEffect } from 'react'
import Header from './Header'

const GroupTeamMembers = ({ employees, getNumberOfEmployees, selectedTeam, setTeam }) => {
  
  // Function to group employees by teams
  const groupTeamMembers = () => {
    const teams = ['Team A', 'Team B', 'Team C', 'Team D'].map(team => {
      const teamMembers = employees.filter(employee => employee.teamName === team)
      return {
        team,
        members: teamMembers,
        collapse: selectedTeam === team ? false : true,
      }
    })
    return teams
  }

  // State for grouped employees
  const [groupedEmployees, setGroupedData] = useState([]);

  // Effect to group employees when the component mounts or employees change
  useEffect(() => {
    setGroupedData(groupTeamMembers())
  }, [employees, selectedTeam])

  // Handle team click to toggle collapse
  const handleTeamClick = (event) => {
    const transformedGroupData = groupedEmployees.map(groupedData => {
      if (groupedData.team === event.currentTarget.id) {
        return { ...groupedData, collapse: !groupedData.collapse }
      } else {
        return groupedData
      }
    })
    setGroupedData(transformedGroupData)
    setTeam(event.currentTarget.id)
  }

  return (
    <>
      <Header
        selectedItem={selectedTeam}
        teamMemberCount={getNumberOfEmployees()}
      />
      <main className="container animate__animated animate__slideInDown">
        {groupedEmployees.map((item) => (
          <div key={item.team} className="card mt-2" style={{ cursor: 'pointer' }}>
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name: {item.team}
            </h4>
            <div id={"collapse_" + item.team} className={item.collapse ? "collapse" : ""}>
              <hr />
              {item.members.map(member => (
                <div key={member.id} className="mt-2">
                  <h5 className="card-title mt-2">
                    <span className="text-dark">Full Name: {member.fullName}</span>
                  </h5>
                  <p>Designation: {member.designation}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </>
  )
}

export default GroupTeamMembers
