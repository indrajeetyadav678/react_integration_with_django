import { useState } from "react";
import axios from "axios";

const Registration = () => {
    const [formval, setFormval] = useState({});

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormval((item) => ({ ...item, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let url = 'http://127.0.0.1:8000/signup/';
        axios.post(url, formval).then((res) => {
            alert("New Data Added Successfully");
        }).catch((error) => {
            alert("An error occurred while submitting the form");
            console.error("There was an error!", error);
        });
    }

    return (
        <>
            <div id="body">
                <div className="container">
                    <h2>Registration Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="Name"
                                value={formval.Name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="Email"
                                value={formval.Email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <textarea
                                id="address"
                                name="Address"
                                onChange={handleChange}
                                value={formval.Address}
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact:</label>
                            <input
                                type="tel"
                                id="contact"
                                name="Contact"
                                value={formval.Contact}
                                maxLength={10}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="Password"
                                value={formval.Password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Registration;
