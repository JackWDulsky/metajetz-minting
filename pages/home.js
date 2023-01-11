import React from "react";
import Link from "next/link"

function home() {
    return (
        <div id="home-page" className="intro bg-black">
            <div className="insidePlaneHomeContainer">
                <img src="/images/homepage.png" className="homeplaneinsidestatic" alt=""/>
            </div>
            <div className="homepageactionstatic homepageconnect">
                <Link href="/whitepaper">
                    <a className="openseaclick">White<br/> Paper&nbsp;<i
                            className="rotate45 fa fa-arrow-right"></i></a>
                </Link>
            </div>
            <div className="homepageactionstatic homepagemint">
                <Link href="/mint">
                    <a className="openseaclick">Mint&nbsp;<i className="rotate45 fa fa-arrow-right"></i></a>
                </Link>
            </div>
            <div className="homepageactionstatic homepageopensea">
                <Link href="/main">
                    <a className="openseaclick">Main&nbsp;<i
                            className="rotate45 fa fa-arrow-right"></i></a>
                </Link>
            </div>
        </div>
    )
}

export default home;