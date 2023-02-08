import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
    Container,
} from "@mui/material";
import "./Form.css"
import { useNavigate } from "react-router-dom";

const Form: React.FC = () => {
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem("userName", userName);
        localStorage.setItem("phoneNumber", phoneNumber);
        localStorage.setItem("email", email);
        if (userName && phoneNumber && email) {
            navigate("/welcome");
        }
        else {
            alert("Enter all Details First!");
        }
    };

    return (
        <Container maxWidth="sm">
            <div className="formContainer">
                <Box mt={5} p={5}>
                    <Typography variant="h5" style={{ textAlign: "center" }} className="heading">Enter your details:-</Typography>
                    <form onSubmit={handleSubmit}>
                        <Box mt={3}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                fullWidth
                            />
                        </Box>
                        <Box mt={3}>
                            <TextField
                                label="Phone Number"
                                variant="outlined"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                fullWidth
                            />
                        </Box>
                        <Box mt={3}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                            />
                        </Box>
                        <Box mt={3}>
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </div>
        </Container>
    );
};

export default Form;
