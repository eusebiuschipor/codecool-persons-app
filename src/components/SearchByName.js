import {Form, Button} from 'react-bootstrap';

function SearchByName({searchByName, setFirstName, setLastName}) {
    return (
        <div className="container">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" onChange={e => setFirstName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" onChange={e => setLastName(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={searchByName}>
                    Search
                </Button>
            </Form>
        </div>
    );
}

export default SearchByName;