import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
 return(
  <header>
  <div className="dsmeta-logo-container">
      <img src={logo} alt="DSMeta" />
      <h1>Corujises</h1>
      <p>
        Gustavo Coelho Ferreira
        </p>
  </div>
</header>
    )
  

}
export default Header
