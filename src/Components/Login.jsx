import { useState } from "react"
import { Link } from "react-router-dom"
import { validationLogins } from "../middlewares/loginValidation"

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    // Initialize errors state with an empty object
    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validationLogins(values));
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className="bg-white p-3 rounded">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><strong>Email</strong> </label>
                        <input onChange={handleInput} type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
                        {errors.email && <span className="text-danger ">{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input onChange={handleInput} type="password" className="form-control" id="password" name="password" placeholder="Enter password" />
                        {errors.password && <span className="text-danger ">{errors.password}</span>}
                    </div>
                    <button type="submit" className="btn btn-success w-100">Log in </button>
                    <p>You agree on our terms and conditions</p>
                    <Link to="/signup" className="btn btn-default border w-100">Create an Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
