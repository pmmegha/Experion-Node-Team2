import {useState} from 'react';
import axios from 'axios';

function RegisterPatient(){
    localStorage.clear();
    return (
        <>
        <h1>Register Staff</h1>
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
                <label>Full Name :</label>
                <div>
                    <input type = "text" name = "full_name" placeholder = "Enter full name"
                        value = {inputs.full_name || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label>Date of Birth :</label>
                <div>
                    <input type = "date" name = "date_of_birth"
                        value = {inputs.date_of_birth || ''} onChange = {handleChange}
                        required></input>
                </div> 
            </div>   

            <div>
                <label>Gender :</label>
                <div>
                    <input type = "radio" name = "gender"
                        value = {inputs.gender || ''} onChange = {handleChange}
                        required></input>
                    <label>Male</label>
                    <input type = "radio" name = "gender"
                        value = {inputs.gender || ''} onChange = {handleChange}
                        required></input>
                    <label>Female</label>
                </div> 
            </div>

            <div>
                <label>Address :</label>
                <div>
                    <input type = "text" name = "address" placeholder = "Enter Address"
                        value = {inputs.address || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label>Phone :</label>
                <div>
                    <input type = "text" name = "phoneno" placeholder = "Enter phone number"
                        value = {inputs.phoneno || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label>Blood Group :</label>
                <div>
                    <select name = 'bloodgroup'>
                        <option>Choose one</option>
                        <option value = 'a+'>A+</option>
                        <option value = 'a-'>A-</option>
                        <option value = 'b+'>B+</option>
                        <option value = 'b-'>B-</option>
                        <option value = 'o+'>O+</option>
                        <option value = 'o-'>O-</option>
                        <option value = 'ab+'>AB+</option>
                        <option value = 'ab-'>AB-</option>
                    </select>
                </div> 
            </div>

            <input type = 'submit' ></input> &nbsp;
            <button onClick = {goToHome}>Cancel</button>
        </form>
        </>
    );

};
export default RegisterPatient;