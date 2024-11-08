const Card = ({ usuario }) => {
  return (
    <div className="card">
      <h2 className="card-title">Información del Usuario</h2>
      <div className="card-content">
        <div className="card-item">
          <span className="card-label">Tipo de Documento:</span>
          <span className="card-value">{usuario.tipodocumento}</span>
        </div>
        <div className="card-item">
          <span className="card-label">Número de Documento:</span>
          <span className="card-value">{usuario.documento}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
