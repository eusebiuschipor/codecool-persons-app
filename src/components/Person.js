import {Form, Button} from 'react-bootstrap';
import useAgeArray from '../hooks/useAgeArray';
import cities from '../cities.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Person(props) {
    const ages = useAgeArray();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('1');
    const [city, setCity] = useState('1');
    const [email, setEmail] = useState('');
    const sendDataURL = 'https://apps.loopevo.com/apis/students/add-new-student.php';
    const [error, setError] = useState('')
    const studentURL = 'http://apps.loopevo.com/apis/students/student.php'
    const editDataURL= 'https://apps.loopevo.com/apis/students/update-student.php'
   
    const sendData = (e) => {
        e.preventDefault();

        let url = sendDataURL;
        let data = {firstName, lastName, email, age, city};
        let mesage = "Ai adaugat o peroana cu succes"
        
        if (props.id) {
            url = editDataURL;
            data.id = props.id;
            mesage = 'Ai editat cu succes o persoana'
            
        } 
        
        if (firstName.length > 0 && lastName.length >0 && email.length > 0) {   
            axios
                .post(url, data)
                .then(() => {
                    if (!props.id) {
                        setFirstName('')
                        setLastName('')
                        setEmail('')
                    }
                    
                    setError('')
                    alert(mesage)
                })
                .catch((error) => {
                    console.log(error)
                });
        }else {
            setError('Te rog sa completezi toate campurile de mai sus')
        }

    };

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

            
                })
            }
            

      }, [])

    

   
    return (
        <div className="container">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control value = {firstName} type="text" placeholder="Enter First Name" onChange={e => setFirstName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value = {lastName}type="text" placeholder="Enter Last Name" onChange={e => setLastName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value = {email} type="email" placeholder="Enter email"  onChange={e => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Select value= {age} onChange={e => setAge(e.target.value)}>
                        {ages.map((age) => (
                            <option value={age} key={age}>{age}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Select value = {city} onChange={e => setCity(e.target.value)}>
                        {cities.map((city) => (
                            <option value={city.id} key={city.id}>{city.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                         <div>{error} </div>   
                <Button variant="primary" type="submit" onClick={sendData}>
                    {props.id ? 'Edit' : 'Add'}
                </Button>
            </Form>
        </div>
    );
}

export default Person;