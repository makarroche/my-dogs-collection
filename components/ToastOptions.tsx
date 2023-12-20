import { Row, Toast, ToastContainer } from "react-bootstrap"

type ToastProps = {
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setShowEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const ToastOptions = ({setShowToast, setShowModal, setShowEditMode}: ToastProps) => {

  const handleOnClickEdit = () => {
    setShowEditMode(true);
    setShowToast(false);
  }


  const handleOnClickDelete = () => {
    setShowModal(true);
    setShowToast(false);
  }

return (
    <ToastContainer id="toast" className="middle-end">
      <Toast id="toast-color">
        <Toast.Body>
          {" "}
          <Row className="text-white fw-bold">
              <a onClick={handleOnClickEdit}>Edit</a>
          </Row>
          <Row className="text-white fw-bold">
              <a onClick={handleOnClickDelete}>Delete</a>            
          </Row>
        </Toast.Body>
      </Toast>
    </ToastContainer>
)
}

export default ToastOptions;