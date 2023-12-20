import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import dogDetails from "../types/types";
import { useEffect, useState } from "react";
import { postDogsImageToServer, postDogsToDB, updateDogsFromDB } from "../api/methods";
import {v4 as uuidv4} from 'uuid';

type DogDeveloperProps = {
  type: string;
  updateDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  dogToEdit?: dogDetails;
};

const DogDeveloper = ({type, updateDisplay, dogToEdit}: DogDeveloperProps) => {
  const [dog, setDog] = useState<dogDetails>(dogToEdit ? dogToEdit : {breed: '', description:'', image: ''});
  const [validated, setValidated] = useState(false);
  const [imageDogFile, setImageDogFile] = useState<File>(); 
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if(dog && type==='Create') postDogs(dog)
  }, [dog?.image]);

  useEffect(() => {
    if(type==='Edit' && edit) updateDogs(dog);
  }, [dog?.image, edit]);

  
  useEffect(() => {
    setDog(dogToEdit as dogDetails)
  }, [dogToEdit]);

  const handleSubmit = async(event: any) => {
    updateDisplay(false);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if(imageDogFile) await sendImageToServer();
    if(type==="Edit") setEdit(true);
  };

  const sendImageToServer = async () => {
    const data = new FormData()
    data.set('file', imageDogFile as File);
    const dogsImageToServer: any= await postDogsImageToServer("image", data);
    setDog({...dog, image : dogsImageToServer.data as string})
  }

  const postDogs = async (dog: dogDetails) => {
    console.log("post")
    const storedStatus = await postDogsToDB("dog", dog);
    if (storedStatus === "Bad request") {
      console.log("Error posting dog");
    } else {
      console.log("Dog added succesfully");
      updateDisplay(true);
      setShowSuccessMessage(true);
      setValidated(false);
    }
  };
   

  const updateDogs = async (dog: dogDetails) => {
    console.log("update")
    const updatedStatus = await updateDogsFromDB("dog", dog);
    if (updatedStatus === "Bad request") {
      console.log("Error updating dog");
    } else {
      console.log("Dog updated succesfully");
      updateDisplay(true);
      setShowSuccessMessage(true);
      setEdit(false);
    }
  }

  return (
    <Container className="mt-3 mb-4">
      <Row id="dog-developer-box" className="text-white justify-content-center">
        <Col xs={8}>
          <h1 className="mb-5">{type} your Dog</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicBreed">
              <Form.Label>Breed</Form.Label>
              <Form.Control
                type="breed"
                placeholder="Enter breed"
                value={dog?.breed}
                onChange={(e) => type==='Create' ? setDog({ ...dog, breed: e.target.value, id:`unique-${uuidv4()}`}): setDog({ ...dog, breed: e.target.value}) }
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a Breed.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="file"
                name="file"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageDogFile(e.target.files?.[0])}
                required = {type==='Create' ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                Please provide an image.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={dog?.description}
                onChange={(e) =>
                  setDog({ ...dog, description: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a description.
              </Form.Control.Feedback>
            </Form.Group>
            <Button id="dev-button" onClick={handleSubmit} size="lg">
              {type}
            </Button>
            {showSuccessMessage && <Alert variant="success mt-4 w-50">{type === 'Create' ? "Dog created succesfully!" : "Dog edited succesfully!"}</Alert>
           }
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default DogDeveloper;
