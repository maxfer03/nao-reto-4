import './Card.scss'

const Card = ({title, size, styles, children}) => {
  return ( <div className={'data-card ' + styles}>
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