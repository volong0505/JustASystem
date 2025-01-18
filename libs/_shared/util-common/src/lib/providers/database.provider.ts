import * as mongoose from 'mongoose';
import { ENV_MONGO_URI } from '@just-a-system/util-constants';

export const databaseProviders = [
    {
        provide: 'MONGO_CONNECTION',
        useFactory: (): Promise<typeof mongoose> => 
            mongoose.connect(process.env[ENV_MONGO_URI] as string)
    }
]