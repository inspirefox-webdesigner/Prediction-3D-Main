// import React, { useEffect, useRef } from "react";
// import logo from "../assets/logo.png";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function Footer() {
//   const sectionRef = useRef(null);
//   const bgRef = useRef(null);
//   const leftColRef = useRef(null);
//   const productsRef = useRef(null);
//   const solutionsRef = useRef(null);
//   const rightBoxRef = useRef(null);
//   const rightBoxContentRef = useRef(null);
//   const socialSvgsRef = useRef(null);
//   const bottomTextRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const scrollTriggerConfig = {
//         trigger: sectionRef.current,
//         start: "top 85%",
//         toggleActions: "play none none reset",
//       };

//       // ── BG box: horizontal line → full height ──
//       gsap.set(bgRef.current, {
//         scaleX: 0,
//         scaleY: 0,
//         opacity: 1,
//         transformPerspective: 1400,
//         transformOrigin: "center center",
//       });

//       const tl = gsap.timeline({ scrollTrigger: scrollTriggerConfig });

//       tl.to(bgRef.current, {
//         scaleX: 1,
//         scaleY: 0.04,
//         duration: 0.45,
//         ease: "power2.inOut",
//       });
//       tl.to(bgRef.current, {
//         scaleY: 1,
//         duration: 0.85,
//         ease: "expo.out",
//       });

//       // ── After bg opens: all content animates in simultaneously ──

//       // Set initial states for all content
//       gsap.set(leftColRef.current, {
//         x: -180,
//         rotationY: -55,
//         opacity: 0,
//         transformPerspective: 1200,
//         transformOrigin: "left center",
//       });
//       gsap.set(productsRef.current, {
//         y: -140,
//         rotationX: -75,
//         opacity: 0,
//         transformPerspective: 1000,
//         transformOrigin: "center top",
//       });
//       gsap.set(solutionsRef.current, {
//         y: 140,
//         rotationX: 75,
//         opacity: 0,
//         transformPerspective: 1000,
//         transformOrigin: "center bottom",
//       });
//       gsap.set(rightBoxRef.current, {
//         scale: 0.6,
//         rotationY: 45,
//         opacity: 0,
//         transformPerspective: 1400,
//         transformOrigin: "center center",
//       });
//       gsap.set(rightBoxContentRef.current, { opacity: 0, y: 15 });

//       const svgSpans = socialSvgsRef.current
//         ? Array.from(socialSvgsRef.current.querySelectorAll("span"))
//         : [];
//       gsap.set(svgSpans, { rotationY: -360, opacity: 0, transformPerspective: 600 });

//       // All columns animate in together after bg opens (label "reveal")
//       tl.addLabel("reveal", "-=0.1");

//       tl.to(leftColRef.current,
//         { x: 0, rotationY: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
//         "reveal"
//       );
//       tl.to(productsRef.current,
//         { y: 0, rotationX: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
//         "reveal"
//       );
//       tl.to(solutionsRef.current,
//         { y: 0, rotationX: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
//         "reveal"
//       );
//       tl.to(rightBoxRef.current,
//         { scale: 1, rotationY: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
//         "reveal"
//       );
//       tl.to(rightBoxContentRef.current,
//         { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
//         "reveal+=0.3"
//       );
//       tl.to(svgSpans,
//         { rotationY: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
//         "reveal+=0.2"
//       );

//       // ── Bottom text typing effect ──
//       tl.add(() => {
//         const el = bottomTextRef.current;
//         if (!el) return;
//         const text = el.innerText;
//         el.innerHTML = "";
//         text.split("").forEach((char) => {
//           const span = document.createElement("span");
//           span.innerText = char === " " ? "\u00A0" : char;
//           span.style.opacity = "0";
//           el.appendChild(span);
//         });
//         gsap.to(el.children, {
//           opacity: 1,
//           duration: 0.04,
//           stagger: 0.04,
//           ease: "none",
//         });
//       }, "reveal+=0.4");
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="lg:pt-50 pt-0 relative" style={{ perspective: "1400px" }}>
//       <div
//         ref={bgRef}
//         className="footer-section relative w-full text-white pt-28 pb-16"
//         style={{ transformStyle: "preserve-3d", willChange: "transform" }}
//       >
//         <div className="max-w-[1550px] mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-12 items-start">

