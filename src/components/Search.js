import '../styles/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/SearchResults.css';

function Search(props) {
    const [locationValue, setLocationValue] = useState('')
    const apiURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationValue}.json?&access_token=${process.env.REACT_APP_MAPBOX}`
    const [searchResults, setSearchResults] = useState(null)

    useEffect(() => {
        const searchLocation = async () => {
            try {
                const res = await axios.get(apiURL)
                setSearchResults(res.data.features)
                
            } catch (err) {
                console.log(err);
            }
        }
        // console.log(searchResults)
        locationValue === '' ? setSearchResults(null) : setSearchResults(searchResults)
        searchLocation();
    }, [locationValue])

    const handleLocationSelection = (locationCoordinates) => {
        if (locationCoordinates !== []) {
            props.setViewport({
                width: "100vw",
	            height: "80vh",
                latitude: locationCoordinates.center[1],
                longitude: locationCoordinates.center[0],
                zoom: 13
            })
            setSearchResults(null)
        } else {
            console.log('no coordinates!');
        }
        console.log(locationCoordinates.center);
    }

    return (
        <section className="search-container">
            <div className="search-bar">
                <input
                    type="search"
                    name="Search"
                    id="search"
                    placeholder="Search by city, postal code"
                    value={locationValue}
                    onInput={e => setLocationValue(e.target.value)} 
                />
            </div>
            <div className={`search-results ${!searchResults ? 'hidden' : ''}`}>
                    {
                        searchResults && searchResults.map((location) => (
                            <a
                                href="#"
                                onClick={() => handleLocationSelection(location)} >
                                {location.place_name}
                            </a>
                        ))
                    }
            </div>
        </section>
    );
}

export default Search;
