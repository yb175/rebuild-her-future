import { useState } from "react";

function Form(){

    // initialising the form
    const [formData,setFormData]= useState({
        name: '',
        contact : '',
        location : '',
        urgency : 'high',
        description : '',
        evidence : null 
    })

    // Function to handle changes
    const handleClick = (e)=>{

        // As we know that react will not update the state directly because form is not a primitive data type and react will not update the state directly
        const newForm = {...formData}
        if(e.target.name === 'sos' ){
            newForm[e.target.name] = e.target.checked ;
        }
        else if(e.target.name === 'moderate'){
            newForm[e.target.name] = e.target.checked; 
        }
        else{
            newForm[e.target.name] = e.target.value ; 
        }
        setFormData(newForm)
    }
    return (
        <div id="form-container">
            <h1>Report Domestic Violence</h1>
            <form>
                <label>Full Name</label>
                <input type="text" name="Full Name" placeholder="Enter your Full Name" onChange={handleClick} />
                <label>Contact</label>
                <input type="text" name="Contact" placeholder="Enter your Contact" onChange={handleClick} />
                <label>Location</label>
                <input type="text" name="location" placeholder="Enter your Location" onChange={handleClick} />
                <label>Description</label>
                <input type="text" name="description" placeholder="Enter your description" onChange={handleClick} />
                <label>Upload Evidence(Optional)</label>
                <input type="file" name="evidence" placeholder="Upload Evidence" onChange={handleClick} />
                <div className="checkbox-group">
                <input type="checkbox" name="sos" onChange={handleClick} />
                <label>SOS Support</label>
            </div>

            <div className="checkbox-group">
                <input type="checkbox" name="moderate" onChange={handleClick} />
                <label>Moderate Support</label>
            </div>
            </form>
        </div>
    )
}

export default Form ;