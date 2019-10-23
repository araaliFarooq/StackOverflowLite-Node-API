const dotenv = require("dotenv");

dotenv.config();

const configurations = Object.freeze({
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    FACEBOOK_AUTH_URL: process.env.FACEBOOK_AUTH_URL,
    GOOGLE_AUTH_URL: process.env.GOOGLE_AUTH_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    JWTSECRETKEY: process.env.JWTSECRETKEY,
    ACTIVATION_URL: process.env.ACTIVATION_URL
});

export default configurations;
