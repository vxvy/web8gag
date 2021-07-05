import './css/Publictn8.css'

function Publictn8({p}) {
    return(
        <div key={p.id}>
            {JSON.stringify(p)}
        </div>
    );
}

export default Publictn8