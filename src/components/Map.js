import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { IoMdPin } from 'react-icons/io';
// import PinPopup from './PinPopup';
import { Popup } from 'react-map-gl';
import axios from 'axios';

function Map() {
const [pins, setPins] = useState([])
const [currentPlaceId, setCurrentPlaceId] = useState(null); 

const [viewport, setViewport] = useState({
	width: "70vw",
	height: "80vh",
	latitude: 43.642514,
	longitude: -79.387071,
	zoom: 13
});

useEffect(() => {
	const getPins = async () => {
		try {
			const res = await axios.get('/pins')
			setPins(res.data)
			console.log(res.data);
		} catch(err) {
			console.log(err);
		}
	}
	getPins();
}, [])

const handleMarkerClick = (id) => {
	setCurrentPlaceId(id)

}
return (
	<ReactMapGL
		{...viewport}
		mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
		onViewportChange={nextViewport => setViewport(nextViewport)}
	>
		{
			pins.map((pin) => (
				<>
					<Marker
						latitude={pin.lat}
						longitude={pin.long}
						offsetLeft={-20}
						offsetTop={-10}
						key={pin._id}
					>
						<IoMdPin
							style={{ fontSize: viewport.zoom * 3, color: 'slateblue', cursor: 'pointer' }}
							onClick={() => handleMarkerClick(pin._id)}
						/>
					</Marker>
					{
						pin._id === currentPlaceId && 
						<Popup
							latitude={pin.lat}
							longitude={pin.long}
							closeButton={true}
							closeOnClick={false}
							anchor="bottom"
							className='pin-popup'
							onClose={() => setCurrentPlaceId(null)}
						>
							<h3>{pin.title}</h3>
							<p>
								{pin.desc}
							</p>
							<p>{pin.username}</p>

						</Popup>
					}
				</>
			))
		}
	
	</ReactMapGL>
);
}
export default Map;