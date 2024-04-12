import { useAppSelector } from "src/hooks/hooks";
// types
import type { GuardProps } from "src/types";

import { Login } from "./Login";
import { Register } from "./Register";

export const AuthGuard = ({ children }: GuardProps) => {
    const state = useAppSelector(s => s.auth);
    //Api call to check if user is logged in
    const loginGuard = "";
    return (
        <>
            {!loginGuard ? <Register /> : (loginGuard && !state.isLoggedIn) ? <Login /> : children}
        </>
    );
};