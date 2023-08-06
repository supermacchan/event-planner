import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const NotFoundPage = ({ 
    component: Component, 
    redirectTo = '/', 
}) => {
    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setRedirect(true)
        }, 4000)
        
    }, [])
    
    return (
        redirect ? <Navigate to={redirectTo} /> : <Component />
    );
};