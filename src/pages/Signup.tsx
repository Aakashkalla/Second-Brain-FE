import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    async function signup(){
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const username = usernameRef.current?.value;

        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signup`, {
                email,
                username,
                password
        })
        navigate('/signin')
    }
    return <div className="h-screen w-screen bg-gray-500 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48">
            <Input ref={emailRef} placeholder="Email"/>
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
            
            <div className="flex justify-center p-4">
                <Button variant="primary" size="md" text="Submit" onClick={signup}/>
            </div>
        </div>
    </div>
}