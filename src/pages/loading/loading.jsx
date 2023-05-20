// import React from 'react'
import logo from '../../assets/logo.svg'
import './loading.css'
import LinearBuffer from './loadingbar'
const Loading = () => {
    return (
        <div className='frame'>
            <div className='load'>
                <img alt='logo' className='imge' src={logo} height={50} />
                <LinearBuffer className='curve' />


            </div>
        </div>
    )
}

export default Loading