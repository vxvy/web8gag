import './css/Home8.css';
import Publictn8 from "./Publictn8";
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

function Home8({url}){

    const fpublis = useFetch(url+'posts')
    const [publicaciones, setPublicaciones] = useState(fpublis || '')
    
    return(
        <div>
            <p>{publicaciones ? JSON.stringify(publicaciones) : 'Deberían verse las publicaciones'}</p>
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