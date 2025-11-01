import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button";

export const CreateContentModel = ({open , onClose}) => {
    return (
        <div>
        {open && <div className="bg-slate-500 w-screen h-screen fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div className="cursor-pointer" onClick={onClose}>
                        <CrossIcon/>
                        </div>
                    </div>
                    <div className="pt-2">
                        <Input placeholder="Title"/>
                        <Input placeholder="Link"/>
                    </div>
                    <div className="flex justify-center ">
                        <Button variant="primary" size="sm" text="Submit" onClick={() => {}}/>
                    </div>
            </span>
            </div>
        </div>}
        </div>
    )
}

function Input({onChange, placeholder} : {onChange : () => void; placeholder : string}){
    return <div>
        <input type="text"  placeholder = {placeholder} className="px-4 py-2 border rounded m-2" onChange={onChange}></input>
    </div>
}