import React, { useState } from 'react'
import markerIcon from '../images/markerIcon.svg'
import '../styles/ContextMenu.css';

function ContextMenu(props) {
    const [showTempMarker, setShowTempMarker] = useState(false)

    const handleAddNewPinHere = (e) => {
        console.log('open', e)
        setShowTempMarker(true)
        props.setAddPinFormIsOpen(true)
        props.setContextMenuState(false)
    }
    const closeContextMenu = (e) => {
        console.log('close', e);
        setShowTempMarker(false)
        props.setContextMenuState(false)
    }

    return (
        <>
            {
                showTempMarker &&
                <img
                    className='markerIcon'
                    src={markerIcon}
                    alt=''
                    style={{
                        top: props.yPos,
                        left: props.xPos,
                        transform: `translate(-20px, -35px)`,
                    }} />
            }
            <ul
                className={props.contextMenuState ? 'context-menu open' : 'context-menu closed'}
                style={{ top: props.yPos, left: props.xPos }}>
                <li>
                    <button onClick={handleAddNewPinHere} >
                        Drop a pin
                    </button>
                </li>
                <li>
                    <button onClick={closeContextMenu}>
                        Cancel
                    </button>
                </li>
            </ul>
        </>
    )
}

export default ContextMenu
