	
	import React from "react";
	import Navbar2 from "../layout/headers/Navbar2";
	import ContactDetailsSection from "../components/contact/contactUs1/ContactDetails";
	import GetInTouchSection from "../components/contact/contactUs1/GetInTouch";
	import FooterHome from "../layout/footers/FooterHome";
	import { useTranslation } from "next-i18next";
	import { serverSideTranslations } from "next-i18next/serverSideTranslations";
	
	export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
	
		const Ciscenje=()=>{
			const {t}=useTranslation("common");
	
			return(
			<body style={{position:'absolute',width:'100%',top:0}} className="home-green-color">
				<div className="offwrap"></div>
	
			{/*<--Preloader start here-->*/}
	
			{/*<--Preloader area end here-->*/}
				
			{/*<-- Main content Start -->*/}
			<div className="main-content">
	<Navbar2/>
				{/*<--Full width header Start-->*/}
				
				{/*<--Full width header End-->*/}
	
				{/*<-- Slider Start -->*/}
				<div id="rs-slider" className="rs-slider rs-slider-style3">
					<div className="bend niceties">
						<div id="nivoSlider" className="slides">
						<video className="video" width="100%" autoplay="autoplay" loop="true" muted defaultmuted playsinline >
	  <source src="/assets/video/white-homes-ciscenje.mp4" type="video/mp4"/>
	  <source src="/assets/video/white-homes-ciscenje.mp4" type="video/ogg"/>
	  Your browser does not support the video tag.
	</video>
						</div>
						{/*<-- Slide 1 -->*/}
						<div id="slide-1" className="slider-direction">
							
							<div className="content-part">
								
								<span className="sl-subtitle">{t("Dobrodošli")}</span>
								<h1 className="sl-title">{t("WHITE HOMES cleaning")}</h1>
								<h4 className="sl-title-small">{t("Održavanje i čišćenje objekata sa najkvalitetnijim mašinama i sredstvima za čišćenje kojima upravlja pouzdan i obučen tim.")} </h4>
								   <div className="slider-bottom">
									   <a className="readon slide-con" href="contact.html">{t("Saznaj više")}</a>
								   </div>
							</div>
						</div>
						{/*<-- Slide 2 -->*/}
						
					</div>
				</div>
				{/*<-- Slider End -->*/}
	
				{/*<-- Services Section Start -->*/}
			
				{/*<-- Services Section End -->*/}
			   
				{/*<-- About Section Start -->*/}
				<div id="rs-about" className="rs-about style3 pt-120 pb-120 md-pt-75 md-pb-80 blue-light">
					<div className="container">
						<div className="row y-middle">
							<div className="col-lg-6 md-mb-50 pr-112 md-pr-15">
							   <div className="sec-title">
									   <span className="sub-text green-color">{t("Zašto odabrati White Homes cleaning?")}</span>
									   <h2 className="title pb-30">
									   {t("White Homes cleaning nudi brzo i jednostavno rješenje za potrebe čišćenja vašeg doma.")}
									   </h2>
									   
									   <ul className="brush-list">
									   <p  className="desc" style={{padding:'20px 0px'}}>
									   {t("Uz profesionalna sredstva za sve namjene čišćenja i dezinfekcije, profesionalne mašine vrhunskog kvaliteta, naši agenti vrijedno obavljaju svoje zadatke uz poseban osvrt na detalje.")}
	<br/>{t("Sa")} <strong>White Homes cleaning</strong> {t("takođe pomažete donijeti više pravde u industriju profesionalnog čišćenja! Uostalom, naše zaposlenike vidimo kao heroje u sjeni čiji svakodnevni naporan rad i predanost neprestano pomažu razvoju i napretku industrije čišćenja doma.")} </p>
	
									   </ul>
									   <div className="btn-part mt-44">
										   <a className="readon view discover" href="#rs-services">{t("Naše usluge")}</a>
									   </div>
							   </div>
							</div>
							<div className="col-lg-6">
								<div className="about-img">
									<img style={{height:'100%',width:'100%'}} src="/assets/images/white-homes-ciscenje.jpeg" alt="About"/>
									<div className="about-widget">
										<div className="counter-part">
											<div className="rs-count plus">10</div>
											<p className="title">{t("Godina iskustva")}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="rs-animation">
						<img src="/assets/images/white-home-ciscenje.jpeg" alt=""/>
					</div>
				</div>
				{/*<-- About Section End -->*/}
			
				{/*<-- Counter Section Start -->*/}
				
				{/*<-- Counter Section End -->*/}
	
				{/*<-- Choose Section Start -->*/}
			
				{/*<-- Choose Section End -->*/}
	
				{/*<-- Services Section Start -->*/}
				<div id="rs-services" className="rs-services services-style5 gray-bg2 pt-115 pb-120 md-pt-75 md-pb-80">
					<div className="container custom2">
					   <div className="sec-title text-center mb-55">
							   <span className="sub-text green-color">{t("Cijenjene usluge")}</span>
							   <h2 className="title">
							   {t("Koje usluge čišćenja nudi White Homes cleaning?")}
							   </h2>
					   </div>
						<div className="row y-middle">
							<div className="col-lg-4 col-md-6 mb-20">
							   <div className="flip-box-inner">
									<div className="flip-box-wrap">
										<div className="front-part">
										   <div className="front-content-part">
												<div className="front-icon-part">
													<div className="icon-part">
			                                        <img src="/assets/images/usisivac.svg" alt=""/> 
													</div>
												</div>
												<div className="front-title-part">
													<h3 className="title"><a>{t("Usisavanje")}</a></h3>
												</div>
												<div className="front-desc-part">
											  
												</div>
											</div>
										</div>
									   
									</div>
							   </div>  
							</div>
							<div className="col-lg-4 col-md-6 mb-20">
							   <div className="flip-box-inner">
									<div className="flip-box-wrap">
										<div className="front-part">
										   <div className="front-content-part">
												<div className="front-icon-part">
													<div className="icon-part">
														<img src="/assets/images/services/style4/2.png" alt=""/> 
													</div>
												</div>
												<div className="front-title-part">
													<h3 className="title"><a>{t("Brisanje ogledala i staklenih predmeta")}</a></h3>
												</div>
												<div className="front-desc-part">
											  
												</div>
											</div>
										</div>
									  
									</div>
							   </div>  
							</div>
							<div className="col-lg-4 col-md-6 mb-20">
							   <div className="flip-box-inner">
									<div className="flip-box-wrap">
										<div className="front-part">
										   <div className="front-content-part">
												<div className="front-icon-part">
													<div className="icon-part">
														<img src="/assets/images/services/style4/3.png" alt=""/> 
													</div>
												</div>
												<div className="front-title-part">
													<h3 className="title"><a>{t("Uklanjanje prašine s dostupnih područja")}</a></h3>
												</div>
												<div className="front-desc-part">
											  
												</div>
											</div>
										</div>
									   
									</div>
							   </div>  
							</div>
							<div className="col-lg-4 col-md-6 md-mb-20">
							   <div className="flip-box-inner">
									<div className="flip-box-wrap">
										<div className="front-part">
										   <div className="front-content-part">
												<div className="front-icon-part">
													<div className="icon-part">
														<img src="/assets/images/services/style4/4.png" alt=""/> 
													</div>
												</div>
												<div className="front-title-part">
													<h3 className="title"><a>{t("Čišćenje prozora I vrata")}</a></h3>
												</div>
												<div className="front-desc-part">
											  
												</div>
											</div>
										</div>
								   
									</div>
							   </div>  
							</div>
							<div className="col-lg-4 col-md-6 sm-mb-20">
							   <div className="flip-box-inner">
									<div className="flip-box-wrap">
										<div className="front-part">
										   <div className="front-content-part">
												<div className="front-icon-part">
													<div className="icon-part">
														<img src="/assets/images/services/style4/5.png" alt=""/> 
													</div>
												</div>
												<div className="front-title-part">
													<h3 className="title"><a>{t("Iznošenje otpada.")}</a></h3>
												</div>
												<div className="front-desc-part">
											  
												</div>
											</div>
										</div>
									 
									</div>
							   </div>  
							</div>
							<div className="col-lg-4 col-md-6">
							   <div className="flip-box-inner">
									<div className="flip-box-wrap">
										<div className="front-part">
										   <div className="front-content-part">
												<div className="front-icon-part">
													<div className="icon-part">
														<img src="/assets/images/services/style4/6.png" alt=""/> 
													</div>
												</div>
												<div className="front-title-part">
													<h3 className="title"><a>{t("Čišćenje podova")}</a></h3>
												</div>
												<div className="front-desc-part">
											  
												</div>
											</div>
										</div>
									 
									</div>
							   </div>  
							</div>
						</div>
					</div>
					<p style={{textAlign:"center"}} className="title"><strong>{t("MEĐU DODATNIM USLUGAMA, PRONAĆI ĆETE:")}</strong>
					<ol style={{display:"flex",flexDirection:"column",padding:10, listStyle:"inside circle"}}>
						<li className="list-itemm">{t("Peglanje kod kuće")}</li>
					<li className="list-itemm">{t("Dubinsko pranje I usisavanje profesionalnim mašinama")}</li>
					<li className="list-itemm">{t("Pranje prozora profesionalnim mašinama")}</li>
					<li className="list-itemm">{t("Čišćenje kuhinjskog namještaja")}</li>
					<li className="list-itemm">{t("Čišćenje pećnice ili frižidera")}</li>
					</ol></p>
	
				</div>
				{/*<-- Services Section End -->*/}
	
				{/*<-- Testimonial Section Start -->*/}
	
	
				{/*<-- Contact Start -->*/}
				
				{/*<-- Contact End -->*/}
	
				{/*<-- Partner Start -->*/}
				
				{/*<-- Partner End -->*/}
				</div> 
				{/*<-- Main content End -->*/}
		 <GetInTouchSection/>
		 <ContactDetailsSection/>
	
				{/*<-- Footer Start -->*/}
				<FooterHome/>
	
				{/*<-- Footer End -->*/}
	
				{/*<-- start scrollUp  -->*/}
				
	
	
				{/*<-- Search Modal Start -->*/}
				
				</body>)
	
		}
	export default Ciscenje;
	