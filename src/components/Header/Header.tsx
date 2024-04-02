import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'
const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to='/' className={style['nav-link']}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/shop' className={style['nav-link']}>
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink to='/login' className={style['nav-link']}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to='/register' className={style['nav-link']}>
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin' className={style['nav-link']}>
          admin page
        </NavLink>
      </li>
    </ul>
  )
}

export default Header
