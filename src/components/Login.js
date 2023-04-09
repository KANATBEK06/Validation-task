import React from 'react';
import useInput from './UI/Validation'
import classes from './Login.module.css'

const Login = () => {
    const setting= useInput('')
    const email = useInput('')
    const password = useInput('')
    return (
        <>
            <form onSubmit={setting.submitHandler} className={classes.form_email}>
                <h1>Exercise</h1>
                <div className={`${classes.current} ${
                    email.emailisValid === false && classes.after
                }`}>
                <input
                    onChange={email.emailChangeHandler}
                    onBlur={email.validEmailHandler}
                    value={email.value}
                    className={classes.email}
                    type='email'
                    placeholder='Enter your email....' />
                    {email.emailisValid === false && <div className={classes.input_vld}>email wrong</div>}
                </div>
                <div className={`${classes.current} ${
                    password.passwordValid === false && classes.after
                }`}>
                <input
                onChange={password.passwordChangeHandler}
                    onBlur={password.validPasswordHandler}
                    value={password.value}
                    className={classes.password}
                    type='password'
                    placeholder='Enter your password....' />
                    {password.passwordValid === false && <div className={classes.input_vld}>password wrong</div>}
                </div>
                <button disabled={setting.inputValid} className={classes.form_btn}>Registration</button>
            </form>
        </>
    );
};

export default Login;