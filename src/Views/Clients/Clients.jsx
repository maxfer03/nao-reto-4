import './Clients.scss'
import CardMd from '../../components/CardMd/CardMd';
import { useSelector } from 'react-redux';
// Vista de Clientes:
// Renderiza una lista de clientes predifinida de la DB
const Clients = () => {
  const {clients} = useSelector((state) => state.charts.data)
  return ( <div className='clients container'>
    {clients?.map((client, idx) => {
      return (
        <CardMd title={client.name} data={client.data} isClient={true}/>
      )
    })}
  </div> );
}
 
export default Clients;