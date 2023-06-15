import logo from '../assets/images/logo.svg'
import { iconLinks, pageLinks } from '../data'
export default function Navbar() {
   return (
      <>
         <nav className='navbar'>
            <div className='nav-center'>
               <div className='nav-header'>
                  <img src={logo} className='nav-logo' alt='backroads' />
                  <button type='button' className='nav-toggle' id='nav-toggle'>
                     <i className='fas fa-bars'></i>
                  </button>
               </div>
               <ul className='nav-links' id='nav-links'>
                  {pageLinks.map((link) => {
                     return (
                        <li key={link.id}>
                           <a href={link.href} className='nav-link'>
                              {link.text}
                           </a>
                        </li>
                     )
                  })}
               </ul>

               <ul className='nav-icons'>
                  {iconLinks.map((link) => {
                     return (
                        <li key={link.id}>
                           <a
                              href={link.href}
                              target='_blank'
                              className='nav-icon'
                           >
                              <i className={link.icon}></i>
                           </a>
                        </li>
                     )
                  })}
               </ul>
            </div>
         </nav>
      </>
   )
}
