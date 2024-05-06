import { Link } from "react-router-dom"
import axios from "axios"
import { validationSignup } from "../middlewares/signupValdidations"
import { useState } from "react";
const Signup = ()=>{
   const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""   
   })

    // Initialize errors state with an empty object
    const [errors, setErrors] = useState({});

    /*const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }*/
    const handleInput = (e) => {
        const { name, value } = e.target;
        console.log(name, value); // Log the field name and value
        setValues(prev => ({ ...prev, [name]: value }));
    }
    
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validationSignup(values);
        setErrors(formErrors);
    
        // Check if there are no errors in any field
        if (Object.values(formErrors).every(error => error === "")) {
            axios.post("http://localhost:8000/signup", values)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className="bg-white p-3 rounded ">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" 
                        className="form-label">
                        <strong>Email</strong> 
                        </label>
                        <input //email
                        onChange={handleInput} 
                        type="email" 
                        className="form-control" 
                         name="email" placeholder="Enter Email" />  
                        {errors.email && <span className="text-danger">{errors.email}</span>}                      
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"><strong>User Name</strong> 
                        </label>
                        <input //name
                        onChange={handleInput} 
                        type="text" className="form-control"                          
                        name="name" placeholder="Enter Username" />    
                         {errors.name && <span className="text-danger">{errors.name}</span>}   

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><strong>Password</strong>
                        </label>
                        <input //password
                        placeholder="Enter Password"
                        onChange={handleInput} 
                        type="password" 
                        className="form-control" 
                         name="password" />                           
                         {errors.password && <span className="text-danger">{errors.password}</span>}                        
                    </div>
                    <button type="submit" className="btn btn-success w-100">Sign Up </button>
                    <p>You agree on our terms and conditions</p>
                    <Link to ="/login"  className="btn btn-default border w-100">Login</Link>
                </form>
            </div>
        </div>
    )
}
export default Signup