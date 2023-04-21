import { useState } from 'react'

const GroupTeamMembers = ({ employees, selectedTeam, setTeam }) => {

  const groupTeamMembers = () => {
    var teams = []

    var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA')
    var teamA = { team: 'TeamA', members: teamAMembers, collapse: selectedTeam === 'TeamA' ? false : true }
    teams.push(teamA)

    var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB')
    var teamB = { team: 'TeamB', members: teamBMembers, collapse: selectedTeam === 'TeamB' ? false : true }
    teams.push(teamB)

    var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC')
    var teamC = { team: 'TeamC', members: teamAMembers, collapse: selectedTeam === 'TeamC' ? false : true }
    teams.push(teamC)

    var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD')
    var teamD = { team: 'TeamD', members: teamAMembers, collapse: selectedTeam === 'TeamD' ? false : true }
    teams.push(teamD)

    return teams
  }

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers)// Destructoring assignment

  const handleTeamClick = (event) => {
    var transformedGroupData = groupedEmployees.map((groupedData) =>{
      console.log(groupedData.team, event.currentTarget.id)
      if (groupedData.team === event.currentTarget.id) {
        console.log(groupedData.team, groupedData.fullName)
        var newObjectModified={ ...groupedData, collapse: !groupedData.collapse }//-> This code creates a other JSON object by spread operator and modify this new object(not the original groupedData)
        return newObjectModified//Returns the new object to the transformedGroupData variable
      } else {
        return groupedData
      }
    })
      setGroupedData(transformedGroupData)
    setTeam(event.currentTarget.id)
    console.log(groupedEmployees)
  }
  return (
    <main className="container">
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className='card mt-2' style={{ cursor: 'pointer' }}>
              <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeamClick}>Team Name: {item.team}</h4>
              <div id={"collapse_" + item.team} className={item.collapse === true ? "collapse" : ""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div className="mt-2">
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {member.fullName}</span>
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default GroupTeamMembers//enable the GroupTeamMembers function be imported in other modules