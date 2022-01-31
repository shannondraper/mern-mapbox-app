import React, { useState } from 'react'

export const MapLocationContext = React.createContext({
    latitude: 43.642514,
	longitude: -79.387071,
    setCoodinates: () => {}
})

export const MapLocationContextProvider = (props) => {

  const setCoodinates = (coordinates) => {
    setState({...state, coordinates: coordinates})
  }

  const initState = {
    latitude: 43.642514,
	longitude: -79.387071,
    setCoodinates: setCoodinates
  } 

  const [state, setState] = useState(initState)

  return (
    <MapLocationContext.Provider value={state}>
      {props.children}
    </MapLocationContext.Provider>
  )
}