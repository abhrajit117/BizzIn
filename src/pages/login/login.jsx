// import React from 'react'
import './login.css'
import backBtn from '../../assets/backbtn.svg'
import big from '../../assets/BIG_.svg'
import PasswordInput from './password'
import Mail from '../../assets/mail.svg'

const Login = () => {


    return (
        <>

            <div className='frame'>
                <a href='https://facebook.com'><img className='absolute' src={backBtn} /></a>
                <div className='text1'>Ready to Make <br />Your Business</div>
                <div><img className='side' src={big} height={50} /></div>
                <div className='text2'>Hey! good to see you back, now let’s in <br />& check your dashboard</div>
                <form>
                    <input className='inpt' type='email' style={{
                        backgroundImage: `url(${Mail})`
                    }} placeholder='Enter your email' />
                    <PasswordInput />
                </form>
                <a href='#'><div className='text3'>Forgot Password?</div></a>
                <div>or </div>
                <a href='#'><div>Sign In using Google</div></a>
                <a href='#'><div className='btn1'>LOG IN</div></a>








            </div>
        </>
    )
}

export default Login