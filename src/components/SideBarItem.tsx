import type { ReactElement } from "react";

export const SideBarItem = ({text, icon} : {text : string; icon : ReactElement}) =>{
    return <div className="flex items-center pl-6 gap-5 pt-3 cursor-pointer hover:bg-slate-400 transition rounded max-w-40">
        {icon} {text}
    </div>
}