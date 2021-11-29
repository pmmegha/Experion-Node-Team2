import {useState} from 'react';
import axios from 'axios';

function RegisterMedicine(){
    localStorage.clear();
    return (
        <>
        <h1>Patient Appointment</h1>
        <MyForm/>
        </>
    );
}

function MyForm(props){
    const [inputs, setInputs] = useState({});

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}))
    };

    function handleSubmit(event){
        event.preventDefault();
        console.log(inputs);

        axios.post(`http://localhost:4000/register`, inputs)
            .then(response => { 
                localStorage.setItem('mytoken', response.data.accessToken)         
            })
            .catch(error =>{
                localStorage.clear();
                if(error.response){
                    alert(error.response.data)  //=> response payload
                }
            })
    };

    function goToHome(){
        window.location = '/';
    }

    return(
        <>
        <form onSubmit = {handleSubmit}>
        <div>
                <label>Patient Name :</label>
                <div>
                    <input type = "text" name = "pat_name" placeholder = "Enter patient name"
                        value = {inputs.pat_name || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label>Doctor Name :</label>
                <div>
                    <input type = "text" name = "doctor_name" placeholder = "Enter doctor name"
                        value = {inputs.doctor_name || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label>Appointment Date :</label>
                <div>
                    <input type = "date" name = "appointment_date" placeholder = "Enter amount"
                        value = {inputs.appointment_date || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label>Appintment Time :</label>
                <div>
                    <input type = "time" name = "appointment_time" min="09:00" max="18.00"
                        value = {inputs.appointment_time || ''} onChange = {handleChange}
                        required></input>
                        <small>Clinic hours are 9am to 6pm</small>
                </div> 
            </div>

           
          

            <input type = 'submit' ></input> &nbsp;
            <button onClick = {goToHome}>Cancel</button>
        </form>
        </>
    );

};
export default RegisterMedicine;