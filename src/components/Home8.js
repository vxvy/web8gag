import './css/Home8.css';
import Publictn8 from "./Publictn8";
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

function Home8({url}){

    const [publicaciones, setPublicaciones] = useState([])
    const fpublis = useFetch(url+'posts')
    // setPublicaciones(fpublis || [])

    return(
        <div>
            {fpublis ? fpublis.map( p => <Publictn8 p={p} />) : 'Deberían verse las publicaciones' }
        </div>
    );
    // if(publicaciones){
    //     return (
    //         <div>
    //             {publicaciones.map( (p) => {
    //                 return(
    //                     <Publictn8 p={p}></Publictn8>
    //                 )
    //             })}
    //         </div>
    //     );
    // }
    // else{
    //     return(
    //         <div>
    //             <p>Loading...</p>
    //         </div>
    //     );
    // }
}

export default Home8