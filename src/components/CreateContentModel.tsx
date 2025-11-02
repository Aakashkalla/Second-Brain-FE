import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button";
import { Input } from "./Input";
import api from "../utils/api";
import { useRef, useState } from "react";

enum ContentModel{
    Youtube = "youtube",
    Twitter = "twitter"
}

export const CreateContentModel = ({open, onClose} : {open : boolean, onClose : () => void}) => {
    const [type, setType] = useState(ContentModel.Youtube)

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const tagRef = useRef<HTMLInputElement>(null);
    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const tags = tagRef.current?.value;
        await api.post('/api/v1/user/content', {
            title,
            link,
            tags
        })
        onClose()
    } 
    return (
        <div>
        {open && <div>
            <div className="bg-slate-500 w-screen h-screen fixed top-0 left-0 opacity-60 flex justify-center">
            
            </div>
            
            <div className=" w-screen h-screen fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center ">
                <span className="bg-white opacity-100 p-4 rounded ">
                    <div className="flex justify-end">
                        <div className="cursor-pointer" onClick={onClose}>
                        <CrossIcon/>
                        </div>
                    </div>
                    <div className="pt-2 backdrop-blur-md">
                        <Input ref={titleRef} placeholder="Title"/>
                        <Input ref={linkRef} placeholder="Link"/>
                        <Input ref={tagRef} placeholder="Tag"/>
                    </div>
                    <div>
                        <h2 className="flex justify-center">Type of Content</h2>
                        <div className="flex justify-center items-center gap-4 p-2">
                        <Button text="Youtube" size="md" variant={type===ContentModel.Youtube ? "primary" : "secondary"} onClick={()=>setType(ContentModel.Youtube)}/>
                        <Button text="Twitter" size="md" variant={type===ContentModel.Twitter ? "primary" : "secondary"} onClick={()=>setType(ContentModel.Twitter)} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button  variant="primary" size="sm" text="Submit" onClick={addContent}/>
                    </div>
                </span>
            </div>
            </div>
        </div>}
        
        </div>
    )
}

