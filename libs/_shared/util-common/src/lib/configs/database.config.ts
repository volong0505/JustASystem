import { ENV_MONGO_URI } from "@just-a-system/util-constants";

export const databaseConfig = {
    mongoUri: process.env[ENV_MONGO_URI] as string
}

