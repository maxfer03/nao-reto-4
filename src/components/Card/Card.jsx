import './Card.scss'


// Componente reutilizable de tarjeta.
// Acepta distintas props, las cuales
// aplican estilos específicos.
const Card = ({title, size, styles, children}) => {
  return ( <div className={'data-card ' + (styles ? styles : '') + ' ' + size}>
    {
      title ? (
        <h2 className='card-title'>
          {title}
        </h2>
      ) : null
    }
    {children}
  </div> );
}
 
export default Card;