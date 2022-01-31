import '../styles/PinList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function PinList() {
    const [pins, setPins] = useState([])

    useEffect(() => {
        const getPins = async () => {
            try {
                const res = await axios.get('/pins')
                setPins(res.data)
                // console.log(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getPins();
    }, [])
    return (
        <section className="PinList">
            <ol>
                {
                    pins.map((pin) => (
                        <li key={pin._id}>
                            <h2>{pin.title}</h2>
                            <p>{pin.desc}</p>
                            <p>0.5km</p>
                        </li>
                    ))
                }
            </ol>
        </section>
    );
}

export default PinList;
