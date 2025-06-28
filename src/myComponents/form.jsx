import { useState } from "react";
import Message from "./message";
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
        if(e.target.value === 'sos' ){
            newForm[e.target.name] = e.target.checked ;
        }
        else if(e.target.value === 'moderate'){
            newForm[e.target.name] = e.target.checked; 
        }
        else{
            newForm[e.target.name] = e.target.value ; 
        }
        setFormData(newForm)
    }
    const [showMessage, setShowMessage] = useState(false); 
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log(formData); // You can send this data to backend
        setShowMessage(true);
    };
    return (
        <div id="form-container">
            <h1>Report Domestic Violence</h1>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input type="text" name="Full Name" placeholder="Enter your Full Name" onChange={handleClick} required/>
                <label>Contact</label>
                <input type="text" name="Contact" placeholder="Enter your Contact" onChange={handleClick} required/>
                <label>Location</label>
                <input type="text" name="location" placeholder="Enter your Location" onChange={handleClick} required/>
                <label>Description</label>
                <input type="text" name="description" placeholder="Enter your description" onChange={handleClick} required/>
                <label>Upload Evidence(Optional)</label>
                <input type="file" name="evidence" placeholder="Upload Evidence" onChange={handleClick} />
                <div className="checkbox-group">
                <input type="radio" name="emergency" onChange={handleClick} value={"sos"} required/>
                <label>SOS Support</label>
            </div>

            <div className="checkbox-group">
                <input type="radio" name="emergency" onChange={handleClick} value={"moderate"} required/>
                <label>Moderate Support</label>
            </div>

            <button type="submit" id="donate" >Submit</button>
            </form>
            {showMessage && <Message />}
        </div>
    )
}

export default Form ;