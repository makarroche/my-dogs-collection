import DogDeveloper from "../../components/DogDeveloper";

describe("<DogDeveloper>", () => {
  it("mounts", () => {
    cy.mount(<DogDeveloper type="Edit" />);
    cy.get("h1").contains("Edit your Dog");
  });

  it("mounts", () => {
    cy.mount(<DogDeveloper type="Create" />);
    cy.get("h1").contains("Create your Dog");
  });

});
