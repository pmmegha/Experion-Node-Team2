import {useState} from 'react';
import axios from 'axios';

function LoginForm(){
    localStorage.clear();
    return (
        <>
        <h1>Enter Login Details</h1>
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

        axios.post(`http://localhost:4000/login`, inputs)
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
                    <input type = "password" name = "password" placeholder = "Enter password"
                        value = {inputs.password || ''} onChange = {handleChange}
                        required></input>
                </div> 
            </div>

            <input type = 'submit' ></input> &nbsp;
            <button onClick = {goToHome}>Cancel</button>
            
        </form>
        </>
    );

};
export default LoginForm;