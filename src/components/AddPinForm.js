import '../styles/AddPinForm.css';
import { useRef, useState } from 'react';

function AddPinForm(props) {
    

    const closeAddPinForm = () => {
        console.log('cancel');
        props.setAddPinFormIsOpen(false)
    }
    
  return (
    <section className={`AddPinForm ${props.addPinFormIsOpen ? 'form-open' : '' }`}>
        <div className='form-container'>
            <form action="">
                <label htmlFor="">Name</label>
                <input 
                    type="text" 
                    name="Name" 
                    id="Name"
                    placeholder="Name of Business" />

                <label htmlFor="Description">Description</label>
                <input 
                    type="text" 
                    name="Description" 
                    id="Description"
                    placeholder="Describe your business" />
                
                <label htmlFor="Location">Location</label>
                {/* <input 
                    type="text" 
                    name="Location" 
                    id="Location"
                    ref={searchEl}
                    placeholder="Find your location" /> */}
                <input
                    type="text" 
                    name="Location" 
                    id="Location"/>

                <input type="submit" value="Add Pin" />
            </form>
            <button
                className='cancel'
                onClick={closeAddPinForm}>
                Cancel
            </button>
        </div>
    </section>
  );
}

export default AddPinForm;
