import SearchByName from "./SearchByName";
import SearchByAgeAndLocation from "./SearchByAgeAndLocation";
import Results from "./Results";
import {useState, useEffect} from 'react';
import axios from 'axios';

function Search() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const baseURL = 'https://apps.loopevo.com/apis/students/students-by-name.php';
    const [serverData, setServerData] = useState([]);
    const [citiesData, setCitiesData] = useState([]);
    const baseCityURL = 'https://apps.loopevo.com/apis/locations/city.php';
    const baseLocationAndAgeURL = 'https://apps.loopevo.com/apis/students/students-filter.php';
    const [city, setCity] = useState('');
    const [age, setAge] = useState(1);

    const getCities = () => {
        axios
            .post(baseCityURL)
            .then((response) => {
                setCitiesData(response.data)
                setCity(response.data[0].id)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    useEffect(() => {
        getCities();
    }, [])
    
    const searchByName = (e) => {
        e.preventDefault();
        axios
            .post(baseURL, {firstName, lastName})
            .then((response) => {
                setServerData(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const searchByCityAndLocation = (e) => {
        e.preventDefault();
        axios
            .post(baseLocationAndAgeURL, {city, age})
            .then((response) => {
                setServerData(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    return (
        <div className="container">
            <h1>Search</h1>

            <div className="row">
                <div className="col-6">
                    <SearchByName searchByName={searchByName} setFirstName={setFirstName} setLastName={setLastName}/>
                </div>
                <div className="col-6">
                    <SearchByAgeAndLocation citiesData={citiesData} searchByCityAndLocation={searchByCityAndLocation} setCity={handleCityChange} setAge={handleAgeChange} />
                </div>
            </div>

            <Results serverData={serverData} />
        </div>
    );
}

export default Search;