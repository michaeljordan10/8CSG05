import React from "react";
import b1 from '../img/banner/b1.jpg'
import b2 from '../img/banner/b2.jpg'
import b3 from '../img/banner/b3.jpg'
import b4 from '../img/banner/b4.jpg'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import adhaarenglishlogo from '../img/aadhaar_english_logo.9a2d63795a7f7bdd7acb2148585336be.svg'
import englishlogo from '../img/uidai_english_logo.dd2d2a1cdbf8dcd226664631cb383029.svg'

const br = [b1,b2,b3,b4];
const Home = () => {
 

  return (

<div>

  <input type="hidden" name="servinf" defaultValue />
  <div className="tj-overlay hide" />
  <div className="wrapper">
    <div id="header" className="uidai-header">
      <div id="header-logo" className="uidai-header-1">
        <div className="container">
          <div className="row">
            <div className="tjbase-module pull-right mt-5 pr-15 col-xs-3 text-right" id="tjmod-443">
              <div className="module-content">
                <div className="custom">
                  <p className="mb-0"><a href="/../">
                  <img className="logo-xs" src={englishlogo} alt="Aadhaar" style={{minHeight: 57}} />
                  </a></p>
                </div>
              </div>
            </div>
            <div className="tjbase-module pull-left mt-5 mb-5 pr-15 col-xs-9 text-left" id="tjmod-270">
              <div className="module-content">
                <div className="custom">
                  <p className="mb-0"><a href="/../"><img className="logo-xs" src={adhaarenglishlogo} alt="Unique Identification Authority Of India" /></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contrast-bg">
        <div id="menuSearch-languagearea" className="uidai-header-2">
          <div className="container ">
            <div className="row">
              <div className="tjbase-module  Mod-headerMobileMenu pull-left pl-15 visible-xs visible-sm pt-10" id="tjmod-271">
                <div className="module-content">
                  <div className="hamburger-toggle-btn cursor-pointer ripple" title="Navigation">
                  </div>
                  <div className="hamburger-toggle-block closed">
                    <div className="hamburger-header col-xs-12 border-bottom"><span className="hamburger-close pull-left back-menu-icon" title="Close Navigation" />
                    </div>
                    <ul className="nav   nav-pills ">
                      <li className="item-2376 current active deeper dropdown parent" data-menulevel={1}><a className="dropdown-toggle" href="/en/" data-toggle="dropdown">My Aadhaar<em className="caret" /></a>
                        <ul className="dropdown-menu">
                          <li className="item-2387 parent" data-menulevel={2}><a href="/en/my-aadhaar/update-aadhaar.html">Update Your Aadhaar</a></li>
                          <li className="item-2377 parent" data-menulevel={2}><a href="/en/my-aadhaar/get-aadhaar.html">Get Aadhaar</a></li>
                          <li className="item-3190 parent" data-menulevel={2}><a href="/en/my-aadhaar/avail-aadhaar-services.html">Aadhaar Services</a></li>
                          <li className="item-2396 parent" data-menulevel={2}><a href="/en/my-aadhaar/about-your-aadhaar.html">About your Aadhaar</a></li>
                          <li className="item-2549 parent" data-menulevel={2}> <a href="https://play.google.com/store/apps/details?id=in.gov.uidai.mAadhaarPlus&hl=en_IN" target="_blank">Aadhaar on your mobile</a></li>
                          <li className="item-2384 parent" data-menulevel={2}><a href="/en/my-aadhaar/downloads.html">Downloads</a></li>
                        </ul>
                      </li>
                      <li className="item-2465 deeper dropdown parent" data-menulevel={1}><a className="dropdown-toggle" href="/en/about-uidai.html" data-toggle="dropdown">About UIDAI<em className="caret" /></a>
                        <ul className="dropdown-menu">
                          <li className="item-2471 parent" data-menulevel={2}><a href="/en/about-uidai/unique-identification-authority-of-india.html">Unique Identification Authority of India</a></li>
                          <li className="item-2476 parent" data-menulevel={2}><a href="/en/about-uidai/legal-framework.html">Legal Framework</a></li>
                          <li className="item-2484 parent" data-menulevel={2}><a href="/en/about-uidai/work-with-uidai.html">Work with UIDAI</a></li>
                          <li className="item-2540" data-menulevel={2}><a href="/en/about-uidai/right-to-information.html">Right to Information</a></li>
                          <li className="item-2737" data-menulevel={2}><a href="/en/about-uidai/uidai-citizens-charter.html">UIDAI Citizens Charter </a></li>
                          <li className="item-4912" data-menulevel={2}> <a href="/images/Amended_Citizen_Charter_July_2023.pdf" target="_blank">Archives</a></li>
                          <li className="item-2474" data-menulevel={2}> <a href="/aadhaar_dashboard" target="_blank">Aadhaar Dashboard</a></li>
                          <li className="item-5298" data-menulevel={2}><a href="/en/about-uidai/posh-policy-and-icc.html">POSH Policy and ICC at UIDAI</a></li>
                        </ul>
                      </li>
                      <li className="item-2413 deeper dropdown parent" data-menulevel={1}><a className="dropdown-toggle" href="/en/ecosystem.html" data-toggle="dropdown">Ecosystem<em className="caret" /></a>
                        <ul className="dropdown-menu">
                          <li className="item-2414" data-menulevel={2}><a href="/en/ecosystem/uidai-ecosystem.html">UIDAI Ecosystem</a></li>
                          <li className="item-2440 parent" data-menulevel={2}><a href="/en/ecosystem/enrolment-ecosystem.html">Enrolment Ecosystem</a></li>
                          <li className="item-2814 parent" data-menulevel={2}><a href="/en/ecosystem/enrolment-documents.html">Enrolment Documents</a></li>
                          <li className="item-2416 parent" data-menulevel={2}><a href="/en/ecosystem/authentication-ecosystem.html">Authentication Ecosystem</a></li>
                          <li className="item-2434 parent" data-menulevel={2}><a href="/en/ecosystem/authentication-devices-documents.html">Authentication Devices &amp; Documents</a></li>
                          <li className="item-2457 parent" data-menulevel={2}><a href="/en/ecosystem/training-testing-certification-ecosystem.html">Training, Testing &amp; Certification Ecosystem</a></li>
                        </ul>
                      </li>
                      <li className="item-2507 deeper dropdown parent" data-menulevel={1}><a className="dropdown-toggle" href="/en/media-resources.html" data-toggle="dropdown">Media &amp; Resources<em className="caret" /></a>
                        <ul className="dropdown-menu">
                          <li className="item-2510 parent" data-menulevel={2}><a href="/en/media-resources/media.html">Media</a></li>
                          <li className="item-2514 parent" data-menulevel={2}><a href="/en/media-resources/resources.html">Resources</a></li>
                          <li className="item-2890 parent" data-menulevel={2}><a href="/en/media-resources/uidai-documents.html">UIDAI Documents</a></li>
                          <li className="item-2519 parent" data-menulevel={2}><a href="/en/media-resources/brand-aadhaar.html">Brand Aadhaar</a></li>
                        </ul>
                      </li>
                      <li className="item-2523 deeper dropdown parent" data-menulevel={1}><a className="dropdown-toggle" href="/en/contact-support.html" data-toggle="dropdown">Contact &amp; Support<em className="caret" /></a>
                        <ul className="dropdown-menu">
                          <li className="item-2524 parent" data-menulevel={2}><a href="/en/contact-support/have-any-question.html">Have any Question?</a></li>
                          <li className="item-2531 parent" data-menulevel={2}><a href="/en/contact-support/grievance-redressal.html">Grievance Redressal Mechanism</a></li>
                          <li className="item-2541" data-menulevel={2}><a href="/en/contact-support/rti.html">Right to Information</a></li>
                          <li className="item-2743" data-menulevel={2}><a href="https://myaadhaar.uidai.gov.in/grievance-feedback" onclick="window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,');return false;">Feedback</a></li>
                          <li className="item-2529" data-menulevel={2}><a href="/en/contact-support/uidai-headquarter.html">Head Office (HO)</a></li>
                          <li className="item-2530" data-menulevel={2}><a href="/en/contact-support/regional-offices.html">Regional Offices</a></li>
                          <li className="item-5288" data-menulevel={2}> <a href="https://myaadhaar.uidai.gov.in/file-complaint" target="_blank">File-Complaint</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tjbase-module col-md-9  col-sm-8  col-xs-2 ttpl-megamenu hidden-xs hidden-sm" id="tjmod-297">
                <div className="module-content">
                  <div id="js-mainnav" className="clearfix megamenu horizontal left white noJS">
                    <div id="css3-megaMenuToggle" className="megaMenuToggle">
                      Menu <span className="megaMenuToggle-icon" />
                    </div>
                    <div className="js-megamenu clearfix" id="js-meganav">
                      <ul className="megamenu level0">
                        <li className="mega first haschild active submenu-align-auto"><a href="/en/" className="mega first haschild active " id="menu2376"><span className="menu-title"><i className="font-icon " />My Aadhaar</span></a>
                          <div className="childcontent cols6 ">
                            <div className="childcontent-inner-wrap">
                              <div className="childcontent-inner clearfix" style={{width: 1024}}>
                                <div className="megacol column1 first" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/my-aadhaar/update-aadhaar.html" className="mega first group " id="menu2387"><span className="menu-title"><i className="font-icon " />Update Your Aadhaar</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/du/en" target="_blank" className="mega first " id="menu4635"><span className="menu-title"><i className="font-icon " />Document update</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en" target="_blank" className="mega " id="menu2392"><span className="menu-title"><i className="font-icon " />Check Aadhaar Update Status</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/" target="_blank" className="mega " id="menu2806"><span className="menu-title"><i className="font-icon " />Update Demographics Data &amp; Check Status</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://uidai.gov.in/en/my-aadhaar/downloads/enrolment-and-update-forms.html" target="_blank" className="mega " id="menu5309"><span className="menu-title"><i className="font-icon " />Enrolment &amp; Update Forms</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://uidai.gov.in/images/Aadhaar_Enrolment__and__Update__-__English.pdf" target="_blank" className="mega " id="menu5308"><span className="menu-title"><i className="font-icon " />Aadhaar Enrolment &amp; Update Charges</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/" target="_blank" className="mega " id="menu2558"><span className="menu-title"><i className="font-icon " />Aadhaar Update History</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="https://appointments.uidai.gov.in/easearch.aspx" target="_blank" className="mega last " id="menu5108"><span className="menu-title"><i className="font-icon " />Update Aadhaar at Enrolment/Update Center</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column2" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-fullwidth">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/my-aadhaar/get-aadhaar.html" className="mega first group " id="menu2377"><span className="menu-title"><i className="font-icon " />Get Aadhaar</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="https://appointments.uidai.gov.in/bookappointment.aspx" target="_blank" className="mega first " id="menu4858"><span className="menu-title"><i className="font-icon " />Book an Appointment</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/check-aadhaar" target="_blank" className="mega " id="menu2380"><span className="menu-title"><i className="font-icon " />Check Aadhaar Status</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/downloadadhaarcard" target="_blank" className="mega " id="menu2381"><span className="menu-title"><i className="font-icon " />Download Aadhaar</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/genricPVC/en" target="_blank" className="mega " id="menu4885"><span className="menu-title"><i className="font-icon " />Order Aadhaar PVC Card</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/checkStatus/en" target="_blank" className="mega " id="menu4899"><span className="menu-title"><i className="font-icon " />Check Aadhaar PVC Card Status</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://bhuvan.nrsc.gov.in/aadhaar/" className="mega " id="menu4936"><span className="menu-title"><i className="font-icon " />Locate an enrolment center in Bhuvan Aadhaar</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://uidai.gov.in/images/Aadhaar_Enrolment__and__Update__-__English.pdf" target="_blank" className="mega " id="menu5345"><span className="menu-title"><i className="font-icon " />Aadhaar Enrolment &amp; Update Charges</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="https://uidai.gov.in/en/my-aadhaar/downloads/enrolment-and-update-forms.html" target="_blank" className="mega last " id="menu5346"><span className="menu-title"><i className="font-icon " /> Enrolment &amp; Update Forms</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column3" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/my-aadhaar/avail-aadhaar-services.html" className="mega first group " id="menu3190"><span className="menu-title"><i className="font-icon " />Aadhaar Services</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/verifyAadhaar" target="_blank" className="mega first " id="menu3840"><span className="menu-title"><i className="font-icon " />Verify an Aadhaar Number</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/verify-email-mobile/en" target="_blank" className="mega " id="menu2406"><span className="menu-title"><i className="font-icon " />Verify Email/Mobile Number</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/retrieve-eid-uid/en" target="_blank" className="mega " id="menu2873"><span className="menu-title"><i className="font-icon " />Retrieve Lost or Forgotten EID/UID</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/genericGenerateOrRetriveVID/en" target="_blank" className="mega " id="menu2409"><span className="menu-title"><i className="font-icon " />Virtual ID (VID) Generator</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/offline-ekyc" target="_blank" className="mega " id="menu2407"><span className="menu-title"><i className="font-icon " />Aadhaar Paperless Offline e-kyc (Beta)</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/" target="_blank" className="mega " id="menu5015"><span className="menu-title"><i className="font-icon " />Bank Seeding status</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/check-aadhaar-validity/en" target="_blank" className="mega " id="menu5016"><span className="menu-title"><i className="font-icon " />Check Aadhaar validity</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://resident.uidai.gov.in/bio-lock" target="_blank" className="mega " id="menu2408"><span className="menu-title"><i className="font-icon " />Lock/Unlock Biometrics</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://resident.uidai.gov.in/aadhaar-auth-history" target="_blank" className="mega " id="menu2412"><span className="menu-title"><i className="font-icon " />Aadhaar Authentication History</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/lock-unlock-aadhaar/en" target="_blank" className="mega " id="menu4796"><span className="menu-title"><i className="font-icon " />Aadhaar Lock and Unlock Service</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/my-aadhaar/avail-aadhaar-services/aadhaar-services-on-sms.html" className="mega " id="menu4798"><span className="menu-title"><i className="font-icon " />Aadhaar Services on SMS</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="/images/Aadhaar_Enrolment__and__Update__-__English.pdf" target="_blank" className="mega last " id="menu5272"><span className="menu-title"><i className="font-icon " />Aadhaar Enrolment and Update Charges</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column4" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/my-aadhaar/about-your-aadhaar.html" className="mega first group " id="menu2396"><span className="menu-title"><i className="font-icon " />About your Aadhaar</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/my-aadhaar/about-your-aadhaar/features-of-aadhaar.html" className="mega first " id="menu2398"><span className="menu-title"><i className="font-icon " />Features of Aadhaar</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/my-aadhaar/about-your-aadhaar/usage-of-aadhaar.html" className="mega " id="menu2399"><span className="menu-title"><i className="font-icon " />Usage of Aadhaar</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/my-aadhaar/about-your-aadhaar/aadhaar-enrolment.html" className="mega " id="menu2545"><span className="menu-title"><i className="font-icon " />Aadhaar Enrolment</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/my-aadhaar/about-your-aadhaar/aadhaar-generation.html" className="mega " id="menu2401"><span className="menu-title"><i className="font-icon " />Aadhaar Generation</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/my-aadhaar/about-your-aadhaar/updating-data-on-aadhaar.html" className="mega " id="menu2402"><span className="menu-title"><i className="font-icon " />Updating Data on Aadhaar</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/my-aadhaar/about-your-aadhaar/security-in-uidai-system.html" className="mega " id="menu2552"><span className="menu-title"><i className="font-icon " />Security in UIDAI system</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="/en/my-aadhaar/about-your-aadhaar/aadhaar-myth-busters.html" className="mega last " id="menu4866"><span className="menu-title"><i className="font-icon " />Aadhaar Myth Busters</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column5" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="https://play.google.com/store/apps/details?id=in.gov.uidai.mAadhaarPlus&hl=en_IN" target="_blank" className="mega first group " id="menu2549"><span className="menu-title"><i className="font-icon " />Aadhaar on your mobile</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="https://play.google.com/store/apps/details?id=in.gov.uidai.mAadhaarPlus&hl=en_IN" target="_blank" className="mega first " id="menu2550"><span className="menu-title"><i className="font-icon " />mAadhaar for Android</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="https://apps.apple.com/in/app/maadhaar/id1435469474" onclick="window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,');return false;" className="mega last " id="menu4862"><span className="menu-title"><i className="font-icon " />mAadhaar App links for iOS</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column6 last" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/my-aadhaar/downloads.html" className="mega first group " id="menu2384"><span className="menu-title"><i className="font-icon " />Downloads</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/my-aadhaar/downloads/enrolment-and-update-forms.html" className="mega first " id="menu2874"><span className="menu-title"><i className="font-icon " />Enrolment and Update Forms </span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/images/Aadhaar_Enrolment__and__Update__-__English.pdf" target="_blank" className="mega " id="menu5285"><span className="menu-title"><i className="font-icon " />Aadhaar Enrolment and Update Charges</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/images/Circular_dated_28042017.pdf" target="_blank" className="mega " id="menu4660"><span className="menu-title"><i className="font-icon " />Validity of downloaded Aadhaar (e-Aadhaar) as Proof of Identity Doc Type: PDF Size: 0.1MB</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/images/New_eAadhaar1.pdf" target="_blank" className="mega " id="menu4860"><span className="menu-title"><i className="font-icon " />New eAadhaar Doc Type: PDF Size:0.2 MB</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/images/AadhaarHandbook2021.pdf" target="_blank" className="mega " id="menu4868"><span className="menu-title"><i className="font-icon " />Handbooks Doc Type: PDF Size: 35MB</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="/images/commdoc/List_of_Supporting_Document_for_Aadhaar_Enrolment_and_Update.pdf" target="_blank" className="mega last " id="menu4938"><span className="menu-title"><i className="font-icon " />List of Supporting Document for Aadhaar Enrolment and Update  Doc Type: PDF Size: 1.6MB</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mega haschild submenu-align-auto"><a href="/en/about-uidai.html" className="mega haschild " id="menu2465"><span className="menu-title"><i className="font-icon " />About UIDAI</span></a>
                          <div className="childcontent cols8 ">
                            <div className="childcontent-inner-wrap">
                              <div className="childcontent-inner clearfix" style={{width: 900}}>
                                <div className="megacol column1 first" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/about-uidai/unique-identification-authority-of-india.html" className="mega first group " id="menu2471"><span className="menu-title"><i className="font-icon " />Unique Identification Authority of India</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/about-uidai/unique-identification-authority-of-india/vision-mission.html" className="mega first " id="menu2473"><span className="menu-title"><i className="font-icon " />Vision &amp; Mission</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/about-uidai/unique-identification-authority-of-india/composition-of-uidai-authority.html" className="mega " id="menu2886"><span className="menu-title"><i className="font-icon " />Composition of UIDAI Authority</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/about-uidai/unique-identification-authority-of-india/organizational-structure.html" className="mega " id="menu2887"><span className="menu-title"><i className="font-icon " />Organizational Structure</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="/en/about-uidai/unique-identification-authority-of-india/finance-accounts.html" className="mega last " id="menu2501"><span className="menu-title"><i className="font-icon " />Finance &amp; Accounts</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column2" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group  no-style submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/about-uidai/legal-framework.html" className="mega first group  no-style " id="menu2476"><span className="menu-title"><i className="font-icon " />Legal Framework</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/about-uidai/legal-framework/rules.html" className="mega first " id="menu2478"><span className="menu-title"><i className="font-icon " />Rules</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/about-uidai/legal-framework/notification.html" className="mega " id="menu5247"><span className="menu-title"><i className="font-icon " />Notifications</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/about-uidai/legal-framework/regulations.html" className="mega " id="menu2479"><span className="menu-title"><i className="font-icon " />Regulations</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/about-uidai/legal-framework/circulars.html" className="mega " id="menu2480"><span className="menu-title"><i className="font-icon " />Circulars</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/about-uidai/legal-framework/judgements.html" className="mega " id="menu4943"><span className="menu-title"><i className="font-icon " />Judgements</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/about-uidai/legal-framework/updated-regulation.html" className="mega " id="menu5251"><span className="menu-title"><i className="font-icon " />Updated Regulations</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="/en/about-uidai/legal-framework/updated-rules-en.html" className="mega last " id="menu5252"><span className="menu-title"><i className="font-icon " />Updated Rules</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column3" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/about-uidai/work-with-uidai.html" className="mega first group " id="menu2484"><span className="menu-title"><i className="font-icon " />Work with UIDAI</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/about-uidai/work-with-uidai/current-vacancies.html" className="mega first " id="menu2486"><span className="menu-title"><i className="font-icon " />Deputation/Contract</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="http://careers.nisg.org/jobs/?group=AADHAAR" target="_blank" className="mega " id="menu4832"><span className="menu-title"><i className="font-icon " />Professional/Technical (NISG)</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/about-uidai/work-with-uidai/volunteers-sabbatical.html" className="mega " id="menu2889"><span className="menu-title"><i className="font-icon " />Volunteers/Sabbatical</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/about-uidai/work-with-uidai/officers-served-in-the-past.html" className="mega " id="menu2470"><span className="menu-title"><i className="font-icon " />Officers Served in the Past</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/about-uidai/work-with-uidai/tenders-article.html" className="mega " id="menu2485"><span className="menu-title"><i className="font-icon " />Tenders</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/about-uidai/work-with-uidai/internship-in-uidai-doc-type-pdf-doc-size-0-5-mb-3.html" className="mega " id="menu5103"><span className="menu-title"><i className="font-icon " />Internship in UIDAI</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/about-uidai/work-with-uidai/young-professional-hiring-policy.html" className="mega " id="menu5253"><span className="menu-title"><i className="font-icon " />Young Professional Hiring Policy</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="/en/about-uidai/work-with-uidai/advertisement-for-hiring-of-technical-consultants.html" className="mega last " id="menu5284"><span className="menu-title"><i className="font-icon " />Advertisement for Hiring of Technical Consultants</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column4" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/about-uidai/right-to-information.html" className="mega first " id="menu2540"><span className="menu-title"><i className="font-icon " />Right to Information</span></a></div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column5" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/about-uidai/uidai-citizens-charter.html" className="mega first " id="menu2737"><span className="menu-title"><i className="font-icon " />UIDAI Citizens Charter </span></a></div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column6" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/images/Amended_Citizen_Charter_July_2023.pdf" target="_blank" className="mega first " id="menu4912"><span className="menu-title"><i className="font-icon " />Archives</span></a></div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column7" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/aadhaar_dashboard" target="_blank" className="mega first " id="menu2474"><span className="menu-title"><i className="font-icon " />Aadhaar Dashboard</span></a></div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column8 last" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/about-uidai/posh-policy-and-icc.html" className="mega first " id="menu5298"><span className="menu-title"><i className="font-icon " />POSH Policy and ICC at UIDAI</span></a></div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mega haschild submenu-align-auto"><a href="/en/ecosystem.html" className="mega haschild " id="menu2413"><span className="menu-title"><i className="font-icon " />Ecosystem</span></a>
                          <div className="childcontent cols6 ">
                            <div className="childcontent-inner-wrap">
                              <div className="childcontent-inner clearfix" style={{width: 1250}}>
                                <div className="megacol column1 first" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first  first submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/ecosystem/uidai-ecosystem.html" className="mega first  first " id="menu2414"><span className="menu-title"><i className="font-icon " />UIDAI Ecosystem</span></a></div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column2" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/ecosystem/enrolment-ecosystem.html" className="mega first group " id="menu2440"><span className="menu-title"><i className="font-icon " />Enrolment Ecosystem</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/ecosystem/enrolment-ecosystem/registrars.html" className="mega first " id="menu2443"><span className="menu-title"><i className="font-icon " />Registrars</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/ecosystem/enrolment-ecosystem/enrolment-agencies.html" className="mega " id="menu2452"><span className="menu-title"><i className="font-icon " />Enrolment Agencies</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="/en/ecosystem/enrolment-ecosystem/aadhaar-seva-kendra.html" className="mega last " id="menu4861"><span className="menu-title"><i className="font-icon " />Aadhaar Seva Kendra</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column3" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/ecosystem/enrolment-documents.html" className="mega first group " id="menu2814"><span className="menu-title"><i className="font-icon " />Enrolment Documents</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto" />
                                            <li className="mega submenu-align-auto"><a href="/en/ecosystem/enrolment-documents/sanction-orders.html" className="mega " id="menu3128"><span className="menu-title"><i className="font-icon " />Sanction Orders</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/images/Aadhaar_Saturation_Report_31012025.pdf" target="_blank" className="mega " id="menu4629"><span className="menu-title"><i className="font-icon " />Aadhaar Saturation Report , PDF 0.448 MB</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/ecosystem/enrolment-documents/toe-en.html" className="mega " id="menu5257"><span className="menu-title"><i className="font-icon " />Terms of Engagement (TOE)</span></a></li>
                                            <li className="mega last submenu-align-auto" />
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column4" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/ecosystem/authentication-ecosystem.html" className="mega first group " id="menu2416"><span className="menu-title"><i className="font-icon " />Authentication Ecosystem</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/ecosystem/authentication-ecosystem/operation-model.html" className="mega first " id="menu2556"><span className="menu-title"><i className="font-icon " />Operation Model</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/ecosystem/authentication-ecosystem/authentication-requesting-agency.html" className="mega " id="menu2420"><span className="menu-title"><i className="font-icon " />Authentication Requesting Agency</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="/en/ecosystem/authentication-ecosystem/authentication-user-agencies.html" className="mega last " id="menu2878"><span className="menu-title"><i className="font-icon " />Authentication Service Agencies</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column5" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/ecosystem/authentication-devices-documents.html" className="mega first group " id="menu2434"><span className="menu-title"><i className="font-icon " />Authentication Devices &amp; Documents</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/ecosystem/authentication-devices-documents/biometric-devices.html" className="mega first " id="menu2436"><span className="menu-title"><i className="font-icon " />Biometric Devices</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/ecosystem/authentication-devices-documents/qr-code-reader.html" className="mega " id="menu2881"><span className="menu-title"><i className="font-icon " />QR Code Reader</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/ecosystem/authentication-devices-documents/about-aadhaar-paperless-offline-e-kyc.html" className="mega " id="menu4650"><span className="menu-title"><i className="font-icon " />About Aadhaar Paperless Offline e-kyc</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/ecosystem/authentication-devices-documents/developer-section.html" className="mega " id="menu2882"><span className="menu-title"><i className="font-icon " />Developer Section</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/ecosystem/authentication-devices-documents/authentication-document.html" className="mega " id="menu5250"><span className="menu-title"><i className="font-icon " />Authentication Documents</span></a></li>
                                            <li className="mega last submenu-align-auto" />
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column6 last" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/ecosystem/training-testing-certification-ecosystem.html" className="mega first group " id="menu2457"><span className="menu-title"><i className="font-icon " />Training, Testing &amp; Certification Ecosystem</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/ecosystem/training-testing-certification-ecosystem/training-testing-and-certification-policy-2023.html" className="mega first " id="menu4947"><span className="menu-title"><i className="font-icon " />Training, Testing and Certification Policy 2023 Doc Type: PDF Size: 1.1MB</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/ecosystem/training-testing-certification-ecosystem/sop-for-training-testing-and-certification-of-e-u-operators.html" className="mega " id="menu4951"><span className="menu-title"><i className="font-icon " />SOP for training, testing and certification of E&amp;U Operators</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/ecosystem/training-testing-certification-ecosystem/sop-for-training-testing-and-certification-of-authentication-operators-doc-type-pdf-size-2-mb.html" className="mega " id="menu4956"><span className="menu-title"><i className="font-icon " />SOP for Training, Testing and Certification of Authentication Operators  Doc Type: PDF Size: 2 MB</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/ecosystem/training-testing-certification-ecosystem/approved-atc-2023-24-pdf.html" className="mega " id="menu4958"><span className="menu-title"><i className="font-icon " />Annual Training Calendar 2023-24 Doc. Type:- PDF, Doc. Size:- 1.6 M</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/images/Corr_SOP_EnU.pdf" target="_blank" className="mega " id="menu5144"><span className="menu-title"><i className="font-icon " />Corrigendum to Standard Operating Procedure (SOP) for training, testing and certification of   Enrolment and Update (E&amp;U) Operators. PDF,0.7 MB</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="/en/ecosystem/training-testing-certification-ecosystem/annual-training-calendar-2024-25.html" className="mega last " id="menu5290"><span className="menu-title"><i className="font-icon " />Annual Training Calendar 2024-25 </span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mega haschild submenu-align-auto"><a href="/en/media-resources.html" className="mega haschild " id="menu2507"><span className="menu-title"><i className="font-icon " />Media &amp; Resources</span></a>
                          <div className="childcontent cols4 ">
                            <div className="childcontent-inner-wrap">
                              <div className="childcontent-inner clearfix" style={{width: 850}}>
                                <div className="megacol column1 first" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/media-resources/media.html" className="mega first group " id="menu2510"><span className="menu-title"><i className="font-icon " />Media</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto" />
                                            <li className="mega submenu-align-auto"><a href="/en/media-resources/media/aadhaar-broadcasts.html" className="mega " id="menu2511"><span className="menu-title"><i className="font-icon " />Aadhaar Broadcast</span></a></li>
                                            <li className="mega submenu-align-auto" />
                                            <li className="mega submenu-align-auto"><a href="/en/media-resources/media/quote-unquote.html" className="mega " id="menu2740"><span className="menu-title"><i className="font-icon " />Quote/Unquote</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/media-resources/media/archive-press-releases.html" className="mega " id="menu5075"><span className="menu-title"><i className="font-icon " />Archive Press Releases</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="/en/media-resources/media/press-releases.html" className="mega last " id="menu5105"><span className="menu-title"><i className="font-icon " />Press Releases</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column2" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/media-resources/resources.html" className="mega first group " id="menu2514"><span className="menu-title"><i className="font-icon " />Resources</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/media-resources/resources.html" className="mega first " id="menu2515"><span className="menu-title"><i className="font-icon " />Advertisements</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/media-resources/resources/photos.html" className="mega " id="menu2516"><span className="menu-title"><i className="font-icon " />Photos</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/media-resources/resources/videos.html" className="mega " id="menu2517"><span className="menu-title"><i className="font-icon " />Videos</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="/en/media-resources/resources/e-calendar-2025.html" className="mega last " id="menu5371"><span className="menu-title"><i className="font-icon " />e-Calendar 2025</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column3" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/media-resources/uidai-documents.html" className="mega first group " id="menu2890"><span className="menu-title"><i className="font-icon " />UIDAI Documents</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/media-resources/uidai-documents/annual-reports.html" className="mega first " id="menu4872"><span className="menu-title"><i className="font-icon " />Annual Reports</span></a></li>
                                            <li className="mega submenu-align-auto" />
                                            <li className="mega submenu-align-auto"><a href="/en/media-resources/uidai-documents/handbook.html" className="mega " id="menu4871"><span className="menu-title"><i className="font-icon " />Handbooks</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/media-resources/uidai-documents/compendium.html" className="mega " id="menu4948"><span className="menu-title"><i className="font-icon " />Compendium</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/media-resources/uidai-documents/parliament-question.html" className="mega " id="menu5156"><span className="menu-title"><i className="font-icon " />Parliament Questions.</span></a></li>
                                            <li className="mega last submenu-align-auto" />
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column4 last" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/media-resources/brand-aadhaar.html" className="mega first group " id="menu2519"><span className="menu-title"><i className="font-icon " />Brand Aadhaar</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/media-resources/brand-aadhaar/logo.html" className="mega first " id="menu2522"><span className="menu-title"><i className="font-icon " />Logo</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mega last haschild submenu-align-fullwidth"><a href="/en/contact-support.html" className="mega last haschild " id="menu2523"><span className="menu-title"><i className="font-icon " />Contact &amp; Support</span></a>
                          <div className="childcontent cols7 ">
                            <div className="childcontent-inner-wrap">
                              <div className="childcontent-inner clearfix" style={{width: 900}}>
                                <div className="megacol column1 first" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/contact-support/have-any-question.html" className="mega first group " id="menu2524"><span className="menu-title"><i className="font-icon " />Have any Question?</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="/en/contact-support/have-any-question.html" className="mega first " id="menu2525"><span className="menu-title"><i className="font-icon " />FAQs</span></a></li>
                                            <li className="mega submenu-align-auto"><a href="/en/contact-support/have-any-question/glossary.html" className="mega " id="menu2526"><span className="menu-title"><i className="font-icon " />Glossary</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="https://uidai.gov.in/images/Aadhaar_Usage-Dos_and_Donts_180324.pdf" target="_blank" className="mega last " id="menu4944"><span className="menu-title"><i className="font-icon " />Aadhaar Usage-Dos and Dont's Doc Type:PDF Size:0.1MB</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column2" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first group submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/contact-support/grievance-redressal.html" className="mega first group " id="menu2531"><span className="menu-title"><i className="font-icon " />Grievance Redressal Mechanism</span></a></div>
                                        <div className="group-content">
                                          <ul className="megamenu level1">
                                            <li className="mega first submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/grievance-feedback/en" target="_blank" className="mega first " id="menu4633"><span className="menu-title"><i className="font-icon " />Grievance and Feedback</span></a></li>
                                            <li className="mega last submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/grievance-feedback-status/en" target="_blank" className="mega last " id="menu4651"><span className="menu-title"><i className="font-icon " />Check Grievance / Feedback  Status</span></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column3" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/contact-support/rti.html" className="mega first " id="menu2541"><span className="menu-title"><i className="font-icon " />Right to Information</span></a></div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column4" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="https://myaadhaar.uidai.gov.in/grievance-feedback" onclick="window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,');return false;" className="mega first " id="menu2743"><span className="menu-title"><i className="font-icon " />Feedback</span></a></div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column5" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/contact-support/uidai-headquarter.html" className="mega first " id="menu2529"><span className="menu-title"><i className="font-icon " />Head Office (HO)</span></a></div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column6" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first submenu-align-auto">
                                      <div className="group clearfix">
                                        <div className="group-title"><a href="/en/contact-support/regional-offices.html" className="mega first " id="menu2530"><span className="menu-title"><i className="font-icon " />Regional Offices</span></a></div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="megacol column7 last" style={{width: 202}}>
                                  <ul className="megamenu level1">
                                    <li className="mega first submenu-align-auto"><a href="https://myaadhaar.uidai.gov.in/file-complaint" target="_blank" className="mega first " id="menu5288"><span className="menu-title"><i className="font-icon " />File-Complaint</span></a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li > 
                        <li className="mega last haschild submenu-align-fullwidth" >
                          <a href="/register" className="mega last haschild " id="menu2523">
                          <span className="menu-title"><i className="font-icon " /> Login/Register</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tjbase-module pull-right pr-15 language-switcher-mobile border-sep-left visible-xs" id="tjmod-111">
                <div className="module-content">
                  <div className="mod-languages">
                    <form name="lang" method="post" action="https://uidai.gov.in/en/">
                      {/* <select class="inputbox advancedSelect" onchange="document.location.replace(this.value);" id="langselect" title="select a language"> */}
                      <select className="inputbox advancedSelect" onchange="document.location.replace(this.value);" title="select a language">
                        <option dir="ltr" value="/en/" selected="selected">
                          English</option>
                        <option dir="ltr" value="/hi/">
                          हिन्दी</option>
                        <option dir="ltr" value="/as/">
                          অসমীয়া</option>
                        <option dir="ltr" value="/bn/">
                          বাংলা</option>
                        <option dir="ltr" value="/kn/">
                          ಕನ್ನಡ</option>
                        <option dir="ltr" value="/gu/">
                          ગુજરાતી</option>
                        <option dir="ltr" value="/ml/">
                          മലയാളം</option>
                        <option dir="ltr" value="/mr/">
                          मराठी</option>
                        <option dir="ltr" value="/od/">
                          ଓଡ଼ିଆ</option>
                        <option dir="ltr" value="/pu/">
                          ਪੰਜਾਬੀ</option>
                        <option dir="ltr" value="/ta/">
                          தமிழ்</option>
                        <option dir="ltr" value="/te/">
                          తెలుగు</option>
                        <option dir="ltr" value="/ur/">
                          اردو</option>
                      </select>
                      <span className="dropdown-arrow" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <div id="banner" className="tjbase-banner">
  <div className="tjbase-module" id="tjmod-333">
    <div className="module-content">
    <center><Carousel  width="1331px" showThumbs={false} autoPlay infiniteLoop>
        {br.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel></center>

    </div>
  </div>
  <div id="submenu-2" className="tjbase-submenu-2 bg-blue">
    <div className="container">
      <div className="row">
        <div className="tjbase-module text-white col-xs-12" id="tjmod-449">
          <div className="module-content">
            <ul className="nav menu single-line-items text-white quick-links">
              <li className="item-4863"><a href="https://uidai.gov.in/ecosystem/enrolment-ecosystem/aadhaar-seva-kendra.html" target="_blank" rel="noopener noreferrer">Aadhaar Seva Kendra</a></li>
              <li className="item-5302"><a href="https://uidai.gov.in/images/Aadhaar_Enrolment__and__Update__-__English.pdf" className="color-change" target="_blank" rel="noopener noreferrer"> Aadhaar Enrolment &amp; Update Charges</a></li>
              <li className="item-5303"><a href="https://uidai.gov.in/en/my-aadhaar/downloads/enrolment-and-update-forms.html"> Enrolment &amp; Update Forms</a></li>
              <li className="item-5304"><a href="https://uidai.gov.in/images/commdoc/List_of_Supporting_Document_for_Aadhaar_Enrolment_and_Update.pdf" target="_blank" rel="noopener noreferrer">List of Supporting Documents for Aadhaar Enrolment &amp; Update </a></li>
              <li className="item-4864"><a href="https://play.google.com/store/apps/details?id=in.gov.uidai.mAadhaarPlus&hl=en_IN" target="_blank" rel="noopener noreferrer">Download mAadhaar: Android</a></li>
              <li className="item-4865"><a href="https://apps.apple.com/in/app/maadhaar/id1435469474" target="_blank" rel="noopener noreferrer">iOS </a></li>
              <li className="item-2897"><a href="/en/about-uidai/work-with-uidai/tenders-article.html">Tender</a></li>
              <li className="item-4624"><a href="/en/media-resources/uidai-documents/circulars-memorandums-notification-01.html">Circulars, Notifications &amp; OMs</a></li>
              <li className="item-2894"><a href="https://myaadhaar.uidai.gov.in/grievance-feedback" target="_blank" rel="noopener noreferrer">Grievance(NEET/Competitive Exam) / Feedback</a></li>
              <li className="item-5299"><a href="https://uidai.gov.in/en/contact-support/rti.html">RTI</a></li>
              <li className="item-5354"><a href="/en/uidai-s-dlc-tutorials.html">UIDAI's DLC Tutorials</a></li>
              <li className="item-5366"><a href="/en/samvaad.html">Samvaad</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="message-component" className="tjbase-message" role="alert">
    <div className="container">
      <div id="system-message-container">
      </div>
    </div>
  </div>
  <span className="top-offset" />
  <div id="main-content" className="tjbase-mainbodyblock  home no-background parentid-2376  com_content view-article ">
    <div className="container">
      <div id="mainbody" className="row tjbase-mainbody">
        <div id="maincontent" className="col-xs-12 col-sm-8" role="main">
          <div id="component-top" className="tjbase-component-top" role="contentinfo">
            <div className="col-xs-12">
              <div className="row">
                <div className="tjbase-module notification-style cardstyle green-shadow mt-20 col-xs-12 pl-0 pr-0 mb-5" id="tjmod-388">
                  <div className="cs-top-gradient" />
                  <div className="content-body col-10 pull-left">
                    <div className="content-holder col-10 pull-left">
                      <div id="carousel-container-388" className="owl-carousel single">
                        <div className="item mb-5">
                          <span className="newsflash-title">
                          </span>
                          <div className="fields-container search-result-design">
                            {/* <dl> */}
                            {/* <dt></dt> */}
                            <p className="field-entry  lang-attribute mb-10">
                              <span className="field-label ">lang attribute: </span>
                              <span className="field-value ">English</span>
                            </p>
                            {/*</dl> */}
                          </div>
                          <div className="pull-left notification-icon">
                            <h3 className="m-0 p-0"><span>Observance of Vigilance Awareness Week 2024 From 28.10.2024 to 03.11.2024 on theme</span><span /> <span>"Culture of Integrity for Nation's Prosperity"</span></h3>
                            <div className="sub-title"><a lang="en" href="https://pledge.mygov.in/cvc/" target="_blank" rel="noopener noreferrer">Integrity Pledge</a>&nbsp;</div>
                          </div>
                        </div>
                        <div className="item mb-5">
                          <span className="newsflash-title">
                          </span>
                          <div className="fields-container search-result-design">
                            {/* <dl> */}
                            {/* <dt></dt> */}
                            <p className="field-entry  lang-attribute mb-10">
                              <span className="field-label ">lang attribute: </span>
                              <span className="field-value ">English</span>
                            </p>
                            {/*</dl> */}
                          </div>
                          <div className="pull-left notification-icon">
                            <h3 className="m-0 p-0"><span>मुख्य कार्यकारी अधिकारी की ओर से जारी हिंदी दिवस संदेश, 2024/</span><span>&nbsp;</span><span>Message from CEO on Hindi Diwas 2024 DOC Type: PDF Size:0.4MB</span></h3>
                            <div className="sub-title"><a lang="en" href="/images/CEO_message_for__Hindi__Pakhwada_2024.pdf" target="_blank" rel="noopener noreferrer">Read More</a>&nbsp;</div>
                          </div>
                        </div>
                        <div className="item mb-5">
                          <span className="newsflash-title">
                          </span>
                          <div className="fields-container search-result-design">
                            {/* <dl> */}
                            {/* <dt></dt> */}
                            <p className="field-entry  lang-attribute mb-10">
                              <span className="field-label ">lang attribute: </span>
                              <span className="field-value ">English</span>
                            </p>
                            {/*</dl> */}
                          </div>
                          <div className="pull-left notification-icon">
                            <h3 className="m-0 p-0">UIDAI Sandbox for Developer Community and Fintechs</h3>
                            <div className="sub-title"><a lang="en" href="https://www.uidai.gov.in/en/ecosystem/authentication-devices-documents/developer-section.html" target="_blank" rel="noopener noreferrer">Read More</a>&nbsp;</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 pull-left">
            <div className="itempage home no-background">
              <div className="cs-top-gradient" />
              <div className="item-page home no-background" itemScope itemType="https://schema.org/Article">
                <meta itemProp="inLanguage" content="en-GB" />
                <div className="page-header">
                  {/*
					<h2 itemprop="headline">
							</h2>
		 */}
                </div>
                <div className="fields-container search-result-design">
                  {/* <dl> */}
                  {/* <dt></dt> */}
                  {/*</dl> */}
                </div>
                <div itemProp="articleBody">
                  <h1 className="content-heading">
                    English Home Content </h1>
                  <div>
                    {/* START: Modules Anywhere */}
                    <ul className="nav menu custom-menu-layout">
                      <li className=" item-2387 menu12 deeper parent">
                        <div className="cs-top-gradient" />
                        <div className="content-body-cover">
                          <div className="content-body">
                            <h2 className="update-aadhaar"><a href="/en/my-aadhaar/update-aadhaar.html" className="menu_title_link">Update Aadhaar</a></h2>
                            <div className="byline-description pl-60">
                              <p className="mb-0"><strong>Keep your Aadhaar details up-to-date.</strong></p>
                              <div className="menu_description">
                                <p className="mb-0">It is essential that your Aadhaar Data is correct and remains updated always.</p>
                              </div>
                            </div>
                          </div>
                        </div><a href="/en/my-aadhaar/update-aadhaar.html">Update Your Aadhaar</a>
                        <ul className="nav-child unstyled small pl-80">
                          <li className=" item-2392 child-class">
                            <div className="content-body">
                              <h2 className="check-aadhaar-update-status"><a href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en" className="menu_title_link">Check Aadhaar Update Status</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">Have already sent a request to get your address updated in Aadhaar?</p>
                                </div>
                              </div>
                            </div><a href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en" target="_blank" rel="noopener noreferrer">Check Aadhaar Update Status</a></li>
                          <li className=" item-2806 child-class">
                            <div className="content-body">
                              <h2 className="update-demographics-data-online"><a href="https://myaadhaar.uidai.gov.in/" className="menu_title_link">Update Address in your Aadhaar</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">Have you moved to a new city? Or recently changed your address? Do not forget to update your new address in your Aadhaar. You have Valid Address Proof or have received Address Validation
                                    Letter Letter (For those without Valid Address Proof), you can update your address.</p>
                                </div>
                              </div>
                            </div><a href="https://myaadhaar.uidai.gov.in/" target="_blank" rel="noopener noreferrer">Update Demographics Data &amp; Check Status</a></li>
                          <li className=" item-5309 child-class">
                            <div className="content-body">
                              <h2 className="update-demographics-data-online-3"><a href="https://uidai.gov.in/en/my-aadhaar/downloads/enrolment-and-update-forms.html" className="menu_title_link">Enrolment &amp; Update Forms</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">This is for Enrolment &amp; Update Forms</p>
                                </div>
                              </div>
                            </div><a href="https://uidai.gov.in/en/my-aadhaar/downloads/enrolment-and-update-forms.html" target="_blank" rel="noopener noreferrer">Enrolment &amp; Update Forms</a></li>
                          <li className=" item-5308 child-class">
                            <div className="content-body">
                              <h2 className="update-demographics-data-online-2"><a href="https://uidai.gov.in/images/Aadhaar_Enrolment__and__Update__-__English.pdf" className="menu_title_link">Aadhaar Enrolment &amp; Update Charges</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">This is for Aadhaar Enrolment &amp; Update Charges</p>
                                </div>
                              </div>
                            </div><a href="https://uidai.gov.in/images/Aadhaar_Enrolment__and__Update__-__English.pdf" target="_blank" rel="noopener noreferrer">Aadhaar Enrolment &amp; Update Charges</a></li>
                          <li className=" item-2558 child-class">
                            <div className="content-body">
                              <h2 className="aadhaar-update-history"><a href="https://myaadhaar.uidai.gov.in/" className="menu_title_link">Aadhaar Update History</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">You can view the details of the Updates you have done in your Aadhaar.</p>
                                </div>
                              </div>
                            </div><a href="https://myaadhaar.uidai.gov.in/" target="_blank" rel="noopener noreferrer">Aadhaar Update History</a></li>
                        </ul>
                      </li>
                      <li className=" item-2377 menu12 deeper parent">
                        <div className="cs-top-gradient" />
                        <div className="content-body-cover">
                          <div className="content-body">
                            <h2 className="get-aadhaar"><a href="/en/my-aadhaar/get-aadhaar.html" className="menu_title_link">Get Aadhaar</a></h2>
                            <div className="byline-description pl-60">
                              <p className="mb-0"><strong>Aadhaar is for every Resident of India. </strong></p>
                              <div className="menu_description">
                                <p className="mb-0">From a new born to a senior citizen, everyone can enrol for Aadhaar.</p>
                              </div>
                            </div>
                          </div>
                        </div><a href="/en/my-aadhaar/get-aadhaar.html">Get Aadhaar</a>
                        <ul className="nav-child unstyled small pl-80">
                          <li className=" item-4858 child-class">
                            <div className="content-body">
                              <h2 className="book-an-appointment"><a href="https://appointments.uidai.gov.in/bookappointment.aspx" className="menu_title_link">Book an Appointment</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">For Enrolment or to update your Aadhaar data you can book an online appointment at an Aadhaar Seva Kendra.</p>
                                </div>
                              </div>
                            </div><a href="https://appointments.uidai.gov.in/bookappointment.aspx" target="_blank" rel="noopener noreferrer">Book an Appointment</a></li>
                          <li className=" item-2380 child-class">
                            <div className="content-body">
                              <h2 className="check-aadhaar-status"><a href="https://myaadhaar.uidai.gov.in/check-aadhaar" className="menu_title_link">Check status</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">Recently enrolled for Aadhaar? Check if your Aadhaar is generated. In case yourhave or updated updated at an Enrolment/Update center you can check the Update Address here too.</p>
                                </div>
                              </div>
                            </div><a href="https://myaadhaar.uidai.gov.in/check-aadhaar" target="_blank" rel="noopener noreferrer">Check Aadhaar Status</a></li>
                          <li className=" item-2381 child-class">
                            <div className="content-body">
                              <h2 className="download-e-aadhaar"><a href="https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en" className="menu_title_link">Download Aadhaar</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">Download an electronic version of your Aadhaar by giving your Aadhaar number or Enrolment ID. Downloaded Aadhaar&nbsp;is as valid as the original Aadhaar letter.</p>
                                </div>
                              </div>
                            </div><a href="https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en" target="_blank" rel="noopener noreferrer">Download Aadhaar</a></li>
                          <li className=" item-4885 child-class">
                            <div className="content-body">
                              <h2 className="order-aadhaar-pvc-card"><a href="https://myaadhaar.uidai.gov.in/genricPVC/en" className="menu_title_link">Order Aadhaar PVC Card</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">Get your Aadhaar PVC card at nominal cost. Order now!</p>
                                </div>
                              </div>
                            </div><a href="https://myaadhaar.uidai.gov.in/genricPVC/en" target="_blank" rel="noopener noreferrer">Order Aadhaar PVC Card</a></li>
                          <li className=" item-4899 child-class">
                            <div className="content-body">
                              <h2 className="check-aadhaar-pvc-card-status-en"><a href="https://myaadhaar.uidai.gov.in/checkStatus/en" className="menu_title_link">Check Aadhaar PVC Card Status</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">Check the status of your Aadhaar PVC card request</p>
                                </div>
                              </div>
                            </div><a href="https://myaadhaar.uidai.gov.in/checkStatus/en" target="_blank" rel="noopener noreferrer">Check Aadhaar PVC Card Status</a></li>
                          <li className=" item-5345 child-class">
                            <div className="content-body">
                              <h2 className="aadhaar-enrolment-update-charges"><a href="https://uidai.gov.in/images/Aadhaar_Enrolment__and__Update__-__English.pdf" className="menu_title_link">Aadhaar Enrolment &amp; Update Charges</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">This is for Aadhaar Enrolment &amp; Update Charges</p>
                                </div>
                              </div>
                            </div><a href="https://uidai.gov.in/images/Aadhaar_Enrolment__and__Update__-__English.pdf" target="_blank" rel="noopener noreferrer">Aadhaar Enrolment &amp; Update Charges</a></li>
                          <li className=" item-5346 child-class">
                            <div className="content-body">
                              <h2 className="enrolment-update-forms"><a href="https://uidai.gov.in/en/my-aadhaar/downloads/enrolment-and-update-forms.html" className="menu_title_link">Enrolment &amp; Update Forms</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">This is for Enrolment &amp; Update Forms</p>
                                </div>
                              </div>
                            </div><a href="https://uidai.gov.in/en/my-aadhaar/downloads/enrolment-and-update-forms.html" target="_blank" rel="noopener noreferrer"> Enrolment &amp; Update Forms</a></li>
                        </ul>
                      </li>
                      <li className=" item-3190 menu12 deeper parent">
                        <div className="cs-top-gradient" />
                        <div className="content-body-cover">
                          <div className="content-body">
                            <h2 className="avail-aadhaar-services"><a href="/en/my-aadhaar/avail-aadhaar-services.html" className="menu_title_link">Aadhaar Services</a></h2>
                            <div className="byline-description pl-60">
                              <p className="mb-0"><strong>An array of services for Aadhaar holders</strong></p>
                              <div className="menu_description">
                                <p className="mb-0">Aadhaar Registered Mobile number is essential to access the following services.</p>
                              </div>
                            </div>
                          </div>
                        </div><a href="/en/my-aadhaar/avail-aadhaar-services.html">Aadhaar Services</a>
                        <ul className="nav-child unstyled small pl-80">
                          <li className=" item-3840 child-class">
                            <div className="content-body">
                              <h2 className="verify-an-aadhaar-number"><a href="https://myaadhaar.uidai.gov.in/verifyAadhaar" className="menu_title_link">Verify Aadhaar</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">Aadhaar number can be verifed to acertain if the Aadhaar number is valid and is not deactivated.</p>
                                </div>
                              </div>
                            </div><a href="https://myaadhaar.uidai.gov.in/verifyAadhaar" target="_blank" rel="noopener noreferrer">Verify an Aadhaar Number</a></li>
                          <li className=" item-2406 child-class">
                            <div className="content-body">
                              <h2 className="verify-email-mobile-number"><a href="https://myaadhaar.uidai.gov.in/verify-email-mobile/en" className="menu_title_link">Verify Registered mobile or email id</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">You can verify your email address and mobile number that has been declared at the time of enrolment or during latest Aadhaar detail update.</p>
                                </div>
                              </div>
                            </div><a href="https://myaadhaar.uidai.gov.in/verify-email-mobile/en" target="_blank" rel="noopener noreferrer">Verify Email/Mobile Number</a></li>
                          <li className=" item-2409 child-class">
                            <div className="content-body">
                              <h2 className="virtual-id-vid-generator"><a href="https://myaadhaar.uidai.gov.in/genericGenerateOrRetriveVID/en" className="menu_title_link">Generate VID</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">VID is a temporary, revocable 16-digit random number mapped with the Aadhaar number. It can be used in lieu of Aadhaar number whenever authentication or e-KYC services are performed.
                                    It is not possible to derive Aadhaar number from VID.</p>
                                </div>
                              </div>
                            </div><a href="https://myaadhaar.uidai.gov.in/genericGenerateOrRetriveVID/en" target="_blank" rel="noopener noreferrer">Virtual ID (VID) Generator</a></li>
                          <li className=" item-2407 child-class">
                            <div className="content-body">
                              <h2 className="aadhaar-paperless-offline-e-kyc-beta"><a href="https://myaadhaar.uidai.gov.in/offline-ekyc" className="menu_title_link">Offline Aadhaar Verification</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">Aadhaar Paperless e-KYC is a secure sharable document which can be used by any Aadhaar number holder for offline verification of Identification.</p>
                                </div>
                              </div>
                            </div><a href="https://myaadhaar.uidai.gov.in/offline-ekyc" target="_blank" rel="noopener noreferrer">Aadhaar Paperless Offline e-kyc (Beta)</a></li>
                          <li className=" item-2408 child-class">
                            <div className="content-body">
                              <h2 className="lock-unlock-biometrics"><a href="https://resident.uidai.gov.in/bio-lock" className="menu_title_link">Secure your Biometrics</a></h2>
                              <div className="byline-description pl-60">
                                <div className="menu_description">
                                  <p className="mb-0">Aadhaar number holders can secure their biometric authentication by locking their biometrics.</p>
                                </div>
                              </div>
                            </div><a href="https://resident.uidai.gov.in/bio-lock" target="_blank" rel="noopener noreferrer">Lock/Unlock Biometrics</a></li>
                        </ul>
                      </li>
                    </ul>
                    {/* END: Modules Anywhere */}
                  </div>
                  <div className="col-xs-12" />
                </div>
                <div className="row">
                  <div className="col-xs-12 mt-10">
                    <div className="mobileshare" style={{display: 'none'}}>
                      <img className="share-button" id="sharebtn" src="https://uidai.gov.in/media/uidai/images/share.png" title="Share this content" alt="Share this content" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="component-bottom" className="tjbase-component-bottom" role="contentinfo">
            <div className="col-xs-12">
              <div className="row">
                <div className="tjbase-module news-card heading-icon mb-20 col-xs-12 pl-0 pr-0" id="tjmod-285">
                  <div className="module-header">
                    <h2 className="library_books pull-left">Media Coverage of Aadhaar</h2><a className="pull-right" href="/en/media-resources/media/aadhaar-in-prints.html">View All</a> </div>
                  <div className="module-content">
                    <div id="carousel-container-285" className="owl-carousel">
                      <div className="item white-card mb-20">
                        <section className="slider-cardstyle blue-shadow">
                          <h3 className="fields_title mb-5" lang="en">
                            Aadhaar Drives Digital Transformation: 225 crore authentication transactions in February, Face Auth at record high. </h3>
                          <div className>
                            <span className="fields_date border-sep-right">10 Mar 2025</span>
                            <span className="fields_source text-light-green ml-5" />
                          </div>
                          <div className="fields_share_download mt-10">
                            <a href="https://uidai.gov.in/images/AadhaarDrivesForDigitalTransformation.pdf" target="_blank" title="Aadhaar Drives Digital Transformation: 225 crore authentication transactions in February, Face Auth at record high." rel="noopener noreferrer" className="fields_download-link d-inline-flex link">
                              <i className="material-icons pull-left mr-5 fs-15" />Download</a> | <b>Type:</b> pdf | <b>Size:</b> 1.2 MB
                          </div>
                        </section>
                      </div>
                      <div className="item white-card mb-20">
                        <section className="slider-cardstyle blue-shadow">
                          <h3 className="fields_title mb-5" lang="en">
                            Sh. Bhuvnesh Kumar assumes charge as Chief Executive Officer of Unique Identification Authority of India (UIDAI) </h3>
                          <div className>
                            <span className="fields_date border-sep-right">3 Jan 2025</span>
                            <span className="fields_source text-light-green ml-5" />
                          </div>
                          <div className="fields_share_download mt-10">
                            <a href="https://uidai.gov.in/images/CEO_news_for_Social_media.pdf" target="_blank" title="Sh. Bhuvnesh Kumar assumes charge as Chief Executive Officer of Unique Identification Authority of India (UIDAI)" rel="noopener noreferrer" className="fields_download-link d-inline-flex link">
                              <i className="material-icons pull-left mr-5 fs-15" />Download</a> | <b>Type:</b> pdf | <b>Size:</b> 0.8 MB
                          </div>
                        </section>
                      </div>
                      <div className="item white-card mb-20">
                        <section className="slider-cardstyle blue-shadow">
                          <h3 className="fields_title mb-5" lang="en">
                            UIDAI bags International Innovation Award for Face Authentication solution. </h3>
                          <div className>
                            <span className="fields_date border-sep-right">3 Dec 2024</span>
                            <span className="fields_source text-light-green ml-5" />
                          </div>
                          <div className="fields_share_download mt-10">
                            <a href="https://uidai.gov.in/images/TrophyCertificateforFaceAuthSolution.pdf" target="_blank" title="UIDAI bags International Innovation Award for Face Authentication solution." rel="noopener noreferrer" className="fields_download-link d-inline-flex link">
                              <i className="material-icons pull-left mr-5 fs-15" />Download</a> | <b>Type:</b> pdf | <b>Size:</b> 1.8 MB
                          </div>
                        </section>
                      </div>
                      <div className="item white-card mb-20">
                        <section className="slider-cardstyle blue-shadow">
                          <h3 className="fields_title mb-5" lang="en">
                            Aadhaar Brochure 2024 </h3>
                          <div className>
                            <span className="fields_date border-sep-right">20 Nov 2024</span>
                            <span className="fields_source text-light-green ml-5" />
                          </div>
                          <div className="fields_share_download mt-10">
                            <a href="https://uidai.gov.in/images/Aadhaar__Brochure__2024.pdf" target="_blank" title="Aadhaar Brochure 2024" rel="noopener noreferrer" className="fields_download-link d-inline-flex link">
                              <i className="material-icons pull-left mr-5 fs-15" />Download</a> | <b>Type:</b> pdf | <b>Size:</b> 0.8 MB
                          </div>
                        </section>
                      </div>
                      <div className="item white-card mb-20">
                        <section className="slider-cardstyle blue-shadow">
                          <h3 className="fields_title mb-5" lang="en">
                            Aadhaar Brochure September 2023 </h3>
                          <div className>
                            <span className="fields_date border-sep-right">1 Sep 2023</span>
                            <span className="fields_source text-light-green ml-5" />
                          </div>
                          <div className="fields_share_download mt-10">
                            <a href="https://uidai.gov.in/images/Aadhaar_Brochure_Sep_23.pdf" target="_blank" title="Aadhaar Brochure September 2023" rel="noopener noreferrer" className="fields_download-link d-inline-flex link">
                              <i className="material-icons pull-left mr-5 fs-15" />Download</a> | <b>Type:</b> pdf | <b>Size:</b> 1.5 MB
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tjbase-module press-release heading-icon  mb-20 col-xs-12 pl-0 pr-0" id="tjmod-339">
                  <div className="module-header">
                    <h2 className="present_to_all pull-left">Press Release</h2><a className="pull-right" href="/en/media-resources/media/press-releases.html">View All</a> </div>
                  <div className="module-content">
                    <div id="carousel-container-339" className="owl-carousel">
                      <div className="item white-card mb-20">
                        <section className="slider-cardstyle blue-shadow">
                          <div className="press-coverage-logo mb-10 pull-left col-10">
                            <img src="https://uidai.gov.in/images/press-logos/aadhaar-pressrelease-logo.png" alt="Aadhaar logo" className="col-10 hqyLazy" />
                          </div>
                          <div className="clearfix" />
                          <h3 className="fields_title mb-5" lang="en">
                            Aadhaar Drives Digital Transformation: 225 crore authentication transactions in February, Face Auth at record high. </h3>
                          <div className="fields_date">
                            <p className="mb-5">10 Mar 2025</p>
                          </div>
                          <div className="fields_share_download mt-10">
                            <a href="https://uidai.gov.in/images/Aadhaar_Drives_Digital_Transformation.pdf" target="_blank" title="Aadhaar Drives Digital Transformation: 225 crore authentication transactions in February, Face Auth at record high." rel="noopener noreferrer" className="fields_download-link d-inline-flex link">
                              <i className="material-icons pull-left mr-5 fs-15" />Download</a> | <b>Type:</b> pdf | <b>Size:</b> 0.2 MB
                          </div>
                        </section>
                      </div>
                      <div className="item white-card mb-20">
                        <section className="slider-cardstyle blue-shadow">
                          <div className="press-coverage-logo mb-10 pull-left col-10">
                            <img src="https://uidai.gov.in/images/press-logos/aadhaar-pressrelease-logo.png" alt="Aadhaar logo" className="col-10 hqyLazy" />
                          </div>
                          <div className="clearfix" />
                          <h3 className="fields_title mb-5" lang="en">
                            Government launches Aadhaar Good Governance portal to streamline approval process for Aadhaar authentication requests. </h3>
                          <div className="fields_date">
                            <p className="mb-5">28 Feb 2025</p>
                          </div>
                          <div className="fields_share_download mt-10">
                            <a href="https://uidai.gov.in/images/AadhaarGoodGovernancePortal.pdf" target="_blank" title="Government launches Aadhaar Good Governance portal to streamline approval process for Aadhaar authentication requests." rel="noopener noreferrer" className="fields_download-link d-inline-flex link">
                              <i className="material-icons pull-left mr-5 fs-15" />Download</a> | <b>Type:</b> pdf | <b>Size:</b> 0.5 MB
                          </div>
                        </section>
                      </div>
                      <div className="item white-card mb-20">
                        <section className="slider-cardstyle blue-shadow">
                          <div className="press-coverage-logo mb-10 pull-left col-10">
                            <img src="https://uidai.gov.in/images/press-logos/aadhaar-pressrelease-logo.png" alt="Aadhaar logo" className="col-10 hqyLazy" />
                          </div>
                          <div className="clearfix" />
                          <h3 className="fields_title mb-5" lang="en">
                            Over 284 Cr Aadhaar Authentications in January 2025; 32% jump y-o-y. It indicates growth of the digital economy with Aadhaar playing an integral role </h3>
                          <div className="fields_date">
                            <p className="mb-5">10 Feb 2025</p>
                          </div>
                          <div className="fields_share_download mt-10">
                            <a href="https://uidai.gov.in/images/Press_Release_10th_Feb_2025.pdf" target="_blank" title="Over 284 Cr Aadhaar Authentications in January 2025; 32% jump y-o-y. It indicates growth of the digital economy with Aadhaar playing an integral role" rel="noopener noreferrer" className="fields_download-link d-inline-flex link">
                              <i className="material-icons pull-left mr-5 fs-15" />Download</a> | <b>Type:</b> pdf | <b>Size:</b> 0.1 MB
                          </div>
                        </section>
                      </div>
                      <div className="item white-card mb-20">
                        <section className="slider-cardstyle blue-shadow">
                          <div className="press-coverage-logo mb-10 pull-left col-10">
                            <img src="https://uidai.gov.in/images/press-logos/aadhaar-pressrelease-logo.png" alt="Aadhaar logo" className="col-10 hqyLazy" />
                          </div>
                          <div className="clearfix" />
                          <h3 className="fields_title mb-5" lang="en">
                            Notification of Aadhaar Authentication for Good Governance (Social Welfare, Innovation, Knowledge) Amendment Rules, 2025 </h3>
                          <div className="fields_date">
                            <p className="mb-5">4 Feb 2025</p>
                          </div>
                          <div className="fields_share_download mt-10">
                            <a href="https://uidai.gov.in/images/Press_Release-Aadhaar_Authentication_Good_Governace.pdf" target="_blank" title="Notification of Aadhaar Authentication for Good Governance (Social Welfare, Innovation, Knowledge) Amendment Rules, 2025" rel="noopener noreferrer" className="fields_download-link d-inline-flex link">
                              <i className="material-icons pull-left mr-5 fs-15" />Download</a> | <b>Type:</b> pdf | <b>Size:</b> 0.1 MB
                          </div>
                        </section>
                      </div>
                      <div className="item white-card mb-20">
                        <section className="slider-cardstyle blue-shadow">
                          <div className="press-coverage-logo mb-10 pull-left col-10">
                            <img src="https://uidai.gov.in/images/press-logos/aadhaar-pressrelease-logo.png" alt="Aadhaar logo" className="col-10 hqyLazy" />
                          </div>
                          <div className="clearfix" />
                          <h3 className="fields_title mb-5" lang="en">
                            Aadhaar Face Authentication transactions crosses 100 crore landmark, doubles in five months. UIDAI conducts stakeholders meet with BFSI, Fintech and Telcos to further enhance smooth service delivery. </h3>
                          <div className="fields_date">
                            <p className="mb-5">22 Jan 2025</p>
                          </div>
                          <div className="fields_share_download mt-10">
                            <a href="https://uidai.gov.in/images/Press_Release20012025.pdf" target="_blank" title="Aadhaar Face Authentication transactions crosses 100 crore landmark, doubles in five months. UIDAI conducts stakeholders meet with BFSI, Fintech and Telcos to further enhance smooth service delivery." rel="noopener noreferrer" className="fields_download-link d-inline-flex link">
                              <i className="material-icons pull-left mr-5 fs-15" />Download</a> | <b>Type:</b> pdf | <b>Size:</b> 0.3 MB
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tjbase-module aadhaarIn-numbers heading-icon mb-20 col-xs-12 pl-0 pr-0" id="tjmod-337">
                  <div className="module-header">
                    <h2 className>Aadhaar in Numbers</h2>
                  </div>
                  <div className="module-content">
                    <div className="aadhar-in-numbers">
                      <div className="col-xs-12">
                        <div className="pull-left pr-15">
                          <div className="count-value fs-20 mb-5 heading-color" />
                          <span>Aadhaar Generated</span>
                        </div>
                        <div className="pull-left border-sep-left">
                          <div className="pl-10">
                            <div className="count-value fs-20 mb-5 heading-color">
                            </div>
                            <span>
                              Authentication Done			
                            </span></div>
                        </div>
                      </div>
                      <div className="col-xs-12 mt-15">
                        <ul className="single-line-items m-0 p-0">
                          <li>
                            <a href="/images/Aadhaar_Saturation_Report_31012025.pdf" className target="_blank">Aadhaar Saturation Report</a> Type: pdf Size: 0.5MB
                          </li>
                          <li>
                            <a href="https://uidai.gov.in/aadhaar_dashboard/" className target="_blank">View On Dashboard</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sidebarRight" className="tjbase-sidebar-right col-xs-12 col-sm-4" role="complementary">
          <div className="tjbase-module  heading-icon related-pages mt-15 mb-15" id="tjmod-457">
            <div className="module-header">
              <h3 className>Frequently Asked Questions</h3>
            </div>
            <div className="module-content">
              <div className="fancypantsaccordionholder uidai-style">
                <div className="accordion multi-category-accordion-style">
                  <a href="javascript:void(0);" className="cattitle" data-catid={281}>Use Aadhaar Freely</a>
                  <div className="accordion-item hide-article article-281">
                    <a href="javascript:void(0)" id="c7-accordion-heading-1" className="headerlink">
                      Recently, UIDAI has issued an advisory asking people not to share their Aadhaar number openly in the public domain especially on Social Media or other public platforms. Does this mean that I should not use Aadhaar freely?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      You should use your Aadhaar without any hesitation for proving your identity and doing transactions, just like you use your bank account number, PAN card, debit card, credit card, etc., wherever required. What UIDAI has advised is that Aadhaar card should
                      be freely used for proving identity and doing transactions, but should not be put on public platforms like Twitter, Facebook, etc. People give their debit card or credit card details or cheque (which has bank
                      account number) when they purchase goods, or pay school fee, water, electricity, telephone and other utility bills, etc. Similarly, you can freely use your Aadhaar to establish your identity as and when required
                      without any fear. While using Aadhaar, you should do the same level of due diligence as you do in case of other ID cards – not more, not less. </div>
                  </div>
                  <div className="accordion-item hide-article article-281">
                    <a href="javascript:void(0)" id="c7-accordion-heading-2" className="headerlink">
                      If Aadhaar has to be freely used for proving identity and it is safe to do so, then why has UIDAI advised people not to put up their Aadhaar number in Social Media or public domain?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      You use PAN card, debit card, credit card, bank cheques wherever required. But do you put these details openly on internet and social media such as Facebook, Twitter, etc.? Obviously no! You do not put such personal details unnecessarily in public domain
                      so that there is no unwarranted invasion attempt on your privacy. The same logic needs to be applied in case of uses of Aadhaar. </div>
                  </div>
                  <div className="accordion-item hide-article article-281">
                    <a href="javascript:void(0)" id="c7-accordion-heading-3" className="headerlink">
                      I gave my Aadhaar card to a service provider for proving my identity. Can anyone harm me by knowing and misusing my Aadhaar number?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>No. Just, by knowing your Aadhaar number, no one can harm you. To prove your identity, Aadhaar number is verfied/authenticated by agencies through various modes as prescribed under Aadhaar Act, 2016.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-281">
                    <a href="javascript:void(0)" id="c7-accordion-heading-4" className="headerlink">
                      There are many agencies that simply accept physical copy of Aadhaar and do not carry out any biometric or OTP authentication or verification. Is this a good practice?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p><br />No, in this connection MeitY has issued detailed instructions to all Government Ministries/Departments vide office memorandum no <a href="/images/Advisory_to_GOI_Secy.pdf" target="_blank" rel="noopener noreferrer">10(22)/2017-EG-II(VOL-1) dated 19.06.2023</a>.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-281">
                    <a href="javascript:void(0)" id="c7-accordion-heading-5" className="headerlink">
                      Why am I asked to verify Bank account, Demat account, PAN and various other services with Aadhaar?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>Aadhaar verification/authentication is governed by the sections of Aadhaar Act, 2016, under which the use case has been notified by the concerned Ministry/Department for providing services.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-281">
                    <a href="javascript:void(0)" id="c7-accordion-heading-6" className="headerlink">
                      Does linking my bank account, PAN, and other services with Aadhaar make me vulnerable?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>No. UIDAI does not have visibility of linking of your Aadhaar with any other services. Concern departments such as bank, income tax etc. do not share any information of Aadhaar number holder neither UIDAI stores
                        any such informations.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-281">
                    <a href="javascript:void(0)" id="c7-accordion-heading-7" className="headerlink">
                      Can a fraudster withdraw money from my Aadhaar linked bank account if he knows my Aadhaar number or has my Aadhaar card?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>Just by knowing your Aadhaar number or Aadhaar linked bank account, no one can withdraw money from Aadhaar linked bank account.</p>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="cattitle" data-catid={283}>E-Aadhaar</a>
                  <div className="accordion-item hide-article article-283">
                    <a href="javascript:void(0)" id="c7-accordion-heading-8" className="headerlink">
                      How to validate digital signatures in e-Aadhaar?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p><span>Please visit Aadhaar YouTube Channel and watch tutorial link on&nbsp;</span><span className="Object" role="link" id="OBJ_PREFIX_DWT2939_com_zimbra_url"><a target="_blank" href="https://youtu.be/aVNfUNIccZs?si=ByW1O6BIPMwc0seL" rel="noopener noreferrer">https://youtu.be/aVNfUNIccZs?si=ByW1O6BIPMwc0seL</a></span></p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-283">
                    <a href="javascript:void(0)" id="c7-accordion-heading-9" className="headerlink">
                      What supporting software needed to view e-Aadhaar?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>Aadhaar number holder needs 'Adobe Reader' to view digitally verified e-Aadhaar. To install Adobe Reader in the System visit <a href="https://get.adobe.com/reader/">https://get.adobe.com/reader/</a></p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-283">
                    <a href="javascript:void(0)" id="c7-accordion-heading-10" className="headerlink">
                      What Is the Password of e-Aadhaar?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>Password of eAadhaar is a combination of the first 4 letters of name in CAPITAL and the year of birth (YYYY).</p>
                      <p>For Example:</p>
                      <p>Example 1<br />Name: SURESH KUMAR<br />Year of Birth: 1990<br />Password: SURE1990</p>
                      <p>Example 2<br />Name: SAI KUMAR<br />Year of Birth: 1990<br />Password: SAIK1990</p>
                      <p>Example 3<br />Name: P. KUMAR<br />Year of Birth: 1990<br />Password: P.KU1990</p>
                      <p>Example 4<br />Name: RIA<br />Year of Birth: 1990<br />Password: RIA1990</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-283">
                    <a href="javascript:void(0)" id="c7-accordion-heading-11" className="headerlink">
                      What is Masked Aadhaar?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>&nbsp;Masked Aadhaar implies replacing of first 8 digits of Aadhaar number with&nbsp; “xxxx-xxxx” while only last 4 digits of the Aadhaar Number are visible.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-283">
                    <a href="javascript:void(0)" id="c7-accordion-heading-12" className="headerlink">
                      How can an Aadhaar Number holder download e-Aadhaar?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <div>An Aadhaar Number holder can <a href="https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en" target="_blank" rel="noopener noreferrer">download e-Aadhaar</a> by following three ways.</div>
                      <div />
                      <div>By Using Enrollment Number&nbsp;</div>
                      <div>By Using Aadhaar No&nbsp;</div>
                      <div>By using VID&nbsp;</div>
                      <p>OTP for downloading eAadhaar will be received on registered mobile number.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-283">
                    <a href="javascript:void(0)" id="c7-accordion-heading-13" className="headerlink">
                      From where an Aadhaar number holder can download e-Aadhaar?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p><span>Aadhaar Number holder can download e-Aadhaar by visiting UIDAI's MyAadhaar portal - <a href="https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en" target="_blank" rel="noopener noreferrer">https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en</a></span><span>&nbsp;or by using mAadhaar app for mobile phones.</span></p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-283">
                    <a href="javascript:void(0)" id="c7-accordion-heading-14" className="headerlink">
                      Is e-Aadhaar equally valid like physical copy of Aadhaar?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>As per Aadhaar Act, e-Aadhaar is equally valid like Physical Copy of Aadhaar for all purposes. For validity of eAadhaar, please visit UIDAI circular- <a href="https://uidai.gov.in/images/uidai_om_on_e_aadhaar_validity.pdf">https://uidai.gov.in/images/uidai_om_on_e_aadhaar_validity.pdf</a></p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-283">
                    <a href="javascript:void(0)" id="c7-accordion-heading-15" className="headerlink">
                      What is e-Aadhaar?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>e-Aadhaar is a password protected electronic copy of Aadhaar, digitally signed by UIDAI.&nbsp;</p>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="cattitle" data-catid={285}>mAadhaar FAQs</a>
                  <div className="accordion-item hide-article article-285">
                    <a href="javascript:void(0)" id="c7-accordion-heading-16" className="headerlink">
                      Is there any process to update the Aadhaar details such as DOB, Mobile number , address etc. through mAadhaar App?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>No, mAadhaar app can be used to update address only.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-285">
                    <a href="javascript:void(0)" id="c7-accordion-heading-17" className="headerlink">
                      Is it compulsory to have registered mobile number to use mAadhaar?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>No. Anyone in India with a smartphone can install and use mAadhaar App. Although for creating the Aadhaaar profile in mAadhaar, registered mobile number is required.</p>
                      <p>Without an Aadhaar registered mobile number Aadhaar number holder will be able to avail only a few of the services such as Order Aadhaar PVC card, Locate Enrolment Center, Verify Aadhaar, Scanning QR code etc.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-285">
                    <a href="javascript:void(0)" id="c7-accordion-heading-18" className="headerlink">
                      Is there any process to update the Aadhaar details through mAadhaar App , such like DOB, Mobile number , address etc. and completer process to be added?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>No, the facility to update demographic details such as Name, DoB, Mobile number aren not available in the mAadhaar app. Only address update via document facility is currently available.</p>
                      <p>However the demographics updates features may be included in future releases.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-285">
                    <a href="javascript:void(0)" id="c7-accordion-heading-19" className="headerlink">
                      How Aadhaar number holder can view the profile?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>The profile can be viewed by tapping on the profile summary on the top (profile image, name and Aadhaar number on the cyan tab) in the main dashboard.&nbsp;</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-285">
                    <a href="javascript:void(0)" id="c7-accordion-heading-20" className="headerlink">
                      How Aadhaar number holder can create profile on m-Aadhaar App?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>Only someone with an Aadhaar linked to a registered mobile number can create Aadhaar profile in the mAadhaar App. They can register their profile in an App installed in any smartphone. However the OTP will be
                        sent to only their registered mobile. Steps to register Aadhaar profile are given below:</p>
                      <ol>
                        <li>Launch the app.</li>
                        <li>Tap on the Register Aadhaar tab on the top of main dashboard</li>
                        <li>Create a 4 digit Pin/Password(memorize this password, as it will be required to access profile)</li>
                        <li>Provide Valid Aadhaar &amp; enter valid Captcha</li>
                        <li>Enter Valid OTP and submit</li>
                        <li>The profile should get registered</li>
                        <li>The registered tab would now display the registered Aadhaar Name</li>
                        <li>Tap on My Aadhaar tab on the bottom menu</li>
                        <li>Enter 4-digit Pin/Password</li>
                        <li>My Aadhaar Dashboard appears</li>
                      </ol>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-285">
                    <a href="javascript:void(0)" id="c7-accordion-heading-21" className="headerlink">
                      Where can mAadhaar be used?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>mAadhaar app can be used anywhere anytime within India. mAadhaar is more than Aadhaar card in a wallet. On one hand the mAadhaar profile is accepted as a valid ID proof and on the other,&nbsp;Aadhaar number holder
                        can use the features in the app to share their eKYC or QR code with service providers who sought Aadhaar verification of their customers before providing Aadhaar services.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-285">
                    <a href="javascript:void(0)" id="c7-accordion-heading-22" className="headerlink">
                      Is it compulsory to have registered mobile number to use mAadhaar services?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>No. Anyone with a smartphone can install and use mAadhaar App.<br />Without a registered mobile number, Aadhaar number holder will be able to avail only few services such as Order Aadhaar PVC card, Locate Enrolment
                        Center, Verify Aadhaar, Scanning QR code etc.<br />However registered mobile number is mandatory to create the profile in mAadhaar and use the same as digital identity and avail all other Aadhaar services.
                        The OTP will be sent only to registered mobile for creating the profile in mAadhaar.</p>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="cattitle" data-catid={307}>Aadhaar Paperless Offline e-kyc</a>
                  <div className="accordion-item hide-article article-307">
                    <a href="javascript:void(0)" id="c7-accordion-heading-23" className="headerlink">
                      Where can I find the Public Certificate for Digital Signature validation?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>Public certificate for Digital signature validation can be <a href="https://uidai.gov.in/images/authDoc/uidai_auth_prod.cer" target="_blank" rel="noopener noreferrer">downloaded from here</a>.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-307">
                    <a href="javascript:void(0)" id="c7-accordion-heading-24" className="headerlink">
                      How this Aadhaar Offline Paperless eKYC document is different from the other identification documents produced offline by individuals?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>Identity verification can simply be accomplished by providing an identity document like PAN card, Passport etc to the service provider. However, all these documents, which may be used for identification can
                        still be forged and faked which may or may not be possible to verify offline instantaneously. The document verifier has no technological means to verify the authenticity of the document or the information
                        it contains and has to trust the document producer. Whereas, the XML file generated by the Aadhaar number holder using Aadhaar Paperless Offline e-KYC is digitally signed document using UIDAI digital signature.
                        Thus, the service provider can verify the demographic contents of the file and certify it to be authentic when doing the offline verification</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-307">
                    <a href="javascript:void(0)" id="c7-accordion-heading-25" className="headerlink">
                      Can this Offline Paperless eKYC document be shared to other entities by the Service Provider?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>Service Providers shall not share, publish or display either XML or Share Code or its contents with anyone else. Any non-compliance of these actions shall invite actions under Sections 29(2), 29 (3), 29(4) and
                        37 of The Aadhaar Act, 2016 (as amended) and sub regulation 1A of regulation 25, regulation 14A of The Aadhaar (Authentication and Offline Verification) Regulation, 2021 and regulation 6 and 7 of The Aadhaar
                        (Sharing of Information) Regulation, 2016.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-307">
                    <a href="javascript:void(0)" id="c7-accordion-heading-26" className="headerlink">
                      How will service providers use Aadhaar Offline e-KYC?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>The process of Aadhaar Offline e-KYC Verification by Service Provider is:</p>
                      <div className="level_1">
                        <ul className="lowerAlpha">
                          <li><span className="li-text">Once service provider obtains the ZIP file, it extracts the XML file using the password (share code) provided by the Aadhaar number holder.</span></li>
                          <li><span className="li-text">The XML file will contain the demographic details such as Name, DOB, Gender and Address. Photo is in base 64 encoded format which can be rendered directly using any utility or plane HTML page. Email Address and Mobile number are hashed.</span></li>
                          <li><span className="li-text">Service Provider has to collect Email Address and Mobile number from Aadhaar number holders and perform below operations in order to validate the hash:</span>
                            <p><strong><u>Mobile Number:</u></strong></p>
                            <p>Hashing logic: Sha256(Sha256(Mobile+ShareCode))*number of times of last digit of Aadhaar Number</p>
                            <p>Example :<br /> <span id="spantable1"> Mobile number: 9800000002</span><br /><span id="spantable2"> Aadhaar Number: 123412341234</span><br /><span id="spantable3"> Share Code: Abc@123</span><br />
                              <span id="spantable4"> Sha256(Sha256(9800000002+ Abc@123))*4</span><br /><span id="spantable5">In case if Aadhaar Number ends with Zero or 1 (123412341230/1) it will be hashed one time.</span><br /><span id="spantable6">Sha256(Sha256(9800000002+ Abc@123))*1</span></p>
                            <p><strong><u>Email Address:</u></strong></p>
                            <p>Hashing Logic: This is a simple SHA256 hash of the email without any salt</p>
                          </li>
                          <li><span className="li-text">Entire XML is digitally signed and Service Provider can validate the XML file using the signature and public key available on the UIDAI website.(<a href="https://uidai.gov.in/images/uidai_offline_publickey_26022019.cer" target="_blank" rel="noopener noreferrer">https://uidai.gov.in/images/uidai_offline_publickey_26022019.cer</a>).</span></li>
                        </ul>
                        <p><img src="./images/offlineverification.png" alt="Offline Aadhaar Data Verification Service" title="Offline Aadhaar Data Verification Service" /></p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-307">
                    <a href="javascript:void(0)" id="c7-accordion-heading-27" className="headerlink">
                      How to share this Paperless Offline eKYC document with the service provider?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>Aadhaar number holders can share the XML ZIP file along with the Share Code to the service provider as per their mutual convenience.</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-307">
                    <a href="javascript:void(0)" id="c7-accordion-heading-28" className="headerlink">
                      Who are the users of this Aadhaar Paperless Offline e-KYC?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>Any Aadhaar number holder who desires to establish his/her identity to any service provider (OVSE) using digitally signed XML downloaded from UIDAI website can be a user of this service. The service provider
                        should have provisions of providing this Aadhaar Paperless Offline e-KYC at their facility and do the offline verification</p>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-307">
                    <a href="javascript:void(0)" id="c7-accordion-heading-29" className="headerlink">
                      How to generate Offline Aadhaar XML?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>The process of generating Aadhaar Offline e-KYC is explained below:</p>
                      <p>• Go to URL<a href="https://myaadhaar.uidai.gov.in/offline-ekyc" target="_blank" rel="noopener noreferrer"> https://myaadhaar.uidai.gov.in/offline-ekyc</a><br />• Enter ‘Aadhaar Number’ or ‘VID’ and enter mentioned
                        ‘Security Code’ in screen, then click on ‘Send OTP’. The OTP will be sent to the registered Mobile Number for the given Aadhaar number or VID. OTP will be available on m-Aadhaar mobile Application of UIDAI.
                        Enter the OTP received. Enter a Share Code which be the password for the ZIP file and click on ‘Download’ button<br />• The Zip file containing the digitally signed XML will be downloaded to device wherein
                        the above mentioned steps have been performed.</p>
                      <p>The Offline Aadhaar XML can also be downloaded from mAadhaar app.</p>
                      <div className="level_1">
                        <ul className="lowerAlpha">
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item hide-article article-307">
                    <a href="javascript:void(0)" id="c7-accordion-heading-30" className="headerlink">
                      What is Aadhaar Paperless Offline e-KYC?                <span className="acc-arrow">Open or Close</span>
                    </a>
                    <div className="acc-content">
                      <p>It is a secure sharable document which can be used by any Aadhaar number holder for offline verification of Identification.</p>
                      <p>An Aadhaar number holder desirous of using this facility shall generate his/her digitally signed Offline XML by accessing UIDAI website. The Offline XML will contain Name, Address, Photo, Gender, DOB, hash of
                        registered Mobile Number, hash of registered Email Address and reference id which contains last 4 digits of Aadhaar Number followed by time stamp. It will provide Offline Aadhaar Verification facility to
                        service providers/Offline Verification Seeking Entity (OVSE) without the need to collect or store Aadhaar number.</p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 text-center my-10">
                  <a href="/en/contact-support/have-any-question.html" lang="en">View All</a>
                </div>
              </div>
            </div>
          </div>
          <div className="moduletable hidden-xs my-15 col-xs-12 twitter-mod">
            <div className="custom">
              <div style={{height: 500, overflow: 'auto'}} id="twitter-feed"><a className="twitter-timeline" data-height={500} data-tweet-limit={3} href="https://twitter.com/UIDAI?ref_src=twsrc%5Etfw">Tweets by UIDAI</a></div>
            </div>
          </div>
          <div className="tjbase-module text-center col-xs-12 mb-15 pl-0 pr-0" id="tjmod-280">
            <div className="module-content">
              <div className="custom">
                <div className="text-center"><a href="https://play.google.com/store/apps/details?id=in.gov.uidai.mAadhaarPlus&hl=en_IN" target="_blank" lang="en" rel="noopener noreferrer"><img src="./images/m-aadhaar/mAadhaarAds.png" alt="mAadhaar" className="br-5" /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-contrast-bg">
    <div className="background-image-style">
      <div className="background-opacity-bg">
        <div className="container footer-container">
          <div className="col-xs-12 col-sm-6 col-md-3 pl-0 pr-0">
            <div id="footer-1" className="tjbase-footer-1" role="contentinfo">
              <div className="tjbase-module col-xs-12 footer-contact text-white" id="tjmod-281">
                <div className="module-header">
                  <h3 className>Contact Us</h3>
                </div>
                <div className="module-content">
                  <div className="custom">
                    <div className="link-br"><a href="tel:1947"> <i className="material-icons pull-left mr-5 fs-20 icon-gradient-yellow" style={{color: '#ffffff', backgroundColor: '#ffffff'}}> phone</i>Toll free :1947</a></div>
                    <div className="link-br"><a href="mailto:help@uidai.gov.in"><i className="material-icons pull-left mr-5 fs-20 icon-gradient-yellow" style={{color: '#ffffff', backgroundColor: '#ffffff'}}> email </i>help@uidai.gov.in</a></div>
                  </div>
                </div>
              </div>
              <div className="tjbase-module col-xs-12 mb-15 follow-us my-20" id="tjmod-283">
                <div className="module-header">
                  <h3 className>Follow Us</h3>
                </div>
                <div className="module-content">
                  <div className="custom">
                    <ul className="list-unstyled">
                      <li className="d-inline mr-5"><a href="https://www.facebook.com/AadhaarOfficial/" target="_blank" rel="noopener noreferrer"><img src="./images/social-icons/Facebook1.png" alt="Facebook" className="mb-5" /></a></li>
                      <li className="d-inline mr-5"><a href="https://twitter.com/UIDAI" target="_blank" rel="noopener noreferrer"><img src="./images/social-icons/Twitter1.png" alt="Twitter" className="mb-5" /></a></li>
                      <li className="d-inline mr-5"><a href="https://www.youtube.com/user/AadhaarUID" target="_blank" rel="noopener noreferrer"><img src="./images/social-icons/youtube1.png" alt="Youtube" className="mb-5" /></a></li>
                      <li className="d-inline mr-5"><a href="https://www.instagram.com/aadhaar_official/?hl=en" target="_blank" rel="noopener noreferrer"><img src="./images/social-icons/Instagram.png" alt="Instagram" className="mb-5" /></a></li>
                      <li className="d-inline mr-5"><a href="https://www.linkedin.com/company/unique-identification-authority-of-india-uidai-" target="_blank" rel="noopener noreferrer"><img src="./images/social-icons/Linkedin.png" alt="LinkedIn" className="mb-5" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tjbase-module" id="tjmod-1349">
                <div className="module-header">
                  <h3 className>To Collaborate, email to us:</h3>
                </div>
                <div className="module-content">
                  <div className="custom">
                    <p>collaborate[at]uidai[dot]net[dot]in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 pl-0 pr-0">
            <div id="footer-2" className="tjbase-footer-2" role="contentinfo">
              <div className="tjbase-module col-xs-12 mb-15" id="tjmod-93">
                <div className="module-header">
                  <h3 className>UIDAI Head Office</h3>
                </div>
                <div className="module-content">
                  <div className="custom">
                    <p className="font-600">Unique Identification Authority of India</p>
                    <p className="font-600">Government of India (GoI)</p>
                    <p>Bangla Sahib Road, Behind Kali Mandir, Gole Market,</p>
                    <p>New Delhi - 110001</p>
                  </div>
                </div>
              </div>
              <div className="tjbase-module col-xs-12 mb-15" id="tjmod-438">
                <div className="module-header">
                  <h3 className>Regional Offices</h3>
                </div>
                <div className="module-content">
                  <div className="select-type">
                    <select className="select-sec MM" id="contact-select" onchange="javascript:getRegionalOfficeContact(this.value);" title="select regional offices">
                      <option value="en-GB-1">
                        Andaman and Nicobar Island			</option>
                      <option value="en-GB-2">
                        Andhra Pradesh			</option>
                      <option value="en-GB-3">
                        Arunachal Pradesh			</option>
                      <option value="en-GB-4">
                        Assam			</option>
                      <option value="en-GB-5">
                        Bihar			</option>
                      <option value="en-GB-6">
                        Chandigarh			</option>
                      <option value="en-GB-7">
                        Chhattisgarh			</option>
                      <option value="en-GB-8">
                        Dadar and Nagar Haveli			</option>
                      <option value="en-GB-9">
                        Daman and Diu			</option>
                      <option value="en-GB-10" selected="selected">
                        Delhi			</option>
                      <option value="en-GB-11">
                        Goa			</option>
                      <option value="en-GB-12">
                        Gujarat			</option>
                      <option value="en-GB-13">
                        Haryana			</option>
                      <option value="en-GB-14">
                        Himachal Pradesh			</option>
                      <option value="en-GB-15">
                        Jammu and Kashmir			</option>
                      <option value="en-GB-16">
                        Jharkhand			</option>
                      <option value="en-GB-17">
                        Karnataka			</option>
                      <option value="en-GB-18">
                        Kerala			</option>
                      <option value="en-GB-19">
                        Lakshadweep			</option>
                      <option value="en-GB-20">
                        Madhya Pradesh			</option>
                      <option value="en-GB-21">
                        Maharashtra			</option>
                      <option value="en-GB-22">
                        Manipur			</option>
                      <option value="en-GB-23">
                        Meghalaya			</option>
                      <option value="en-GB-24">
                        Mizoram			</option>
                      <option value="en-GB-25">
                        Nagaland			</option>
                      <option value="en-GB-26">
                        Odisha			</option>
                      <option value="en-GB-27">
                        Puducherry			</option>
                      <option value="en-GB-28">
                        Punjab			</option>
                      <option value="en-GB-29">
                        Rajasthan			</option>
                      <option value="en-GB-30">
                        Sikkim			</option>
                      <option value="en-GB-31">
                        Tamil Nadu			</option>
                      <option value="en-GB-32">
                        Telangana			</option>
                      <option value="en-GB-33">
                        Tripura			</option>
                      <option value="en-GB-34">
                        Uttar Pradesh			</option>
                      <option value="en-GB-35">
                        Uttarakhand			</option>
                      <option value="en-GB-36">
                        West Bengal			</option>
                    </select>
                    <div id="rocontact_en-GB-1" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Hyderabad</p>
                      <p className="line-height-24">6th Floor, East Block, Swarna Jayanthi Complex, Beside Maitrivanam, Ameerpet Hyderabad-500 038, Telangana State</p>
                    </div>
                    <div id="rocontact_en-GB-2" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Hyderabad</p>
                      <p className="line-height-24">6th Floor, East Block, Swarna Jayanthi Complex, Beside Maitrivanam, Ameerpet Hyderabad-500 038, Telangana State</p>
                    </div>
                    <div id="rocontact_en-GB-3" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Guwahati</p>
                      <p className="line-height-24">Block-V, First Floor, HOUSEFED Complex, Beltola-Basistha Road, Dispur, Guwahati - 781 006</p>
                    </div>
                    <div id="rocontact_en-GB-4" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Guwahati</p>
                      <p className="line-height-24">Block-V, First Floor, HOUSEFED Complex, Beltola-Basistha Road, Dispur, Guwahati - 781 006</p>
                    </div>
                    <div id="rocontact_en-GB-5" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Ranchi</p>
                      <p className="line-height-24">1st Floor, JIADA Central Office Building, Namkum Industrial Area,Near STPI Lowadih, Ranchi - 834 010</p>
                    </div>
                    <div id="rocontact_en-GB-6" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Chandigarh</p>
                      <p className="line-height-24">SCO 95-98, Ground and Second Floor , Sector 17- B, Chandigarh 160017</p>
                    </div>
                    <div id="rocontact_en-GB-7" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Hyderabad</p>
                      <p className="line-height-24">6th Floor, East Block, Swarna Jayanthi Complex, Beside Maitrivanam, Ameerpet Hyderabad-500 038, Telangana State</p>
                    </div>
                    <div id="rocontact_en-GB-8" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Mumbai</p>
                      <p className="line-height-24">7th Floor, MTNL Exchange, GD Somani Marg, Cuff Parade, Colaba, Mumbai - 400 005</p>
                    </div>
                    <div id="rocontact_en-GB-9" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Mumbai</p>
                      <p className="line-height-24">7th Floor, MTNL Exchange, GD Somani Marg, Cuff Parade, Colaba, Mumbai - 400 005</p>
                    </div>
                    <div id="rocontact_en-GB-10" className="roclass">
                      <p className="mb-5 font-600">UIDAI Regional Office, Delhi</p>
                      <p className="line-height-24">Ground Floor, Supreme Court Metro Station, Pragati Maidan, New Delhi-110001</p>
                    </div>
                    <div id="rocontact_en-GB-11" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Mumbai</p>
                      <p className="line-height-24">7th Floor, MTNL Exchange, GD Somani Marg, Cuff Parade, Colaba, Mumbai - 400 005</p>
                    </div>
                    <div id="rocontact_en-GB-12" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Mumbai</p>
                      <p className="line-height-24">7th Floor, MTNL Exchange, GD Somani Marg, Cuff Parade, Colaba, Mumbai - 400 005</p>
                    </div>
                    <div id="rocontact_en-GB-13" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Chandigarh</p>
                      <p className="line-height-24">SCO 95-98, Ground and Second Floor , Sector 17- B, Chandigarh 160017</p>
                    </div>
                    <div id="rocontact_en-GB-14" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Chandigarh</p>
                      <p className="line-height-24">SCO 95-98, Ground and Second Floor , Sector 17- B, Chandigarh 160017</p>
                    </div>
                    <div id="rocontact_en-GB-15" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Chandigarh</p>
                      <p className="line-height-24">SCO 95-98, Ground and Second Floor , Sector 17- B, Chandigarh 160017</p>
                    </div>
                    <div id="rocontact_en-GB-16" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Ranchi</p>
                      <p className="line-height-24">1st Floor, JIADA Central Office Building, Namkum Industrial Area,Near STPI Lowadih, Ranchi - 834 010</p>
                    </div>
                    <div id="rocontact_en-GB-17" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Bengaluru</p>
                      <p className="line-height-24">Khanija Bhavan, No. 49, 3rd Floor, South Wing Race Course Road, Bengaluru - 560001</p>
                    </div>
                    <div id="rocontact_en-GB-18" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Bengaluru</p>
                      <p className="line-height-24">Khanija Bhavan, No. 49, 3rd Floor, South Wing Race Course Road, Bengaluru - 560001</p>
                    </div>
                    <div id="rocontact_en-GB-19" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Bengaluru</p>
                      <p className="line-height-24">Khanija Bhavan, No. 49, 3rd Floor, South Wing Race Course Road, Bengaluru - 560001</p>
                    </div>
                    <div id="rocontact_en-GB-20" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Delhi</p>
                      <p className="line-height-24">Ground Floor, Supreme Court Metro Station, Pragati Maidan, New Delhi-110001</p>
                    </div>
                    <div id="rocontact_en-GB-21" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Mumbai</p>
                      <p className="line-height-24">7th Floor, MTNL Exchange, GD Somani Marg, Cuff Parade, Colaba, Mumbai - 400 005</p>
                    </div>
                    <div id="rocontact_en-GB-22" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Guwahati</p>
                      <p className="line-height-24">Block-V, First Floor, HOUSEFED Complex, Beltola-Basistha Road, Dispur, Guwahati - 781 006</p>
                    </div>
                    <div id="rocontact_en-GB-23" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Guwahati</p>
                      <p className="line-height-24">Block-V, First Floor, HOUSEFED Complex, Beltola-Basistha Road, Dispur, Guwahati - 781 006</p>
                    </div>
                    <div id="rocontact_en-GB-24" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Guwahati</p>
                      <p className="line-height-24">Block-V, First Floor, HOUSEFED Complex, Beltola-Basistha Road, Dispur, Guwahati - 781 006</p>
                    </div>
                    <div id="rocontact_en-GB-25" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Guwahati</p>
                      <p className="line-height-24">Block-V, First Floor, HOUSEFED Complex, Beltola-Basistha Road, Dispur, Guwahati - 781 006</p>
                    </div>
                    <div id="rocontact_en-GB-26" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Hyderabad</p>
                      <p className="line-height-24">6th Floor, East Block, Swarna Jayanthi Complex, Beside Maitrivanam, Ameerpet Hyderabad-500 038, Telangana State</p>
                    </div>
                    <div id="rocontact_en-GB-27" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Bengaluru</p>
                      <p className="line-height-24">Khanija Bhavan, No. 49, 3rd Floor, South Wing Race Course Road, Bengaluru - 560001</p>
                    </div>
                    <div id="rocontact_en-GB-28" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Chandigarh</p>
                      <p className="line-height-24">SCO 95-98, Ground and Second Floor , Sector 17- B, Chandigarh 160017</p>
                    </div>
                    <div id="rocontact_en-GB-29" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Delhi</p>
                      <p className="line-height-24">Ground Floor, Supreme Court Metro Station, Pragati Maidan, New Delhi-110001</p>
                    </div>
                    <div id="rocontact_en-GB-30" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Guwahati</p>
                      <p className="line-height-24">Block-V, First Floor, HOUSEFED Complex, Beltola-Basistha Road, Dispur, Guwahati - 781 006</p>
                    </div>
                    <div id="rocontact_en-GB-31" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Bengaluru</p>
                      <p className="line-height-24">Khanija Bhavan, No. 49, 3rd Floor, South Wing Race Course Road, Bengaluru - 560001</p>
                    </div>
                    <div id="rocontact_en-GB-32" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Hyderabad</p>
                      <p className="line-height-24">6th Floor, East Block, Swarna Jayanthi Complex, Beside Maitrivanam, Ameerpet Hyderabad-500 038, Telangana State</p>
                    </div>
                    <div id="rocontact_en-GB-33" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Guwahati</p>
                      <p className="line-height-24">Block-V, First Floor, HOUSEFED Complex, Beltola-Basistha Road, Dispur, Guwahati - 781 006</p>
                    </div>
                    <div id="rocontact_en-GB-34" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Lucknow</p>
                      <p className="line-height-24">3rd Floor, Uttar Pradesh Samaj Kalyan Nirman Nigam Building, TC-46/ V,Vibhuti Khand, Gomti Nagar, Lucknow- 226 010</p>
                    </div>
                    <div id="rocontact_en-GB-35" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Delhi</p>
                      <p className="line-height-24">Ground Floor, Supreme Court Metro Station, Pragati Maidan, New Delhi-110001</p>
                    </div>
                    <div id="rocontact_en-GB-36" className="roclass" style={{display: 'none'}}>
                      <p className="mb-5 font-600">UIDAI Regional Office, Ranchi</p>
                      <p className="line-height-24">1st Floor, JIADA Central Office Building, Namkum Industrial Area,Near STPI Lowadih, Ranchi - 834 010</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3 pl-0 pr-0">
            <div id="footer-3" className="tjbase-footer-3" role="contentinfo">
              <div className="tjbase-module col-xs-12 mb-15" id="tjmod-289">
                <div className="module-content">
                  <ul className="nav menu inline-items">
                    <li className="item-2489"><a href="/en/website-policy.html">Website Policy</a></li>
                    <li className="item-2490"><a href="/en/terms-conditions.html">Terms &amp; Conditions</a></li>
                    <li className="item-2491"><a href="/en/privacy-policy.html">Privacy Policy</a></li>
                    <li className="item-2492"><a href="/en/hyperlinking-policy.html">Hyperlinking Policy</a></li>
                    <li className="item-2493"><a href="/en/copyright-policy.html">Copyright Policy</a></li>
                    <li className="item-2494"><a href="/en/disclaimer.html">Disclaimer</a></li>
                    <li className="item-2926"><a href="/en/help.html">Help</a></li>
                    <li className="item-4550"><a href="/en/feedback.html">Feedback</a></li>
                    <li className="item-2495"><a href="/en/sitemap.html">Sitemap</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-md-3 pl-0 pr-0">
            <div id="footer-4" className="tjbase-footer-4" role="contentinfo">
              <div className="tjbase-module col-xs-12 mb-15 " id="tjmod-290">
                <div className="module-header">
                  <h3 className>Government of india</h3>
                </div>
                <div className="module-content">
                  <ul className="nav menu inline-items">
                    <li className="item-2496"><a href="https://www.mygov.in/" target="_blank" rel="noopener noreferrer">My Gov</a></li>
                    <li className="item-2497"><a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer">National Portal of India</a></li>
                    <li className="item-2498"><a href="http://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer">Digital India</a></li>
                    <li className="item-2499"><a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer">GST.gov.in</a></li>
                    <li className="item-2500"><a href="https://dbtbharat.gov.in/" target="_blank" rel="noopener noreferrer">DBT Bharat</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer id="copyright" className="uidai-copyright hidden-xs" role="contentinfo">
          <div className="container">
            <div className="row">
              {/* 		<div class="tjbase-module li-separator-white fs-12" id="tjmod-97">
								<div class="module-content">
						

<div class="custom"  >
	<div class="col-md-8 col-sm-8">
<p class="mb-0">Copyright © 2022 Unique Identification Authority of India All Rights Reserved</p>
<p class="mb-0">JavaScript must be enabled to access this site.</p>
<ul class="list-unstyled separator-white mt-0 mb-10">
<li class="d-inline-block">Supports : Firefox 37+</li>
<li class="d-inline-block">Google Chrome 6.0+</li>
<li class="d-inline-block">Internet Explorer 9.0+</li>
<li class="d-inline-block">Safari 4.0+</li>
</ul>
</div>
<div class="col-md-4 col-sm-4 text-right">
<div class="col-10">
<ul class="list-unstyled ">
<li class="d-inline-block mr-15 "><a href="https://validator.w3.org/check?uri=referer" target="_blank" rel="noopener noreferrer" class="hide"><img src="./images/W3C_xhtml.png" alt="w3c-Icon" style="width: 60px;" /> </a></li>
<li class="d-inline-block"><a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fuidai.gov.in%2F&amp;profile=css3svg&amp;usermedium=all&amp;warning=1&amp;vextwarning=" target="_blank" rel="noopener noreferrer"> <img src="./images/W3C_css.png" alt="w3c-Icon" style="width: 60px;" /> </a></li>
</ul>
</div>
<p>Last reviewed and updated on: <b>24-Jan-2019</b></p>
</div></div>
					</div>

		</div>
		 */}
             
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</div>

  </div>
</div>


  );
};

export default Home;