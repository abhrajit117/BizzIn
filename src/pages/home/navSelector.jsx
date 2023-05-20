import React from 'react'
import { useState } from 'react'
import { MdBusinessCenter } from 'react-icons/md'
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { RiServiceLine } from 'react-icons/ri'

export const NavSelector = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a href='#home' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaMoneyCheckAlt /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdBusinessCenter /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
            <a href='#service' onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>

        </nav>)
}
