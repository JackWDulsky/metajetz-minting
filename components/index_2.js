import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { config } from '../dapp.config'

export default function Home() {
  return (
    <div className="page-bg">
      <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>MetaJetz</title>
        <link rel="icon" href="images/logo3_noBg_thumbnail.png" type="image/png"/>
        {/* <link rel="stylesheet" href="css/style.css" type="text/css" />
        <link rel="stylesheet" href="css/intro.css" type="text/css" />
        <link rel="stylesheet" href="css/clouds.css" type="text/css" /> */}
        <script src="script.js" defer></script>
        {/* <script src="https://kit.fontawesome.com/e916676cba.js" crossOrigin="anonymous"></script> */}
        {/* <script src="https://unpkg.com/three"></script> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"/>
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"/> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"></script> */}
      </Head>

        <div id="newsLetterSignUp" className=" parent-wrapper">
            <div className="CloseEmailSignUp" onClick="closeEmail(false)">X</div>
            <div className="subscribe-wrapper">
                <h4 className="subscribe-wrapper-text">SUBSCRIBE TO OUR NEWSLETTER</h4>
                <form
                    action="https://script.google.com/macros/s/AKfycby5VaSGR06wOpxJWnjiS7XKsoWMfAsp-DfZ-bWL-ZuhX5tXRJ_1mVZafYk8RT_dVK5xkg/exec"
                    method="POST" target="dummyframe">
                    <input type="text" name="Email" className="subscribe-input" placeholder="Your e-mail"/>
                    <span style={{display: "none"}} className="form-group whitelistFormGroup">
                        <label htmlFor="formGroupExampleInput3" className="colorWhite">Source</label>
                        <input name="Source" type="text" className="form-control" value="Newsletter Email Sign Up"/>
                    </span>
                    <div className="submit-btn" onClick="closeEmail(true)" type="submit" value="Join">SUBMIT</div>
                    <button id="newsletterGoogleSubmit" style={{display: "none"}} type="submit" className="btn btn-primary"
                        value="Join"></button>
                </form>
            </div>
        </div>

        <nav id="nav-main" className="navbar navbar-expand-lg navbar-light header-bg">
            <a className="navbar-brand header-text-color nav-logo-width" data-tab-target="#intro-page"><img
                    style={{height: "50px"}} src="images/logo3_noBg.png" alt=""/>Metajetz</a>
            <button className="navbar-toggler header-text-color navbar-dark" id="toggle-menu" type="button"
                data-bs-toggle="collapse" data-bs-target="#links" aria-controls="links" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="links">
                <ul className="navbar-nav mx-auto nav-logo-width">
                </ul>
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link header-text-color top-tab no-wrap" data-bs-toggle="collapse"
                            data-tab-target="#home-page">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link header-text-color top-tab no-wrap" data-bs-toggle="collapse"
                            data-tab-target="#main-page">Main</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link header-text-color top-tab no-wrap" data-tab-target="#whitepaper-page">White
                            Paper</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link header-text-color top-tab no-wrap" data-tab-target="#mint-page">Mint</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link header-text-color top-tab no-wrap" data-tab-target="#contact-page">Contact</a>
                    </li>
                </ul>
                <ul className="navbar-nav mx-auto">
                    <button type="button" className="btn btn-secondary btn-rect btn-lg no-wrap" data-bs-toggle="modal"
                        data-bs-target="#connectModal" id="connectWalletButton">Connect Wallet</button>
                </ul>
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
        </nav>
        <div className="tab-content">
            <div id="whitelist-signup" data-tab-content className="">
                <iframe name="dummyframe" id="dummyframe" style={{display: "none"}}></iframe>
                <br/><br/>
                <h1 style={{color: "white", textAlign: "center"}}>Welcome to the MetaJetz Presale Sign Up</h1>
                <br/>
                <h1 style={{color: "white", textAlign: "center"}}>We are extremely
                    excited to have you on board!</h1>
                <br/> <br/>
                <hr style={{color: "white", width: "50%", margin: "auto"}}/>
                <br/>
                <br/>
                <form
                    action="https://script.google.com/macros/s/AKfycby5VaSGR06wOpxJWnjiS7XKsoWMfAsp-DfZ-bWL-ZuhX5tXRJ_1mVZafYk8RT_dVK5xkg/exec"
                    method="POST" target="dummyframe">
                    <div className="form-group whitelistFormGroup">
                        <label htmlFor="formGroupExampleInput" className="colorWhite">ETH Address</label>
                        <input name="EthAddress" type="text" className="form-control" id="formGroupExampleInput"
                            placeholder="0x9682354359A3E0d7Bc3C0073EAd4c3900EEA7341"/>
                        <small className="colorWhite form-text">We&apos;ll never share any of your information with anyone
                            else.</small>
                    </div>
                    <br/>
                    <div className="form-group whitelistFormGroup">
                        <label htmlFor="formGroupExampleInput2" className="colorWhite">Social Media Username</label>
                        <input name="Social" type="text" className="form-control" id="formGroupExampleInput2"
                            placeholder="MetaJetzNFT"/>
                    </div>
                    <br/>
                    <div className="form-group whitelistFormGroup">
                        <label htmlFor="formGroupExampleInput3" className="colorWhite">Email</label>
                        <input name="Email" type="text" className="form-control" id="formGroupExampleInput3"
                            placeholder="info@MetaJetz.io"/>
                    </div>
                    <br/>
                    <div style={{display: "none"}} className="form-group whitelistFormGroup">
                        <label htmlFor="formGroupExampleInput3" className="colorWhite">Source</label>
                        <input name="Source" type="text" className="form-control" id="whiteListSource"
                            placeholder="info@MetaJetz.io"/>
                    </div>
                    <br/>
                    <br/>
                    <div id="whiteListSubmit" className="whitelistSubmit">
                        <button onClick="whiteListSubmit()" type="submit" className="btn btn-primary"
                            value="Join">Submit</button>
                    </div>
                </form>
                <div id="congrats" className="congrats">
                    Congratulations and Welcome to the MetaJetz Family! 🎉🎉🎉🎉
                </div>
            </div>
            <div id="intro-page" data-tab-content className="intro active">
                <div className="centerHome">
                    <p className="typed-out">Your MetaJetz Flight Has Arrived</p>
                </div>
                <div className="centerHome">
                    <p className="future-text">Welcome to the future</p>
                </div>
                <div className="centerHome remove">
                    <img src="images/Sparrow977_1_e.png" className="homeplane" alt=""/>
                </div>
                <div className="centerHome remove">
                    <img src="images/Sparrow977_2.png" className="homeplane2" alt=""/>
                </div>
                <div className="centerHome remove">
                    <img src="images/Sparrow977_3.png" className="homeplane3" alt=""/>
                </div>
                <div className="centerHome" style={{width: "100%"}}>
                    <img src="images/homepage.png" className="homeplaneinside" alt=""/>
                </div>
                <div className="cloudsContainer">
                    <div className="plane-clouds">
                        <div className="x1"><img src="images/cloud.png" alt=""/></div>
                        <div className="x2"><img src="images/cloud.png" alt=""/></div>
                        <div className="x3"><img src="images/cloud.png" alt=""/></div>
                        <div className="x4"><img src="images/cloud.png" alt=""/></div>
                        <div className="x5"><img src="images/cloud.png" alt=""/></div>
                        <div className="x6"><img src="images/cloud.png" alt=""/></div>
                        <div className="x7"><img src="images/cloud.png" alt=""/></div>
                        <div className="x8"><img src="images/cloud.png" alt=""/></div>
                    </div>
                </div>
                <div className="cloudsContainer speedLines">
                    <div className="speedLine sl1"></div>
                    <div className="speedLine sl2"></div>
                    <div className="speedLine sl3"></div>
                    <div className="speedLine sl4"></div>
                    <div className="speedLine sl5"></div>
                    <div className="speedLine sl6"></div>
                    <div className="speedLine sl7"></div>
                </div>
                <div className="homepageaction homepageconnect">
                    <a data-bs-toggle="modal" data-bs-target="#connectModal">Connect<br/> Wallet&nbsp;<i
                            className="rotate45 fa fa-arrow-right"></i></a>
                </div>
                <div className="homepageaction homepagemint">
                    <a data-tab-target="#mint-page">Mint&nbsp;<i className="rotate45 fa fa-arrow-right"></i></a>
                </div>
                <div className="homepageaction homepageopensea">
                    <a data-tab-target="#main-page" className="openseaclick">Main&nbsp;<i
                            className="rotate45 fa fa-arrow-right"></i></a>
                </div>
            </div>
            <div id="home-page" data-tab-content className="intro">
                <div className="centerHome" style={{width: "100%"}}>
                    <img src="images/homepage.png" className="homeplaneinsidestatic" alt=""/>
                </div>
                <div className="homepageactionstatic homepageconnect">
                    <a data-bs-toggle="modal" data-bs-target="#connectModal">Connect<br/> Wallet&nbsp;<i
                            className="rotate45 fa fa-arrow-right"></i></a>
                </div>
                <div className="homepageactionstatic homepagemint">
                    <a data-tab-target="#mint-page">Mint&nbsp;<i className="rotate45 fa fa-arrow-right"></i></a>
                </div>
                <div className="homepageactionstatic homepageopensea">
                    <a data-tab-target="#main-page" className="openseaclick">Main&nbsp;<i
                            className="rotate45 fa fa-arrow-right"></i></a>
                </div>
            </div>
            <div id="main-page" data-tab-content className="">
                <div>
                    <div className="container">
                        <div className="title-text mj-color">Metajetz</div>
                        <h4 className="mj-color" style={{textAlign: "center", fontSize: "21px"}}>
                            <b>A 4-part collection of 9,999 unique all-electric private jet NFTs</b>
                            <br/>
                            <br/>
                            <b>Sparrow 977 Whitelist Mint on January 11th, 2022</b>
                            <br/>
                            <br/>
                            <br/>
                            <div style={{textAlign: "center", color: "white"}}>
                                <span><i className="fa-solid fa-star"></i></span><span><i className="fa-solid fa-star"></i></span><span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span><span><i className="fa-solid fa-star"></i></span>
                                <br/>
                                <br/>
                                <h2> Charter a Private Jet with MetaJetz!</h2>
                                We are excited to announce we have secured partnerships with Private Aircraft companies to get you the best prices. <br/>
                                Please contact us via email at info@MetaJetz.io or open a Discord ticket for pricing.
                                <br/>
                                <br/>
                                <span><i className="fa-solid fa-star"></i></span><span><i className="fa-solid fa-star"></i></span><span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span><span><i className="fa-solid fa-star"></i></span>
                            </div>
                        </h4>
                        <div className="main-top-row">
                            <img className="main-image" src="images/Sparrow977_3.png" alt=""/>
                            <img className="main-image" src="images/Sparrow977_2.png" alt=""/>
                            <img className="main-image" src="images/Sparrow977_1.png" alt=""/>
                        </div>
                        
                        <div>
                            <iframe name="dummyframe2" id="dummyframe2" style={{display: "none"}}></iframe>
                            <div className="rsvpBlock">
                                <div style={{textAlign: "center", color: "white"}}>
                                    <h3 style={{padding: "3px", color: "white"}}>
                                        RSVP for our next Twitter Spaces. Check out our twitter for specific time and date!
                                        <br/>
                                        Account: @MetaJetzNFT
                                    </h3>
                                </div>
                                <form
                                    action="https://script.google.com/macros/s/AKfycbyg3DR2F5ff1pocCuZaJyUmt86sZ9LSrtH-KKURVZIKb8tBN9T1BMSsOmCvvCQ2FGa6/exec"
                                    method="POST" target="dummyframe2">
                                    <div className="form-group whitelistFormGroup">
                                        <label htmlFor="formGroupExampleInput" className="colorWhite">Twitter Username</label>
                                        <input name="Twitter" type="text" className="form-control" id="formGroupExampleInput"
                                            placeholder="@MetaJetzNFT"/>
                                        <small className="colorWhite form-text">We&apos;ll never share your information with anyone
                                            else.</small>
                                    </div>
                                    <br/>
                                    <div className="form-group whitelistFormGroup">
                                        <label htmlFor="formGroupExampleInput3" className="colorWhite">Email</label>
                                        <input name="Email" type="text" className="form-control" id="formGroupExampleInput3"
                                            placeholder="info@MetaJetz.io"/>
                                    </div>
                                    <div style={{display: "none"}} className="form-group">
                                        <label htmlFor="formGroupExampleInput3" className="colorWhite">Source</label>
                                        <input name="Source" type="text" className="form-control" id="rsvpSource"/>
                                    </div>

                                    <br/>
                                    <div id="rsvpSubmit" className="whitelistSubmit">
                                        <button onClick="rsvpSubmit()" type="submit" className="btn btn-primary"
                                            value="Join">RSVP</button>
                                    </div>
                                </form>
                                <div id="rsvpSuccess" className="congrats">
                                    Thank you for the RSVP, we are looking forward to seeing you there!
                                </div>
                            </div>
                        </div>
                        <br/>
                        <hr style={{color: "white"}}/>
                        <br/>
                        <div className="inner_section">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-responsive main-page-img img2" src="images/twistmove_small_sharp.gif" alt=""/>
                                </div>
                                <div className="col-md-6">
                                    <h1 className="mj-color about-header">About
                                        Metajetz</h1>
                                    <br/>
                                    <span className="mj-color">We have all seen the pictures and videos of celebrities,
                                        politicians, and moguls flying in their private jets. Some people have big
                                        dreams
                                        and want to work so hard that they don&apos;t have to fly commercial. Some people
                                        want to
                                        fly in style and luxury in their own private jet. While this may be a lofty goal
                                        for
                                        most, with our collection, we aim to offer 9,9999 unique private jet NFTs for
                                        whoever wants to fly in style in the metaverse.
                                    </span>
                                    <br/>
                                    <br/>
                                    <span className="mj-color">
                                        With this project we aim to bring awarness to negative affects on climate change
                                        the
                                        airline industry has. All of our private jet NFT&apos;s are 100% electric, because of
                                        the
                                        less harmful effects compared to gas engines. More sustainable jetting is the
                                        future
                                        of aviation,
                                        and you can get on board by making some noise as a holder of you very own jet.
                                        We also want provide the best community and benefits to our holders, as well as
                                        fostering a collaborative and enjoyable place for everyone to communicate.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <hr style={{color: "white"}}/>
                        <br/>
                        <div className="inner_section">
                            <div className="">
                                <h1 className="mj-color about-header">Utility</h1>
                                <br/>
                                <span className="mj-color">Each of our four drops is going to have a different package to
                                    upgrade your travel experience. For specific details check out our whitelist and
                                    discord. The perks range from access to airport lounges, luxury airbnb’s and private
                                    vacation stays, private island getaways and private jet trips, all the way to discounts
                                    on private jet chartering, hotels, and restaurants.
                                </span>
                                <br/>
                                <br/>
                                <span className="mj-color">
                                    The most exciting aspect of MetaJetz is going to be our Web3 metaverse integration.
                                    Since our MetaJetz are all-electric 3D private jetz, you will be able to use your jet in
                                    the metaverse. Think of it like the Tesla of metaverse transportation. The possibilities
                                    are endless! You can fly you jet around, or rent it out for passive income.
                                </span>
                            </div>
                        </div>
                        <br/>
                        <hr style={{color: "white"}}/>
                    </div>
                </div>
                <br/>
                <br/>
                <h2 className="-mt-12 text-center text-4xl uppercase text-sea-600 md:text-7xl lg:-mt-24 mj-color">Roadmap
                    2022-2023+
                </h2>
                <br/>
                <div className="mint-image-div" style={{margin: "auto", textAlign: "center"}}> <img className="roadmap-img img-responsive main-page-img" src="images/roadmap.png" alt=""/>
                </div>
                <br/>
                <div className="container mj-color">
                    <div className="main-timeline">
                        {/* <!-- start experience section--> */}
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">May</span>
                                        <span className="year">2022</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Community Building &amp; Design</h5>
                                <p className="description">
                                    We welcome all to the MetaJetz community! We want to grow our members who are
                                    genuinely
                                    excited about this journey and believe in the project.
                                </p>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}

                        {/* <!-- start experience section--> */}
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Aug</span>
                                        <span className="year">2022</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Generate Noise</h5>
                                <p className="description">
                                    Increase members in discord, and followers on social media. Host community give
                                    aways
                                    and contests. Build partnerships for the project & get community hyped!
                                </p>
                            </div>
                        </div>

                        {/* <!-- start experience section--> */}
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Fall</span>
                                        <span className="year">2022</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Previews & Presale list</h5>
                                <p className="description">
                                    As we conitnue building out the artwork with our partners we will give sneak peaks.
                                    White list will start to be formed. We will working on providing the best experience to
                                    get the biggest community we can. This includes multiple wallet minting, and credit card
                                    integration.
                                </p>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}

                        {/* <!-- start experience section--> */}
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Mid</span>
                                        <span className="year">Jan</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Stage 1 Drop Mint</h5>
                                <p className="description">
                                    4,000 of the Sparrow 977<br/>
                                    Whitelist: 500 for 0.035 ETH each, Public Sale: 3,500 for 0.07 ETH each.
                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Mid</span>
                                        <span className="year">Feb</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Stage 2 Drop Mint</h5>
                                <p className="description">
                                    3,400 of the Seahawk 677<br/>
                                    Whitelist: 500 for 0.07 ETH each, Public Sale: 2,900 for 0.14 ETH each.

                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Mid</span>
                                        <span className="year">Mar</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Stage 3 Drop Mint</h5>
                                <p className="description">
                                    2,500 of the Speed Demon 477<br/>
                                    Whitelist: 500 for 0.1 ETH each, Public Sale: 2,000 for 0.2 ETH each.

                                </p>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Mid</span>
                                        <span className="year">Apr</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Stage 4 Drop Mint</h5>
                                <p className="description">
                                    99 of the Bold Mamba 177.<br/>
                                    Whitelist: 19 for 1 ETH each, Public Sale: 80 for 2 ETH each.<br/>
                                    This plane will be the very best. Holders of other drops will
                                    be given priority, so stay tuned!
                                </p>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}

                        {/* <!-- start experience section--> */}
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                        <span className="month">Now</span>
                                        <span className="year">2023+</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Future Planning</h5>
                                <p className="description">
                                    This isn&apos;t a one time drop of NFT&apos;s. We want to continue building the community over
                                    time. Your input is valued! Any ideas you have to make MetaJetz the best project
                                    and community around are welcomed with open arms. We will begin getting perks for
                                    holder
                                    lined up to help you get the utility promised out of the jetz.
                                </p>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}

                    </div>
                </div>


                <section id="roadmap">
                    <div className="container mj-color">
                        <hr className="horizontal-bar" style={{size: "3", color: "white"}}/>
                        <h2 style={{textAlign: "center"}}>Meet the Team</h2>
                        <div className="roadmap_wrapper">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="roadmap_icon"> <span><i className="fa fa-plane"></i></span> </div>
                                    <div className="roadmap_block">
                                        <h3 className="animated fadeInUp wow"><span>Kearvyn Arne<a
                                                    className="nav-link header-text-color linkedin"
                                                    href="https://www.linkedin.com/in/kearvyn-arne-a96991105/"
                                                    target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a></span></h3>
                                        <p className="animated fadeInDown wow">Co-Founder<br/>CEO & Certified BlockChain
                                            Specialist<br/>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="roadmap_icon icon2"> <span><i className="fa fa-shuttle-space"></i></span>
                                    </div>
                                    <div className="roadmap_block">
                                        <h3 className="animated fadeInUp wow"><span>Christian Perez<a
                                                    className="nav-link header-text-color linkedin"
                                                    href="https://www.linkedin.com/in/christian-perez-a9b22b141/"
                                                    target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a></span></h3>
                                        <p className="animated fadeInDown wow">Co-Founder<br/>NFT & Crypto Specialist<br/>MIT
                                            Grad<br/>

                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="roadmap_icon icon3"> <span><i className="fa fa-fighter-jet"></i></span>
                                    </div>
                                    <div className="roadmap_block">
                                        <h3 className="animated fadeInUp wow"><span>Jack Dulsky<a
                                                    className="nav-link header-text-color linkedin"
                                                    href="https://www.linkedin.com/in/jack-dulsky-85363b124/"
                                                    target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a></span></h3>
                                        <p className="animated fadeInDown wow">Co-Founder<br/>Full Stack Developer<br/>MIT
                                            Grad<br/>

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="roadmap_icon"> <span><i className="fa fa-plane-departure"></i></span> </div>
                                    <div className="roadmap_block">
                                        <h3 className="animated fadeInUp wow">Aakriti Raj</h3>
                                        <p className="animated fadeInDown wow">Business & Marketing</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="roadmap_icon icon2"> <span><i className="fa fa-plane-circle-check"></i></span>
                                    </div>
                                    <div className="roadmap_block">
                                        <h3 className="animated fadeInUp wow">Ryan</h3>
                                        <p className="animated fadeInDown wow">Business & Marketing
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="roadmap_icon icon3"> <span><i className="fa fa-plane-arrival"></i></span>
                                    </div>
                                    <div className="roadmap_block">
                                        <h3 className="animated fadeInUp wow">Grace</h3>
                                        <p className="animated fadeInDown wow">Business & Marketing
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="OnlinePublications">
                    <div className="container mj-color">
                    <hr className="horizontal-bar" style={{size: "3", color: "white"}}/>
                        <h2 style={{textAlign: "center"}}>External Links</h2>
                        <div className="roadmap_wrapper">
                            <div className="row">
                                <div className="col" style={{textAlign: "center"}}>
                                    <a target="_blank" rel="noopener noreferrer" href="https://raritysniper.com/nft-drops-calendar/">
                                        <img className="external-link" src="images/RaritySniper.png" alt=""/>
                                    </a>
                                </div>
                                <div className="col" style={{textAlign: "center"}}>
                                    <a target="_blank" rel="noopener noreferrer" href="https://nftdroops.com/">
                                        <img className="external-link" style={{marginTop: "7%"}}
                                            src="images/NFTdroops-logo.png.webp" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" style={{textAlign: "center"}}>
                                    <a target="_blank" rel="noopener noreferrer" href="https://nftcalendar.io">
                                        <img className="external-link" src="images/NFTCalendarLogo.jpeg" alt=""/>
                                    </a>
                                </div>
                                <div className="col" style={{textAlign: "center"}}>
                                    <a target="_blank" rel="noopener noreferrer" href="https://nftsolana.io/">
                                        <img className="external-link" style={{marginTop: "23%"}} src="images/NFTSolCalLogo.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div id="whitepaper-page" data-tab-content className="mj-color">
                <div className="whitepaper-section">
                    <h1>White Paper</h1>
                    <br/>
                    <br/>
                    <hr style={{color: "white", width: "80%", margin: "auto"}}/>
                    <br/>
                    <br/>
                    <h2 style={{marginBottom: "25px"}}>MetaJetz</h2>
                    <br/>
                    <div className="WhitePaperSection">
                    <p className="WhitePaperBlockText">
                        In an alternate universe where all creatures are aware of each other and live connected lives, we
                        as human beings may not be seen as the prime species. Hypothetically, there would be no primal
                        species because we are all living connected lives where we all play important roles.
                        Alright let&rsquo;s cut the bullshit, no alternate realities or universes. This project is the most
                        realistic way an NFT can be connected to the real world with actual benefits.
                        Luxury transportation is a dream to many and the founders of this project have spent the past seven
                        months working tirelessly to utilize the NFT marketplace and make this all possible.</p>
                    <p className="WhitePaperBlockText">
                        The MetaJetz project was founded by a group of creators that are driven to give people all over the
                        world the opportunity to possess an NFT that is the key to a new reality for a regular person. This
                        project aims to cater to the curious minds eager to be a part of the new and fast rising digital age
                        known as the metaverse. The globe travelers who enjoy experiencing new cultures and scenery. The
                        environmentalists who care about preserving our world that is being disturbed by global warming.
                        Look no further.</p>

                    <p className="WhitePaperBlockText">
                        How can an NFT cater to so many diverse and complex needs you might ask? A MetaJetz is an asset in
                        the form of an NFT that will serve as a key to many travel incentives whilst also earning currency
                        when rented in the metaverse. It is also a fully electric aircraft prototype which is an avenue to
                        raise awareness against the fossil fuel emissions traditional aircrafts create and harm our airspace
                        and environs. Steady donations from this project are made towards the research and development of
                        real life electric aircrafts.</p>

                    <p className="WhitePaperBlockText"> Owning a MetaJetz is having the best of both worlds, a stake in the web3
                        space and an appreciating
                        asset in today&apos;s world that provides utility towards exclusive travel packages and so much more.</p>


                    <p className="WhitePaperBlockText">The Sparrow 977, Seahawk 677, Speed Demon 477 and Bold Mamba 177 are all
                        aircrafts that holders will
                        stand a chance of owning. Private hangars and custom cabin crews are the name of the game with our
                        NFT&rsquo;s. A first of its kind is this project.</p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <hr style={{color: "white", width: "80%", margin: "auto"}}/>
                    <br/>
                    <br/>
                    <h2 style={{marginBottom: "25px"}}>MetaJetz Core Value</h2>
                    <br/>
                    <div className="WhitePaperSection">
                    <p className="WhitePaperBlockText">
                        Just like any major airline operating in the transportation and hospitality business, our project is
                        specifically tailored to serving our community first. With several months of conscious research, we
                        are here to really bridge the gap between the metaverse and the real world as simply as possible.
                        Creating avenues for everyone to get involved with the Web3 revolution as it is fast rising.
                        Cryptocurrency and smart contracts had a quite complicated introduction to many as it all seemed
                        like educated gambling for many and a trend for a quick increase to most.</p>
                    <p className="WhitePaperBlockText">
                        However, the phenomenon that is the metaverse, a world of virtual reality that will bring fantasies
                        to life and make the most unlikely experiences a possibility is a revolution for us all. We at
                        MetaJetz
                        are rolling out collections of NFT&rsquo;s that serve as assets in the metaverse with a wide range
                        of utility and fiscal properties. MetaJetz is a movement with longevity not a trend for clout.</p>

                    <p className="WhitePaperBlockText">As frontrunners in our industry, we pay attention to detail and plan to
                        leave our mark wherever our
                        products are launched. This is why 1% of royalties from jet renting will be donated to charities
                        located in cities a metjetz takes off and lands. This is one of our ways of giving back to the
                        community.</p>

                    <p className="WhitePaperBlockText"> Our planet is our home which we have to treat with care, all
                        MetaJetz&rsquo;s are fully electric
                        aircrafts. We have decided to do this as a measure to bring awareness to fossil fuel pollution and
                        its impact on our planet. Traditional aircrafts emit high levels of fossil fuel pollutants into the
                        environment whilst consuming a lot of resources to run. Our MetaJetz founders are constantly
                        donating to research development projects that will see the first fully electric running aircrafts
                        by 2027.</p>

                    <p className="WhitePaperBlockText"> A movement for longevity and not a trend for clout, Remember.</p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <hr style={{color: "white", width: "80%", margin: "auto"}}/>
                    <br/>
                    <br/>
                    <h2 style={{marginBottom: "25px"}}>MetaJetz Features</h2>
                    <br/>
                    <div className="WhitePaperSection">
                    <p className="WhitePaperBlockText"> Each MetaJetz is an intricate work of art, hand drawn with hollow and
                        very aerodynamic designs.
                        Vibrant color schemes all across the selections ensure that every buyer is able to satisfy their
                        palette. <br/>
                        <br/>
                        Also, not to forget our distinct logo&rsquo;s that sit perfectly at the tail of the aircrafts. A
                        zoomed in image of every MetaJetz tail possesses a unique barcode that will serve as authentication
                        and access to private events and MetaJetz rewards.</p>

                    <p className="WhitePaperBlockText"> MetaJetz caters to our community and is bringing luxury into the Web3
                        space. This is why every
                        detail is critically analyzed. Owners will have the opportunity to customize the interior of their
                        MetaJetz to their specific luxurious taste, this feature will be available after our first
                        season.<br/>
                        <br/>
                        Our base interior design consists of the finest porcelain Italian leather seats and benches, light
                        granite finishes and counter tops with gold plated embellishments. Hand stitched headrests and a
                        complimentary Hermes blanket for the comfort of our flyers.</p>

                    <p className="WhitePaperBlockText">Cabin crew personnel and uniforms will be airdropped to MetaJetz holders.
                        This is as a subsequent
                        package deal for our community members so be sure to keep a close eye on our discord.</p>

                    <p className="WhitePaperBlockText"> Movement for longevity and not a trend for clout.</p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <hr style={{color: "white", width: "80%", margin: "auto"}}/>
                    <br/>
                    <br/>
                    <h2 style={{marginBottom: "25px"}}>Utility - Scarcity & Value</h2>
                    <br/>
                    <div className="WhitePaperSection">
                    <p className="WhitePaperBlockText">
                        The MetaJetz launch scheme is a straightforward process but it is also very important to understand
                        how to go about it. What and how you mint could dictate your position in the virtual matrix and so
                        it is important to go for gold while it is available. This project will sell out and it will only
                        get more and more elite</p>

                    <p className="WhitePaperBlockText" style={{textAlign: "center !important", paddingBottom: "0px !important"}}>
                        4000 Light MetaJetz&rsquo;s : The Sparrow 977&rsquo;s</p>
                    3400 Midsize MetaJetz&rsquo;s : The Seahawk 677&rsquo;s<br/>
                    2500 Heavy MetaJetz&rsquo;s : The Speed Demon 477&rsquo;s<br/>
                    99 Executive Meta Jetz : The Bold Mamba 177&rsquo;s<br/>
                    <br/>

                    <p className="WhitePaperBlockText">Above is the MetaJetz&rsquo;s roll out ranking in order of most exclusive
                        to least exclusive. Our
                        Executive MetaJetz holders are automatically enrolled into our elite program that sees to an
                        upgraded MetaJetz package that will consist of access to airport lounges, luxury airbnb&rsquo;s and
                        private vacation stays, private island getaways and private jet trips in the future and on the
                        company terms and conditions.</p>

                    <p className="WhitePaperBlockText">The 2nd Tier packages involve our intermediary Heavy and MidSize MetaJetz
                        holders which will also
                        have access to lounges but at select locations, gift cards and shopping vouchers, discounted
                        vacation stays and airbnb&rsquo;s and so much more! All as subsequent plans for our loyal and devout
                        community members invested in the longevity of this project. Company Terms &amp; Conditions apply.
                    </p>

                    <p className="WhitePaperBlockText">Our 3rd Tier packages involve our final level Light MetaJetz holders who
                        will have access to
                        brochures and packages, periodical flight upgrades that could be as high as business class,
                        restaurant and concierge discounts at select partner hotels and restaurants. All as subsequent plans
                        in our roadmap for loyal and devout community members invested in the longevity of this project.
                        Company Terms and Conditions apply.</p>

                    <p className="WhitePaperBlockText">MetaJetz packages are carefully catered to see that holders get
                        significant value for their
                        investments. Every single MetaJetz is eligible for our baseline utilities, such as exclusive access
                        to our in person events and unrivalved access to our amazing community. You could also choose to be
                        renting
                        the aircrafts in the metaverse for crypto currency which can be traded in for monetary value. As
                        always it is advised to hold because
                        Remember? We are a movement with longevity and not a trend for clout. </p>
                    </div>
                    
                    <br/>
                    <br/>
                    <br/>
                    <hr style={{color: "white", width: "80%", margin: "auto"}}/>
                    <br/>
                    <br/>
                    <h2 style={{marginBottom: "25px"}}>Pre-Mint RoadMap</h2>
                    <br/>
                    <div className="WhitePaperSection">
                    <p className="WhitePaperBlockText">
                        A project like our with so much buzz and excitement requires a lot of attention to detail with
                        marketing and campaigns. Unsurprisingly, we are delving into an industry with short sighted goals
                        and are devoted to making MetaJetz succeed long term. It starts with creating the best community and
                        environment for our members and holders</p>

                    <p className="WhitePaperBlockText"> We at MetaJetz can only change the narrative by leading through example,
                        this is why we have
                        involved members of the public in our marketing campaigns to ensure transparency. We have made elite
                        member spots and whitelists positions available through workrate and not randomized systems.</p>

                    <p className="WhitePaperBlockText"> Partnerships with major airline companies to push our narrative and
                        incorporate fiscal benefits for
                        our holders have been in the works and we are only ever expanding to increase our networks. Due to
                        copyright and exclusivity reasons, we can not currently disclose our current partners but the
                        unveiling will be very soon. Exciting benefits such as discounts on private jet charter rates and
                        flight rates with well known airlines are in the works.<br/>
                        Be sure to updated on the discord server for more information.</p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <hr style={{color: "white", width: "80%", margin: "auto"}}/>
                    <br/>
                    <br/>
                    <h2 style={{marginBottom: "25px"}}>Post-Mint RoadMap</h2>
                    <br/>
                    <div className="WhitePaperSection">
                        
                    <p className="WhitePaperBlockText">
                        Our community is here to thrive and for that to happen, we need to work
                        together. We are simultaneously selling assets to the public and creating a network of individuals
                        connected
                        through a vision of excellency. All holders will be enrolled in our holders forum known as the
                        Hangar where real life ideas and opportunities for lucrative benefits will be shared.
                        An exclusive portion of our discord is organized to share essential information for a progressive
                        community.
                    </p>

                    <p className="WhitePaperBlockText"> Private MetaJetz flights will also be made available shortly after the
                        season 1 launch is complete
                        to fly some of our elite holders and most charismatic and engaging holders to our project
                        destinations to see some of the ongoing projects such as MetaJetz lounges, mobile hotels and Yacht
                        docks.</p>

                    <p className="WhitePaperBlockText"> We will be developing the 3D NFT capabilities in the metaverse, so you
                        can
                        take you jet around with you wherever you go. You will be able to rent out your jet to others in the
                        metaverse
                        to earn real life passive income.
                    </p>

                    <p className="WhitePaperBlockText">MetaJetz is dedicated to the community that makes MetaJetz the very best,
                        so we will be giving 1% of the proceeds to chartity to help fight aviation climate change as well as
                        provide accessible travel for those in need.
                    </p>

                    <p className="WhitePaperBlockText">
                        A lot of exciting things to come, this project does not end with a mint. It is just starting and so
                        this whitepaper will constantly be updated with new information.</p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <hr style={{color: "white", width: "80%", margin: "auto"}}/>
                    <br/>
                    <br/>
                    <h2 style={{marginBottom: "25px"}}>Founders</h2>
                    <br/>
                    <div className="WhitePaperSection">
                    <p className="WhitePaperBlockText">
                        The founders of MetaJetz are three extremely talented individuals who have put a team together that
                        is set up to succeed. They are dedicated to the projects success and are fully doxxed to reflect
                        their committment to FlyVersLabs and MetaJetz <br/><br/><a style={{color: "red"}}
                            href="https://www.linkedin.com/in/kearvyn-arne-a96991105/" target="_blank" rel="noopener noreferrer">Kearvyn Arne</a> is
                        an entrepreneur and is the CEO of FlyVerseLabs (the company
                        putting on the MetaJetz project). He has started other successful companies before and is proud to
                        be
                        leading this project.<br/><br/>Next up we have <a style={{color: "red"}}
                            href="https://www.linkedin.com/in/jack-dulsky-85363b124/" target="_blank" rel="noopener noreferrer">Jack Dulsky</a>, who
                        is an extremely smart full
                        stack developer
                        and is handling everything technical with the project. He was educated at MIT, and has real world
                        experience as a developer.<br/><br/>Finally we have <a style={{color: "red"}}
                            href="https://www.linkedin.com/in/christian-perez-a9b22b141/" target="_blank" rel="noopener noreferrer">Christian
                            Perez</a>. He
                        graduated MIT alongside Jack. He
                        brings an excellent expertise in Web3 and NFT, and is able to guide the project operationally and
                        support it technically.
                    </p>
                    </div>
                </div>
            </div>
            <div id="mint-page" data-tab-content className="mj-color">
                <div className="container-md">
                    <div className="row" style={{paddingTop: "100px", textAlign: "center"}}>
                        <div className="col-md-6 mint-image-div" style={{margin: "auto"}}> <img style={{width: "62% !important"}}
                                className="img-responsive main-page-img" src="images/Sparrow977_2.png" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h2 className="mj-color mint-title">Mint Metajetz Sparrow 977
                                NFT</h2>
                            <h1 className="mj-color mint-count"><span id="totalMintCount"></span> / <span
                                    id="collectionCount"></span></h1>
                            <p className="mj-color">Whitelist mint price: 0.035 ETH</p>
                            <p className="mj-color">Public mint price: 0.07 ETH</p>
                            <button type="button" className="btn btn-secondary btn-rect btn-xl" data-bs-toggle="modal"
                                data-bs-target="#connectModal" id="connectWalletButton">Connect Wallet</button>
                            <br/>
                            <button type="button" className="btn btn-danger btn-circle btn-xl" data-bs-toggle="modal"
                                data-bs-target="#mintModal">Mint</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact-page" data-tab-content className="mj-color">
                <div className="contact-section">
                    <h2>How to Contact Us</h2>
                    <h6>If you have any questons, or need help please contact us. The best way to do so is by messaging on
                        the discord and by creating a ticket. Or feel free to email info@metajetz.io and we will get back to you as soon as we can.</h6>
                </div>
            </div>
        </div>




      {/* <!-- Connect Wallet Modal --> */}
      <div className="modal" id="connectModal">
          <div className="modal-dialog">
              <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                      <h4 className="modal-title">Connect Ethereum Wallet</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                      Please make sure you are connecting an Ethereum Wallet. Other chains will not be able to mint.
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                          data-bs-target="#disabledModal">Connect</button>
                  </div>
              </div>
          </div>
      </div>

      {/* <!-- Mint Pop up modal --> */}
      <div className="modal" id="mintModal">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <h4 className="modal-title">Mint</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                      <span>
                          Release Date: December 25th, 2022
                          <br/>
                          Releast Time: 5:30 PM EST
                      </span>
                      <br/>
                      <br/>
                      <br/>
                      <div>
                          <span>
                              Select Quantity
                          </span>
                          <span className="mint-quantity-select-group">
                              <select className="form-select">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                              </select>
                          </span>
                      </div>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                          data-bs-target="#disabledModal">Mint</button>
                  </div>
              </div>
          </div>
      </div>

      {/* <!-- Mint Disabled Modal --> */}
      <div className="modal" id="disabledModal">
          <div className="modal-dialog">
              <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                      <h4 className="modal-title">Disabled</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                      <span>
                          Please try again when available
                      </span>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
      </div>
  )
}
