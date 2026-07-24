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
        <div>
            <div>

                <div>
                    <span>
                        <Logo />
                    </span>
                </div>

                <h2>SIGN IN TO UR ACCOUNT</h2>

                <p>
                    DONT HAVE A ACCOUNT?
                    <Link to="/signup">
                        Sign up
                    </Link>
                </p>

                {error && <p> className = ""
                    {error}</p>}

                <Form onSubmit={handleSubmit(login)}>

                    <Input
                        label="Email: "
                        placeholder="Enter ur email"
                        type="email"

                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid  address",
                            }
                        })}
                    />

                    <Input
                        label="Password:"
                        placeholder="password"
                        type="password"

                        {...register("password", {
                            required: true,
                        })}
                    />

                    <Button
                        type='submit'
                        className='w-full'
                    >Sign in</Button>

                </Form>


            </div>
        </div>
    )
}

export default Login