import { ConnectButton } from "@rainbow-me/rainbowkit";
import "bootstrap/dist/css/bootstrap.min.css";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";
import DogDeveloper from "../components/DogDeveloper";
import DogDisplay from "../components/DogDisplay";
import dogDetails from "../types/types";

const Home: NextPage = () => {
  const [createClicked, setCreateClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [update, setUpdate] = useState(false);
  const [dogToEdit, setDogToEdit] = useState<dogDetails>({breed: '', description:'', image: ''});
  const [searchWord, setSearchWord] = useState<string>('');
  const myRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (editClicked) {
      setCreateClicked(false);
      myRef.current.scrollIntoView();
    }
  }, [editClicked]);

  useEffect(() => {
    if (createClicked) {
      myRef.current.scrollIntoView();
      setEditClicked(false);
    }
  }, [createClicked]);

  return (
    <Container fluid className="container-color">
      <Row>
        <Header setCreateClicked={setCreateClicked}></Header>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs={4} className="mt-5">
          <div className="ms-5">
            <ConnectButton
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
            ></ConnectButton>
          </div>
        </Col>
      </Row>
      <Row>
        <h3 className="text-white text-center margin-title">MyDogCollection</h3>
        <h1 className="text-white text-center">How many dogs do you know?</h1>
      </Row>
      <Row className="text-center">
        <Col>
          <Image
            className="mt-5 border border-dark-subtle rounded-pill"
            src="/images/dogsWall.png"
            alt="Bootstrap"
            width="500"
            height="180"
          ></Image>
        </Col>
      </Row>
      <Row className="mt-5 ms-4">
        <Col xs={6}>
          <SearchBar word={searchWord as string}></SearchBar>
        </Col>
      </Row>
      <Row className="bg-dark me-5 ms-5 rounded">
        <DogDisplay
          updateDisplay={update}
          setShowEditMode={setEditClicked}
          setDogToEdit={setDogToEdit}
        ></DogDisplay>
      </Row>
      <Row>
        {" "}
        <hr id="divider" className="text-white border-3 rounded"></hr>
      </Row>
      <Row ref={myRef}>
        {createClicked && (
          <div>
            <DogDeveloper
              type="Create"
              updateDisplay={setUpdate}
            ></DogDeveloper>
          </div>
        )}
        {editClicked && (
          <div ref={myRef}>
            <DogDeveloper
              type="Edit"
              updateDisplay={setUpdate}
              dogToEdit={dogToEdit}
            ></DogDeveloper>
          </div>
        )}
      </Row>
      <Row className="text-center mb-3">
        <Col>
          <Image
            className="mt-5 mb-5 border border-dark-subtle rounded"
            src="/images/dogsFront.png"
            alt="Bootstrap"
            width="770"
            height="130"
          ></Image>
        </Col>
      </Row>
      <Row className="text-left fun-footer">
        <Footer></Footer>
      </Row>
    </Container>
  );
};

export default Home;
