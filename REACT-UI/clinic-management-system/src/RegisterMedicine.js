import {useState} from 'react';
import axios from 'axios';

function RegisterMedicine(){
    localStorage.clear();
    return (
        <>
        <h1>Register Medicine</h1>
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
                <label>Medicine Name :</label>
                <div>
                    <input type = "text" name = "med_name" placeholder = "Enter medicine name"
                        value = {inputs.med_name || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label>Medicine Company :</label>
                <div>
                    <input type = "text" name = "company_name" placeholder = "Enter company name"
                        value = {inputs.company_name || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label>Amount :</label>
                <div>
                    <input type = "text" name = "amount" placeholder = "Enter amount"
                        value = {inputs.amount || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label>Manufacturing Date :</label>
                <div>
                    <input type = "date" name = "date_of_manu"
                        value = {inputs.date_of_manu || ''} onChange = {handleChange}
                        required></input>
                </div> 
            </div>

            <div>
                <label>Expiry Date :</label>
                <div>
                    <input type = "date" name = "date_of_exp"
                        value = {inputs.date_of_exp || ''} onChange = {handleChange}
                        required></input>
                </div> 
            </div>

            <div>
                <label>Medicine Dosage :</label>
                <div>
                    <input type = "text" name = "dosage" placeholder = "Enter dosage"
                        value = {inputs.dosage || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <input type = 'submit' ></input> &nbsp;
            <button onClick = {goToHome}>Cancel</button>
        </form>
        </>
    );

};
export default RegisterMedicine;