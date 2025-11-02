import { useRef } from "react";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin(){
        const password = passwordRef.current?.value;
        const email = emailRef.current?.value;

        const responses = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`, {
                email,
                password
        })
        const jwt = (responses.data.token)
        localStorage.setItem("token", jwt)
        navigate('/dashboard')
        
    }
    return <div className="h-screen w-screen bg-gray-500 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48">
            <Input ref = {emailRef}placeholder="Username"/>
            <Input ref = {passwordRef} placeholder="Password"/>
            <div className="flex justify-center p-4">
                <Button variant="primary" size="md" text="Signin" onClick={signin}/>
            </div>
        </div>
    </div>
}