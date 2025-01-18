const envDevelopmentName = 'development';
const env = process.env.NODE_ENV || envDevelopmentName;

export const Config = {
    PORT: process.env.SERVER_PORT,
    MONGO_URI: process.env.MONGO_URI,
    CLIENT_HOST: process.env.CLIENT_HOST,
    CORS_ORIGINS: process.env.CORS_ORIGINS
}