import { CreateUserHandler } from "./commands/handles/create-user.handler"
import { GetListUsersHandler } from "./queries/handlers/get-list-users.handler"
import { GetUserHanler } from "./queries/handlers/get-user.handler"

export const users_commands = [
    CreateUserHandler
]

export const users_queries = [
    GetListUsersHandler,
    GetUserHanler
]