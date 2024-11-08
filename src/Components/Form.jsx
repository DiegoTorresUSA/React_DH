import '../App.css'
import Card from './Card.jsx';
import React, { useState } from 'react';



const Form = () => {
    
    const [usuario, setUsuario] = useState({
        tipodocumento: "",
        documento: "",
    });

    const [mostrar, setMostrar] = useState(false);
    const [err, setError] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        if(usuario.tipodocumento.trim().length < 3 || 
        usuario.documento.trim().length < 6 )
        {
            setError(true);
            setMostrar(false);
        }else{
            setError(false);
            setMostrar(true);
        }
    };
  return (
    <div>
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <label className="label">Tipo de Documento</label>
                <input 
                    type="text" 
                    value={usuario.tipodocumento} 
                    onChange={e => setUsuario({...usuario, tipodocumento: e.target.value})} 
                    placeholder="Documento"
                    className="input" 
                />
            </div>
            <div className="form-group">
                <label className="label">No. de Documento</label>
                <input 
                    type="text" 
                    value={usuario.documento} 
                    onChange={e => setUsuario({...usuario, documento: e.target.value})} 
                    placeholder="No. de Documento"
                    className="input" 
                />
            </div>
            <button className="button">Enviar</button>
            {err && (
                <div className="error-message">
                    Por favor chequea que la información sea correcta
                </div>
            )}
        </form>
        
        {mostrar &&  <Card usuario={usuario} /> }
    </div>
  )
}

export default Form
