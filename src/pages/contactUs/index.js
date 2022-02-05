import { Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "../../components/mainLayout";
export function ContactUs(){
    useEffect(function(){
        document.title="info"
    },[])
    return(
        <MainLayout>
        <p>contact us</p>
        <Link to="/">go to home</Link>
        </MainLayout>
    )
} 
export default ContactUs;