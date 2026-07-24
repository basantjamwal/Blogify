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
        <div>
            <div>
                <div>
                    <span>
                        <Logo />
                    </span>
                </div>
                <h2>SIGN UP TO CREATE ACCOUNT</h2>
                <p>
                    ALREADY HAVE AN ACCOUNT?
                    <Link to="/login"> Sign in </Link>
                </p>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div>
                        <Input
                            label="Name: "
                            placeholder="Enter your name"
                            {...register("name", { required: true })}
                        />
                        <Input
                            label="Email: "
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
                            label="Password:"
                            placeholder="password"
                            type="password"
                            {...register("password", { required: true })}
                        />
                        <Button type='submit' className='w-full'>Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}