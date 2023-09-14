import { useState } from 'react';
import axios from 'axios';

function useAuthForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const resetInputs = () => {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const handleLoginClick = async () => {
        let newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = "Invalid email format";
        }
        if (password.length < 6) {
            newErrors.password = "Password should be at least 6 characters long";
        }

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost/backend/api/login.php', {
                    email: email,
                    password: password
                });

                // Handle response
                console.log(response.data.message);
                
                // Reset inputs after successful login
                if(response.data.message === "Login successful.") { 
                    resetInputs();
                }

            } catch (error) {
                console.error("Error during login:", error);
            }
        } else {
            setErrors(newErrors);
        }
    };

    const handleSignUpClick = async () => {
        let newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = "Invalid email format";
        }
        if (password.length < 6) {
            newErrors.password = "Password should be at least 6 characters long";
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost/backend/api/signup.php', {
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                });

                // Handle response
                console.log(response.data.message);
                
                // Reset inputs after successful signup
                if(response.data.message === "User registered successfully.") { 
                    resetInputs();
                }

            } catch (error) {
                console.error("Error during sign up:", error);
            }
        } else {
            setErrors(newErrors);
        }
    };

    const clearErrors = () => {
        setErrors({});
    };

    return {
        handleLoginClick,
        handleSignUpClick,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        errors,
        setErrors,
        clearErrors,
        resetInputs
    };
}

export default useAuthForm;
