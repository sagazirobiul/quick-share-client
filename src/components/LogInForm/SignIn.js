import React from 'react';
import { useForm } from "react-hook-form";
import { loginWithEmail } from './LogInManager';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ({email, password}) => {
        loginWithEmail(email, password)
        .then(res => {
            console.log(res);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Your email" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <input type="password" placeholder="password" {...register("password", { required: true })} />
                <input type="submit" />
            </form>
        </div>
    )
};

export default SignIn;