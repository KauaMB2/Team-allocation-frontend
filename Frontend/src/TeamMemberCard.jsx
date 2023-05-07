import femaleProfile from './images/profileIcons/femaleProfile.png'
import maleProfile from './images/profileIcons/maleProfile.png'
import othersPofile from './images/profileIcons/othersProfile.jpg'
const TeamMemberCard=({employee, handleEmployeeCardClick, selectedTeam, setShowTrashModal, showTrashModal, setCurrentEmployee, showEditModal, setShowEditModal})=>{
  const turnOnTrashModel=()=>{
    setCurrentEmployee(employee)
    setShowTrashModal(!showTrashModal)
  }
  const turnOnEditModel=()=>{
    setCurrentEmployee(employee)
    setShowEditModal(!showEditModal)
  }
  return(
    <div key={employee._id} id={employee._id} className={(employee.teamName === selectedTeam ? 'card m-2 standout animate__animated  animate__fadeIn' : 'card m-2 animate__animated animate__fadeIn')} style={{ cursor: "pointer" }} onClick={(event)=>{handleEmployeeCardClick(event)}}>
      <div className='divLittleIcons'>
        <div type="button" id="settingsIcon" className='littleIcon' onClick={turnOnEditModel}></div>
        <div type="button" id="trashIcon" className='littleIcon' onClick={turnOnTrashModel}></div>
      </div>
      {(employee.gender === "female") ? (//if
        <img src={femaleProfile} className="card-img-top" />
    ):(//else 
        (employee.gender === "male") ? (//if
          <img src={maleProfile} className="card-img-top" />
        ):(//else
          <img src={othersPofile} className="card-img-top" />
        )
      
    )}
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text"><b>Designation: </b> {employee.designation}</p>
      </div>
    </div>
  )
}

export default TeamMemberCard