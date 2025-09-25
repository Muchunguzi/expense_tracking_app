import React from "react";

const Login = () => {
    return (
    <div className="login">
    <form>
        <label for="password">Enter password:</label><br/>
        <input id="password" type="password" /><br />
        <button className="btn btn-primary" type="submit">Start</button>
    </form>
    </div>
    );
}

export default Login;