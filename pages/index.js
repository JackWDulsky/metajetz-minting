import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { config } from '../dapp.config'
import { home } from './home.js'

export default function Home() {
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
  // return (
    // <div id="intro-page" className="intro active">
    //   <div className="centerHome">
    //       <p className="typed-out">Your MetaJetz Flight Has Arrived</p>
    //   </div>
    //   <div className="centerHome">
    //       <p className="future-text">Welcome to the future</p>
    //   </div>
    //   <div className="centerHome remove">
    //       <img src="images/Sparrow977_1_e.png" className="homeplane" alt=""/>
    //   </div>
    //   <div className="centerHome remove">
    //       <img src="images/Sparrow977_2.png" className="homeplane2" alt=""/>
    //   </div>
    //   <div className="centerHome remove">
    //       <img src="images/Sparrow977_3.png" className="homeplane3" alt=""/>
    //   </div>
    //   <div className="cloudsContainer">
    //       <div className="plane-clouds">
    //           <div className="x1"><img src="images/cloud.png" alt=""/></div>
    //           <div className="x2"><img src="images/cloud.png" alt=""/></div>
    //           <div className="x3"><img src="images/cloud.png" alt=""/></div>
    //           <div className="x4"><img src="images/cloud.png" alt=""/></div>
    //           <div className="x5"><img src="images/cloud.png" alt=""/></div>
    //           <div className="x6"><img src="images/cloud.png" alt=""/></div>
    //           <div className="x7"><img src="images/cloud.png" alt=""/></div>
    //           <div className="x8"><img src="images/cloud.png" alt=""/></div>
    //       </div>
    //   </div>
    //   <div className="cloudsContainer speedLines">
    //       <div className="speedLine sl1"></div>
    //       <div className="speedLine sl2"></div>
    //       <div className="speedLine sl3"></div>
    //       <div className="speedLine sl4"></div>
    //       <div className="speedLine sl5"></div>
    //       <div className="speedLine sl6"></div>
    //       <div className="speedLine sl7"></div>
    //   </div>
    //   <div id="home-page" className="intro bg-black">
    //     <div className="insidePlaneHomeContainer">
    //         <img src="images/homepage.png" className="homeplaneinside" alt=""/>
    //     </div>
    //     <div className="homepageaction homepageconnect">
    //         <Link href="/whitepaper">
    //             <a className="openseaclick">White<br/> Paper&nbsp;<i
    //                     className="rotate45 fa fa-arrow-right"></i></a>
    //         </Link>
    //     </div>
    //     <div className="homepageaction homepagemint">
    //         <Link href="/mint">
    //             <a className="openseaclick">Mint&nbsp;<i className="rotate45 fa fa-arrow-right"></i></a>
    //         </Link>
    //     </div>
    //     <div className="homepageaction homepageopensea">
    //         <Link href="/main">
    //             <a className="openseaclick">Main&nbsp;<i
    //                     className="rotate45 fa fa-arrow-right"></i></a>
    //         </Link>
    //     </div>
    //   </div>

    // </div>
  // )
}
