// Making The user model Global : So that it can be accessed by all the routes 
import {users} from '@prisma/client'

export{};

declare global{
    namespace Express {
        interface Request {
            users?: users;
        }
    }
}