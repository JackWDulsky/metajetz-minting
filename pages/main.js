import React from "react";
import { rsvpSubmit } from "../utils/Helper";

export default function main() {
    return (
        <div id="main-page" className="bg-black">
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
                                <button onClick={() => rsvpSubmit()} type="submit" className="btn btn-primary"
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
        <h2 className="-mt-12 text-center text-4xl uppercase text-sea-600 md:text-7xl mj-color">Roadmap
            2022-2023+
        </h2>
        <br/>
        <div className="mint-image-div" style={{margin: "auto", textAlign: "center"}}> <img className="roadmap-img img-responsive main-page-img" style={{margin: "auto"}} src="images/roadmap.png" alt=""/>
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
    )
}
