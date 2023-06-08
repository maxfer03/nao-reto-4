import Card from '../Card/Card';
import SmallChart from '../Charts/SmallChart';
import './CardLg.scss'

// Variante grande del componente Card
const CardLg = ({data, title}) => {
  return (
    <Card title = {title} size = 'lg'>
      <div className='data'>

        <div className='chart'>
        <SmallChart data={data?.chart}/>
        </div>
      </div>
    </Card>
  );
}
 
export default CardLg;