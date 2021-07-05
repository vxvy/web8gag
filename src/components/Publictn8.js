import './css/Publictn8.css'
import { NavLink } from 'react-router-dom';
import { r_post_com, r_public_id } from '../routes';
import { Route, Switch } from 'react-router-dom';
import PubctnPage8 from './PubctnPage8';
import Comment8 from './Comment8';

function Publictn8({p, url}) {
    
    const formatDate = (date) => {
        const d = new Date(date)
        return d.toString()
    }
    return(
        <>
        <div key={p.id}>
            <ul>
                <li>Date: {formatDate(p.date)}</li>
                <li><NavLink activeClassName="active" to={r_public_id(p.id)} >Title: {p.title}</NavLink></li>
                <li>Author: {p.author}</li>
                <li>ID: {p.id}</li>
                <img src={p.image} />
            </ul>
            <span><NavLink activeClassName="active" to={r_post_com(p.id)}>Añadir comentario</NavLink> | Comment amount: {p.comments}</span>
        </div>
        {/* <Switch>
            <Route path={r_public_id(p.id)} exact>
                <PubctnPage8 url={url} currentPost={p.id}/>
            </Route>
            <Route path={r_post_com(p.id)} exact>
                <Comment8 url={url} currentPost={p.id}/>
            </Route>
        </Switch> */}
        </>
    );
}

export default Publictn8