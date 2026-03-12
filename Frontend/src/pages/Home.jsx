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

  return (
    <div className="w-full section-one">
      <div className="hero-bg text-white">
        {dots.map((d, i) => (
          <div
            key={i}
            className="dot"
            style={{
              top: d.top + "%",
              left: d.left + "%",
              animationDelay: d.delay + "s",
            }}
          />
        ))}

        <Header />

        <section className="flex flex-col items-center text-center mt-14 md:mt-24 lg:mt-32 px-4 md:px-8 leading-none">
          <div className="flex items-center gap-2 text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] gradient-automated font-sansation font-bold relative">
            <svg
              className="absolute -top-2 -left-4 md:-top-3 md:-left-5 lg:-top-4 lg:-left-6 w-8 md:w-12 lg:w-[60px] h-8 md:h-12 lg:h-[60px]"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48.4715 23.1338C48.3625 22.9414 48.2044 22.7813 48.0134 22.67C47.8223 22.5587 47.6052 22.5 47.384 22.5H31.009L33.7544 1.52407C33.7838 1.24334 33.7179 0.960861 33.5673 0.722122C33.4167 0.483382 33.1902 0.30227 32.9241 0.207948C32.6581 0.113625 32.368 0.111579 32.1007 0.20214C31.8333 0.292701 31.6042 0.4706 31.4503 0.707191L11.5365 35.5953C11.4201 35.7847 11.3563 36.0018 11.3516 36.224C11.347 36.4463 11.4018 36.6658 11.5103 36.8599C11.6188 37.054 11.777 37.2156 11.9688 37.3281C12.1606 37.4406 12.3789 37.5 12.6012 37.5H28.7315L26.5559 58.5075C26.5345 58.7873 26.6073 59.0661 26.7627 59.2998C26.9181 59.5334 27.1472 59.7083 27.4135 59.7967C27.6797 59.8852 27.9679 59.882 28.2322 59.7877C28.4965 59.6935 28.7216 59.5135 28.8719 59.2766L48.4565 24.3922C48.5701 24.2025 48.6313 23.9861 48.634 23.765C48.6366 23.5439 48.5806 23.3261 48.4715 23.1338Z"
                fill="#FF0808"
              />
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

            <span className="absolute -right-6 top-6 md:-right-20 md:top-10 lg:-right-28 lg:top-15 text-[#FF0909] text-[26px] sm:text-[30px] md:text-[55px] lg:text-[80px] font-betterlett">
              Software
            </span>
          </div>

          <p className="max-w-[280px] md:max-w-[420px] lg:max-w-[480px] text-left mt-10 md:mt-16 lg:mt-20 text-[14px] md:text-[16px] lg:text-[18px] opacity-50 font-sansation font-[300] self-start md:self-start lg:self-start md:ml-8 lg:ml-20">
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

      {/*secound section start Here*/}

      <section className="w-full py-14 md:py-20 bg-[linear-gradient(90deg,#001A28_0%,#001A28_47%)]">
        <div className="max-w-420 mx-auto px-5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
            <div className="leading-tight text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span className="text-white font-sansation font-bold text-[28px] md:text-[40px] lg:text-[60px] leading-none">
                  Get Your
                </span>

                <svg className="w-6 md:w-10 lg:w-15" viewBox="0 0 60 60">
                  <path
                    d="M48.4715 23.1338C48.3625 22.9414 48.2044 22.7813 48.0134 22.67C47.8223 22.5587 47.6052 22.5 47.384 22.5H31.009L33.7544 1.52407L11.5365 35.5953H28.7315L26.5559 58.5075L48.4565 24.3922Z"
                    fill="#FF0808"
                  />
                </svg>
              </div>

              <div className="font-bold text-[28px] md:text-[40px] lg:text-[60px] bg-[rgba(58,184,254,1)] bg-clip-text text-transparent">
                Construction Scheduling
              </div>

              <div className="text-white font-bold text-[28px] md:text-[40px] lg:text-[60px]">
                And Take Off Estimated
              </div>

              <div className="text-white font-bold text-[28px] md:text-[40px] lg:text-[60px]">
                Construction Planning In
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span className="font-bold text-[28px] md:text-[40px] lg:text-[60px] bg-[linear-gradient(90deg,rgba(58,184,254,1),rgba(0,58,90,1))] bg-clip-text text-transparent">
                  4 Easy
                </span>

                <span className="font-betterlett text-[34px] md:text-[48px] lg:text-[70px] text-[#FF0808]">
                  Steps!
                </span>
              </div>
            </div>

            <div className="flex justify-center w-full lg:w-175 max-w-175">
              <div className="relative w-full md:w-130 lg:w-186.75 md:h-105 lg:h-138.75 rounded-2xl bg-[linear-gradient(180deg,#052f4c,#02131d)] flex items-center justify-center lg:mt-0 md:mt-0 mt-20">
                <img
                  src={box}
                  className="absolute bottom-0 w-[85%] md:w-[80%] lg:w-auto"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-14 md:mt-20 gap-10 relative items-center">
            <div className="hidden lg:block absolute w-[1100px] h-[1100px] rounded-full border-r border-white/30 left-[150px] -top-[230px]" />

            <div className="flex flex-col gap-5 w-full lg:w-auto">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-between gap-4 lg:w-[736px] w-full px-5 py-4 rounded-[14px] overflow-hidden bg-[linear-gradient(145deg,#0a3550,#051e2d)]"
                >
                  <div className="relative z-10">
                    <div className="font-betterlett text-[#FF0808] text-[36px] md:text-[48px] lg:text-[70px] font-bold">
                      {s.no}
                    </div>

                    <div>
                      <span className="text-[#3AB8FE] text-[18px] md:text-[24px] lg:text-[34px]">
                        {s.title1}
                      </span>

                      <span className="text-white text-[18px] md:text-[24px] lg:text-[34px] ml-2">
                        {s.title2}
                      </span>

                      <div className="text-white text-[18px] md:text-[24px] lg:text-[34px]">
                        {s.sub}
                      </div>
                    </div>
                  </div>

                  <img
                    src={avatar}
                    className="relative z-10 w-30 md:w-50 lg:w-84.75"
                  />

                  <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-[radial-gradient(circle,rgba(255,255,255,0.23)_0%,rgba(255,255,255,0.1508)_40%,rgba(83,85,91,0.01)_80%,transparent_100%)] blur-xl"></div>

                  <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-[radial-gradient(circle,rgba(255,255,255,0.23)_0%,rgba(255,255,255,0.1508)_40%,rgba(83,85,91,0.01)_80%,transparent_100%)] blur-xl"></div>
                </div>
              ))}
            </div>

            <div className="lg:ml-[100px] flex justify-center">
              <img src={line} />
            </div>
          </div>
        </div>
      </section>

      {/*secound section End Here*/}

      {/* third section start*/}
      <div className="relative w-full flex flex-col items-center py-16 md:py-20 overflow-hidden">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-162.5 md:h-187.5 lg:h-200 third-section rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[80px]"></div>

        <div className="relative z-10 w-full max-w-300 flex flex-col items-center px-4">
          <div className="w-full max-w-85 md:max-w-130 lg:w-155 bg-[#072c40] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 flex justify-center items-center shadow-lg">
            <img src={Thirdbox} className="w-full object-contain" />
          </div>

          <div className="text-center mt-14 md:mt-20 px-2 md:px-4 mb-14 md:mb-20">
            <p className="text-white text-[16px] sm:text-[22px] md:text-[36px] lg:text-[50px] font-bold font-sansation leading-none">
              USING OUR ARTIFICIAL INTELLIGENCE ENGINE
            </p>

            <p className="text-white text-[20px] sm:text-[24px] md:text-[32px] lg:text-[50px] font-bold  font-sansation leading-none">
              IS
              <span className="text-[#FF0808] mx-2 md:mx-3 text-[28px] sm:text-[32px] md:text-[48px] lg:text-[70px] leading-none font-betterlett">
                Easy
              </span>
              AS
              <span className="text-[#3AB8FE] ml-2 md:ml-4 text-[20px] sm:text-[24px] md:text-[32px] lg:text-[50px] font-bold leading-tight font-sansation">
                BOOKING A PLANE TICKET ONLINE!
              </span>
            </p>

            <p className="text-gray-300 text-[12px] sm:text-[14px] md:text-[20px] lg:text-[24px] mt-4 font-sansation max-w-[320px] md:max-w-[520px] mx-auto">
              Upload Your Revit 3D BIM Mode And Download Your Construction
              Schedule & Take-Off Estimate!
            </p>
          </div>

          <img
            src={Thirdbox2}
            className="absolute -right-16 md:-right-24 lg:-right-30 bottom-48 md:bottom-60 lg:bottom-75 w-[120px] sm:w-[180px] md:w-[260px] lg:w-[420px] opacity-90"
          />

          <div className="w-full max-w-[340px] md:max-w-[520px] lg:w-[620px] bg-[#072c40] rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-10 flex justify-center shadow-lg">
            <img src={Thirdbox1} className="w-full object-contain" />
          </div>
        </div>
      </div>
      {/* third section end*/}

      {/* fourth section start here*/}

      <div className="relative w-full py-12 md:py-16 lg:py-10 overflow-hidden">
        {/* Heading */}
        <div className="text-center px-4 max-w-420 mx-auto">
          <h2 className="text-white font-bold leading-tight text-[22px] sm:text-[30px] md:text-[40px] lg:text-[60px] relative font-sansation">
            LET OUR{" "}
            <span className="text-[#3AB8FE]">
              ARTIFICIAL INTELLIGENCE ENGINE
            </span>
            <svg
              className="absolute lg:right-[10%] right-[12%] -top-6 sm:-top-6 md:-top-8 w-8 sm:w-10 md:w-12 lg:w-15"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M48.4716 23.1338C48.3626 22.9414 48.2045 22.7814 48.0134 22.6701C47.8224 22.5587 47.6052 22.5001 47.3841 22.5001H31.0091L33.7544 1.52413C33.7839 1.2434 33.718 0.960922 33.5674 0.722183C33.4168 0.483443 33.1902 0.302332 32.9242 0.208009C32.6581 0.113686 32.3681 0.11164 32.1007 0.202201C31.8334 0.292763 31.6043 0.470661 31.4504 0.707252L11.5366 35.5954C11.4202 35.7848 11.3563 36.0018 11.3517 36.2241C11.3471 36.4464 11.4018 36.6659 11.5103 36.86C11.6188 37.0541 11.7771 37.2157 11.9689 37.3282C12.1606 37.4407 12.3789 37.5 12.6013 37.5001H28.7316L26.556 58.5076C26.5346 58.7873 26.6074 59.0662 26.7628 59.2998C26.9182 59.5334 27.1472 59.7084 27.4135 59.7968C27.6798 59.8852 27.968 59.8821 28.2323 59.7878C28.4965 59.6935 28.7217 59.5136 28.8719 59.2766L48.4566 24.3923C48.5702 24.2026 48.6314 23.9861 48.634 23.7651C48.6367 23.544 48.5806 23.3262 48.4716 23.1338Z"
                fill="#FF0808"
              />
            </svg>
            <br />
            FOR CONSTRUCTION DO
          </h2>

          <div className="text-red-500 font-betterlett text-[28px] sm:text-[34px] md:text-[42px] lg:text-[70px] -mt-4 md:-mt-8 lg:-mt-12">
            All The Work.
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-420 mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-8 lg:gap-10 px-4 mt-10 md:mt-14">
          {/* Left Box */}
          <div className="feature-box px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-15 max-w-[260px] md:max-w-[300px] lg:max-w-90">
            <p className="text-white font-bold text-[18px] md:text-[20px] lg:text-[24px] leading-tight">
              <span className="text-[#3AB8FE] font-bold text-[18px] md:text-[20px] lg:text-[24px]">
                DOWNLOAD
              </span>{" "}
              A DETAILED
              <br /> CONSTRUCTION
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
              <img src={calender} className="w-10 md:w-14 lg:w-18" />
            </div>

            <p className="text-white text-[12px] md:text-[14px] lg:text-[18px] max-w-[220px] md:max-w-[240px] lg:max-w-75 mx-auto">
              Instantly creates a visualization of each construction task from
              foundation laying to finishing
            </p>
          </div>

          {/* Images */}
          <div className="flex flex-col items-center gap-6 mt-6 md:mt-10 lg:mt-15">
            <img src={Home1} className="w-50 sm:w-60 md:w-75 lg:w-153.25" />

            <img src={Home2} className="w-50 sm:w-60 md:w-75 lg:w-153.25" />
          </div>

          {/* Right Box */}
          <div className="feature-box px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-15 max-w-[260px] md:max-w-[300px] lg:max-w-90">
            <p className="text-white font-bold text-[18px] md:text-[20px] lg:text-[24px] leading-tight">
              <span className="text-[#3AB8FE] font-bold text-[18px] md:text-[20px] lg:text-[24px]">
                DOWNLOAD
              </span>{" "}
              A DETAILED
              <br /> CONSTRUCTION
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
              <img src={calender} className="w-10 md:w-14 lg:w-18" />
            </div>

            <p className="text-white text-[12px] md:text-[14px] lg:text-[18px] max-w-[220px] md:max-w-[240px] lg:max-w-75 mx-auto">
              Instantly creates a visualization of each construction task from
              foundation laying to finishing
            </p>
          </div>
        </div>
      </div>

      {/* fourth section End here*/}

      {/** section five start here*/}

      <section className="construction-section w-full py-16 md:py-24 lg:py-30">
        <div className="construction-container max-w-420 mx-auto px-5 relative grid lg:grid-cols-2 md:grid-cols-1 gap-y-16 lg:gap-x-30">
          <div className="boxes-area flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20 items-center md:items-start justify-center lg:justify-start">
            <div className="boxes-col-left flex flex-col gap-8 md:gap-12 lg:gap-15">
              <FeatureBox />
              <FeatureBox />
            </div>

            <div className="boxes-col-center flex justify-center mt-0 md:mt-20 lg:mt-40">
              <FeatureBox />
            </div>
          </div>

          <div className="circle-line-area hidden lg:block">
            <div className="center-circle"></div>
            <div className="circle-line"></div>
          </div>

          <div className="houses-area flex flex-col items-start gap-10 md:gap-16 lg:gap-30">
            <div className="house-img house-img-1 w-82.5 md:w-112.5 lg:w-auto rounded-[18px] flex items-center justify-center">
              <img src={Home2} className="w-77.5 md:w-112.5 lg:w-auto" />
            </div>

            <div className="house-img house-img-2 ml-0 md:-ml-15 lg:-ml-30">
              <img
                src={Home2}
                className="w-77.5 md:w-112.5 lg:w-auto lg:mt-30"
              />
            </div>
          </div>
        </div>
      </section>

      {/** section five end here*/}

      {/** section six start here*/}

      <section className="w-full py-16 flex justify-center bg-[#001A28]">
        <div className="relative w-full max-w-[1680px] px-4 md:px-8 flex flex-col items-center lg:items-start">
          <div className="relative w-full flex justify-center lg:justify-start">
            <div className="relative w-full md:w-[80%] lg:w-[1041.896px] rounded-[20px] p-[6px] bg-[linear-gradient(180deg,#1b78a8,#0e5c86)] shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <img
                src={Report}
                className="w-full h-auto rounded-[16px] object-cover"
              />
            </div>

            <div className="relative lg:absolute lg:right-0 lg:top-16 mt-8 lg:mt-0 flex flex-col items-center lg:items-start">
              <div className="w-[85%] md:w-[420px] lg:w-[600px] rounded-[16px] bg-[#052f4c] p-3 shadow-xl">
                <img
                  src={Home2}
                  className="w-full h-auto rounded-[12px] object-cover"
                />
              </div>

              <div className="flex gap-4 mt-6 lg:ml-15">
                <div className="w-[56px] h-[56px] rounded-[12px] flex items-center justify-center bg-[linear-gradient(145deg,#0a3550,#051e2d)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]"></div>
                  <svg
                    width="34"
                    height="17"
                    viewBox="0 0 34 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.221093 8.92838L7.82319 16.5207C8.09627 16.8392 8.57619 16.8763 8.89507 16.6035C9.21395 16.3308 9.25112 15.8515 8.97797 15.533C8.9525 15.5033 8.92479 15.4756 8.89507 15.4502L2.59293 9.14859L32.6898 9.14859C33.1096 9.14859 33.45 8.80865 33.45 8.38931C33.45 7.96997 33.1096 7.6301 32.6898 7.6301L2.59293 7.6301L8.89507 1.33609C9.21395 1.06336 9.25112 0.584059 8.97798 0.26559C8.70483 -0.0528796 8.22497 -0.0900024 7.90609 0.182792C7.87637 0.208238 7.8486 0.235902 7.82319 0.26559L0.221024 7.85794C-0.0736801 8.15397 -0.0736802 8.63222 0.221093 8.92838Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="w-[56px] h-[56px] rounded-[12px] flex items-center justify-center bg-[linear-gradient(145deg,#0a3550,#051e2d)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.25),transparent_60%)]"></div>
                  <svg
                    width="34"
                    height="17"
                    viewBox="0 0 34 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.2289 7.85775L25.6268 0.2654C25.3537 -0.0530689 24.8738 -0.090194 24.5549 0.182602C24.2361 0.455333 24.1989 0.934634 24.472 1.2531C24.4975 1.28279 24.5252 1.31052 24.5549 1.3359L30.8571 7.63754H0.76019C0.340374 7.63754 0 7.97748 0 8.39682C0 8.81616 0.340374 9.15603 0.76019 9.15603H30.8571L24.5549 15.45C24.2361 15.7228 24.1989 16.2021 24.472 16.5205C24.7452 16.839 25.225 16.8761 25.5439 16.6033C25.5736 16.5779 25.6014 16.5502 25.6268 16.5205L33.229 8.92819C33.5237 8.63216 33.5237 8.15391 33.2289 7.85775Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** section six end here*/}
    </div>
  );
}

export default Home;
