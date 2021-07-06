import './css/PubctnPage8.css'
import useFetch from '../hooks/useFetch';
import { useState } from 'react';
import Publictn8 from './Publictn8';

function PubctnPage8({url, currentPost}) {
    
    const fpublis = useFetch(url+'posts')

    if (fpublis) {
        return(
            <div>
                <p>Current post: {currentPost}</p>
                {fpublis && fpublis.filter( p => p.id === currentPost && <Publictn8  url={url} p={p}></Publictn8> )}
            </div>
        );
    }
    return(
        <div>
            <p>No carga</p>
        </div>
    );
}

export default PubctnPage8