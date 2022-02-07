import { Link, useNavigate } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import MainLayout from '../../components/mainLayout';
import api from '../../helpers/api';

export function Home(){
    const [dayMovies, setDayMovies]= useState([]);
    const [loading, setLoading]= useState(false);
    const navigate= useNavigate();
    useEffect(function(){
        document.title="Welcome to home"
    },[])
    useEffect(function(){
        async function getApi(){
            try {
                setLoading(true);
                const response = await api.get("movies/3/trending/movie/day?api_key=4ba2c80bd43f2892ecb3349fa445015f");
                setLoading(false);
                console.log(response.data.results);
                setDayMovies(response.data.results);
            } catch(e){
                // alert("server error");
                setLoading(false);
            }
            
            //             api
            // .get('/repos/skellock/apisauce/commits')
            // .then(response => response.data[0].commit.message)
            // .then(console.log)
            // const myResponse = await api.get("/repos...")
            // console.log(myResponse);
        }
        getApi()
    },[])
    async function handleApi(){
        try {
            setLoading(true);
            const userData = {
                "email": "miladheydari.work@gmail.com",
                "password": "123456j",
                "remember": true
              }
            const response = await api.post("auth/signin", userData );
            console.log(response);
        } catch(e){
            setLoading(false)
        }
    }
    function handleClick(){
        navigate("/works")
    }
    function renderFarm(){
        return dayMovies.map(function(item){
            return(
                <Fragment>
                <img src={`https://murmuring-tundra-31743.herokuapp.com/posters/t/p/w300_and_h450_bestv2/${item.poster_path}`} />
                <p>{item.original_title}</p>
                </Fragment>
            )
        })
    }
    return(
        <MainLayout>
            <button onClick={handleApi}>login</button>
            <div style={{display: loading ? "block" : "none"}}>در حال بارگزاری...</div>
            <p>Home</p>
            <Link to="/works">go to works</Link>
            <button onClick={handleClick}>go to works</button>
            {renderFarm()}
        </MainLayout>
        
        
    )
}
export default Home