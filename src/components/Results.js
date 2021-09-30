import {Table, Button} from 'react-bootstrap';
import { navigate } from '@reach/router';
import axios from 'axios';
import {useState, useEffect} from 'react';

function Results({serverData}) {
    const [data, setData] = useState(serverData);
    
    useEffect(() => {
        setData(serverData);
    }, [serverData]);
    
    const editPerson = (id) => {
        navigate(`/person/${id}`);
    }

    const detailsPerson = (id) => {
        navigate(`/details/${id}`);
    }

    const deletePerson = (id) => {
        axios 
            .post('https://apps.loopevo.com/apis/students/delete.php', {id})
            .then ((response) => {
                alert('Persoana a fost stearsa')
                let newData = data.filter((person) => {
                    return person.id !== id
                });
                setData(newData);
        })
    }
    
    if (serverData.length === 0) {
        return (
            <>
                <div className="container mt-5">
                    <p>No results</p>
                </div>
            </>
        )
    }

    return (
        <div className="container mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((person, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.email}</td>
                            <td><Button onClick={() => editPerson(person.id)} variant="primary">Edit</Button></td>
                            <td><Button onClick={() => detailsPerson(person.id)} variant="secondary">Details</Button></td>
                            <td><Button onClick={() => deletePerson(person.id)} variant="danger">Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Results;