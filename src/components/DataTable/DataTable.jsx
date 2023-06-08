import Card from '../Card/Card';
import SmallChart from '../Charts/SmallChart';
import './DataTable.scss'
// Componente reutilizable
// de tabla de datos
// Actualmente tiene 3 variantes:
// - Invoices
// - Products
// - GlobalData
const DataTable = ({data, title, length, isProducts, isGlobal}) => {

  if (isGlobal) {
    return (
      <Card title = {title} size = 'lg'>
      <div className='data-table'>
        <div className='labels data-table-row'>
          <span>Country</span>
          <span className='mobile-hidden' >Sales</span>
          <span>Amount</span>
        </div>
        <div className='items'>
          {data?.slice(0, length).map((item, idx) => {
            return (
              <div key={`${item.id}-${idx}`} className='item data-table-row'>
                <span>{item.id}</span>
                <span className='mobile-hidden' >{Math.floor(item.value / 2)}</span>
                <span>${item.value}</span>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
    )
  }

  return (
    <Card title = {title} size = 'lg'>
      <div className='data-table'>
        <div className='labels data-table-row'>
          <span className='mobile-hidden' >No</span>
          <span>Id</span>
          <span className={isProducts? null : "mobile-hidden" }>{isProducts? "Product" : "Customer"} Name</span>
          {isProducts ? (
            <>
              <span className='mobile-hidden' >Category</span>
              <span className='mobile-hidden' >Sales</span>
            </>
          ) : (
            <>
            <span className='mobile-hidden' >City</span>
            <span className='mobile-hidden' >Order Date</span>
            <span>Status</span>
            </>
          )}
          <span>Amount</span>
        </div>
        <div className='items'>
          {data?.slice(0, length).map((item, idx) => {
            return (
              <div key={`${item.id}-${idx}`} className='item data-table-row'>
                <span className='mobile-hidden' >{idx+1}.</span>
                <span>{item.id}</span>
                <span className={isProducts? null : "mobile-hidden" } >{isProducts ? item.prod : item.cust}</span>
                {isProducts ? 
                (
                  <>
                  <span className='mobile-hidden' >{item.category}</span>
                  <span className='mobile-hidden' >{item.sales}</span>
                  </>

                ) : (
                  <>
                <span className='mobile-hidden' >{item.city}</span>
                <span className='mobile-hidden' >{item.date}</span>
                <span>{item.status}</span>
                  </>
                )
                }
                <span>{item.amount}</span>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  );
}
 
export default DataTable;