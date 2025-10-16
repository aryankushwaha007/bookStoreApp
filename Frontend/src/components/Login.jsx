import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Login submit', data);
        // Close the dialog after successful submit
        document.getElementById('my_modal_3')?.close();
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById('my_modal_3')?.close()}
                    >
                        ✕
                    </button>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="font-bold text-lg">Login</h3>
                        {/* email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                className="border outline-none py-1  w-80 px-3 rounded-md"
                                placeholder="Enter your email"
                                {...register('email', { required: 'Email is required' })}
                            />
                            {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}
                        </div>
                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                className="border outline-none py-1  w-80 px-3 rounded-md"
                                placeholder="Enter your password"
                                {...register('password', { required: 'Password is required' })}
                            />
                            {errors.password && <p className="text-error text-sm">{errors.password.message}</p>}
                        </div>
                        {/* Login button */}
                        <div className='mt-4 flex flex-wrap items-center gap-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer'>Login</button>
                            <p>
                                Not Registered?{' '}
                                <Link
                                    to='/signup'
                                    className='underline text-blue-500 cursor-pointer ml-1'
                                    onClick={() => document.getElementById('my_modal_3')?.close()}
                                >
                                    SignUp
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login