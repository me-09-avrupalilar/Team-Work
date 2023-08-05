import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';

function ButtonDropdownsExample() {
  return (
    <div className="border border-dark p-3 text-center">
      <h2>BOOKS OR MAGAZINES</h2>
      <InputGroup className="mb-3">
        <Form.Control   placeholder="Search..." type="search" aria-label="Text input with dropdown button" />
         
        <DropdownButton
          variant="outline-secondary"
          title="ALL"
          id="input-group-dropdown-2"
          align="end"
         
        
        >
          <Dropdown.Item href="#">ALL</Dropdown.Item>
          <Dropdown.Item href="#">BOOKS</Dropdown.Item>
          <Dropdown.Item href="#">MAGAZINES</Dropdown.Item>
         
        </DropdownButton>
      </InputGroup>
      <Button className="px-5 " variant="primary">Primary</Button>{' '}
    </div>
  );
}

export default ButtonDropdownsExample;
