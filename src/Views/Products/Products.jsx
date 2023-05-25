import { useSelector } from "react-redux";
import DataTable from "../../components/DataTable/DataTable";

const Products = () => {
  const charts = useSelector((state) => state.charts.data)
  return ( <div className="products-view container">
    <DataTable title='Recent Products' data={charts.products} isProducts={true}/>
  </div> );
}
 
export default Products;