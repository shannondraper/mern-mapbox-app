import { Popup } from 'react-map-gl';
import '../styles/App.css';

function PinPopup(pin) {
    return (
        <Popup
            latitude={pin.lat}
            longitude={pin.long}
            closeButton={true}
            closeOnClick={false}
            anchor="bottom"
            className='pin-popup'
        >
            <h3>{pin.title}</h3>
            <p>
                {pin.desc}
            </p>
            <p>{pin.username}</p>

        </Popup>
    )
}

export default PinPopup;