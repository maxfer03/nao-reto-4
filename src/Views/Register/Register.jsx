import './Register.scss'
import logo from '../../assets/svg/logo.svg'
import Card from '../../components/Card/Card';


import RegForm from '../../components/Form/RegForm';

 
// Vista de Registrado:
// Renderiza una form
// de registro
const Register = () => {
  return ( <div className='register-section'>
    <div className='register-section-top'>
      <img className="groth-logo" src={logo} alt="Groth Logo"/>
      <h1>Admin Dashboard</h1>
    </div>
    <Card className='register-section-form-container'
    title={'Request Access'}
    styles='register-form'
    >
      <RegForm/>
    </Card>
  </div> );
}
 
export default Register;