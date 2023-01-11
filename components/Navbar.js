import React from "react"
import Link from "next/link"
import { useState, useEffect } from 'react'


// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false)
//     return (
//         <nav id="nav-main" className="navbar navbar-expand-lg navbar-light header-bg">
//             <Link href="/home">
//             <a className="navbar-brand header-text-color nav-logo-width">
//                 <img style={{height: "50px"}} src="/images/logo3_noBg.png"/>Metajetz
//             </a>
//             </Link>
//             <button className="navbar-toggler header-text-color navbar-dark" id="toggle-menu" type="button"
//                  data-bs-toggle="collapse" data-bs-target="#links" aria-controls="links" aria-expanded="false"
//                  aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="links">
//                 <ul className="navbar-nav mx-auto nav-logo-width">
//                 </ul>
//                 <ul className="navbar-nav mx-auto">
//                     <li className="nav-item">
//                     <Link href="/home">
//                         <a className="nav-link header-text-color top-tab no-wrap" data-bs-toggle="collapse"
//                             data-tab-target="#home-page">Home</a>
//                     </Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link href="/main">
//                         <a className="nav-link header-text-color top-tab no-wrap" data-bs-toggle="collapse"
//                             data-tab-target="#main-page">Main</a>
//                     </Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link href="/whitepaper">
//                         <a className="nav-link header-text-color top-tab no-wrap" data-tab-target="#whitepaper-page">White
//                             Paper</a>
//                     </Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link href="/mint">
//                         <a className="nav-link header-text-color top-tab no-wrap" data-tab-target="#mint-page">Mint</a>
//                     </Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link href="/contact">
//                         <a className="nav-link header-text-color top-tab no-wrap" data-tab-target="#contact-page">Contact</a>
//                     </Link>
//                     </li>
//                 </ul>
                // <ul className="navbar-nav mx-auto">
                // <button type="button" className="btn btn-secondary btn-rect btn-lg no-wrap" data-bs-toggle="modal"
                // data-bs-target="#connectModal" id="connectWalletButton">Connect Wallet</button>
                // </ul>
