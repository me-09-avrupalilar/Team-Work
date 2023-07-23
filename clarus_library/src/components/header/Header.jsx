import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ButtonDropdownsExample() {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with dropdown button" />

        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">ALL</Dropdown.Item>
          <Dropdown.Item href="#">BOOKS</Dropdown.Item>
          <Dropdown.Item href="#">MAGAZINES</Dropdown.Item>
         
        </DropdownButton>
      </InputGroup>
    </>
  );
}

export default ButtonDropdownsExample;
