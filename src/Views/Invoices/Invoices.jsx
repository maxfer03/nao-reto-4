import { useSelector } from "react-redux";
import DataTable from "../../components/DataTable/DataTable";
  // Vista de facturas:
  // Renderiza una tabla de datos
  // de facturación
const Invoices = () => {
  const charts = useSelector((state) => state.charts.data)
  return ( <div className="invoices-view container">
    <DataTable title='Recent Invoices' data={charts.invoices}/>
  </div> );
}
 
export default Invoices;