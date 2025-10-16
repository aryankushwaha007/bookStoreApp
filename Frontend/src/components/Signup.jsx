import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Login from './Login'

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Signup submit', data);
        // Close the dialog after successful submit
        document.getElementById('my_modal_3')?.close();
    };
    return (
        <>
            <div className='min-h-screen flex items-center justify-center bg-base-200'>
                <div className="card w-full max-w-md bg-base-100 shadow">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">Sign Up</h3>
                            <Link to="/" className="btn btn-sm btn-ghost">✕</Link>
                        </div>
                        {/* Name */}
                        <label className='form-control w-full mt-2'>
                            <span className='label-text'>Name</span>
                            <input type="text" className="input input-bordered w-full" placeholder="Enter your name" {...register('name', { required: 'Name is required' })} />
                            {errors.name && <p className="text-error text-sm">{errors.name.message}</p>}
                        </label>
                        {/* Email */}
                        <label className='form-control w-full mt-2'>
                            <span className='label-text'>Email</span>
                            <input type="email" className="input input-bordered w-full" placeholder="Enter your email" {...register('email', { required: 'Email is required' })} />
                            {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}
                        </label>
                        {/* Password */}
                        <label className='form-control w-full mt-2'>
                            <span className='label-text'>Password</span>
                            <input type="password" className="input input-bordered w-full" placeholder="Enter your password" {...register('password', { required: 'Password is required' })} />
                            {errors.password && <p className="text-error text-sm">{errors.password.message}</p>}
                        </label>
                        <div className='mt-4 flex flex-wrap items-center gap-4'>
                            <button type="submit" className='btn btn-primary'>Sign Up</button>
                            <p className='text-sm'>Already registered? <button className='link link-primary ml-1' onClick={() => document.getElementById('my_modal_3')?.showModal()}>Login</button></p>
                        </div>
                    </form>
                    <Login />
                </div>
            </div>
        </>
    )
}

export default Signup