import type { ReactElement } from "react";

interface ButtonProps{
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string; 
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

const variantStyles = {
    "primary" : "bg-purple-800 text-white",
    "secondary" : "bg-purple-400 text-white"
}

const defaultStyle = "rounded-md cursor-pointer hover:bg-purple-900"

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6"
}

export const Button = (props : ButtonProps) => {

    return <button className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyles[props.size]} flex gap-1`}>
       {props.startIcon} {props.text} {props.endIcon}
        </button>
}