import React, { useEffect, useState } from 'react'
// import { HiOutlineLocationMarker } from 'react-icons/hi'
import markerIcon from '../images/markerIcon.svg'
import '../styles/ContextMenu.css';

function ContextMenu(props) {

    const handleAddNewPinHere = (e) => {
        console.log('open', e)
        props.setAddPinFormIsOpen(true)
        props.setContextMenuState(false)
    }
    const closeContextMenu = (e) => {
        console.log('close', e);
        props.setContextMenuState(false)
    }

    return (
        <>

            <img
                className='markerIcon'
                src={markerIcon}
                style={{
                    top: props.yPos,
                    left: props.xPos,
                    transform: `translate(-20px, -35px)`,
                }} />
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
