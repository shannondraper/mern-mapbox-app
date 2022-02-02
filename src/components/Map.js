import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { IoMdPin } from 'react-icons/io';
import Search from './Search';
import ContextMenu from './ContextMenu';
import AddPinForm from './AddPinForm';
// import PinPopup from './PinPopup';
import { Popup } from 'react-map-gl';
import axios from 'axios';
import '../styles/App.css';


function Map() {
const [pins, setPins] = useState([])
const [currentPlaceId, setCurrentPlaceId] = useState(null); 
const [contextMenuState, setContextMenuState] = useState(false);
const [xPos, setXPos] = useState("0px");
const [yPos, setYPos] = useState("0px");
const [latClickPos, setLatClickPos] = useState(null)
const [longClickPos, setLongClickPos] = useState(null)
const [addPinFormIsOpen, setAddPinFormIsOpen] = useState(false)


const [viewport, setViewport] = useState({
	width: "100vw",
	height: "80vh",
	latitude: 43.642514,
	longitude: -79.387071,
	zoom: 13
});

useEffect(() => {
	const mapbox = document.querySelector('.mapboxgl-map')
	// console.log('mapbox', mapbox);
	// mapbox.addEventListener('contextmenu', handleContextMenu)


	const getPins = async () => {
		try {
			const res = await axios.get('/pins')
			setPins(res.data)
			// console.log(res.data);
		} catch(err) {
			// console.log(err);
		}
	}
	getPins();
}, [])

const handleContextMenu = (e) => {
	e.preventDefault();
	setContextMenuState(true)
	setXPos(Math.round(e.offsetCenter.x))
	setYPos(Math.round(e.offsetCenter.y))
}

const handleMarkerClick = (id) => {
	setCurrentPlaceId(id)
}
const handleClick = (e) => {
	// console.log('long & lat: ', e.lngLat);
	setLongClickPos(e.lngLat[0])
	setLatClickPos(e.lngLat[1])
}
return (
	<>
		<ReactMapGL
			{...viewport}
			mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
			onViewportChange={nextViewport => setViewport(nextViewport)}
			onClick={(e) => handleClick(e)}
			onContextMenu={handleContextMenu}
		>
			<Search setViewport={setViewport} />
			<ContextMenu
				contextMenuState={contextMenuState}
				setContextMenuState={setContextMenuState}
				setAddPinFormIsOpen={setAddPinFormIsOpen}
				latClickPos={latClickPos}
				longClickPos={longClickPos}
				xPos={xPos}
				yPos={yPos} />
			{
				pins.map((pin) => (
					<div key={pin._id}>
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
								key={pin._id}
								latitude={pin.lat}
								longitude={pin.long}
								closeButton={true}
								closeOnClick={false}
								anchor="bottom"
								className='pin-popup'
								onClose={() => setCurrentPlaceId(null)}
							>
								<h3>{pin.title}</h3>
								<p>{pin.desc}</p>
								<p>{pin.username}</p>

							</Popup>
						}
					</div>
				))
			}
		
		</ReactMapGL>
		<AddPinForm
			addPinFormIsOpen={addPinFormIsOpen}
			setAddPinFormIsOpen={setAddPinFormIsOpen} />
	</>
);
}
export default Map;