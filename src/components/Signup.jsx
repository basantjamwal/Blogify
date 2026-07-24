import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Logo, Input } from './index'

export default function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const create = async (data) => {
        setError("")
        try {
            const session = await authService.createAccount(data)
            if (session) {
                const currentUser = await authService.getCurrentUser()
                if (currentUser) {
                    dispatch(authLogin(currentUser))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="bg-white w-full max-w-md flex flex-col justify-center items-center rounded-2xl p-8 mx-auto text-black shadow-2xl my-6">
    <div className="flex flex-col items-center gap-y-6 w-full max-w-sm">

        <div className='shadow-2xl rounded-full'>
            <Logo />
        </div>

        <h2 className="text-xl font-bold">SIGN UP TO CREATE ACCOUNT</h2>
        <p className='text-sm'>
            ALREADY HAVE AN ACCOUNT?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link>
        </p>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <form onSubmit={handleSubmit(create)} className="w-full">
            <div className="flex flex-col gap-y-4">
                <Input
                    placeholder="Enter your name"
                    {...register("name", { required: true })}
                />
                <Input
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                        }
                    })}
                />
                <Input
                    placeholder="password"
                    type="password"
                    {...register("password", { required: true })}
                />
                <Button type='submit' className='w-full '>Create Account</Button>
            </div>
        </form>
    </div>
</div>
    )
}