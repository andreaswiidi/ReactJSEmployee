import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const saveEmployee = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/employees", {
                firstName,
                lastName,
                email,
                phoneNumber,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveEmployee}>
                    <div className="field">
                        <label className="label">FirstName</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="field" >
                        <label className="label">LastName</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="field" >
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                name="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="field" >
                        <label className="label">PhoneNumber</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="phoneNumber"
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;