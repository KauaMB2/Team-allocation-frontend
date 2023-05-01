const Teams=({selectedTeam, handleTeamSelectionChange})=>{
  return (
    <div className="col-6 animate__animated animate__slideInDown">
      <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
        <option value="TeamA">TeamA</option>
        <option value="TeamB">TeamB</option>
        <option value="TeamC">TeamC</option>
        <option value="TeamD">TeamD</option>
      </select>
    </div>
  )
} 

export default Teams