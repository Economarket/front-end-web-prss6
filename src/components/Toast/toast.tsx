import React from "react";
import { toast, TypeOptions } from "react-toastify";
import { Toast } from "react-toastify/dist/types";

const customId = "custom-id-yes";
const ToastHelper = (message: string, option: string = "default") => {
    const typeOption = resolveType(option)
    if(!toast.isActive(customId)) {
    toast(message, {
        toastId: customId,
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: typeOption,
        });
    }
}

const resolveType = (option: string) : TypeOptions => {
    switch (option){
        case "warning": return toast.TYPE.WARNING
        case "error": return toast.TYPE.ERROR; break
        case "success": return toast.TYPE.SUCCESS; break
        case "info": return toast.TYPE.INFO; break
        case "default": return toast.TYPE.DEFAULT; break
        default : return toast.TYPE.DEFAULT; break
    }
}

export default ToastHelper