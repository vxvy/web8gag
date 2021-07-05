import './css/PubctnPage8.css'
import { NavLink } from 'react-router-dom';
import { r_post_com, r_public_id } from '../routes';

function PubctnPage8({p}) {
    
    const formatDate = (date) => {
        const d = new Date(date)
        return d.toString()
    }
    return(
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
    );
}

export default PubctnPage8