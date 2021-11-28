import {useState} from 'react';
import axios from 'axios';

function RegisterUser(){
    localStorage.clear();
    return (
        <>
        <h1>Register User</h1>
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
                <label>User Name : :</label>
                <div>
                    <input type = "email" name = "email" placeholder = "Enter your email"
                        value = {inputs.email || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label>Password :</label>
                <div>
                    <input type = "password" name = "password" placeholder = "Enter a strong password"
                        value = {inputs.password || ''} onChange = {handleChange}
                        required></input>
                </div> 
            </div>

            <div>
                <label>Role :</label>
                <div>
                    <select name = 'role'>
                        <option>Choose one</option>
                        <option value = 'admin'>Admin</option>
                        <option value = 'doctor'>Doctor</option>
                        <option value = 'frontoffice'>Front Office</option>
                        <option value = 'labtechnician'>Lab Technician</option>
                    </select>
                </div> 
            </div>
            <input type = 'submit' ></input> &nbsp;
            <button onClick = {goToHome}>Cancel</button>

        </form>
        </>
    );

};
export default RegisterUser;