import { useEffect } from "react";
export function RenderCount(myProps){
    const {perspolis}= myProps;
    useEffect(function(){
        console.log(myProps);
    },[perspolis])
    
    return( 
        <p>{perspolis}</p>
    )
}
export default RenderCount;