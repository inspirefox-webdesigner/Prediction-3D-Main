import { useMemo } from "react";
import Header from "../components/Header";
import avatar from "../assets/avatar.png";
import box from "../assets/box.png";
import line from "../assets/line box.png";
import Thirdbox from "../assets/thirdbox.png";
import Thirdbox1 from "../assets/thirdbox1.png";
import Thirdbox2 from "../assets/thirdbox2.png";

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

        <section className="flex flex-col items-center text-center mt-20 md:mt-28 lg:mt-32 px-4 leading-none">
          <div className="flex items-center gap-2 text-xl md:text-[80px] lg:text-[80px] gradient-automated font-sansation font-bold relative leading-none">
            <svg
              width="60"
              height="60"
              className="absolute -top-4 -left-6"
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

          <h1 className="text-3xl sm:text-4xl md:text-[100px] lg:text-[100px] font-sansation font-bold leading-none">
            Construction Scheduling
          </h1>

          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-[100px] lg:text-[100px] font-sansation font-bold leading-none">
              & Estimating
            </h1>

            <span className="absolute -right-10 top-15 md:-right-28 bottom-1 md:bottom-2 text-[#FF0909] text-2xl sm:text-3xl md:text-[80px] lg:text-[80px] font-betterlett">
              Software
            </span>
          </div>
        </section>

        <div className="max-w-70 md:max-w-75 text-left mt-14 md:mt-25 mb-25 ml-6 md:ml-16 lg:ml-35 text-[18px] md:text-[18px] opacity-50 font-sansation font-300">
          Upload your BIM model and get your complete construction schedule and
          take-off estimate in minutes.
        </div>

        <div className="absolute bottom-0 w-full flex justify-center">
          <div className="bottom-curve flex items-start justify-center">
            <span className="get-started-text font-sansation">Get Started</span>
          </div>
        </div>
      </div>

      {/*secound section start Here*/}

      <section className="section-two">
        <div className="container-main">
          <div className="top-flex">
            <div className="left-text leading-18">
              <div className="flex items-center gap-2 flex-wrap">
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

              <div className="gradient-blue font-bold text-[28px] md:text-[40px] lg:text-[60px]">
                Construction Scheduling
              </div>

              <div className="text-white font-bold text-[28px] md:text-[40px] lg:text-[60px] ">
                And Take Off Estimated
              </div>

              <div className="text-white font-bold text-[28px] md:text-[40px] lg:text-[60px] ">
                Construction Planning In
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="easy-text font-bold text-[28px] md:text-[40px] lg:text-[60px] ">
                  4 Easy
                </span>
                <span className="font-betterlett step-color text-[34px] md:text-[48px] lg:text-[70px]">
                  Steps!
                </span>
              </div>
            </div>

            <div className="right-img">
              <div className="plan-box w-[70%] md:w-186.75 md:h-138.75 lg:w-186.75 lg:h-138.75 relative">
                <img src={box} className="top-70 absolute" />
              </div>
            </div>
          </div>

          <div className="steps-area">
            <div className="circle-line" />

            <div className="steps-list flex flex-col gap-5">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="step-card relative flex items-center justify-between gap-5 
      lg:w-184 w-full px-5 py-4 rounded-[14px] overflow-hidden
      bg-[linear-gradient(145deg,#0a3550,#051e2d)]"
                >
                  <div className="relative z-10">
                    <div className="step-no text-[36px] md:text-[48px] lg:text-[70px] font-bold">
                      {s.no}
                    </div>

                    <div className="step-text">
                      <span className="title-1 text-[18px] md:text-[24px] lg:text-[34px]">
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
                    className="step-img relative z-10 w-16 md:w-20 lg:w-24"
                  />

                  <div
                    className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40 
      bg-[radial-gradient(circle,rgba(255,255,255,0.23)_0%,rgba(255,255,255,0.1508)_40%,rgba(83,85,91,0.01)_80%,transparent_100%)] blur-xl"
                  ></div>

                  <div
                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 
      bg-[radial-gradient(circle,rgba(255,255,255,0.23)_0%,rgba(255,255,255,0.1508)_40%,rgba(83,85,91,0.01)_80%,transparent_100%)] blur-xl"
                  ></div>
                </div>
              ))}
            </div>

            <div className="side-img">
              <img src={line} className="" />
            </div>
          </div>
        </div>
      </section>

      {/* third section start*/}
      <div className="relative w-full flex flex-col items-center py-20 overflow-hidden">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[800px] bg-gradient-to-r from-[#0a4c6b]/70 via-[#062f44]/80 to-[#0a4c6b]/70 rounded-[40px]"></div>

        <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center">
          <div className="w-[90%] md:w-[520px] lg:w-[620px] bg-[#072c40] rounded-2xl p-6 md:p-10 flex justify-center align-items-center shadow-lg">
            <img src={Thirdbox} className="w-full object-contain" />
          </div>

          <div className="text-center mt-20 px-4 mb-20">
            <p className="text-white text-sm md:text-[50px] font-bold leading-none font-sansation">
              USING OUR ARTIFICIAL INTELLIGENCE ENGINE
            </p>

            <p className="text-white text-xl md:text-3xl lg:text-[50px] font-bold leading-none font-sansation">
              IS
              <span className="text-[#FF0808] font-[cursive] mx-3 text-2xl md:text-[70px] leading-none font-betterlett">
                Easy
              </span>
              AS
              <span className="text-[#3AB8FE] lg:text-[50px] font-bold ml-4 leading-none font-sansation">
                BOOKING A PLANE TICKET ONLINE!
              </span>
            </p>

            <p className="text-gray-300 text-xs md:text-[24px] mt-3 font-sansation">
              Upload Your Revit 3D BIM Mode And Download Your Construction
              Schedule & Take-Off Estimate!
            </p>
           
          </div>
           <img
          src={Thirdbox2}
          className="absolute -right-30 bottom-75 w-[200px] md:w-[300px] lg:w-[420px] opacity-90"
        />

          <div className="w-[90%] md:w-[520px] lg:w-[620px] bg-[#072c40] rounded-2xl p-6 md:p-10 flex justify-center shadow-lg">
            <img src={Thirdbox1} className="w-full object-contain" />
          </div>
        </div>

        
      </div>
      {/* third section end*/}
    </div>
  );
}

export default Home;
