import {Form, Button} from 'react-bootstrap';
import useAgeArray from '../hooks/useAgeArray';

function SearchByAgeAndLocation({citiesData, searchByCityAndLocation, setCity, setAge}) {
    const ages = useAgeArray();

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Select onChange={setCity}>
                    {citiesData.map((city, index) => (
                        <option value={city.id} key={index}>{city.name}</option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                <Form.Select onChange={setAge}>
                    {ages.map((age) => (
                        <option value={age} key={age}>{age}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={searchByCityAndLocation}>
                Search
            </Button>
        </Form>
    );
}

export default SearchByAgeAndLocation;