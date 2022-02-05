import { Fragment } from "react";
import Footer from "../footer";
import Header from "../header";

export function MainLayout(props){
    return(
        <Fragment>
        <Header/>
        {props.children}
        <Footer/>
        </Fragment>
    )
}
export default MainLayout;