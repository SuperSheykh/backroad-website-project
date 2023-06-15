import React from 'react'
import Title from './Title'
import { services } from '../data'
const Services = () => {
   return (
      <section className='section services' id='services'>
         <Title title='our' subTitle='services' />
         <div className='section-center services-center'>
            {services.map((serv) => {
               const { id, icon, title, text } = serv
               return (
                  <article className='service' key={id}>
                     <span className='service-icon'>
                        <i className={icon}></i>
                     </span>
                     <div className='service-info'>
                        <h4 className='service-title'>{title}</h4>
                        <p className='service-text'>{text}</p>
                     </div>
                  </article>
               )
            })}
         </div>
      </section>
   )
}
export default Services
