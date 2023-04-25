const AddEmployees=()=>{
    return (
        <>
			<h1>Adding new employees</h1>
				<form id="addEmployeeForm">
					<div className="nameField" >
						<div>
							<label>First name:</label>
							<input type="text" className="form-control" placeholder="Ex: Bill"/>
						</div>
						<div>
							<label>Last name:</label>
							<input type="text" className="form-control" placeholder="Ex: Gates"/>
						</div>
					</div>
					<div>
							<label id="designationLabel">Designation: </label>
							<div className="form-team-list">
								<div class="form-check">
									<input class="form-check-input" type="radio" name="radio" id="radio1"/>
									<label class="form-check-label" >Python Developer</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="radio" id="radio2"/>
									<label class="form-check-label" >Backend Developer</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="radio" id="radio3"/>
									<label class="form-check-label" >C# Developer</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="radio" id="radio4"/>
									<label class="form-check-label" >Java Developer</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="radio" id="radio5"/>
									<label class="form-check-label" >Javascript Developer</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="radio" id="radio6"/>
									<label class="form-check-label" >Dotnet Developer</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="radio" id="radio7" />
									<label class="form-check-label" >Node Developer</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="radio" id="radio8"/>
									<label class="form-check-label" >Data Engineer</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="radio" id="radio8"/>
									<label class="form-check-label" >Docker Developer</label>
								</div>
							</div>
							<div class="form-position">
								<label>Team:</label>
								<select id="inputState" className="form-control">
									<option selected>Team A</option>
									<option>Team B</option>
									<option>Team C</option>
									<option>Team D</option>
									<option selected>...</option>
								</select>
							</div>
					</div>
				</form>
		</>
    )
}
export default AddEmployees;