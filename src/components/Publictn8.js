import './css/Publictn8.css'
import { NavLink } from 'react-router-dom';
import { r_post_com, r_public_id } from '../routes';
import { Route, Switch } from 'react-router-dom';
import PubctnPage8 from './PubctnPage8';
import Comment8 from './Comment8';

function Publictn8({p, url, currentPost, setCurrentPost}) {
    
    const formatDate = (date) => {
        const d = new Date(date)
        return d.toString()
    }

    const setPost = () => {setCurrentPost(p.id)}

    if(p){
        return(
            <>
                <div key={p.id}>
                    <ul>
                        <li>Date: {formatDate(p.date)}</li>
                        <li><NavLink activeClassName="active" to={`posts/${currentPost}`} onClick={() => setCurrentPost(p.id)}>Title: {p.title}</NavLink></li>
                        <li>Author: {p.author}</li>
                        <li>ID: {p.id}</li>
                        <img src={p.image} />
                    </ul>
                    <span><NavLink activeClassName="active" to={`posts/${currentPost}/comments`} onClick={() => setCurrentPost(p.id)}>Añadir comentario</NavLink> | Comment amount: {p.comments}</span>
                </div>
                <Switch>
                    <Route path={`posts/${currentPost}`} exact>
                        <PubctnPage8 url={url} currentPost={currentPost}/>
                    </Route>
                    <Route path={`posts/${currentPost}/comments`} exact>
                        <Comment8 url={url} currentPost={currentPost}/>
                    </Route>
                </Switch>
            </>
        );
    }
}

export default Publictn8