import './Navbar.scss';

export default function Navbar() {
  return(
    <div className='navbar'>
      <h1 className='navbar__logo'>SeeYouMovie</h1>
      <ul className='navbar__links'>
        <a className='navbar__links__items' href='!#'><li>Cadastro</li></a>
        <a className='navbar__links__items' href='!#'><li>Minha Lista</li></a>
        <a className='navbar__links__items' href='!#'><li>Perfil</li></a>
        <a className='navbar__links__items' href='!#'><li>Entrar</li></a>
      </ul>
    </div>
  )
}