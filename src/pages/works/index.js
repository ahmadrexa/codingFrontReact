import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import MainLayout from "../../components/mainLayout";

export function Works(){
    useEffect(function(){
        document.title="Works"
    },[])
    return(
        <Fragment>
            <MainLayout>
                <p>Works</p>
                <Link to="/contact-us">contact us</Link>
             </MainLayout>
        </Fragment>
    )
}
export default Works;