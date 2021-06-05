import React from 'react';
import { useForm } from "react-hook-form";
import { userLogIn } from '../../redux/actions/loginActions';
import { loginWithEmail } from './LogInManager';

const SignIn = ({dispatch, redirect}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ({email, password}) => {
        loginWithEmail(email, password)
        .then(res => {
            dispatch(userLogIn(res));
            redirect();
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" placeholder="Your email" {...register("email", { required: true })} />
                {errors.email && <span className="text-warning">This field is required</span>}
                <input className="form-control my-2" type="password" placeholder="password" {...register("password", { required: true })} />
                {errors.password && <span className="text-warning">This field is required</span>}
                <input className="btn w-100 btn-primary mb-2" type="submit" />
            </form>
        </div>
    )
};

export default SignIn;