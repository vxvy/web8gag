import { useState } from 'react';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { useUser } from '../hooks/UserContext';
import { r_public_id } from '../routes';
import './css/PostPubctn8.css'

const PostPubctn8 = ({url, currentPost, setCurrentPost}) => {
    const [usr] = useUser()
    const history = useHistory()
    const [postData, setPostData] = useState({
        image: '',
        title:''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(usr.token){
            const response = await fetch(url+'posts',{
                method:'POST',
                body: JSON.stringify(postData),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + usr.token
                },
                token: usr.token
            })
            const data = await response.json()
            if(data && response.ok){
                // console.log(data);
                setCurrentPost(data.id)
                history.push(r_public_id(currentPost))
                //duda: cómo obtener la id de la publicación que acabo de hacer en el history
                //probablemente debería crea un state
            }
        }
    }

    const updateValue = e => setPostData({...postData, [e.target.name]:e.target.value})

    if(!usr){
        return <Redirect to="/login" />
    }else{
        return(
            <>
                {/* <div>{JSON.stringify(usr.token)}</div> */}
                <form onSubmit={handleSubmit}>
                    <label>
                        Title: 
                        <input type="text" name="title" onChange={updateValue}  />
                    </label>
                    <label>
                        Img url: 
                        <input type="text" name="image" onChange={updateValue}  />
                    </label>
                    <button>Go</button>
                </form>
            </>
        );
    }
}

export default PostPubctn8