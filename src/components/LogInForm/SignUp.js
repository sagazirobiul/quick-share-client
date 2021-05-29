import React from 'react';
import { useForm } from "react-hook-form";
import { createAccount } from './LogInManager';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = ({email, password}) => {
        createAccount(email, password)
        .then(res => {
            console.log(res);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Your name" {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
                <input placeholder="Your email" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <input type="password" placeholder="password" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default SignUp;