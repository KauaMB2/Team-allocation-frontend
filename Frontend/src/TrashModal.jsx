import {Button, Modal} from 'react-bootstrap'

const TrashModal=({showTrashModal, setShowTrashModal, currentEmployee})=>{
    return(
        <>
            <Modal show={showTrashModal} onHide={()=>{setShowTrashModal(!showTrashModal)}}>
                <Modal.Header className='text-center bg-danger' closeButton>
                    <Modal.Title className='modal-title w-100 font-weight-bold py-2'>DELETE AREA</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete the {(currentEmployee!=undefined) ? currentEmployee.fullName : ''} register?</Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-outline-secondary" onClick={()=>{setShowTrashModal(!showTrashModal)}}>Cancel</Button>
                    <Button variant="btn btn-danger" onClick={()=>{setShowTrashModal(!showTrashModal)}}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default TrashModal