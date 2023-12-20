import { Button, Modal } from "react-bootstrap";
import { deleteDogsFromDB } from "../api/methods";
import dogDetails from "../types/types";


type ModalProps = {
  showModal: boolean
  setDeleteModalClicked: React.Dispatch<React.SetStateAction<boolean>>
  dogToDelete: dogDetails
  update: React.Dispatch<React.SetStateAction<boolean>>
}


const DeleteDogModal = ({showModal, setDeleteModalClicked, dogToDelete, update}: ModalProps) => {

  const handleClickYes = () => {
    setDeleteModalClicked(false);
    deleteDogs(dogToDelete);
  }

  const deleteDogs = async (dog:dogDetails) => {
    const deletedStatus = await deleteDogsFromDB("dog", dog);
      if (deletedStatus === "Bad request") {
        console.log("Error deleting dog");
      } else {
        console.log("Dog deleted succesfully");
        update(true);
      }
  }

  return (
    <Modal
      show={showModal}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation
      autoFocus
    >
      <Modal.Header className="bg-dark">
        <Modal.Title className="text-white" id="contained-modal-title-vcenter">
          Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <p className="text-white">Are you sure you want to delete this dog from the collection?</p>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button className="bg-danger border-danger" onClick={handleClickYes}>Yes</Button>
        <Button className="bg-secondary border-secondary" onClick={() => setDeleteModalClicked(false)}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteDogModal;
