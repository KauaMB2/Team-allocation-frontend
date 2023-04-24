import femaleProfile from './images/profileIcons/femaleProfile.png'
import maleProfile from './images/profileIcons/maleProfile.png'

const TeamMemberCard=({employee, handleEmployeeCardClick, selectedTeam})=>{
  return(
    <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
      <div className='divLittleIcons'>
        <div id="settingsIcon" className='littleIcon'></div>
        <div id="trashIcon" className='littleIcon'></div>
      </div>
      {(employee.gender === "female") ? (
      <img src={femaleProfile} className="card-img-top" />
    ):(
      <img src={maleProfile} className="card-img-top" />
    )}
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text"><b>Designation: </b> {employee.designation}</p>
      </div>
    </div>
  )
}

export default TeamMemberCard