//           {/* LEFT COL */}
//           <div ref={leftColRef} className="space-y-6" style={{ willChange: "transform" }}>
//             <img src={logo} className="h-15 mb-15" />
//             <p className="text-sm text-white lg:text-[18px] font-semibold poppins-font">
//               Connect with Us
//             </p>
//             <div className="space-y-3 text-sm text-gray-300 lg:max-w-[272px]">
//               <div className="flex items-center gap-3">
//                 <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M17.2632 13.1277C16.1141 13.1277 14.9858 12.9362 13.9166 12.5597C13.3927 12.3693 12.7486 12.544 12.4288 12.8939L10.3184 14.5915C7.87093 13.1994 6.36333 11.5934 5.0747 9.00505L6.62096 6.81484C7.02269 6.38734 7.16679 5.76286 6.99415 5.17693C6.63929 4.03161 6.45903 2.8299 6.45903 1.6049C6.45908 0.719948 5.78343 0 4.95299 0H1.50609C0.675645 0 0 0.719948 0 1.60484C0 11.7481 7.74419 20 17.2632 20C18.0937 20 18.7693 19.2801 18.7693 18.3952V14.7325C18.7693 13.8477 18.0936 13.1277 17.2632 13.1277Z" fill="white" />
//                 </svg>
//                 <span className="text-[16px] text-white poppins-font">425 246 2023</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <svg width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M25.6117 19.6309C25.2145 19.4127 24.7159 19.5578 24.4978 19.9548C24.2797 20.3519 24.4247 20.8507 24.8218 21.0688C25.7989 21.6056 26.3594 22.2007 26.3594 22.7015C26.3594 23.3141 25.4915 24.2634 23.0555 25.091C20.649 25.9087 17.433 26.3589 14 26.3589C10.567 26.3589 7.35098 25.9087 4.94446 25.091C2.50852 24.2635 1.64062 23.3141 1.64062 22.7015C1.64062 22.2007 2.20106 21.6056 3.17822 21.0687C3.5753 20.8506 3.72034 20.3519 3.50219 19.9548C3.28404 19.5577 2.78545 19.4127 2.38826 19.6308C1.29877 20.2294 0 21.248 0 22.7015C0 23.8157 0.766281 25.4043 4.41667 26.6445C6.98873 27.5183 10.3922 27.9996 14 27.9996C17.6078 27.9996 21.0113 27.5183 23.5833 26.6445C27.2337 25.4043 28 23.8157 28 22.7015C28 21.248 26.7012 20.2294 25.6117 19.6309Z" fill="white" />
//                   <path d="M7.80464 23.9045C9.46987 24.3749 11.6694 24.634 13.9979 24.634C16.3264 24.634 18.5259 24.375 20.1911 23.9045C22.2284 23.329 23.2614 22.4959 23.2614 21.4285C23.2614 20.3611 22.2284 19.5281 20.1911 18.9526C19.7389 18.8248 19.247 18.7128 18.7241 18.6172C18.4303 19.1245 18.1327 19.6296 17.8314 20.1325C18.4102 20.2193 18.9537 20.3258 19.4472 20.4515C20.9465 20.8334 21.4942 21.2633 21.6068 21.4286C21.4942 21.5939 20.9465 22.0238 19.4472 22.4056C18.0281 22.767 16.2023 22.9732 14.2794 22.9916C14.1857 22.9987 14.0918 23.0023 13.9979 23.0024C13.9033 23.0024 13.8095 22.9985 13.7164 22.9916C11.7934 22.9732 9.96759 22.7671 8.5485 22.4056C7.04919 22.0238 6.50149 21.5938 6.38889 21.4286C6.50149 21.2633 7.04924 20.8334 8.54855 20.4515C9.04205 20.3258 9.58548 20.2193 10.1644 20.1325C9.85323 19.6129 9.55568 19.1078 9.27169 18.6172C8.74876 18.7128 8.25685 18.8248 7.80464 18.9526C5.76737 19.5281 4.73438 20.3611 4.73438 21.4285C4.73438 22.4959 5.76737 23.329 7.80464 23.9045Z" fill="white" />
//                   <path d="M14.0006 21.3628C14.7309 21.3628 15.3942 20.9907 15.7751 20.3674C18.4444 16.0003 21.6263 10.2446 21.6263 7.62557C21.6263 3.42081 18.2054 0 14.0006 0C9.79581 0 6.375 3.42081 6.375 7.62557C6.375 10.2446 9.55688 16.0003 12.2261 20.3674C12.6071 20.9907 13.2704 21.3628 14.0006 21.3628ZM10.9356 7.10199C10.9356 5.41199 12.3106 4.03703 14.0006 4.03703C15.6907 4.03703 17.0657 5.41199 17.0657 7.10199C17.0657 8.79206 15.6907 10.167 14.0006 10.167C12.3106 10.167 10.9356 8.79211 10.9356 7.10199Z" fill="white" />
//                 </svg>
//                 <span className="text-[16px] text-white poppins-font">10 Grande View Dr. #139, Biloxi, MS 39531</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M23.9174 1.2122L16.5993 8.4832L23.9174 15.7542C24.0497 15.4777 24.13 15.172 24.13 14.8456V2.1208C24.13 1.79434 24.0497 1.48871 23.9174 1.2122ZM22.0092 0H2.1208C1.79434 0 1.48871 0.0802606 1.2122 0.212551L10.5655 9.51877C11.3926 10.3458 12.7374 10.3458 13.5645 9.51877L22.9178 0.212551C22.6413 0.0802606 22.3357 0 22.0092 0ZM0.212551 1.2122C0.0802605 1.48871 0 1.79434 0 2.1208V14.8456C0 15.1721 0.0802605 15.4777 0.212551 15.7542L7.53068 8.4832L0.212551 1.2122Z" fill="white" />
//                   <path d="M15.5984 9.48242L14.5628 10.518C13.1848 11.896 10.9426 11.896 9.56458 10.518L8.52907 9.48242L1.21094 16.7534C1.48744 16.8857 1.79307 16.966 2.11954 16.966H22.0079C22.3344 16.966 22.64 16.8857 22.9165 16.7534L15.5984 9.48242Z" fill="white" />
//                 </svg>
//                 <span className="text-[16px] text-white poppins-font">support@prediction3d.com</span>
//               </div>
//             </div>
//           </div>

