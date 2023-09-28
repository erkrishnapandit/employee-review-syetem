//env =   environment variable
//Development environment variable
const DEVELOPMENT = {
    port: 3000,
    mongodbUrl: "mongodb://127.0.0.1:27017/EMPLOYEE_REVIEW_SYSTEM_DEVELOPMENT",
    session_secret: 'abcdefgh',
    admin: {
        admin_token: '123456',
    }
};
//Production environment variable
const PRODUCTION = {};

module.exports = {
    DEVELOPMENT,
    PRODUCTION
};