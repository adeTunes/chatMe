import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    return (
        <div>
            <form onSubmit={loginUser}>
                <input
                    type="text"
                    name="username"
                    placeholder="enter username"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="enter password"
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Login;
