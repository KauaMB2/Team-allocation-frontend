const Header = ({ selectedItem, teamMemberCount }) => {
  return (
    <header>
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Member Allocation</h1>
          <h3>{selectedItem} has {teamMemberCount} {teamMemberCount===1?"member":"members"}</h3>
        </div>
      </div>
    </header>
  )
}

export default Header//enable the Header function be imported in other modules