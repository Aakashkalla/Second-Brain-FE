import { Button } from "../components/Button"
import { Input } from "../components/Input"

export const Signup = () => {
    return <div className="h-screen w-screen bg-gray-500 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48">
            <Input placeholder="Email"/>
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            
            <div className="flex justify-center p-4">
                <Button variant="primary" size="md" text="Submit"/>
            </div>
        </div>
    </div>
}