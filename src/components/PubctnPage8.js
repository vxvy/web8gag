import './css/PubctnPage8.css'
import useFetch from '../hooks/useFetch';
import { useState } from 'react';
import Publictn8 from './Publictn8';

function PubctnPage8({url, currentPost}) {
    
    const fpublis = useFetch(url+'posts')

    return(
        <div>
            {fpublis && fpublis.filter( p => p.id === <Publictn8  url={url} p={currentPost}></Publictn8> )}
        </div>
    );
}

export default PubctnPage8