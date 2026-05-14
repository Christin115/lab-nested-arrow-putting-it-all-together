function createLoginTracker(userInfo) {

    let attemptCount = 0;

    // Inner arrow function
    const login = (passwordAttempt) => {

        // Lock account AFTER 3 failed attempts
        if (attemptCount >= 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Increment attempts
        attemptCount++;

        // Successful login
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        // Failed login
        return `Attempt ${attemptCount}: Login failed`;
    };

    return login;
}
    
    module.exports = {
      ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
    };  