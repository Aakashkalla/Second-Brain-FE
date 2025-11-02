import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button";
import { Input } from "./Input";

export const CreateContentModel = ({open , onClose}) => {
    return (
        <div>
        {open && <div className="bg-black w-screen h-screen fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center backdrop-blur-xs backdrop-grayscale">
                <span className="bg-white opacity-100 p-4 rounded backdrop-blur-xs backdrop-grayscale">
                    <div className="flex justify-end">
                        <div className="cursor-pointer" onClick={onClose}>
                        <CrossIcon/>
                        </div>
                    </div>
                    <div className="pt-2 backdrop-blur-md">
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

