import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { Form, Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Logo, Input } from './index'


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("")

        try {
            const session = await authService.login(data)

            if (session) {
                const userData = await authService.getCurrentUser()

                if (userData) {
                    dispatch(authLogin(userData))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="bg-white w-1/3 flex justify-center items-center rounded-2xl p-8 mx-auto text-black shadow-2xl my-6">
            <div className="flex flex-col items-center gap-y-6 w-full max-w-sm">

                <div className='shadow-2xl rounded-full'>
                    <Logo />
                </div>

                <h2 className="text-xl font-bold">Log into Blogify</h2>

                <p className="text-sm">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>

                {error && (
                    <p className="text-red-600 font-medium">{error}</p>
                )}

                <Form onSubmit={handleSubmit(login)} className="w-full flex flex-col gap-y-4 ">
                    <Input
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be valid",
                            },
                        })}
                    />

                    <Input
                        placeholder="Password"
                        type="password"
                        {...register("password", { required: true })}
                    />

                    <Button type="submit" className=" bg-blue-600 text-white py-2 w-auto">
                        Sign in
                    </Button>
                </Form>
            </div>
        </div>

    )
}

export default Login