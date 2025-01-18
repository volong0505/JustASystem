import { AuthUser } from "./auth-user";
import { TokenStatusEnum } from '@just-a-system/util-types';

export interface AuthState {
    isLoggedIn: boolean;
    user?: AuthUser;
    accessTokenStatus: TokenStatusEnum;
    refreshTokenStatus: TokenStatusEnum;
    isLoadingLogin: boolean;
    hasLoginError: boolean;
}