import { useMemo } from "react";
import Header from "../components/Header";
import avatar from "../assets/avatar.png";
import box from "../assets/box.png";
import line from "../assets/line box.png";
import Thirdbox from "../assets/thirdbox.png";
import Thirdbox1 from "../assets/thirdbox1.png";
import Thirdbox2 from "../assets/thirdbox2.png";
import calender from "../assets/calender.png";
import Home1 from "../assets/Home.png";
import Home2 from "../assets/home2.png";
import Report from "../assets/report.png";
import FourBox from "../assets/fourbox.png";
import Home3 from "../assets/home3.png";
import logo from "../assets/logo.png";
import box2 from "../assets/box2.png";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const dots = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }));
  }, []);

  const steps = [
    {
      id: "01",
      no: "01",
      title1: "Upload",
      title2: "Your",
      sub: "Revit Files",
    },
    {
      id: "02",
      no: "02",
      title1: "Upload",
      title2: "Your",
      sub: "Revit Files",
    },
    {
      id: "03",
      no: "03",
      title1: "Upload",
      title2: "Your",
      sub: "Revit Files",
    },
    {
      id: "04",
      no: "04",
      title1: "Upload",
      title2: "Your",
      sub: "Revit Files",
    },
  ];

  const FeatureBox = () => {
    return (
      <div className="feature-box px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-15 max-w-[260px] md:max-w-[320px] lg:max-w-[360px]">
        <p className="feature-title text-white font-bold text-[18px] md:text-[20px] lg:text-[24px] leading-tight">
          <span className="text-white font-bold text-[18px] md:text-[20px] lg:text-[24px]">
            CONSTRUCTION
          </span>
          <br /> SCHEDULE
        </p>

        <div
          className="feature-icon w-20 h-20 
md:w-27.5 md:h-27.5 
lg:w-37.5 lg:h-37.5 rounded-full 
mx-auto my-6 md:my-8 lg:my-10 
flex items-center justify-center 
border-2 border-red-500 mt-4 mb-4"
        >
          <img src={calender} className="w-12 md:w-14 lg:w-18" />
        </div>

        <p className="text-white text-[12px] md:text-[14px] lg:text-[18px] max-w-[220px] md:max-w-[260px] lg:max-w-[300px]">
          Our A.I. engine will determine the fastest and most cost-efficient way
          to build your construction project
        </p>
      </div>
    );
  };

  // ─── REFS ────────────────────────────────────────────────────────────────────
  const heroRef  = useRef(null);
  const textRef  = useRef(null);

  // Second section refs
  const secondSectionRef  = useRef(null);
  const secondHeadingRef  = useRef(null);
  const secondRightBoxRef = useRef(null);
  const stepCardsRef      = useRef([]);
  const stepsLineRef      = useRef(null);
  const secondLineImgRef  = useRef(null);

  // Third section refs
  const thirdSectionRef    = useRef(null);
  const thirdBox1Ref       = useRef(null);
  const thirdBox2Ref       = useRef(null);
  const thirdTextBlockRef  = useRef(null);
  const thirdFloatImgRef   = useRef(null);
  const thirdParticleRef   = useRef(null);

  // Fourth section refs
  const fourthHeadingRef   = useRef(null);
  const fourthLeftBoxRef   = useRef(null);
  const fourthRightBoxRef  = useRef(null);
  const fourthImg1Ref      = useRef(null);
  const fourthImg2Ref      = useRef(null);
  const fourthSectionRef   = useRef(null);

  // Fifth section refs
  const fifthSectionRef = useRef(null);
  const fifthBox1Ref    = useRef(null);
  const fifthBox2Ref    = useRef(null);
  const fifthBox3Ref    = useRef(null);
  const fifthImg1Ref    = useRef(null);
  const fifthImg2Ref    = useRef(null);

  // Sixth section refs
  const sixthSectionRef   = useRef(null);
  const sixthLeftImgRef   = useRef(null);
  const sixthRightImgRef  = useRef(null);
  const sixthArrowsRef    = useRef(null);

  // ─── HERO ANIMATION ──────────────────────────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.8, smooth: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const tl = gsap.timeline();
    tl.fromTo(heroRef.current,
      { y: -600, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power4.out" }
    );
    tl.fromTo(textRef.current.children,
      { y: 160, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, stagger: 0.35, ease: "power3.out" },
      "-=0.6"
    );
  }, []);

  // ─── SECOND SECTION  ─  HARD 3-D SCROLL ANIMATIONS ──────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── perspective wrapper so rotateX/Y feel truly 3-D ── */
      gsap.set(secondSectionRef.current, { perspective: 1200 });

      /* ── HEADING: split-text rise with depth ── */
      gsap.fromTo(secondHeadingRef.current,
        { y: 100, rotateX: 60, opacity: 0, transformOrigin: "50% 100%" },
        {
          y: 0, rotateX: 0, opacity: 1, duration: 1.6, ease: "power4.out",
          scrollTrigger: {
            trigger: secondHeadingRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* ── STEP CARDS: 3-D flip-in stagger ── */
      stepCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, {
          rotateY: i % 2 === 0 ? -75 : 75,
          x: i % 2 === 0 ? -200 : 200,
          opacity: 0,
          transformOrigin: "50% 50%",
          transformStyle: "preserve-3d",
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top 82%",
          onEnter: () => {
            gsap.to(card, {
              rotateY: 0,
              x: 0,
              opacity: 1,
              duration: 1.2,
              delay: i * 0.14,
              ease: "back.out(1.4)",
              onComplete: () => {
                /* subtle idle sway after entrance */
                gsap.to(card, {
                  rotateY: 2,
                  rotateX: -1,
                  duration: 3,
                  ease: "sine.inOut",
                  yoyo: true,
                  repeat: -1,
                });
              },
            });
          },
          onLeaveBack: () => {
            gsap.killTweensOf(card);
            gsap.set(card, {
              rotateY: i % 2 === 0 ? -75 : 75,
              x: i % 2 === 0 ? -200 : 200,
              opacity: 0,
            });
          },
        });
      });

      /* ── RIGHT BOX (line image): parallax depth push + float ── */
      gsap.fromTo(secondLineImgRef.current,
        { z: -300, scale: 0.7, opacity: 0, rotateY: -20 },
        {
          z: 0, scale: 1, opacity: 1, rotateY: 0, duration: 1.8, ease: "power3.out",
          scrollTrigger: {
            trigger: secondLineImgRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          onComplete: () => {
            gsap.to(secondLineImgRef.current, {
              y: -18,
              rotateY: 4,
              duration: 3.5,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          },
        }
      );

      /* ── PARALLAX DEPTH: step section scrolls at different Z speed ── */
      gsap.to(secondRightBoxRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* ── GLOWING CIRCLE LINE: slow rotation on scroll ── */
      if (stepsLineRef.current) {
        gsap.to(stepsLineRef.current, {
          rotate: 45,
          ease: "none",
          scrollTrigger: {
            trigger: secondSectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      }

    });
    return () => ctx.revert();
  }, []);

  // ─── THIRD SECTION  ─  HARD 3-D SCROLL ANIMATIONS ───────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(thirdSectionRef.current, { perspective: 1400 });

      /* ── MAIN TOP BOX: 3D tilted fly-in from far z-depth ── */
      gsap.fromTo(thirdBox1Ref.current,
        {
          z: -600, rotateX: 35, rotateY: -15,
          scale: 0.6, opacity: 0,
          transformOrigin: "50% 50%",
          transformStyle: "preserve-3d",
        },
        {
          z: 0, rotateX: 0, rotateY: 0,
          scale: 1, opacity: 1,
          duration: 2, ease: "expo.out",
          scrollTrigger: {
            trigger: thirdBox1Ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onComplete: () => {
            /* gentle 3D idle float */
            gsap.to(thirdBox1Ref.current, {
              rotateX: 3, rotateY: 4,
              y: -12,
              duration: 4,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          },
        }
      );

      /* ── BOTTOM SMALL BOX: opposite-axis 3D fly-in ── */
      gsap.fromTo(thirdBox2Ref.current,
        {
          z: -500, rotateX: -30, rotateY: 20,
          scale: 0.65, opacity: 0,
          transformStyle: "preserve-3d",
        },
        {
          z: 0, rotateX: 0, rotateY: 0,
          scale: 1, opacity: 1,
          duration: 2, ease: "expo.out", delay: 0.3,
          scrollTrigger: {
            trigger: thirdBox2Ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onComplete: () => {
            gsap.to(thirdBox2Ref.current, {
              rotateX: -3, rotateY: -4,
              y: 10,
              duration: 3.5,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              delay: 0.5,
            });
          },
        }
      );

      /* ── TEXT BLOCK: scrub-linked 3D reveal (words sweep in on scroll) ── */
      const textChildren = thirdTextBlockRef.current
        ? Array.from(thirdTextBlockRef.current.children)
        : [];

      if (textChildren.length) {
        gsap.fromTo(textChildren,
          { y: 80, rotateX: 45, opacity: 0, transformOrigin: "50% 100%" },
          {
            y: 0, rotateX: 0, opacity: 1,
            duration: 1.2, stagger: 0.18, ease: "power4.out",
            scrollTrigger: {
              trigger: thirdTextBlockRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      /* ── FLOATING SIDE IMAGE: parallax + 3D spin ── */
      if (thirdFloatImgRef.current) {
        gsap.fromTo(thirdFloatImgRef.current,
          { x: 300, rotateY: 60, opacity: 0 },
          {
            x: 0, rotateY: 0, opacity: 0.9, duration: 2, ease: "power3.out",
            scrollTrigger: {
              trigger: thirdSectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
            onComplete: () => {
              gsap.to(thirdFloatImgRef.current, {
                y: -20, rotateY: -6,
                duration: 4.5, ease: "sine.inOut",
                yoyo: true, repeat: -1,
              });
            },
          }
        );
      }

      /* ── DEEP PARALLAX: section background pushes back on scroll ── */
      gsap.to(thirdSectionRef.current.querySelector(".absolute"), {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: thirdSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

    });
    return () => ctx.revert();
  }, []);

  // ─── FOURTH / FIFTH / SIXTH  (original animations kept) ─────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── FOURTH SECTION ── */
      gsap.fromTo(fourthHeadingRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.6, ease: "power3.out",
          scrollTrigger: {
            trigger: fourthHeadingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const slideAndFloat = (el, fromVars, floatY, floatDuration, floatDelay) => {
        gsap.set(el, fromVars);
        ScrollTrigger.create({
          trigger: fourthSectionRef.current,
          start: "top 75%",
          onEnter: () => {
            gsap.to(el, {
              x: 0, y: 0, opacity: 1, duration: 1.8, ease: "power3.out",
              onComplete: () => {
                gsap.to(el, {
                  y: floatY, duration: floatDuration,
                  ease: "sine.inOut", yoyo: true, repeat: -1, delay: floatDelay,
                });
              },
            });
          },
          onLeaveBack: () => { gsap.killTweensOf(el); gsap.set(el, fromVars); },
        });
      };

      slideAndFloat(fourthLeftBoxRef.current,  { x: -120, opacity: 0 }, -14, 3.2, 0);
      slideAndFloat(fourthRightBoxRef.current, { x:  120, opacity: 0 }, -14, 3.2, 0.4);
      slideAndFloat(fourthImg1Ref.current,     { y: -100, opacity: 0 }, -10, 2.8, 0.2);
      slideAndFloat(fourthImg2Ref.current,     { y:  100, opacity: 0 },  10, 2.8, 0.6);

      /* ── FIFTH SECTION ── */
      const slideAndFloatFifth = (el, fromVars, floatY, floatDuration, floatDelay) => {
        gsap.set(el, fromVars);
        ScrollTrigger.create({
          trigger: fifthSectionRef.current,
          start: "top 78%",
          onEnter: () => {
            gsap.to(el, {
              x: 0, y: 0, opacity: 1, duration: 1.8, ease: "power3.out",
              onComplete: () => {
                gsap.to(el, {
                  y: floatY, duration: floatDuration,
                  ease: "sine.inOut", yoyo: true, repeat: -1, delay: floatDelay,
                });
              },
            });
          },
          onLeaveBack: () => { gsap.killTweensOf(el); gsap.set(el, fromVars); },
        });
      };

      slideAndFloatFifth(fifthBox1Ref.current, { y: -100, opacity: 0 }, -12, 3.0, 0);
      slideAndFloatFifth(fifthBox2Ref.current, { y:  100, opacity: 0 }, -12, 3.0, 0.5);
      slideAndFloatFifth(fifthBox3Ref.current, { x:  120, opacity: 0 }, -12, 3.0, 0.3);
      slideAndFloatFifth(fifthImg1Ref.current, { y: -100, opacity: 0 }, -10, 2.8, 0.2);
      slideAndFloatFifth(fifthImg2Ref.current, { y:  100, opacity: 0 },  10, 2.8, 0.6);

      /* ── SIXTH SECTION ── */
      gsap.set(sixthLeftImgRef.current, { x: -140, opacity: 0 });
      ScrollTrigger.create({
        trigger: sixthSectionRef.current,
        start: "top 78%",
        onEnter: () => gsap.to(sixthLeftImgRef.current, { x: 0, opacity: 1, duration: 1.8, ease: "power3.out" }),
        onLeaveBack: () => { gsap.killTweensOf(sixthLeftImgRef.current); gsap.set(sixthLeftImgRef.current, { x: -140, opacity: 0 }); },
      });

      gsap.set(sixthRightImgRef.current, { x: 140, opacity: 0 });
      ScrollTrigger.create({
        trigger: sixthSectionRef.current,
        start: "top 78%",
        onEnter: () => {
          gsap.to(sixthRightImgRef.current, {
            x: 0, opacity: 1, duration: 1.8, ease: "power3.out",
            onComplete: () => {
              gsap.to(sixthRightImgRef.current, {
                y: -14, duration: 3.0, ease: "sine.inOut", yoyo: true, repeat: -1,
              });
            },
          });
        },
        onLeaveBack: () => { gsap.killTweensOf(sixthRightImgRef.current); gsap.set(sixthRightImgRef.current, { x: 140, opacity: 0, y: 0 }); },
      });

      gsap.set(sixthArrowsRef.current, { y: -60, opacity: 0 });
      ScrollTrigger.create({
        trigger: sixthSectionRef.current,
        start: "top 75%",
        onEnter: () => gsap.to(sixthArrowsRef.current, { y: 0, opacity: 1, duration: 1.6, ease: "power3.out", delay: 0.4 }),
        onLeaveBack: () => { gsap.killTweensOf(sixthArrowsRef.current); gsap.set(sixthArrowsRef.current, { y: -60, opacity: 0 }); },
      });

    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full section-one">
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <div ref={heroRef} className="hero-bg text-white">
        {dots.map((d, i) => (
          <div
            key={i}
            className="dot"
            style={{ top: d.top + "%", left: d.left + "%", animationDelay: d.delay + "s" }}
          />
        ))}

        <Header />

        <section
          ref={textRef}
          className="flex flex-col items-center text-center mt-14 md:mt-24 lg:mt-32 px-4 md:px-8 leading-none"
        >
          <div className="flex items-center gap-2 text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] gradient-automated font-sansation font-bold relative">
            <svg
              className="absolute -top-2 -left-4 md:-top-3 md:-left-5 lg:-top-6 lg:-left-8 w-8 md:w-12 lg:w-[60px] h-8 md:h-12 lg:h-[60px]"
              viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48.4715 23.1338C48.3625 22.9414 48.2044 22.7813 48.0134 22.67C47.8223 22.5587 47.6052 22.5 47.384 22.5H31.009L33.7544 1.52407C33.7838 1.24334 33.7179 0.960861 33.5673 0.722122C33.4167 0.483382 33.1902 0.30227 32.9241 0.207948C32.6581 0.113625 32.368 0.111579 32.1007 0.20214C31.8333 0.292701 31.6042 0.4706 31.4503 0.707191L11.5365 35.5953C11.4201 35.7847 11.3563 36.0018 11.3516 36.224C11.347 36.4463 11.4018 36.6658 11.5103 36.8599C11.6188 37.054 11.777 37.2156 11.9688 37.3281C12.1606 37.4406 12.3789 37.5 12.6012 37.5H28.7315L26.5559 58.5075C26.5345 58.7873 26.6073 59.0661 26.7627 59.2998C26.9181 59.5334 27.1472 59.7083 27.4135 59.7967C27.6797 59.8852 27.9679 59.882 28.2322 59.7877C28.4965 59.6935 28.7216 59.5135 28.8719 59.2766L48.4565 24.3922C48.5701 24.2025 48.6313 23.9861 48.634 23.765C48.6366 23.5439 48.5806 23.3261 48.4715 23.1338Z" fill="#FF0808" />
            </svg>
            Automated
          </div>

          <h1 className="text-[34px] sm:text-[40px] md:text-[70px] lg:text-[100px] font-sansation font-bold">
            Construction Scheduling
          </h1>

          <div className="relative">
            <h1 className="text-[34px] sm:text-[40px] md:text-[70px] lg:text-[100px] font-sansation font-bold">
              & Estimating
            </h1>
            <span className="absolute -right-6 top-6 md:-right-20 md:top-10 lg:-right-5 lg:top-21 text-[#FF0909] text-[26px] sm:text-[30px] md:text-[55px] lg:text-[80px] font-betterlett">
              Software
            </span>
          </div>

          <p className="max-w-70 md:max-w-105 lg:max-w-91.25 text-left mt-10 md:mt-16 lg:mt-30 text-[14px] md:text-[16px] lg:text-[18px] opacity-50 font-sansation font-light self-start md:self-start lg:self-start md:ml-8 lg:ml-35 leading-7.25">
            Upload your BIM model and get your complete construction schedule
            and take-off estimate in minutes.
          </p>
        </section>

        <div className="absolute bottom-0 w-full flex justify-center">
          <div className="bottom-curve flex items-start justify-center">
            <span className="get-started-text font-sansation">Get Started</span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECOND SECTION  —  3-D SCROLL ANIMATIONS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={secondSectionRef}
        className="w-full py-14 md:py-55 bg-[linear-gradient(90deg,#001A28_0%,#001A28_47%)]"
        style={{ perspective: "1200px" }}
      >
        <div className="max-w-[1550px] mx-auto px-5">

          {/* Heading — 3D rotateX rise */}
          <div
            ref={secondHeadingRef}
            className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16"
          >
            <div className="leading-tight text-center lg:text-left" style={{ transformStyle: "preserve-3d" }}>
              <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap relative">
                <motion.span
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1 }}
                  className="text-white font-sansation font-bold text-[28px] md:text-[40px] lg:text-[60px] leading-none"
                >
                  Get Your
                </motion.span>

                <motion.svg
                  initial={{ scale: 0, rotate: -120 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="w-6 md:w-10 lg:w-15 absolute lg:left-55 lg:-top-8 left-53 -top-3"
                  viewBox="0 0 60 60"
                >
                  <path d="M48.4715 23.1338C48.3625 22.9414 48.2044 22.7813 48.0134 22.67C47.8223 22.5587 47.6052 22.5 47.384 22.5H31.009L33.7544 1.52407L11.5365 35.5953H28.7315L26.5559 58.5075L48.4565 24.3922Z" fill="#FF0808" />
                </motion.svg>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-bold text-[28px] md:text-[40px] lg:text-[60px] bg-[rgba(58,184,254,1)] bg-clip-text text-transparent"
              >
                Construction Scheduling
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-white font-bold text-[28px] md:text-[40px] lg:text-[60px]"
              >
                And Take Off Estimated
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-white font-bold text-[28px] md:text-[40px] lg:text-[60px]"
              >
                Construction Planning In
              </motion.div>

              <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <motion.span
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="font-bold text-[28px] md:text-[40px] lg:text-[60px] bg-[linear-gradient(90deg,rgba(58,184,254,1),rgba(0,58,90,1))] bg-clip-text text-transparent"
                >
                  4 Easy
                </motion.span>

                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="font-betterlett text-[34px] md:text-[48px] lg:text-[70px] text-[#FF0808]"
                >
                  Steps!
                </motion.span>
              </div>
            </div>

            {/* Right box — parallax depth push */}
            <div ref={secondRightBoxRef} className="flex justify-center w-full lg:w-175 max-w-175">
              <div className="relative w-full md:w-130 lg:w-186.75 md:h-105 lg:h-138.75 rounded-2xl bg-[linear-gradient(180deg,#052f4c,#02131d)] flex items-center justify-center lg:mt-0 md:mt-0 mt-20">
                <motion.img
                  src={box}
                  initial={{ y: 120, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="absolute bottom-0 w-[85%] md:w-[80%] lg:w-auto"
                />
              </div>
            </div>
          </div>

          {/* ── Step cards + circle line ── */}
          <div className="flex flex-col lg:flex-row mt-14 md:mt-20 gap-10 relative items-center">
            {/* rotating circle line on scroll */}
            <div
              ref={stepsLineRef}
              className="hidden lg:block absolute w-[1100px] h-[1100px] rounded-full border-r border-white/30 left-[150px] -top-[230px]"
            />

            {/* 3D flip-in cards */}
            <div className="flex flex-col gap-5 w-full lg:w-auto" style={{ perspective: "1200px" }}>
              {steps.map((s, i) => (
                <div
                  key={i}
                  ref={(el) => (stepCardsRef.current[i] = el)}
                  className="relative flex items-center justify-between gap-4 lg:w-[736px] w-full px-8 py-7 rounded-[25px] overflow-hidden bg-[#012235] border border-[#034077] shadow-2xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 opacity-25 blur-[40px]"
                    style={{ background: `radial-gradient(circle, #FFFFFF 23%, #FFFFFF 15.08%, #53555B 1%, transparent 70%)` }}
                  />
                  <div
                    className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 opacity-25 blur-[40px]"
                    style={{ background: `radial-gradient(circle, #FFFFFF 23%, #FFFFFF 15.08%, #53555B 1%, transparent 70%)` }}
                  />

                  <div className="relative z-10 flex flex-col">
                    <div className="font-betterlett text-[#FF0808] text-[45px] md:text-[60px] lg:text-[75px] font-bold leading-none mb-3">
                      {s.no}
                    </div>
                    <div className="flex flex-col leading-[1.1]">
                      <div className="flex flex-wrap items-center">
                        <span className="text-[#3AB8FE] text-[22px] md:text-[30px] lg:text-[38px] font-bold tracking-tight">{s.title1}</span>
                        <span className="text-white text-[22px] md:text-[30px] lg:text-[38px] font-bold ml-2 tracking-tight">{s.title2}</span>
                      </div>
                      <div className="text-white text-[22px] md:text-[30px] lg:text-[38px] font-bold tracking-tight">{s.sub}</div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <img src={avatar} alt="illustration" className="w-36 md:w-56 lg:w-[280px] object-contain drop-shadow-xl" />
                  </div>
                </div>
              ))}
            </div>

            {/* line image — depth fly-in */}
            <div ref={secondLineImgRef} className="lg:ml-[100px] flex justify-center" style={{ transformStyle: "preserve-3d" }}>
              <img src={line} />
            </div>
          </div>
        </div>
      </section>
      {/* ─── SECOND SECTION END ─────────────────────────────────────────────── */}

      {/* ═══════════════════════════════════════════════════════════════════════
          THIRD SECTION  —  3-D SCROLL ANIMATIONS
      ═══════════════════════════════════════════════════════════════════════ */}
      <div
        ref={thirdSectionRef}
        className="relative w-full flex flex-col items-center py-16 lg:py-0 overflow-hidden"
        style={{ perspective: "1400px" }}
      >
        {/* parallax bg shape — scrubs upward slower */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-162.5 md:h-187.5 lg:h-200 third-section rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[80px]" />

        <div className="relative z-10 w-full max-w-300 flex flex-col items-center px-4">

          {/* TOP BIG BOX — 3D z-depth fly-in + idle tilt */}
          <div
            ref={thirdBox1Ref}
            className="w-full max-w-85 md:max-w-130 lg:max-w-[997px] lg:h-[554px] bg-[#072c40] border border-[#034077] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 flex items-center justify-center shadow-lg"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.img
              src={Thirdbox}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6 }}
              className="max-w-full max-h-full object-contain lg:mb-20"
            />
          </div>

          {/* TEXT BLOCK — staggered 3D rotateX sweep */}
          <div
            ref={thirdTextBlockRef}
            className="text-center mt-10 md:mt-16 lg:mt-20 px-2 md:px-4 mb-10 md:mb-16 lg:mb-20 lg:max-w-[1253px] mx-auto flex flex-col items-center"
          >
            <p className="text-white text-[18px] sm:text-[22px] md:text-[32px] lg:text-[50px] font-bold font-sansation leading-tight text-center lg:whitespace-nowrap">
              USING OUR ARTIFICIAL INTELLIGENCE ENGINE
            </p>

            <p className="text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[50px] font-bold font-sansation leading-tight text-center lg:whitespace-nowrap mt-2">
              IS
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4, type: "spring", stiffness: 120 }}
                className="text-[#FF0808] mx-2 md:mx-3 text-[26px] sm:text-[30px] md:text-[40px] lg:text-[70px] leading-none font-betterlett"
              >
                Easy
              </motion.span>
              AS
              <motion.span
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="text-[#3AB8FE] ml-2 md:ml-4 text-[18px] sm:text-[22px] md:text-[28px] lg:text-[50px] font-bold leading-tight font-sansation"
              >
                BOOKING A PLANE TICKET ONLINE!
              </motion.span>
            </p>

            <p className="text-gray-300 text-[13px] sm:text-[14px] md:text-[18px] lg:text-[24px] mt-4 font-sansation max-w-[320px] md:max-w-[700px] lg:max-w-[1253px] text-center">
              Upload Your Revit 3D BIM Mode And Download Your Construction
              Schedule &amp; Take-Off Estimate!
            </p>
          </div>

          {/* FLOAT SIDE IMAGE — 3D spin in from right */}
          <img
            ref={thirdFloatImgRef}
            src={Thirdbox2}
            className="hidden lg:block absolute -right-70 bottom-95 w-[550px]"
            style={{ transformStyle: "preserve-3d" }}
          />

          {/* BOTTOM SMALL BOX — opposite 3D axis fly-in */}
          <div
            ref={thirdBox2Ref}
            className="w-full max-w-[340px] md:max-w-[520px] lg:max-w-[747px] bg-[#072c40] border border-[#034077] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 flex justify-center shadow-lg"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.img
              src={Thirdbox1}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* ─── THIRD SECTION END ──────────────────────────────────────────────── */}

      {/* ─── FOURTH SECTION ─────────────────────────────────────────────────── */}
      <div ref={fourthSectionRef} className="relative w-full py-12 md:py-16 lg:py-30 overflow-hidden">
        <div ref={fourthHeadingRef} className="text-center px-4 max-w-[1550px] mx-auto">
          <h2 className="text-white font-bold leading-tight text-[22px] sm:text-[30px] md:text-[40px] lg:text-[60px] relative font-sansation">
            LET OUR{" "}
            <span className="text-[#3AB8FE]">ARTIFICIAL INTELLIGENCE ENGINE</span>
            <svg className="absolute lg:right-[6%] right-[12%] -top-6 sm:-top-6 md:-top-8 w-8 sm:w-10 md:w-12 lg:w-15" viewBox="0 0 60 60" fill="none">
              <path d="M48.4716 23.1338C48.3626 22.9414 48.2045 22.7814 48.0134 22.6701C47.8224 22.5587 47.6052 22.5001 47.3841 22.5001H31.0091L33.7544 1.52413C33.7839 1.2434 33.718 0.960922 33.5674 0.722183C33.4168 0.483443 33.1902 0.302332 32.9242 0.208009C32.6581 0.113686 32.3681 0.11164 32.1007 0.202201C31.8334 0.292763 31.6043 0.470661 31.4504 0.707252L11.5366 35.5954C11.4202 35.7848 11.3563 36.0018 11.3517 36.2241C11.3471 36.4464 11.4018 36.6659 11.5103 36.86C11.6188 37.0541 11.7771 37.2157 11.9689 37.3282C12.1606 37.4407 12.3789 37.5 12.6013 37.5001H28.7316L26.556 58.5076C26.5346 58.7873 26.6074 59.0662 26.7628 59.2998C26.9182 59.5334 27.1472 59.7084 27.4135 59.7968C27.6798 59.8852 27.968 59.8821 28.2323 59.7878C28.4965 59.6935 28.7217 59.5136 28.8719 59.2766L48.4566 24.3923C48.5702 24.2026 48.6314 23.9861 48.634 23.7651C48.6367 23.544 48.5806 23.3262 48.4716 23.1338Z" fill="#FF0808" />
            </svg>
            <br />FOR CONSTRUCTION DO
          </h2>
          <div className="text-red-500 font-betterlett text-[28px] sm:text-[34px] md:text-[42px] lg:text-[70px] -mt-4 md:-mt-8 lg:-mt-8">All The Work.</div>
        </div>

        <div className="relative max-w-400 mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-8 lg:gap-10 px-4 mt-10 md:mt-0">
          <div ref={fourthLeftBoxRef} className="feature-box px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-15 max-w-65 md:max-w-75 lg:max-w-90">
            <p className="text-white font-bold text-[18px] md:text-[20px] lg:text-[24px] leading-tight">
              <span className="text-[#3AB8FE] font-bold text-[18px] md:text-[20px] lg:text-[24px]">DOWNLOAD</span>{" "}A DETAILED<br />CONSTRUCTION<br />SCHEDULE
            </p>
            <div className="feature-icon w-20 h-20 md:w-27.5 md:h-27.5 lg:w-37.5 lg:h-37.5 rounded-full mx-auto my-6 md:my-8 lg:my-10 flex items-center justify-center border-2 border-red-500 mt-4 mb-4">
              <img src={calender} className="w-10 md:w-14 lg:w-18" />
            </div>
            <p className="text-white text-[12px] md:text-[14px] lg:text-[18px] max-w-[220px] md:max-w-[240px] lg:max-w-75 mx-auto">Instantly creates a visualization of each construction task from foundation laying to finishing</p>
          </div>

          <div className="flex flex-col items-center gap-6 mt-6 md:mt-10 lg:mt-15">
            <img ref={fourthImg1Ref} src={Home1} className="w-50 sm:w-60 md:w-75 lg:w-153.25" />
            <img ref={fourthImg2Ref} src={Home2} className="w-50 sm:w-60 md:w-75 lg:w-153.25" />
          </div>

          <div ref={fourthRightBoxRef} className="feature-box px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-15 max-w-65 md:max-w-75 lg:max-w-90">
            <p className="text-white font-bold text-[18px] md:text-[20px] lg:text-[24px] leading-tight">
              <span className="text-[#3AB8FE] font-bold text-[18px] md:text-[20px] lg:text-[24px]">DOWNLOAD</span>{" "}A DETAILED<br />CONSTRUCTION<br />SCHEDULE
            </p>
            <div className="feature-icon w-20 h-20 md:w-27.5 md:h-27.5 lg:w-37.5 lg:h-37.5 rounded-full mx-auto my-6 md:my-8 lg:my-10 flex items-center justify-center border-2 border-red-500 mt-4 mb-4">
              <img src={calender} className="w-10 md:w-14 lg:w-18" />
            </div>
            <p className="text-white text-[12px] md:text-[14px] lg:text-[18px] max-w-55 md:max-w-60 lg:max-w-75 mx-auto">Instantly creates a visualization of each construction task from foundation laying to finishing</p>
          </div>
        </div>
      </div>

      {/* ─── FIFTH SECTION ──────────────────────────────────────────────────── */}
      <section ref={fifthSectionRef} className="construction-section w-full py-16 md:py-24 lg:py-30">
        <div className="construction-container max-w-[1550px] mx-auto px-5 relative grid lg:grid-cols-2 md:grid-cols-1 gap-y-16 lg:gap-x-30">
          <div className="boxes-area flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20 items-center md:items-start justify-center lg:justify-start">
            <div className="boxes-col-left flex flex-col gap-8 md:gap-12 lg:gap-15">
              <div ref={fifthBox1Ref}><FeatureBox /></div>
              <div ref={fifthBox2Ref}><FeatureBox /></div>
            </div>
            <div className="boxes-col-center flex justify-center mt-0 md:mt-20 lg:mt-40">
              <div ref={fifthBox3Ref}><FeatureBox /></div>
            </div>
          </div>

          <div className="circle-line-area hidden lg:block">
            <div className="center-circle" />
            <div className="circle-line" />
          </div>

          <div className="houses-area flex flex-col items-start gap-10 md:gap-16 lg:gap-30">
            <div ref={fifthImg1Ref} className="house-img-1 w-82.5 md:w-112.5 lg:w-auto rounded-[18px] flex items-center justify-center">
              <img src={Home2} className="w-77.5 md:w-112.5 lg:w-auto" />
            </div>
            <div ref={fifthImg2Ref} className="house-img house-img-2 ml-0 md:-ml-15 lg:-ml-30">
              <img src={Home2} className="w-77.5 md:w-112.5 lg:w-auto lg:mt-30" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SIXTH SECTION ──────────────────────────────────────────────────── */}
      <section ref={sixthSectionRef} className="w-full py-16 flex justify-center bg-[#001A28]">
        <div className="relative w-full max-w-[1550px] px-4 md:px-8 flex flex-col items-center lg:items-start">
          <div className="relative w-full flex justify-center lg:justify-start">
            <div ref={sixthLeftImgRef} className="relative w-full md:w-[80%] lg:w-[1041.896px] rounded-[20px] p-1.5 bg-[linear-gradient(180deg,#1b78a8,#0e5c86)] shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <img src={Report} className="w-full h-auto rounded-2xl object-cover" />
            </div>

            <div className="relative lg:absolute lg:right-0 lg:top-16 mt-8 lg:mt-0 flex flex-col items-center lg:items-start">
              <div ref={sixthRightImgRef} className="w-[85%] md:w-105 lg:w-150 rounded-2xl bg-[#012235] border border-[#034077] p-3 shadow-xl">
                <img src={Home2} className="w-full h-auto rounded-xl object-cover" />
              </div>

              <div ref={sixthArrowsRef} className="flex gap-4 mt-6 lg:ml-45">
                <div className="w-14 h-14 lg:w-19 lg:h-19.25 rounded-xl flex items-center justify-center bg-[linear-gradient(145deg,#0a3550,#051e2d)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_30%)]" />
                  <svg width="34" height="17" className="lg:mb-5" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.221093 8.92838L7.82319 16.5207C8.09627 16.8392 8.57619 16.8763 8.89507 16.6035C9.21395 16.3308 9.25112 15.8515 8.97797 15.533C8.9525 15.5033 8.92479 15.4756 8.89507 15.4502L2.59293 9.14859L32.6898 9.14859C33.1096 9.14859 33.45 8.80865 33.45 8.38931C33.45 7.96997 33.1096 7.6301 32.6898 7.6301L2.59293 7.6301L8.89507 1.33609C9.21395 1.06336 9.25112 0.584059 8.97798 0.26559C8.70483 -0.0528796 8.22497 -0.0900024 7.90609 0.182792C7.87637 0.208238 7.8486 0.235902 7.82319 0.26559L0.221024 7.85794C-0.0736801 8.15397 -0.0736802 8.63222 0.221093 8.92838Z" fill="white" />
                  </svg>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.15),transparent_30%)]" />
                </div>

                <div className="w-14 h-14 lg:w-19 lg:h-19.25 rounded-xl flex items-center justify-center bg-[linear-gradient(145deg,#0a3550,#051e2d)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.15),transparent_30%)]" />
                  <svg width="34" height="17" className="lg:mb-5" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.2289 7.85775L25.6268 0.2654C25.3537 -0.0530689 24.8738 -0.090194 24.5549 0.182602C24.2361 0.455333 24.1989 0.934634 24.472 1.2531C24.4975 1.28279 24.5252 1.31052 24.5549 1.3359L30.8571 7.63754H0.76019C0.340374 7.63754 0 7.97748 0 8.39682C0 8.81616 0.340374 9.15603 0.76019 9.15603H30.8571L24.5549 15.45C24.2361 15.7228 24.1989 16.2021 24.472 16.5205C24.7452 16.839 25.225 16.8761 25.5439 16.6033C25.5736 16.5779 25.6014 16.5502 25.6268 16.5205L33.229 8.92819C33.5237 8.63216 33.5237 8.15391 33.2289 7.85775Z" fill="white" />
                  </svg>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_30%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION SEVEN ──────────────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-20 lg:pt-50 lg:pb-25 overflow-hidden">
        <div className="max-w-[1550px] mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center gap-10">
            <div className="relative z-50 lg:-mr-0 md:-mr-16 flex justify-center items-center mb-30 lg:mb-0">
              <div className="feature-box px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-15 max-w-[260px] md:max-w-[380px] lg:max-w-[595px] rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 relative overflow-hidden flex flex-col items-center text-center">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white-500/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white-500/30 to-transparent" />
                <p className="text-white font-bold text-[30px] md:text-[55px] lg:text-[100px] leading-none font-sansation">How it</p>
                <p className="text-[#FF0808] italic text-[36px] md:text-[60px] lg:text-[100px] leading-none md:-mt-6 lg:-mt-10 font-betterlett">Works</p>
                <p className="text-white text-[13px] md:text-[15px] lg:text-[18px] max-w-[220px] md:max-w-[260px] lg:max-w-[355px] mt-6 lg:mt-20 font-sansation">
                  Get up and running in minutes to start uploading your construction plans Upload your plans and simply select schedule, costs, or both
                </p>
                <button className="relative text-white text-[14px] md:text-[16px] lg:text-[24px] px-6 md:px-7 lg:px-8 py-2 md:py-3 flex items-center justify-center border-t border-b border-[#FFFFFF26] mt-6 lg:mt-20">
                  <span className="absolute left-0 top-0 h-full w-4 border-l border-t border-b border-white -skew-x-12" />
                  Get Started
                  <span className="absolute right-0 top-0 h-full w-4 border-r border-t border-b border-white skew-x-12" />
                </button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="rounded-3xl border border-[#034077] bg-[#012235] flex justify-center w-full md:w-[700px] lg:w-[1100px] lg:h-[856px] p-10 lg:-ml-40">
                  <img src={Home3} className="w-full lg:w-[700px] lg:h-[700px] object-contain" />
                </div>
                <img src={FourBox} className="absolute -top-40 md:-top-28 lg:-top-60 lg:left-1/4 left-1/2 -translate-x-1/2 w-[250px] md:w-[420px] lg:w-[500px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOX2 ────────────────────────────────────────────────────────────── */}
      <div className="items-center justify-center flex lg:pb-15">
        <div>
          <img src={box2} alt="" className="lg:w-[343px] lg:h-[88px]" />
        </div>
      </div>

      {/* ─── SECTION EIGHT ──────────────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-20 lg:py-28">
        <div className="max-w-[1550px] mx-auto px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-6 md:gap-3 lg:pr-0">
              {[0, 1, 2].map((i) => (
                <div key={i} className="feature-box px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 w-full rounded-2xl text-center">
                  <p className="text-white font-bold text-[18px] md:text-[29px] lg:text-[39px] font-sansation">$1 BILLION</p>
                  <p className="text-white text-[12px] md:text-[16px] lg:text-[20px] mt-1 font-sansation">in construction project value</p>
                  <div className="feature-icon w-20 h-20 md:w-28 md:h-28 lg:w-[190px] lg:h-[190px] rounded-full mx-auto my-6 flex items-center justify-center border-2 border-red-500">
                    <img src={calender} className="w-10 md:w-14 lg:w-18" />
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-12 lg:col-span-6 flex justify-center lg:-mt-20 lg:pr-0">
              <div className="bg-[#012235] border border-[#0A3A55] rounded-3xl p-10 w-full md:w-[600px] flex justify-center lg:h-[554px]">
                <img src={Home3} className="w-full object-contain" />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-3 flex flex-col gap-6 md:gap-3 lg:pr-0">
              {[0, 1, 2].map((i) => (
                <div key={i} className="feature-box px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 w-full rounded-2xl text-center">
                  <p className="text-white font-bold text-[18px] md:text-[29px] lg:text-[39px] font-sansation">$1 BILLION</p>
                  <p className="text-white text-[12px] md:text-[16px] lg:text-[20px] mt-1 font-sansation">in construction project value</p>
                  <div className="feature-icon w-20 h-20 md:w-28 md:h-28 lg:w-[190px] lg:h-[190px] rounded-full mx-auto my-6 flex items-center justify-center border-2 border-red-500">
                    <img src={calender} className="w-10 md:w-14 lg:w-18" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ────────────────────────────────────────────────────── */}
      <section className="flex items-center justify-center py-30">
        <div className="w-full max-w-[1550px] mx-auto relative">
          <div className="relative -mb-8 ml-4">
            <h2 className="absolute -top-8 left-0 text-[50px] md:text-[70px] font-serif italic text-red-600 opacity-90 leading-none">Our</h2>
            <h2 className="text-white text-[30px] md:text-[50px] font-bold tracking-wider">TESTIMONIAL</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-0 relative">
            <div className="relative z-20 w-full lg:w-[55%] xl:w-[45%] lg:mt-20">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative">
                <div className="absolute -top-12 right-10 md:right-40 flex">
                  <svg width="119" height="97" viewBox="0 0 119 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M118.276 14.9087C105.907 21.5348 98.0661 31.0322 94.7531 43.4009C109.33 42.5174 116.619 49.4748 116.619 64.273C116.619 72.4452 113.858 79.8443 108.337 86.4704C103.036 92.8756 96.4096 96.0783 88.4583 96.0783C72.9974 96.0783 65.267 87.0226 65.267 68.9113C65.267 58.0887 68.3591 46.9348 74.5435 35.4496C82.4948 19.9887 94.4217 8.17217 110.324 0L118.276 14.9087ZM53.0087 14.9087C40.64 21.5348 32.7991 31.0322 29.4861 43.4009C44.0635 42.5174 51.3522 49.4748 51.3522 64.273C51.3522 72.4452 48.5913 79.8443 43.0696 86.4704C37.5478 92.8756 30.8113 96.0783 22.86 96.0783C7.62 96.0783 0 87.0226 0 68.9113C0 58.0887 2.98174 46.9348 8.94522 35.4496C17.1174 19.9887 29.0443 8.17217 44.7261 0L53.0087 14.9087Z" fill="url(#paint0_linear_1_1111)" />
                    <defs>
                      <linearGradient id="paint0_linear_1_1111" x1="59.1378" y1="0" x2="59.1378" y2="96.0783" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#223E57" />
                        <stop offset="1" stopColor="#1A2B3A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl lg:text-[28px]">★</span>
                  ))}
                </div>

                <p className="text-[#333333] text-lg md:text-[22px] leading-relaxed mb-8">
                  "I feel Prediction 3D could be a game changer for the construction industry. Having schedules and budgets with the click of a button could drastically reduce the time to mobilize and quickly check budgets against subcontractor proposals. You can go from bidding to building in no time!"
                </p>

                <div>
                  <h4 className="font-semibold text-[#333333] text-xl lg:text-[26px] tracking-wide">STEPHEN S.</h4>
                  <p className="text-[#333333] lg:text-[18px] text-[14px]">Thrash Construction</p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-center gap-4 mt-8">
                <button className="w-14 h-14 lg:w-[76px] lg:h-[77px] rounded-xl border border-[#034077] flex items-center justify-center bg-gradient-to-b from-[#112a3d] to-[#041d2d] hover:brightness-125 transition relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_30%)]" />
                  <svg width="34" height="17" className="lg:mb-5" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.221104 8.92838L7.8232 16.5207C8.09628 16.8392 8.5762 16.8763 8.89508 16.6035C9.21396 16.3308 9.25113 15.8515 8.97799 15.533C8.95251 15.5033 8.9248 15.4756 8.89508 15.4502L2.59294 9.14859L32.6898 9.14859C33.1096 9.14859 33.45 8.80865 33.45 8.38931C33.45 7.96997 33.1096 7.6301 32.6898 7.6301L2.59294 7.6301L8.89508 1.33609C9.21396 1.06336 9.25114 0.584059 8.97799 0.26559C8.70484 -0.0528796 8.22498 -0.0900024 7.9061 0.182792C7.87638 0.208238 7.84861 0.235902 7.8232 0.26559L0.221036 7.85794C-0.0736687 8.15397 -0.0736687 8.63222 0.221104 8.92838Z" fill="white" />
                  </svg>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.15),transparent_30%)]" />
                </button>
                <button className="w-14 h-14 lg:w-[76px] lg:h-[77px] rounded-xl border border-[#034077] flex items-center justify-center bg-gradient-to-b from-[#112a3d] to-[#041d2d] hover:brightness-125 transition relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_30%)]" />
                  <svg width="34" height="17" className="lg:mb-5" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.2289 7.85775L25.6268 0.2654C25.3537 -0.0530689 24.8738 -0.090194 24.5549 0.182602C24.2361 0.455333 24.1989 0.934634 24.472 1.2531C24.4975 1.28279 24.5252 1.31052 24.5549 1.3359L30.8571 7.63754H0.76019C0.340374 7.63754 0 7.97748 0 8.39682C0 8.81616 0.340374 9.15603 0.76019 9.15603H30.8571L24.5549 15.45C24.2361 15.7228 24.1989 16.2021 24.472 16.5205C24.7452 16.839 25.225 16.8761 25.5439 16.6033C25.5736 16.5779 25.6014 16.5502 25.6268 16.5205L33.229 8.92819C33.5237 8.63216 33.5237 8.15391 33.2289 7.85775Z" fill="white" />
                  </svg>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.15),transparent_30%)]" />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[60%] mt-[-50px] lg:mt-0 lg:ml-[-100px] relative z-10">
              <div className="bg-[#041d2d] rounded-[40px] p-6 md:p-10 h-full border border-[#034077] flex items-center justify-center">
                <img src={Home3} alt="Construction Model" className="w-full h-auto object-contain max-w-[700px] drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────────────────── */}
      <section className="lg:pt-30 pt-0 relative">
        <div className="footer-section relative w-full text-white pt-28 pb-16">
          <div className="max-w-[1550px] mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <img src={logo} className="h-15 mb-15" />
              <p className="text-sm text-white lg:text-[18px] font-semibold poppins-font">Connect with Us</p>

              <div className="space-y-3 text-sm text-gray-300 lg:max-w-[272px]">
                <div className="flex items-center gap-3">
                  <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2632 13.1277C16.1141 13.1277 14.9858 12.9362 13.9166 12.5597C13.3927 12.3693 12.7486 12.544 12.4288 12.8939L10.3184 14.5915C7.87093 13.1994 6.36333 11.5934 5.0747 9.00505L6.62096 6.81484C7.02269 6.38734 7.16679 5.76286 6.99415 5.17693C6.63929 4.03161 6.45903 2.8299 6.45903 1.6049C6.45908 0.719948 5.78343 0 4.95299 0H1.50609C0.675645 0 0 0.719948 0 1.60484C0 11.7481 7.74419 20 17.2632 20C18.0937 20 18.7693 19.2801 18.7693 18.3952V14.7325C18.7693 13.8477 18.0936 13.1277 17.2632 13.1277Z" fill="white" />
                  </svg>
                  <span className="text-[16px] text-white poppins-font">425 246 2023</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.6117 19.6309C25.2145 19.4127 24.7159 19.5578 24.4978 19.9548C24.2797 20.3519 24.4247 20.8507 24.8218 21.0688C25.7989 21.6056 26.3594 22.2007 26.3594 22.7015C26.3594 23.3141 25.4915 24.2634 23.0555 25.091C20.649 25.9087 17.433 26.3589 14 26.3589C10.567 26.3589 7.35098 25.9087 4.94446 25.091C2.50852 24.2635 1.64062 23.3141 1.64062 22.7015C1.64062 22.2007 2.20106 21.6056 3.17822 21.0687C3.5753 20.8506 3.72034 20.3519 3.50219 19.9548C3.28404 19.5577 2.78545 19.4127 2.38826 19.6308C1.29877 20.2294 0 21.248 0 22.7015C0 23.8157 0.766281 25.4043 4.41667 26.6445C6.98873 27.5183 10.3922 27.9996 14 27.9996C17.6078 27.9996 21.0113 27.5183 23.5833 26.6445C27.2337 25.4043 28 23.8157 28 22.7015C28 21.248 26.7012 20.2294 25.6117 19.6309Z" fill="white" />
                    <path d="M7.80464 23.9045C9.46987 24.3749 11.6694 24.634 13.9979 24.634C16.3264 24.634 18.5259 24.375 20.1911 23.9045C22.2284 23.329 23.2614 22.4959 23.2614 21.4285C23.2614 20.3611 22.2284 19.5281 20.1911 18.9526C19.7389 18.8248 19.247 18.7128 18.7241 18.6172C18.4303 19.1245 18.1327 19.6296 17.8314 20.1325C18.4102 20.2193 18.9537 20.3258 19.4472 20.4515C20.9465 20.8334 21.4942 21.2633 21.6068 21.4286C21.4942 21.5939 20.9465 22.0238 19.4472 22.4056C18.0281 22.767 16.2023 22.9732 14.2794 22.9916C14.1857 22.9987 14.0918 23.0023 13.9979 23.0024C13.9033 23.0024 13.8095 22.9985 13.7164 22.9916C11.7934 22.9732 9.96759 22.7671 8.5485 22.4056C7.04919 22.0238 6.50149 21.5938 6.38889 21.4286C6.50149 21.2633 7.04924 20.8334 8.54855 20.4515C9.04205 20.3258 9.58548 20.2193 10.1644 20.1325C9.85323 19.6129 9.55568 19.1078 9.27169 18.6172C8.74876 18.7128 8.25685 18.8248 7.80464 18.9526C5.76737 19.5281 4.73438 20.3611 4.73438 21.4285C4.73438 22.4959 5.76737 23.329 7.80464 23.9045Z" fill="white" />
                    <path d="M14.0006 21.3628C14.7309 21.3628 15.3942 20.9907 15.7751 20.3674C18.4444 16.0003 21.6263 10.2446 21.6263 7.62557C21.6263 3.42081 18.2054 0 14.0006 0C9.79581 0 6.375 3.42081 6.375 7.62557C6.375 10.2446 9.55688 16.0003 12.2261 20.3674C12.6071 20.9907 13.2704 21.3628 14.0006 21.3628ZM10.9356 7.10199C10.9356 5.41199 12.3106 4.03703 14.0006 4.03703C15.6907 4.03703 17.0657 5.41199 17.0657 7.10199C17.0657 8.79206 15.6907 10.167 14.0006 10.167C12.3106 10.167 10.9356 8.79211 10.9356 7.10199Z" fill="white" />
                  </svg>
                  <span className="text-[16px] text-white poppins-font">10 Grande View Dr. #139, Biloxi, MS 39531</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.9174 1.2122L16.5993 8.4832L23.9174 15.7542C24.0497 15.4777 24.13 15.172 24.13 14.8456V2.1208C24.13 1.79434 24.0497 1.48871 23.9174 1.2122ZM22.0092 0H2.1208C1.79434 0 1.48871 0.0802606 1.2122 0.212551L10.5655 9.51877C11.3926 10.3458 12.7374 10.3458 13.5645 9.51877L22.9178 0.212551C22.6413 0.0802606 22.3357 0 22.0092 0ZM0.212551 1.2122C0.0802605 1.48871 0 1.79434 0 2.1208V14.8456C0 15.1721 0.0802605 15.4777 0.212551 15.7542L7.53068 8.4832L0.212551 1.2122Z" fill="white" />
                    <path d="M15.5984 9.48242L14.5628 10.518C13.1848 11.896 10.9426 11.896 9.56458 10.518L8.52907 9.48242L1.21094 16.7534C1.48744 16.8857 1.79307 16.966 2.11954 16.966H22.0079C22.3344 16.966 22.64 16.8857 22.9165 16.7534L15.5984 9.48242Z" fill="white" />
                  </svg>
                  <span className="text-[16px] text-white poppins-font">support@prediction3d.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg lg:text-[24px] poppins-font mb-3">Products</h3>
              <ul className="space-y-3 text-[#A1AAB2] text-sm lg:text-[20px]">
                <li>Scheduling</li>
                <li>Estimation</li>
                <li>Visual Editing</li>
                <li>Change Order Automation</li>
                <li>2D To 3D Conversion</li>
                <li>Revit Plugins</li>
                <li>Custom Revit Plugins</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg lg:text-[24px] poppins-font mb-3">Solutions</h3>
              <ul className="space-y-3 text-[#A1AAB2] text-sm lg:text-[20px]">
                <li>Residential</li>
                <li>Commercial</li>
                <li>Industrial</li>
                <li>Transportation</li>
                <li>Public Sector</li>
                <li>Union</li>
                <li>Renovation</li>
                <li>Sub-Contractors</li>
              </ul>
            </div>

            <div className="">
              <div className="feature-box p-10 text-center space-y-4 absolute lg:bottom-60 lg:right-35 lg:mb-0 mb-10 lg:w-[500px]">
                <h2 className="text-[25px] lg:text-[50px] font-sansation tracking-wide flex gap-2">
                  <span className="text-white lg:text-[50px] text-[25px] font-bold font-sansation">EXPERIENCE</span> THE
                </h2>
                <div className="text-[#FF0808] lg:text-[70px] text-[30px] font-betterlett lg:-mt-13 -mt-9">Power</div>
                <p className="text-xs text-[#FFFFFF] max-w-[350px] mx-auto lg:text-[20px]">OF OUR CONSTRUCTION SCHEDULING & ESTIMATING SOFTWARE</p>
                <button className="mt-10 mb-8 relative border-t border-b border-[#FFFFFF26] px-6 lg:px-8 py-2 lg:py-3 lg:text-[25px] text-[16px] text-[#FFFFFF]">
                  <span className="absolute left-0 top-0 h-full w-4 border-l border-t border-b border-white -skew-x-12" />
                  Get Started
                  <span className="absolute right-0 top-0 h-full w-4 border-r border-t border-b border-white skew-x-12" />
                </button>
              </div>

              <div className="flex items-start justify-start gap-4 lg:-mt-35 text-gray-400 text-sm lg:ml-15 ml-19">
                <span>
                  <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7692 1.42062C14.22 1.66154 13.6348 1.82123 13.0246 1.89877C13.6523 1.524 14.1314 0.935077 14.3566 0.225231C13.7714 0.574154 13.1252 0.820616 12.4366 0.958154C11.8809 0.366462 11.0889 0 10.2249 0C8.54861 0 7.19908 1.36062 7.19908 3.02862C7.19908 3.26862 7.21938 3.49938 7.26923 3.71908C4.752 3.59631 2.52462 2.38985 1.02831 0.552C0.767077 1.00523 0.613846 1.524 0.613846 2.08246C0.613846 3.13108 1.15385 4.06062 1.95877 4.59877C1.47231 4.58954 0.995077 4.44831 0.590769 4.22585V4.25908C0.590769 5.73046 1.64031 6.95262 3.01662 7.23415C2.77015 7.30154 2.50154 7.33385 2.22277 7.33385C2.02892 7.33385 1.83323 7.32277 1.64954 7.28215C2.04185 8.48123 3.15508 9.36277 4.47877 9.39138C3.44862 10.1972 2.14062 10.6828 0.724615 10.6828C0.476308 10.6828 0.238154 10.6717 0 10.6412C1.34123 11.5062 2.93077 12 4.64492 12C10.2166 12 13.2628 7.38462 13.2628 3.384C13.2628 3.25015 13.2582 3.12092 13.2517 2.99262C13.8526 2.56615 14.3575 2.03354 14.7692 1.42062Z" fill="white" />
                  </svg>
                </span>
                <span><svg width="1" height="21" viewBox="0 0 1 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 20.5L0.499999 0.499999" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                <span>
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.10263 7.90238H0.36796C0.0876096 7.90238 0 7.79725 0 7.53442V5.41427C0 5.13392 0.105131 5.04631 0.36796 5.04631H2.10263V3.50438C2.10263 2.8035 2.22528 2.13767 2.57572 1.52441C2.94368 0.893617 3.46934 0.473091 4.13517 0.227785C4.57322 0.0700875 5.01126 0 5.48436 0H7.2015C7.44681 0 7.55194 0.105131 7.55194 0.350438V2.34793C7.55194 2.59324 7.44681 2.69837 7.2015 2.69837C6.72841 2.69837 6.25532 2.69837 5.78223 2.71589C5.30914 2.71589 5.06383 2.94368 5.06383 3.43429C5.04631 3.95995 5.06383 4.46808 5.06383 5.01126H7.09637C7.37672 5.01126 7.48185 5.1164 7.48185 5.39675V7.5169C7.48185 7.79725 7.39424 7.88486 7.09637 7.88486H5.06383V13.597C5.06383 13.8949 4.97622 14 4.66083 14H2.47059C2.20776 14 2.10263 13.8949 2.10263 13.632V7.90238Z" fill="white" />
                  </svg>
                </span>
                <span><svg width="1" height="21" viewBox="0 0 1 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 20.5L0.499999 0.499999" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                <span>
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.86862 0C0.839031 0 0.000753846 0.838115 0 1.86852C0 2.89892 0.838277 3.73719 1.86862 3.73719C2.89859 3.73719 3.73644 2.89892 3.73644 1.86852C3.73644 0.838223 2.89854 0 1.86862 0ZM3.27105 4.48797H0.465985C0.434245 4.48797 0.402816 4.49422 0.373492 4.50637C0.344169 4.51852 0.317526 4.53632 0.295085 4.55877C0.272644 4.58122 0.254844 4.60786 0.242703 4.63719C0.230562 4.66651 0.224316 4.69794 0.224323 4.72968V13.7583C0.224323 13.8224 0.249784 13.8839 0.295104 13.9292C0.340424 13.9745 0.401892 14 0.465985 14H3.27099C3.33509 14 3.39655 13.9745 3.44188 13.9292C3.4872 13.8839 3.51268 13.8224 3.51271 13.7583V4.72968C3.51273 4.69794 3.50649 4.6665 3.49436 4.63717C3.48222 4.60784 3.46442 4.58119 3.44198 4.55874C3.41953 4.53629 3.39288 4.51848 3.36356 4.50634C3.33423 4.4942 3.30279 4.48796 3.27105 4.48797ZM10.4421 4.38168C9.41554 4.38168 8.51345 4.69425 7.96298 5.20396V4.72968C7.96298 4.59615 7.85475 4.48797 7.72127 4.48797H5.03052C4.99878 4.48797 4.96735 4.49422 4.93802 4.50637C4.9087 4.51852 4.88205 4.53632 4.8596 4.55877C4.83716 4.58121 4.81935 4.60786 4.80721 4.63718C4.79506 4.66651 4.78881 4.69794 4.78881 4.72968V13.7583C4.78881 13.7901 4.79506 13.8215 4.80721 13.8508C4.81936 13.8802 4.83716 13.9068 4.85961 13.9292C4.88205 13.9517 4.9087 13.9695 4.93803 13.9816C4.96735 13.9938 4.99878 14 5.03052 14H7.83289C7.89699 14 7.95845 13.9745 8.00378 13.9292C8.0491 13.8839 8.07458 13.8224 8.07461 13.7583V9.29142C8.07461 8.00978 8.31035 7.21538 9.48683 7.21538C10.6459 7.21678 10.7327 8.06863 10.7327 9.36799V13.7583C10.7327 13.7901 10.7389 13.8215 10.7511 13.8508C10.7632 13.8802 10.7811 13.9068 10.8035 13.9292C10.826 13.9517 10.8526 13.9695 10.8819 13.9816C10.9113 13.9938 10.9427 14 10.9744 14H13.7781C13.8422 14 13.9036 13.9745 13.949 13.9292C13.9943 13.8839 14.0197 13.8224 14.0198 13.7583V8.80573C14.0197 6.74595 13.6131 4.38168 10.4421 4.38168Z" fill="white" />
                  </svg>
                </span>
                <span><svg width="1" height="21" viewBox="0 0 1 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 20.5L0.499999 0.499999" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                <span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.49208 0H5.91473C4.32064 0 3.21716 0.349493 2.22399 1.16993C1.4429 1.84382 0.976752 2.82321 0.976752 3.78989C0.976752 5.27926 2.11229 6.86205 4.21653 6.86205C4.41885 6.86205 4.64286 6.84129 4.84054 6.82286L4.81141 6.89366C4.72683 7.09629 4.64674 7.28745 4.64674 7.58582C4.64674 8.16676 4.92698 8.52509 5.19793 8.87133L5.23201 8.91517L5.17144 8.91935C4.30251 8.97884 2.68518 9.08976 1.50378 9.81586C0.108442 10.6454 0 11.8522 0 12.2022C0 13.5946 1.29759 15 4.1967 15C7.5677 15 9.33159 13.1402 9.33159 11.3032C9.33189 9.94444 8.53516 9.27365 7.68946 8.56149L6.97607 8.00658C6.75562 7.82393 6.48111 7.59667 6.48111 7.1756C6.48111 6.76167 6.75562 6.48839 6.99791 6.24734L7.02317 6.22178C7.79357 5.61497 8.66668 4.92698 8.66668 3.43885C8.66668 1.94266 7.73176 1.16947 7.28219 0.797823H8.46932C8.48392 0.797909 8.49823 0.793766 8.51052 0.785894L9.53313 0.142988C9.54732 0.134045 9.55823 0.120738 9.5642 0.105066C9.57018 0.0893938 9.57091 0.0722049 9.56628 0.0560828C9.56165 0.0399607 9.55192 0.0257768 9.53854 0.0156633C9.52515 0.00554978 9.50885 5.32538e-05 9.49208 0ZM5.15394 14.1803C3.09912 14.1803 1.7185 13.2206 1.7185 11.7921C1.7185 10.8594 2.28317 10.1816 3.39532 9.77868C4.28594 9.47891 5.43558 9.46404 5.44704 9.46404C5.64177 9.46404 5.73968 9.46404 5.89521 9.48356C7.333 10.5068 8.02424 11.044 8.02424 12.0673C8.02408 13.3707 6.92417 14.1803 5.15394 14.1803ZM5.13457 6.3138C3.41003 6.3138 2.69432 4.0469 2.69432 2.83312C2.69432 2.21593 2.83467 1.7422 3.12344 1.38449C3.43684 0.992399 3.97347 0.739109 4.49058 0.739109C6.07399 0.739109 6.94958 2.86736 6.94958 4.3383C6.94958 4.57036 6.94958 5.27632 6.4619 5.76663C6.13394 6.09397 5.60056 6.3138 5.13457 6.3138ZM14.506 7.00581H12.6209V5.12745C12.6209 5.1069 12.6128 5.0872 12.5983 5.07267C12.5837 5.05815 12.564 5.04999 12.5435 5.04999H11.7326C11.7121 5.04999 11.6924 5.05815 11.6779 5.07267C11.6633 5.0872 11.6552 5.1069 11.6552 5.12745V7.00581H9.7796C9.75906 7.00581 9.73936 7.01398 9.72483 7.0285C9.71031 7.04303 9.70215 7.06273 9.70215 7.08327V7.90495C9.70215 7.9255 9.71031 7.9452 9.72483 7.95973C9.73936 7.97425 9.75906 7.98241 9.7796 7.98241H11.6552V9.87287C11.6552 9.89341 11.6633 9.91311 11.6779 9.92764C11.6924 9.94216 11.7121 9.95032 11.7326 9.95032H12.5435C12.5861 9.95032 12.6209 9.91547 12.6209 9.87287V7.9821H14.506C14.5265 7.9821 14.5462 7.97394 14.5607 7.95942C14.5753 7.94489 14.5834 7.92519 14.5834 7.90464V7.08327C14.5834 7.04036 14.5489 7.00581 14.506 7.00581Z" fill="white" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-[#FFFFFF] mt-25 lg:text-[18px] font-sansation">
            AI Powered Scheduling &amp; Estimating Software
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
