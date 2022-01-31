import React, { useEffect, useState } from 'react'
import '../styles/ContextMenu.css';

function ContextMenu(props) {
    console.log('props', props);
    const handleAddNewPinHere = () => {

    }
    const closeContextMenu = (e) => {
        console.log('close', e);
        props.setContextMenuState(false)
    }

    return (
        <ul
            className={props.contextMenuState ? 'context-menu open' : 'context-menu closed'}
            style={{ top: props.yPos, left: props.xPos }}>
            <li>
                <button onSubmit={handleAddNewPinHere} >
                    Drop a pin
                </button>
            </li>
            <li>
                <button onClick={closeContextMenu}>
                    Cancel
                </button>
            </li>
        </ul>
    )
}

export default ContextMenu