//           {/* PRODUCTS */}
//           <div ref={productsRef} style={{ willChange: "transform" }}>
//             <h3 className="font-semibold text-lg lg:text-[24px] poppins-font mb-3">Products</h3>
//             <ul className="space-y-3 text-[#A1AAB2] text-sm lg:text-[20px]">
//               <li>Scheduling</li>
//               <li>Estimation</li>
//               <li>Visual Editing</li>
//               <li>Change Order Automation</li>
//               <li>2D To 3D Conversion</li>
//               <li>Revit Plugins</li>
//               <li>Custom Revit Plugins</li>
//             </ul>
//           </div>

//           {/* SOLUTIONS */}
//           <div ref={solutionsRef} style={{ willChange: "transform" }}>
//             <h3 className="font-semibold text-lg lg:text-[24px] poppins-font mb-3">Solutions</h3>
//             <ul className="space-y-3 text-[#A1AAB2] text-sm lg:text-[20px]">
//               <li>Residential</li>
//               <li>Commercial</li>
//               <li>Industrial</li>
//               <li>Transportation</li>
//               <li>Public Sector</li>
//               <li>Union</li>
//               <li>Renovation</li>
//               <li>Sub-Contractors</li>
//             </ul>
//           </div>

//           {/* RIGHT BOX + SOCIAL */}
//           <div className="">
//             <div
//               ref={rightBoxRef}
//               className="feature-box p-10 text-center space-y-4 absolute lg:bottom-60 lg:right-35 lg:mb-0 mb-10 lg:w-[500px]"
//               style={{ willChange: "transform", transformStyle: "preserve-3d" }}
//             >
//               <div ref={rightBoxContentRef}>
//               <h2 className="text-[25px] lg:text-[50px] font-sansation tracking-wide flex gap-2">
//                 <span className="text-white lg:text-[50px] text-[25px] font-bold font-sansation">EXPERIENCE</span>{" "}THE
//               </h2>
//               <div className="text-[#FF0808] lg:text-[70px] text-[30px] font-betterlett lg:-mt-13 -mt-9">Power</div>
//               <p className="text-xs text-[#FFFFFF] max-w-[350px] mx-auto lg:text-[20px]">
//                 OF OUR CONSTRUCTION SCHEDULING &amp; ESTIMATING SOFTWARE
//               </p>
//               <button className="mt-10 mb-8 relative border-t border-b border-[#FFFFFF26] px-6 lg:px-8 py-2 lg:py-3 lg:text-[25px] text-[16px] text-[#FFFFFF]">
//                 <span className="absolute left-0 top-0 h-full w-4 border-l border-t border-b border-white -skew-x-12"></span>
//                 Get Started
//                 <span className="absolute right-0 top-0 h-full w-4 border-r border-t border-b border-white skew-x-12"></span>
//               </button>
//               </div>
//             </div>

