import React from 'react'
import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'

const LoginForm = () => {
    return (
        <div> <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form action="#" method="POST">
                <div className="mb-4">
                    <CustomInput
                        label="User Name"
                        showLabel={true}
                        id="username"
                        type="text"
                        name="username"
                        pleaceholder="Enter your user name"
                    />
                </div>
                <div className="mb-4">
                    <CustomInput
                        label="Email"
                        showLabel={true}
                        id="email"
                        type="email"
                        name="email"
                        pleaceholder="Enter your user email"
                    />
                </div>

                <div className="mb-4">
                    <CustomInput
                        label="Password"
                        showLabel={true}
                        id="password"
                        type="password"
                        name="password"
                        pleaceholder="Enter your password"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                    <label for="remember" className="text-gray-600 ml-2">Remember Me</label>
                </div>
                <div className="mb-6 text-blue-500">
                    <a href="#" className="hover:underline">Forgot Password?</a>
                </div>
                <CustomButton loading={false} title="Login" type="submit" className="w-full" />
            </form>
            <div className="mt-6 text-blue-500 text-center">
                <a href="#" className="hover:underline">Sign up Here</a>
            </div></div>
    )
}

export default LoginForm