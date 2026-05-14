

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};  
function createLoginTracker(userInfo) {

    let attemptCount = 0;

    const login = (passwordAttempt) => {

        if (attemptCount >= 3) {
            return "Account locked. Too many failed login attempts.";
        }

        if (passwordAttempt === userInfo.password && attemptCount < 3) {
            attemptCount = 0; 
            return `Welcome, ${userInfo.username}! Login successful.`;
        } else {

            attemptCount++;

            if (attemptCount >= 3) {
                return "Account locked. Too many failed login attempts.";
            }

            return `Login failed. Attempt ${attemptCount} of 3.`;
        }
    };

    return login; 
}
 
const user = {
    username: "user1",
    password: "password123"
};

const userLogin = createLoginTracker(user);

console.log(userLogin("wrongpass"));
console.log(userLogin("wrongpass"));
console.log(userLogin("password123"));
console.log(userLogin("wrongpass"));

