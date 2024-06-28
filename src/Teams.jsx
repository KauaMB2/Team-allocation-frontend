const Teams=({selectedTeam, handleTeamSelectionChange})=>{
  return (
    <div className="col-6 animate__animated animate__slideInDown">
      <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
        <option value="Team A">Team A</option>
        <option value="Team B">Team B</option>
        <option value="Team C">Team C</option>
        <option value="Team D">Team D</option>
      </select>
    </div>
  )
} 

export default Teams