import axios from 'axios';
import { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';

function PersonDetails(props) {
    const studentURL = 'http://apps.loopevo.com/apis/students/student.php';
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('1');
    const [city, setCity] = useState('1');
    const [email, setEmail] = useState('');
    const [tax, setTax] = useState('');

    useEffect(() => {
        if (props.id){
            axios 
            .post(studentURL, {id: props.id})
            .then ((response) => {
                // age: "18"
                // annual_tax: "0"
                // city: "1"
                // email: "ion@gmail.com"
                // first_name: "Todd"
                // id: "162"
                // last_name: "Todd"
                setFirstName(response.data.first_name)
                setLastName(response.data.last_name)
                setEmail(response.data.email)
                setCity (response.data.city)
                setAge(response.data.age)
                setTax(response.data.annual_tax)
            })
        }
    }, [])

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Age</th>
                        <th>Pays tax?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{city}</td>
                        <td>{age}</td>
                        <td>{tax==="0" ? "No" : "Yes"}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default PersonDetails;