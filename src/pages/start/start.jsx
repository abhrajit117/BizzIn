// import React from 'react'
import deal from '../../assets/deal.svg'
import logo from '../../assets/logo.svg'
import google from '../../assets/google.svg'
import arrow from '../../assets/arrow.svg'
import './start.css'
const Login = () => {
    return (
        <><div className='frame'>
            <div className='deal'><img alt='deal' src={deal} height={200} /></div>
            <div><img alt='logo' src={logo} height={50} /></div>
            <div className='text'>Get your Business an opportuity</div>

            <div className='btn1'>LOG IN</div>
            <div className='text2'>OR</div>
            <div className='btn2'><img alt='google' src={google} />&nbsp; Cotinue with Google &nbsp;<img alt='arrow' src={arrow} /> </div>
        </div>
        </>
    )
}

export default Login