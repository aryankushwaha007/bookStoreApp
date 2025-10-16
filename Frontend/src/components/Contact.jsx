import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log('Contact form submitted', data);
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 dark:from-base-200/70 dark:to-base-300/50">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Left: Intro */}
                    <div className="card bg-base-100/80 backdrop-blur-sm shadow-xl border border-base-200">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Get in touch</h1>
                            <p className="text-base-content/70">
                                We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
                            </p>
                            <div className="divider my-2" />
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    {/* Mail icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                                    <span>contact@bookstore.example</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    {/* Phone icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a2 2 0 011.789 1.106l1.122 2.243a2 2 0 01-.45 2.326l-1.516 1.516a16 16 0 006.364 6.364l1.516-1.516a2 2 0 012.326-.45l2.243 1.122A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1A18 18 0 013 5z" /></svg>
                                    <span>+1 (555) 123-4567</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    {/* Location icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11zm0 0c-4 0-7 3-7 7 0 .667.333 2 1 2h12c.667 0 1-1.333 1-2 0-4-3-7-7-7z" /></svg>
                                    <span>123 Main St, City, Country</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="card bg-base-100/80 backdrop-blur-sm shadow-xl border border-base-200">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="card-title text-2xl">Send a message</h2>

                            <label className="form-control w-full">
                                <div className="label"><span className="label-text">Name</span></div>
                                <div className="flex flex-col gap-2">
                                    {/* User icon */}
                                    <span className="inline-flex items-center text-base-content/70">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 opacity-70 mr-2"><path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.75 20.1a8.25 8.25 0 0116.5 0 .9.9 0 01-.9.9H4.65a.9.9 0 01-.9-.9z" clipRule="evenodd" /></svg>
                                        Enter your full name
                                    </span>
                                    <input type="text" className="input input-bordered w-full" placeholder="Your name" {...register('name', { required: 'Name is required' })} />
                                </div>
                                {errors.name && <span className="text-error text-sm mt-1">{errors.name.message}</span>}
                            </label>

                            <label className="form-control w-full mt-2">
                                <div className="label"><span className="label-text">Email</span></div>
                                <div className="flex flex-col gap-2">
                                    {/* Mail icon */}
                                    <span className="inline-flex items-center text-base-content/70">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 opacity-70 mr-2"><path d="M1.5 8.67v6.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-9.27 5.15a3 3 0 01-2.46 0L1.5 8.67z" /><path d="M22.5 6.75V6a3 3 0 00-3-3h-15a3 3 0 00-3 3v.75l9.75 5.42a1.5 1.5 0 001.5 0L22.5 6.75z" /></svg>
                                        We’ll reply to this address
                                    </span>
                                    <input type="email" className="input input-bordered w-full" placeholder="you@example.com" {...register('email', { required: 'Email is required' })} />
                                </div>
                                {errors.email && <span className="text-error text-sm mt-1">{errors.email.message}</span>}
                            </label>

                            <label className="form-control w-full mt-2">
                                <div className="label"><span className="label-text">Message</span></div>
                                <textarea className="textarea textarea-bordered h-36 resize-none" placeholder="Write your message here..." {...register('message', { required: 'Message is required' })} />
                                {errors.message && <span className="text-error text-sm mt-1">{errors.message.message}</span>}
                            </label>

                            <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
                        </form>
                    </div>
                </div>

                {/* Toast */}
                {submitted && (
                    <div className="toast toast-top toast-end">
                        <div className="alert alert-success">
                            <span>Thanks! Your message has been sent.</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Contact

