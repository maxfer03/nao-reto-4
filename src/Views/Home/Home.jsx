import Card from '../../components/Card/Card';
import CardMd from '../../components/CardMd/CardMd';
import { useSelector } from 'react-redux';
import './Home.scss'
import CardLg from '../../components/CardLg/CardLg';
import Invoices from '../../components/DataTable/DataTable';
import PieChart from '../../components/PieChart/PieChart'
const Home = () => {
  const data = useSelector((state) => state.charts.data)
  return ( <div className='home container'>
    <div className='main-cards'>
      <div className='small-cards'>
        <CardMd title='Avarage Revenue' data={data.avg_revenue}/>
        <CardMd title='Customer Return' data={data.cust_return}/>
      </div>
      <div className='large-cards'>
        <CardLg title='Revenue vs Order' data={data.big_chart}/>
        <Invoices title='Recent Invoices' length={5} data={data.invoices}/>
      </div>
    </div>
    <div className='side-cards'>
      <Card title = 'Sales by Category' size = 'sm'>
        <PieChart data={data.pie_chart}/>
      </Card>
      <Card title = 'Top Products' size = 'sm'>
        
        <div className='top-products'>
          <div className= 'top'>
            {data?.top?.map((prod, idx) => {
              return (
                <div key={`${prod.id}-${idx}`} className='top-item'>
                  <img src={prod.img} alt='' />
                  <div className='top-item-data'>
                    <div className='top-item-data-top'>
                      {prod.prod}
                    </div>
                    <div className='top-item-data-bot'>
                      <span className='category'>
                        {prod.category}
                      </span>
                      <span className="separator">|</span>
                      <span className="rate">
                        {prod.rate}%
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Card>
    </div>
  </div> );
}
 
export default Home;