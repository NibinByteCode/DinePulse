import React from 'react'

export const DashboardKitchen = () => {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>PENDING ORDERS TO PROCESS FROM KITCHEN</h3>
        </div>
        <br/><br/>
        <div className="order-status">
            <div className='orders-count'>
                <h5>Bill No : </h5>
                <h5>Table : </h5>
                <h5>Waiter : </h5>
                <h5>Bill timing : </h5>
                <h5>Bill type: </h5>
                <div className='bg1'>
                    <h5>Bill No : </h5>
                    <h5>Table : </h5>
                    <h5>Waiter : </h5>
                    <h5>Bill timing : </h5>
                    <h5>Bill type: </h5>
                    <hr/>
                </div>
                <div className='bg2'>    
                    <h5>1-aaaa-1</h5>
                    <h5>2-bbbb-3</h5>
                    <h5>3-cccc-2</h5>
                    <h5>4-dddd-1</h5>
                    <button>PRINT</button>&nbsp;&nbsp;&nbsp;
                    <button>COMPLETE</button>
                </div>
            </div>

            <div className='orders-count'>
                <h5>Bill No : </h5>
                <h5>Table : </h5>
                <h5>Waiter : </h5>
                <h5>Bill timing : </h5>
                <h5>Bill type: </h5>
                <div className='bg1'>
                    <h5>Bill No : </h5>
                    <h5>Table : </h5>
                    <h5>Waiter : </h5>
                    <h5>Bill timing : </h5>
                    <h5>Bill type: </h5>
                    <hr/>
                </div>
                <div className='bg2'>    
                    <h5>1-aaaa-1</h5>
                    <button>PRINT</button>&nbsp;&nbsp;&nbsp;
                    <button>COMPLETE</button>
                </div>
            </div>

        </div>
    </main>
  )
}
