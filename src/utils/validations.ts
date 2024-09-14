// For Email validation
export const validateEmail = (email: string): boolean => {
    const regex = /\S+@\S+\.\S+/;
    return !email || regex.test(email);
};

// For Password validation
export const validatePassword = (password: string): boolean => {
    return (
        !password ||
        (password?.length >= 8 &&
            password?.length <= 15 &&
            /[A-Z]/.test(password) &&    // At least one uppercase letter
            /\d/.test(password) &&       // At least one digit
            /[@$!%*#?&]/.test(password)) // At least one special character
    );
};
