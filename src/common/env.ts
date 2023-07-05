import * as dotenv from 'dotenv';

export const env = {
    node: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
    isDevelopment: process.env.NODE_ENV === 'development',
    mongoURI: process.env.DATABASE_URL,
    "sessionSecret": "somethingRandom",
    "adminClient":"localhost:4000",
}
