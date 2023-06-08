import { useSelector } from "react-redux";
import DataTable from "../../components/DataTable/DataTable";
  // Vista de Productos:
  // Renderiza una tabla de datos
  // de productos
const Products = () => {
  const charts = useSelector((state) => state.charts.data)
  return ( <div className="products-view container">
    <DataTable title='Recent Products' data={charts.products} isProducts={true}/>
  </div> );
}
 
export default Products;