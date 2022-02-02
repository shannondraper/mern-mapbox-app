import '../styles/App.css';
// import AddPinForm from './AddPinForm';
import { useState } from 'react';


function Header() {
  // const [addPinFormIsOpen, setAddPinFormIsOpen] = useState(false)
  
  const handleAddPin = () => {
    console.log('add new pin');
    // setAddPinFormIsOpen(true)
  }
  return (
    <section className="header">
        Header
        <div className="add-pin">
          {/* <button onClick={handleAddPin}>
            Add Pin
          </button> */}
          {/* <AddPinForm
            addPinFormIsOpen={addPinFormIsOpen}
            setAddPinFormIsOpen={setAddPinFormIsOpen} /> */}
        </div>
    </section>
  );
}

export default Header;
