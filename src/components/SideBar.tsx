import { BrainIcon } from "../icons/BrainIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SideBarItem } from "./SideBarItem"

export const SideBar = () => {
    return <div className="h-screen bg-white border-r  w-72 fixed left-0 top-0 text-gray-700">
        <div className="flex text-2xl items-center">
            <BrainIcon/>
            Second Brain
        </div>
        <div className="pl-4">
        <SideBarItem text="Twitter" icon={<TwitterIcon/>}/>
        </div>
        <div className="pl-3">
        <SideBarItem  text="Youtube" icon={<YoutubeIcon/>}/>
        </div>
    </div>
} 