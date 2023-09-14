import { useState } from 'react';

function useAuthForm() {
    const handleLoginClick = () => {
        console.log("Login button clicked");
    };

    const handleSignUpClick = () => {
        console.log("Sign Up button clicked");
    };

    return {
        handleLoginClick,
        handleSignUpClick
    };
}

export default useAuthForm;