//             {/* SOCIAL ICONS */}
//             <div
//               ref={socialSvgsRef}
//               className="flex items-start justify-start gap-4 lg:-mt-35 text-gray-400 text-sm lg:ml-15 ml-19"
//             >
//               <span><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7692 1.42062C14.22 1.66154 13.6348 1.82123 13.0246 1.89877C13.6523 1.524 14.1314 0.935077 14.3566 0.225231C13.7714 0.574154 13.1252 0.820616 12.4366 0.958154C11.8809 0.366462 11.0889 0 10.2249 0C8.54861 0 7.19908 1.36062 7.19908 3.02862C7.19908 3.26862 7.21938 3.49938 7.26923 3.71908C4.752 3.59631 2.52462 2.38985 1.02831 0.552C0.767077 1.00523 0.613846 1.524 0.613846 2.08246C0.613846 3.13108 1.15385 4.06062 1.95877 4.59877C1.47231 4.58954 0.995077 4.44831 0.590769 4.22585V4.25908C0.590769 5.73046 1.64031 6.95262 3.01662 7.23415C2.77015 7.30154 2.50154 7.33385 2.22277 7.33385C2.02892 7.33385 1.83323 7.32277 1.64954 7.28215C2.04185 8.48123 3.15508 9.36277 4.47877 9.39138C3.44862 10.1972 2.14062 10.6828 0.724615 10.6828C0.476308 10.6828 0.238154 10.6717 0 10.6412C1.34123 11.5062 2.93077 12 4.64492 12C10.2166 12 13.2628 7.38462 13.2628 3.384C13.2628 3.25015 13.2582 3.12092 13.2517 2.99262C13.8526 2.56615 14.3575 2.03354 14.7692 1.42062Z" fill="white" /></svg></span>
//               <span><svg width="1" height="21" viewBox="0 0 1 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 20.5L0.499999 0.499999" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
//               <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.10263 7.90238H0.36796C0.0876096 7.90238 0 7.79725 0 7.53442V5.41427C0 5.13392 0.105131 5.04631 0.36796 5.04631H2.10263V3.50438C2.10263 2.8035 2.22528 2.13767 2.57572 1.52441C2.94368 0.893617 3.46934 0.473091 4.13517 0.227785C4.57322 0.0700875 5.01126 0 5.48436 0H7.2015C7.44681 0 7.55194 0.105131 7.55194 0.350438V2.34793C7.55194 2.59324 7.44681 2.69837 7.2015 2.69837C6.72841 2.69837 6.25532 2.69837 5.78223 2.71589C5.30914 2.71589 5.06383 2.94368 5.06383 3.43429C5.04631 3.95995 5.06383 4.46808 5.06383 5.01126H7.09637C7.37672 5.01126 7.48185 5.1164 7.48185 5.39675V7.5169C7.48185 7.79725 7.39424 7.88486 7.09637 7.88486H5.06383V13.597C5.06383 13.8949 4.97622 14 4.66083 14H2.47059C2.20776 14 2.10263 13.8949 2.10263 13.632V7.90238Z" fill="white" /></svg></span>
//               <span><svg width="1" height="21" viewBox="0 0 1 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 20.5L0.499999 0.499999" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
//               <span><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.86862 0C0.839031 0 0.000753846 0.838115 0 1.86852C0 2.89892 0.838277 3.73719 1.86862 3.73719C2.89859 3.73719 3.73644 2.89892 3.73644 1.86852C3.73644 0.838223 2.89854 0 1.86862 0ZM3.27105 4.48797H0.465985C0.434245 4.48797 0.402816 4.49422 0.373492 4.50637C0.344169 4.51852 0.317526 4.53632 0.295085 4.55877C0.272644 4.58122 0.254844 4.60786 0.242703 4.63719C0.230562 4.66651 0.224316 4.69794 0.224323 4.72968V13.7583C0.224323 13.8224 0.249784 13.8839 0.295104 13.9292C0.340424 13.9745 0.401892 14 0.465985 14H3.27099C3.33509 14 3.39655 13.9745 3.44188 13.9292C3.4872 13.8839 3.51268 13.8224 3.51271 13.7583V4.72968C3.51273 4.69794 3.50649 4.6665 3.49436 4.63717C3.48222 4.60784 3.46442 4.58119 3.44198 4.55874C3.41953 4.53629 3.39288 4.51848 3.36356 4.50634C3.33423 4.4942 3.30279 4.48796 3.27105 4.48797ZM10.4421 4.38168C9.41554 4.38168 8.51345 4.69425 7.96298 5.20396V4.72968C7.96298 4.59615 7.85475 4.48797 7.72127 4.48797H5.03052C4.99878 4.48797 4.96735 4.49422 4.93802 4.50637C4.9087 4.51852 4.88205 4.53632 4.8596 4.55877C4.83716 4.58121 4.81935 4.60786 4.80721 4.63718C4.79506 4.66651 4.78881 4.69794 4.78881 4.72968V13.7583C4.78881 13.7901 4.79506 13.8215 4.80721 13.8508C4.81936 13.8802 4.83716 13.9068 4.85961 13.9292C4.88205 13.9517 4.9087 13.9695 4.93803 13.9816C4.96735 13.9938 4.99878 14 5.03052 14H7.83289C7.89699 14 7.95845 13.9745 8.00378 13.9292C8.0491 13.8839 8.07458 13.8224 8.07461 13.7583V9.29142C8.07461 8.00978 8.31035 7.21538 9.48683 7.21538C10.6459 7.21678 10.7327 8.06863 10.7327 9.36799V13.7583C10.7327 13.7901 10.7389 13.8215 10.7511 13.8508C10.7632 13.8802 10.7811 13.9068 10.8035 13.9292C10.826 13.9517 10.8526 13.9695 10.8819 13.9816C10.9113 13.9938 10.9427 14 10.9744 14H13.7781C13.8422 14 13.9036 13.9745 13.949 13.9292C13.9943 13.8839 14.0197 13.8224 14.0198 13.7583V8.80573C14.0197 6.74595 13.6131 4.38168 10.4421 4.38168Z" fill="white" /></svg></span>
//               <span><svg width="1" height="21" viewBox="0 0 1 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 20.5L0.499999 0.499999" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
//               <span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.49208 0H5.91473C4.32064 0 3.21716 0.349493 2.22399 1.16993C1.4429 1.84382 0.976752 2.82321 0.976752 3.78989C0.976752 5.27926 2.11229 6.86205 4.21653 6.86205C4.41885 6.86205 4.64286 6.84129 4.84054 6.82286L4.81141 6.89366C4.72683 7.09629 4.64674 7.28745 4.64674 7.58582C4.64674 8.16676 4.92698 8.52509 5.19793 8.87133L5.23201 8.91517L5.17144 8.91935C4.30251 8.97884 2.68518 9.08976 1.50378 9.81586C0.108442 10.6454 0 11.8522 0 12.2022C0 13.5946 1.29759 15 4.1967 15C7.5677 15 9.33159 13.1402 9.33159 11.3032C9.33189 9.94444 8.53516 9.27365 7.68946 8.56149L6.97607 8.00658C6.75562 7.82393 6.48111 7.59667 6.48111 7.1756C6.48111 6.76167 6.75562 6.48839 6.99791 6.24734L7.02317 6.22178C7.79357 5.61497 8.66668 4.92698 8.66668 3.43885C8.66668 1.94266 7.73176 1.16947 7.28219 0.797823H8.46932C8.48392 0.797909 8.49823 0.793766 8.51052 0.785894L9.53313 0.142988C9.54732 0.134045 9.55823 0.120738 9.5642 0.105066C9.57018 0.0893938 9.57091 0.0722049 9.56628 0.0560828C9.56165 0.0399607 9.55192 0.0257768 9.53854 0.0156633C9.52515 0.00554978 9.50885 5.32538e-05 9.49208 0ZM5.15394 14.1803C3.09912 14.1803 1.7185 13.2206 1.7185 11.7921C1.7185 10.8594 2.28317 10.1816 3.39532 9.77868C4.28594 9.47891 5.43558 9.46404 5.44704 9.46404C5.64177 9.46404 5.73968 9.46404 5.89521 9.48356C7.333 10.5068 8.02424 11.044 8.02424 12.0673C8.02408 13.3707 6.92417 14.1803 5.15394 14.1803ZM5.13457 6.3138C3.41003 6.3138 2.69432 4.0469 2.69432 2.83312C2.69432 2.21593 2.83467 1.7422 3.12344 1.38449C3.43684 0.992399 3.97347 0.739109 4.49058 0.739109C6.07399 0.739109 6.94958 2.86736 6.94958 4.3383C6.94958 4.57036 6.94958 5.27632 6.4619 5.76663C6.13394 6.09397 5.60056 6.3138 5.13457 6.3138ZM14.506 7.00581H12.6209V5.12745C12.6209 5.1069 12.6128 5.0872 12.5983 5.07267C12.5837 5.05815 12.564 5.04999 12.5435 5.04999H11.7326C11.7121 5.04999 11.6924 5.05815 11.6779 5.07267C11.6633 5.0872 11.6552 5.1069 11.6552 5.12745V7.00581H9.7796C9.75906 7.00581 9.73936 7.01398 9.72483 7.0285C9.71031 7.04303 9.70215 7.06273 9.70215 7.08327V7.90495C9.70215 7.9255 9.71031 7.9452 9.72483 7.95973C9.73936 7.97425 9.75906 7.98241 9.7796 7.98241H11.6552V9.87287C11.6552 9.89341 11.6633 9.91311 11.6779 9.92764C11.6924 9.94216 11.7121 9.95032 11.7326 9.95032H12.5435C12.5861 9.95032 12.6209 9.91547 12.6209 9.87287V7.9821H14.506C14.5265 7.9821 14.5462 7.97394 14.5607 7.95942C14.5753 7.94489 14.5834 7.92519 14.5834 7.90464V7.08327C14.5834 7.04036 14.5489 7.00581 14.506 7.00581Z" fill="white" /></svg></span>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM TYPING TEXT */}
//         <div
//           ref={bottomTextRef}
//           className="text-center text-xs text-[#FFFFFF] mt-25 lg:text-[18px] font-sansation"
//         >
//           AI Powered Scheduling &amp; Estimating Software
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Footer;
