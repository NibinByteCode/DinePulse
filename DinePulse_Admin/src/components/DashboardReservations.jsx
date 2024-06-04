import React from 'react'
import free_table from './Assets/free_table.png';
import reserved_table from './Assets/reserved_table.png';

export const DashboardReservations = () => {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>VIEW RESERVATIONS</h3>
        </div>
        <br/><br/>
        <div className='table-cards'>            
            <div className='tablecard'>
                <div className='table_card_inner'>
                    <img src={free_table} alt="Dinepulse logo" className='orders_icon' />
                    <h4>RESERVED NOW</h4>
                    <h4>Customers : 3</h4>
                </div>
            </div>
            <div className='tablecard'>
                <div className='table_card_inner'>
                    <img src={reserved_table} alt="Dinepulse logo" className='orders_icon' />
                    <h4>RESERVED NOW</h4>
                    <h4>Customers : 3</h4>
                </div>
            </div>
            <div className='tablecard'>
                <div className='table_card_inner'>
                    <img src={reserved_table} alt="Dinepulse logo" className='orders_icon' />
                    <h4>RESERVED NOW</h4>
                    <h4>Customers : 3</h4>
                </div>
            </div>
            <div className='tablecard'>
                <div className='table_card_inner'>
                    <img src={free_table} alt="Dinepulse logo" className='orders_icon' />
                    <h4>RESERVED NOW</h4>
                    <h4>Customers : 3</h4>
                </div>
            </div>
            <div className='tablecard'>
                <div className='table_card_inner'>
                    <img src={free_table} alt="Dinepulse logo" className='orders_icon' />
                    <h4>RESERVED NOW</h4>
                    <h4>Customers : 3</h4>
                </div>
            </div>
            <div className='tablecard'>
                <div className='table_card_inner'>
                    <img src={reserved_table} alt="Dinepulse logo" className='orders_icon' />
                    <h4>RESERVED NOW</h4>
                    <h4>Customers : 3</h4>
                </div>
            </div>
            <div className='tablecard'>
                <div className='table_card_inner'>
                    <img src={free_table} alt="Dinepulse logo" className='orders_icon' />
                    <h4>RESERVED NOW</h4>
                    <h4>Customers : 3</h4>
                </div>
            </div>
        </div>
    </main>
  )
}
