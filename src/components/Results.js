import {Table} from 'react-bootstrap';

function Results({serverData}) {
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
                    {serverData.map((person, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.email}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    );
}

export default Results;