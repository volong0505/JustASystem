const envDevelopmentName = 'development';
const env = process.env.NODE_ENV || envDevelopmentName;

export const Config = {
    PORT: process.env.PORT || 3333,
    MONGO_URI: process.env.MONGO_URI,
    CLIENT_HOST: process.env.CLIENT_HOST
}