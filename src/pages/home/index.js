import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '../../components/mainLayout';

export function Home(){
    const navigate= useNavigate();
    useEffect(function(){
        document.title="Welcome to home"
    },[])
    function handleClick(){
        navigate("/works")
    }
    return(
        <MainLayout>
            <p>Home</p>
            <Link to="/works">go to works</Link>
            <button onClick={handleClick}>go to works</button>
        </MainLayout>
        
    )
}
export default Home