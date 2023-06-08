import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ResponsiveChoropleth } from '@nivo/geo'
import Card from '../../components/Card/Card'
import features from '../../assets/world/features.json'
import './WorldView.scss'
import DataTable from '../../components/DataTable/DataTable';
  // Vista de facturas:
  // Renderiza un mapa 
  // y una tabla de datos
  // de ventas

  //Esta función se preocupa de renderizar el mapa
const WorldGraph = ({data}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // impedimos el render del mapa en mobile
    // ya que se vuelve muy pequeño
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', checkScreenSize);

    checkScreenSize();

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  if (isMobile) {
    return (
      <div className='mobile-disabled'>
        The Global graph is disabled for mobile.
      </div> 
    )
  }
  if (data) return (
    <div className='world-container'>
      <ResponsiveChoropleth
        data={data}
        features={features.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="blues"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionType="equalEarth"
        projectionScale={160}
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
    />
    </div>
  )
}

// Esta función es el de la vista de la página
const WorldView = () => {
  const {world} = useSelector((state) => state.charts.data)
  if (world) {
  return ( <div className='world-data container'>
    <Card title='Global Sales'>
      <WorldGraph data={world}/>
    </Card>
    <DataTable title="Sales By Country" data={world} isGlobal={true} />
  </div> );
  }
}
 
export default WorldView;