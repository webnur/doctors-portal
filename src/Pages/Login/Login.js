import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [logInError, setLogInError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const from = location.state?.from?.pathname || '/'

    if(token){
        navigate(from, {replace: true})
    }

    const handleLogin = data => {
        console.log(data)
        setLogInError('')
        
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setLoginUserEmail(data.email);
        
        })
        .catch(error =>{
            console.error(error)
            setLogInError(error.message)
        })

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>

            <div className='w-96 p-7 text-center'>
                <h2 className='text-xl '>Log In</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span>
                        </label>
                        <input type='text'
                         {...register("email", {required: "Email Address is required"})}
                          className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span>
                        </label>
                        <input type='password'
                            {...register("password", {
                                required: 'password is required',
                                minLength:{value: 6, message:'password must be 6 characters on longer'}
                            })}
                            className="input input-bordered w-full max-w-xs" />
                             {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password?</span>
                        </label>
                    </div>

                    <input className='btn btn-accent w-full' type="submit" />
                    <div>{logInError && <p className='text-red-600'>{logInError}</p>}</div>
                </form>
                <p>new to doctor portal <Link className='text-secondary' to='/signup'>create an account</Link></p>

                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;