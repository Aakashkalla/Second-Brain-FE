import type { ReactElement } from "react";

interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string; 
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    loading? : boolean
}

const variantStyles = {
    "primary" : "bg-purple-800 text-white",
    "secondary" : "bg-purple-400 text-white"
}

const defaultStyle = "rounded-md cursor-pointer hover:bg-purple-900 flex gap-2 items-center"

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6"
}

export const Button = (props : ButtonProps) => {

    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyles[props.size]} ${props.loading ? "bg-purple-400" : ""}`}>
       {props.startIcon} {props.text} {props.endIcon}
        </button>
}