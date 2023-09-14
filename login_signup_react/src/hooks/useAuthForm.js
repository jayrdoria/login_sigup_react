import { useState } from 'react';

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

    const handleLoginClick = () => {
        let newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = "Invalid email format";
        }
        if (password.length < 6) {
            newErrors.password = "Password should be at least 6 characters long";
        }

        if (Object.keys(newErrors).length === 0) {
            console.log("Login button clicked");
        } else {
            setErrors(newErrors);
        }
    };

    const handleSignUpClick = () => {
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
            console.log("Sign Up button clicked");
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
