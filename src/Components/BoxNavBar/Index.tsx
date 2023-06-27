'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Index = () => {
    const [show, setShow] = useState(false)

    const controlNavbar = () => {
        if (window.scrollY > 50) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
    }, [])

    return (
        <>
            <nav className={`active ${show && 'hidden'} nav`}>
                <h1><span>T</span>movies</h1>
                <div className="nav_link">
                    <Link href='/'>
                        Home
                    </Link>
                    <Link href='/Movie'>
                        Movies
                    </Link>
                    <Link href='/Serie'>
                        Tv Seires
                    </Link>
                </div>
            </nav>
            <div className="nav-mobile">
                <Link href='/'>
                    Home
                </Link>
                <Link href='/Movie'>
                    Movies
                </Link>
                <Link href='/Serie'>
                    Tv Seires
                </Link>
            </div>
        </>

    )
}
export default Index