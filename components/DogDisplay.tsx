import {Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Image from "next/image";
import ToastOptions from "./ToastOptions";
import { getDogsFromDB} from "../api/methods";
import DeleteDogModal from "./DeleteDogModal";
import dogDetails from "../types/types";

type DogDisplayProps = {
  updateDisplay: boolean;
  setShowEditMode:  React.Dispatch<React.SetStateAction<boolean>>;
  setDogToEdit: React.Dispatch<React.SetStateAction<dogDetails>>;
}

const DogDisplay = ({updateDisplay, setShowEditMode, setDogToEdit}: DogDisplayProps) => {
  const [show, setShow] = useState(false);
  const [keyClicked, setKeyClicked] = useState<dogDetails>();
  const [dogs, setDogs] = useState<dogDetails[]>();
  const [deleteModalClicked, setDeleteModalClicked] = useState(false);
  const[update, setUpdate] = useState(false);

  useEffect(() => {
    getDogs();
  }, []);

  useEffect(() => {
    if(update || updateDisplay) getDogs();
  }, [update, updateDisplay]);


  const getDogs = async () => {
    const dogsDB: any = await getDogsFromDB("dog");
    setDogs(dogsDB.data?.rows as dogDetails[]);
    setUpdate(false);
  };

  const handleClickThreeDots = (dog: dogDetails) => {
    setKeyClicked(dog);
    setDogToEdit(dog);
    setShow(!show);
  };

  const dogCardToMap = (dog: dogDetails, index: number) => {
    return (
      <Col key={dog.breed} className="mb-5">
        <Card
          className="cardImg border-0 m-5 scroll"
          style={{ height: "31rem", width: "15rem" }}
        >
          <div className="text-end me-3">
            <Image
              className="ms-2 mt-2"
              src="icons/threeDots.svg"
              alt="Bootstrap"
              width="20"
              height="20"
              onClick={() => handleClickThreeDots(dog)}
            ></Image>
            {show && keyClicked?.id === dog.id && (
              <ToastOptions
                setShowModal={setDeleteModalClicked}
                setShowToast={setShow}
                setShowEditMode={setShowEditMode}
              ></ToastOptions>
            )}
          </div>
          <Card.Img variant="top" src={`http://localhost:5005/${dog.image}`} />
          <Card.Body className="card-body-ad card-bg rounded border">
            <Card.Title className="text-start mt-2 mb-4 text-white">
              {dog.breed}
            </Card.Title>
            <Card.Text className="text-white text-sm-start">
              {dog.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container className="justify-content-center">
      {deleteModalClicked && (
        <Row>
          <DeleteDogModal showModal={deleteModalClicked} setDeleteModalClicked={setDeleteModalClicked} dogToDelete={keyClicked as dogDetails} update={setUpdate}></DeleteDogModal>
        </Row>
      )}
      <Row className="justify-content-center">
        {dogs &&
          dogs.map((dog: dogDetails, index: number) =>
            dogCardToMap(dog, index)
          )}
        ;
        {dogs?.length==0 && <><h1 className="text-white text-center">Oops, something went wrong!</h1>
        <h2 className="text-white text-center mt-2"> We cant find dogs to display, try refreshing</h2></>}
      </Row>
    </Container>
  );
};

export default DogDisplay;
