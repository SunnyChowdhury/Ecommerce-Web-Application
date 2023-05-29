import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheck } from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'

const success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    const [order, setOrder] = useState(null)

    useEffect(() => {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
    }, [])

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheck />
            </p>
            <h2>Thank you for your Purchase!</h2>
            <p className='email-msg'>Check your email for the receipt</p>
            <p className='description'>
                If you have any questions, please email
                <a className='email' href='mailto:order@orangecomputers.com'>
                order@orangecomuters.com
                </a>
            </p>
            <Link href="/">
                <button type="button" width="300px" className='btn'>
                        Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default success