//                 <ul className="navbar-nav sm-icons mr-0 social-icon-group">
//                     <li className="nav-item"><a className="nav-link header-text-color" href="https://www.instagram.com/metajetz/"
//                             target="_blank"><i className="fab fa-lg fa-instagram"></i></a></li>
//                     <li className="nav-item"><a className="nav-link header-text-color" href="https://twitter.com/metajetznft"
//                             target="_blank"><i className="fab fa-lg fa-twitter"></i></a></li>
//                     <li className="nav-item"><a className="nav-link header-text-color" href="https://discord.gg/XF3anZZSgB"
//                             target="_blank"><i className="fab fa-lg fa-discord"></i></a></li>
//                     <li className="nav-item"><a className="nav-link header-text-color" href="https://www.tiktok.com/@metajetznft"
//                             target="_blank"><i className="fab fa-lg fa-tiktok"></i></a></li>
//                 </ul>
//              </div>
//         </nav>
//     )
// }
function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 w-screen bg-gray-500 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-black h-20">
                <Link href="/">
                    <a className="navbar-brand header-text-color nav-logo-width" style={{textAlign: "center", display: "contents"}}>
                        <img style={{height: "50px"}} src="/images/logo3_noBg.png" alt="logo"/>Metajetz
                    </a>
                </Link>
            </div>
            <div className="flex flex-col ml-4">
                <div className="nav-item">
                     <Link href="/home">
                         <a className="nav-link header-text-color top-tab no-wrap" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Home</a>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link href="/main">
                        <a className="nav-link header-text-color top-tab no-wrap" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Main</a>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link href="/whitepaper">
                        <a className="nav-link header-text-color top-tab no-wrap" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>White
                            Paper</a>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link href="/mint">
                        <a className="nav-link header-text-color top-tab no-wrap" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Mint</a>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link href="/contact">
                        <a className="nav-link header-text-color top-tab no-wrap" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Contact</a>
                    </Link>
                </div>
                <ul className="navbar-nav sm-icons mr-0 social-icon-group">
                    <li className="nav-item"><a className="nav-link header-text-color" href="https://www.instagram.com/metajetz/"
                            target="_blank" rel="noopener noreferrer"><i className="fab fa-lg fa-instagram"></i></a></li>
                    <li className="nav-item"><a className="nav-link header-text-color" href="https://twitter.com/metajetznft"
                            target="_blank" rel="noopener noreferrer"><i className="fab fa-lg fa-twitter"></i></a></li>
                    <li className="nav-item"><a className="nav-link header-text-color" href="https://discord.gg/XF3anZZSgB"
                            target="_blank" rel="noopener noreferrer"><i className="fab fa-lg fa-discord"></i></a></li>
                    <li className="nav-item"><a className="nav-link header-text-color" href="https://www.tiktok.com/@metajetznft"
                            target="_blank" rel="noopener noreferrer"><i className="fab fa-lg fa-tiktok"></i></a></li>
                </ul>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="flex filter drop-shadow-md bg-black px-4 py-4 h-20 items-center" style={{position: "sticky", width: "100%", top: "0"}}>
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <Link href="/">
                    <a className="navbar-brand header-text-color nav-logo-width" style={{display: "contents"}}>
                        <img style={{height: "50px"}} src="/images/logo3_noBg.png" alt="logo"/>Metajetz
                    </a>
                </Link>
            </div>
            <div className="w-1/12 flex items-center">

            </div>
            <div className="w-4/12 flex justify-center items-center">
                <div className="hidden md:flex">
                    <div className="nav-item">
                        <Link href="/home">
                            <a className="nav-link header-text-color top-tab no-wrap">Home</a>
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link href="/main">
                            <a className="nav-link header-text-color top-tab no-wrap">Main</a>
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link href="/whitepaper">
                            <a className="nav-link header-text-color top-tab no-wrap">White
                                Paper</a>
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link href="/mint">
                            <a className="nav-link header-text-color top-tab no-wrap">Mint</a>
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link href="/contact">
                            <a className="nav-link header-text-color top-tab no-wrap">Contact</a>
                        </Link>
                    </div>
                </div>  
            </div>
            <div className="w-2/12 flex justify-end items-center">
                <span className="hidden md:flex">
                    <ul className="navbar-nav mx-auto">
                        <Link href="/mint">
                            <button type="button" style={{padding: "4px"}}className="font-coiny w-full bg-gradient-to-br from-brand-meta-red to-brand-meta-orange shadow-lg rounded-md text-white hover:shadow-pink-400/50 tracking-wide uppercase no-wrap" 
                            id="connectWalletButton">Connect Wallet</button>
                        </Link>
                    </ul>
                </span>
            </div>
            <div className="w-2/12 flex justify-end items-center">
                <span className="hidden md:flex">
                    <ul className="navbar-nav sm-icons mr-0 social-icon-group" >
                        <li className="nav-item navbar-link-icon"><a className="nav-link header-text-color" href="https://www.instagram.com/metajetz/"
                                target="_blank" rel="noopener noreferrer"><i className="fab fa-lg fa-instagram"></i></a></li>
                        <li className="nav-item navbar-link-icon"><a className="nav-link header-text-color" href="https://twitter.com/metajetznft"
                                target="_blank" rel="noopener noreferrer"><i className="fab fa-lg fa-twitter"></i></a></li>
                        <li className="nav-item navbar-link-icon"><a className="nav-link header-text-color" href="https://discord.gg/XF3anZZSgB"
                                target="_blank" rel="noopener noreferrer"><i className="fab fa-lg fa-discord"></i></a></li>
                        <li className="nav-item navbar-link-icon"><a className="nav-link header-text-color" href="https://www.tiktok.com/@metajetznft"
                                target="_blank" rel="noopener noreferrer"><i className="fab fa-lg fa-tiktok"></i></a></li>
                    </ul>
                </span>
            </div>
            <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {setOpen(!open) }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
            </div>
        </header>
    )

}