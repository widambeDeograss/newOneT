// import React from "react";
// import "./landing.css";
// import LandNav from "./LandNav";
// import AnimatedText from "react-animated-text-content";
// import Footer from "../Account/Footer";
// import Lottie from "react-lottie";
// import animationData from "../../Assets/lotties/29826-cybersecurity-animation.json";
// import secondanime from "../../Assets/lotties/142051-toucan-walk-cycle.json";
// import LandCard from "../Account/Components/LandCard";
// import Img from "../../Assets/prof.jpg";

// const Landingpage = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   const secondanimation = {
//     loop: true,
//     autoplay: true,
//     animationData: secondanime,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   const arry = [1, 2, 3, 4, 5, 6, 7, 8];

//   return (
//     <div className="main-container">
//       <div className="top-side">
//         <div className="navbar">
//           <span>
//             Vast<span style={{ color: "red" }}>FX</span>
//           </span>
//           <a href="/login">Sign In</a>
//         </div>

//         <div className="original-banner">
//           <div className="welcome-banner">
//             <span className="bigVast">
//               Vast<span style={{ color: "red" }}>FX</span>
//             </span>
//             <div className="below-bigvast">
//               <AnimatedText
//                 type="words" // animate words or chars
//                 animation={{
//                   x: "200px",
//                   y: "-20px",
//                   scale: 1.1,
//                   ease: "ease-in-out",
//                 }}
//                 animationType="throw"
//                 interval={0.03}
//                 duration={0.2}
//                 tag="p"
//                 className="animated-paragraph"
//                 includeWhiteSpaces
//                 threshold={0.1}
//                 rootMargin="20%"
//               >
//                 If you aren’t satisfied with the build tool and configuration
//                 choices, you can eject at any time. This command will remove the
//                 single build dependency from your project. Instead, it will copy
//                 all the configuration files and the transitive dependencies
//                 (webpack, Babel, ESLint, etc) right into your project so you
//                 have full control over them.
//               </AnimatedText>
//             </div>
//           </div>

//           <div className="other-banner">
//             <Lottie options={secondanimation} />
//           </div>
//         </div>
//       </div>

//       <div className="after-banner">
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-start",
//             padding: "2% 0% 0% 5%",
//           }}
//         >
//           <h1>Popular Books</h1>
//         </div>

//         <div className="land-card">
//           {arry.map(() => {
//             return (
//               <a
//                 href="#"
//                 class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//               >
//                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Noteworthy technology acquisitions 2021
//                 </h5>
//                 <p class="font-normal text-gray-700 dark:text-gray-400">
//                   Here are the biggest enterprise technology acquisitions of
//                   2021 so far, in reverse chronological order.
//                 </p>
//               </a>
//             );
//           })}
//         </div>
//       </div>

//       <section  class="bg-white dark:bg-gray-900 pre-books">
//         <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
//           <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//             We invest in the world’s potential
//           </h1>
//           <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
//             Here at Flowbite we focus on markets where technology, innovation,
//             and capital can unlock long-term value and drive economic growth.
//           </p>
//           <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
//             <a
//               href="#"
//               class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
//             >
//               Get started
//               <svg
//                 aria-hidden="true"
//                 class="ml-2 -mr-1 w-5 h-5"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </a>
//             <a
//               href="#"
//               class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
//             >
//               Learn more
//             </a>
//           </div>
//         </div>
//       </section>

//       <div className="books">
//         <span style={{fontSize:'36pt',fontWeight:'bolder'}}>All Available book</span>
//         <div className="all-books">
//           {arry.map(() => {
//             return <LandCard />;
//           })}
//         </div>
//       </div>

//       <div className="land-footer">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Landingpage;
