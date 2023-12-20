import { useEffect, useState } from "react";
import { Container, Form, InputGroup, Row} from "react-bootstrap";

type searchWord = {
    word: string;
}

const SearchBar = ({word}: searchWord) => {

  const [search, setSearch] = useState();


  return (
      <Container>
      <Row className="justify-content-center">
        <InputGroup id = "search-bar" className="mb-4 mt-3">
        <Form.Control
          placeholder="Search your favorite doggie!"
          aria-describedby="search bar"
          className="gray-color border-0"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          
        />
        <InputGroup.Text id="basic-addon1" className="gray-color border-0">
          <img id ="search-icon" src="/icons/search.svg" alt="Bootstrap" width="15" height="15"></img>
            </InputGroup.Text>
        </InputGroup>
      </Row>
      </Container>
  );
};

export default SearchBar;
