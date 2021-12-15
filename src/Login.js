import React, {useState} from 'react';
import LoginForm from './components/LoginForm';


function Login() {

    const adminUser = {
        email: "admin@gmail.com",
        password: "admin"
    }

    const [user, setUser]  = useState({email:"", password:""});
    const [error, setError]  = useState("");

    const Login = details => {
        console.log(details);

        if(details.email == adminUser.email && details.password == adminUser.password) {
            console.log('Logged IN');
        } else {
            console.log("Incorrect username or password")
        }
    }

    return (
        <div className='Login'>
            {(user.email != "")?(
                <div>
                    
                </div>
            ): (
                <LoginForm Login={Login} error={error}/>
            )};
        </div>
    );
}

export default Login;
