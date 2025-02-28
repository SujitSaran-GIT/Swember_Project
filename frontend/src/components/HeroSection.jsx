// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const HeroSection = () => {
//   const [userCount, setUserCount] = useState(0);
//   const totalUsers = 100; // Replace with the actual total number of users from your backend

//   // Fetch total number of users from the backend (example)
//   useEffect(() => {
//     // Simulate fetching total users from an API
//     // fetch('/api/total-users')
//     //   .then((response) => response.json())
//     //   .then((data) => {
//     //     totalUsers = data.totalUsers;
//     //   });
//   }, []);

//   // Animate the user counter
//   useEffect(() => {
//     if (userCount < totalUsers) {
//       const interval = setInterval(() => {
//         setUserCount((prevCount) => prevCount + 1);
//       }, 10); // Adjust the speed of the counter
//       return () => clearInterval(interval);
//     }
//   }, [userCount, totalUsers]);

//   // Carousel settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="relative bg-gray-100 py-12">
//       {/* Text Above the Carousel */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Website</h1>
//         <p className="text-lg text-gray-600 mt-2">
//           Discover amazing features and join our growing community!
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className="max-w-4xl mx-auto">
//         <Slider {...settings}>
//           <div>
//             <img
//               src="https://www.shutterstock.com/image-photo/portrait-young-couple-mobile-phones-600nw-2240668083.jpg"
//               alt="Slide 1"
//               className="w-full h-64 object-cover rounded-lg"
//             />
//           </div>
//           <div>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafnLUpzEfUHeEvrOECd_wAGz2AIRIRleZ4pQNZGTNvaKubEsk3FrSnVLNd64ft8aLM4I&usqp=CAU"
//               alt="Slide 2"
//               className="w-full h-64 object-cover rounded-lg"
//             />
//           </div>
//           <div>
//             <img
//               src="https://a.hub-cdn.com/images/generic/25674fbb-465f-4124-830c-0b114b28aa31.jpg?width=351&height=197"
//               alt="Slide 3"
//               className="w-full h-64 object-cover rounded-lg"
//             />
//           </div>
//         </Slider>
//       </div>

//       {/* User Counter */}
//       <div className="text-center mt-8">
//         <p className="text-2xl font-semibold text-gray-800">
//           Join our community of{' '}
//           <span className="text-orange-500">{userCount}</span> users!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import swemberone from '../assets/swemberone.png'
// import swembertwo from '../assets/swembertwo.png'
// import swemberthree from '../assets/swemberthree.png'
// import swemberfour from '../assets/swemberfour.png'
// import { Typewriter } from 'react-simple-typewriter';

// const HeroSection = () => {
//   const [userCount, setUserCount] = useState(0);
//   const totalUsers = 1000; // Replace with the actual total number of users from your backend

//   // Animate the user counter
//   useEffect(() => {
//     if (userCount < totalUsers) {
//       const interval = setInterval(() => {
//         setUserCount((prevCount) => prevCount + 1);
//       }, 10); // Adjust the speed of the counter
//       return () => clearInterval(interval);
//     }
//   }, [userCount, totalUsers]);

//   // Carousel settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 7000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     fade: true, // Add a fade effect for smooth transitions
//   };

//   return (
//     <div className="relative h-screen overflow-hidden">
//       {/* Full-Screen Background Carousel */}
//       <div className="absolute inset-0 z-0">
//         <Slider {...settings}>
//           <div>
//             <img
//               src={swemberone}
//               alt="Slide 1"
//               className="w-full h-screen object-cover"
//             />
//           </div>
//           <div>
//             <img
//               src={swemberfour}
//               alt="Slide 2"
//               className="w-full h-screen object-cover"
//             />
//           </div>
//           <div>
//             <img
//               src={swembertwo}
//               alt="Slide 2"
//               className="w-full h-screen object-cover"
//             />
//           </div>
//           <div>
//             <img
//               src={swemberthree}
//               alt="Slide 3"
//               className="w-full h-screen object-cover"
//             />
//           </div>
//         </Slider>
//       </div>

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white z-10">
//         {/* Text Above the Carousel */}
//         <div className="text-left mb-8">
//           <h1 className="text-5xl font-bold">
//             <Typewriter
//               words={['Swipe Less, Connect More – Real People, Real Vibes!']}
//               loop={1} // Runs only once
//               cursor={false} // No blinking cursor
//               typeSpeed={50} // Typing speed
//               deleteSpeed={0} // No delete effect
//             />
//           </h1>
//           <h1 className="text-5xl mt-4 font-bold bg-gradient-to-r from-blue-800 to-pink-800 bg-clip-text text-transparent inline-block">
//             <Typewriter
//               words={['with Swember']}
//               loop={1}
//               cursor={false}
//               typeSpeed={50}
//               deleteSpeed={0}
//             />
//           </h1>
//         </div>

//         {/* User Counter */}
//         <div className="text-center">
//           <p className="text-3xl font-semibold">
//             Join our community of{' '}
//             <span className="text-orange-500">{userCount}</span> users!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import swemberone from '../assets/swemberone.png';
// import swembertwo from '../assets/swembertwo.png';
// import swemberthree from '../assets/swemberthree.png';
// import swemberfour from '../assets/swemberfour.png';
// import { Typewriter } from 'react-simple-typewriter';

// const HeroSection = () => {
//   const [userCount, setUserCount] = useState(0);
//   const totalUsers = 1000;
//   const [startAnimations, setStartAnimations] = useState(false); // 🚀 Controls both animations

//   useEffect(() => {
//     // Start both Typewriter and counter animation together after 500ms
//     setTimeout(() => {
//       setStartAnimations(true);
//     }, 500);
//   }, []);

//   useEffect(() => {
//     if (startAnimations && userCount < totalUsers) {
//       const interval = setInterval(() => {
//         setUserCount((prevCount) => prevCount + 1);
//       }, 10);
//       return () => clearInterval(interval);
//     }
//   }, [startAnimations, userCount, totalUsers]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 7000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     fade: true,
//   };

//   return (
//     <div className="relative h-screen overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <Slider {...settings}>
//           <div><img src={swemberone} alt="Slide 1" className="w-full h-screen object-cover" /></div>
//           <div><img src={swemberfour} alt="Slide 2" className="w-full h-screen object-cover" /></div>
//           <div><img src={swembertwo} alt="Slide 3" className="w-full h-screen object-cover" /></div>
//           <div><img src={swemberthree} alt="Slide 4" className="w-full h-screen object-cover" /></div>
//         </Slider>
//       </div>

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white z-10">
//         {/* Text Above the Carousel */}
//         <div className="text-left mb-8">
//           {startAnimations && (
//             <>
//               <h1 className="text-5xl font-bold">
//                 <Typewriter
//                   words={['Swipe Less, Connect More – Real People, Real Vibes!']}
//                   loop={1}
//                   cursor={false}
//                   typeSpeed={50}
//                   deleteSpeed={0}
//                 />
//               </h1>
//               <h1 className="text-5xl mt-4 font-bold bg-gradient-to-r from-blue-800 to-pink-800 bg-clip-text text-transparent inline-block">
//                 <Typewriter
//                   words={['with Swember']}
//                   loop={1}
//                   cursor={false}
//                   typeSpeed={50}
//                   deleteSpeed={0}
//                 />
//               </h1>
//             </>
//           )}
//         </div>

//         {/* User Counter */}
//         <div className="text-center">
//           {startAnimations && (
//             <p className="text-3xl font-semibold">
//               Join our community of <span className="text-orange-500">{userCount}</span> users!
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import swemberone from '../assets/swemberone.png';
// import swembertwo from '../assets/swembertwo.png';
// import swemberthree from '../assets/swemberthree.png';
// import swemberfour from '../assets/swemberfour.png';
// import { Typewriter } from 'react-simple-typewriter';

// const HeroSection = () => {
//   const [userCount, setUserCount] = useState(0);
//   const [isTypewriterDone, setIsTypewriterDone] = useState(false); // Track if Typewriter is done
//   const totalUsers = 1000; // Replace with the actual total number of users from your backend

//   // Animate the user counter only after Typewriter is done
//   useEffect(() => {
//     if (isTypewriterDone && userCount < totalUsers) {
//       const interval = setInterval(() => {
//         setUserCount((prevCount) => prevCount + 1);
//       }, 10); // Adjust the speed of the counter
//       return () => clearInterval(interval);
//     }
//   }, [userCount, totalUsers, isTypewriterDone]);

//   // Carousel settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 7000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     fade: true, // Add a fade effect for smooth transitions
//   };

//   return (
//     <div className="relative h-screen overflow-hidden">
//       {/* Full-Screen Background Carousel */}
//       <div className="absolute inset-0 z-0">
//         <Slider {...settings}>
//           <div>
//             <img
//               src={swemberone}
//               alt="Slide 1"
//               className="w-full h-screen object-cover"
//             />
//           </div>
//           <div>
//             <img
//               src={swemberfour}
//               alt="Slide 2"
//               className="w-full h-screen object-cover"
//             />
//           </div>
//           <div>
//             <img
//               src={swembertwo}
//               alt="Slide 2"
//               className="w-full h-screen object-cover"
//             />
//           </div>
//           <div>
//             <img
//               src={swemberthree}
//               alt="Slide 3"
//               className="w-full h-screen object-cover"
//             />
//           </div>
//         </Slider>
//       </div>

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white z-10">
//         {/* Text Above the Carousel */}
//         <div className="text-left mb-8">
//           <h1 className="text-5xl font-bold">
//             <Typewriter
//               words={['Swipe Less, Connect More – Real People, Real Vibes!']}
//               loop={1} // Runs only once
//               cursor={false} // No blinking cursor
//               typeSpeed={50} // Typing speed
//               deleteSpeed={0} // No delete effect
//               delaySpeed={0} // No delay between words
//               onLoopDone={() => setIsTypewriterDone(true)} // Set state when Typewriter is done
//             />
//           </h1>
//           <h1 className="text-5xl mt-4 font-bold bg-gradient-to-r from-blue-800 to-pink-800 bg-clip-text text-transparent inline-block">
//             <Typewriter
//               words={['with Swember']}
//               loop={1}
//               cursor={false}
//               typeSpeed={50}
//               deleteSpeed={0}
//               delaySpeed={0} // No delay between words
//               onLoopDone={() => setIsTypewriterDone(true)} // Set state when Typewriter is done
//             />
//           </h1>
//         </div>

//         {/* User Counter */}
//         {isTypewriterDone && ( // Render the counter only after Typewriter is done
//           <div className="text-center">
//             <p className="text-3xl font-semibold">
//               Join our community of{' '}
//               <span className="text-orange-500">{userCount}</span> users!
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import swemberone from '../assets/swemberone.png';
// import swembertwo from '../assets/swembertwo.png';
// import swemberthree from '../assets/swemberthree.png';
// import swemberfour from '../assets/swemberfour.png';
// import { Typewriter } from 'react-simple-typewriter';

// const HeroSection = () => {
//   const [showCounter, setShowCounter] = useState(false); // Controls when counter starts
//   const [userCount, setUserCount] = useState(0);
//   const totalUsers = 1000;

//   // Counter Animation: Starts AFTER Typewriter text completes
//   useEffect(() => {
//     if (showCounter && userCount < totalUsers) {
//       const interval = setInterval(() => {
//         setUserCount((prevCount) => prevCount + 1);
//       }, 10);
//       return () => clearInterval(interval);
//     }
//   }, [showCounter, userCount, totalUsers]);

//   // Carousel settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 7000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     fade: true,
//   };

//   return (
//     <div className="relative h-screen overflow-hidden">
//       {/* Full-Screen Background Carousel */}
//       <div className="absolute inset-0 z-0">
//         <Slider {...settings}>
//           <div><img src={swemberone} alt="Slide 1" className="w-full h-screen object-cover" /></div>
//           <div><img src={swemberfour} alt="Slide 2" className="w-full h-screen object-cover" /></div>
//           <div><img src={swembertwo} alt="Slide 3" className="w-full h-screen object-cover" /></div>
//           <div><img src={swemberthree} alt="Slide 4" className="w-full h-screen object-cover" /></div>
//         </Slider>
//       </div>

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex flex-col justify-center items-start px-10 bg-black bg-opacity-50 text-white z-10">
//         {/* Text Above the Carousel (Left-Aligned & Typewriter Effect) */}
//         <div className="mb-8">
//           <h1 className="text-5xl font-bold">
//             <Typewriter
//               words={['Swipe Less, Connect More – Real People, Real Vibes!']}
//               loop={1}
//               cursor={false}
//               typeSpeed={50}
//               deleteSpeed={0}
//               onTypingEnd={() => setTimeout(() => setShowCounter(true), 500)} // Delay before counter starts
//             />
//           </h1>
//           <h1 className="text-5xl mt-4 font-bold bg-gradient-to-r from-blue-800 to-pink-800 bg-clip-text text-transparent inline-block">
//             <Typewriter
//               words={['with Swember']}
//               loop={1}
//               cursor={false}
//               typeSpeed={50}
//               deleteSpeed={0}
//             />
//           </h1>
//         </div>

//         {/* User Counter (Starts AFTER Text Animation) */}
//         {showCounter && (
//           <div className="text-left">
//             <p className="text-3xl font-semibold">
//               Join our community of <span className="text-orange-500">{userCount}</span> users!
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import swemberone from '../assets/swemberone.png';
import swembertwo from '../assets/swembertwo.png';
import swemberthree from '../assets/swemberthree.png';
import swemberfour from '../assets/swemberfour.png';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Full-Screen Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          <div><img src={swemberone} alt="Slide 1" className="w-full h-screen object-cover" /></div>
          <div><img src={swemberfour} alt="Slide 2" className="w-full h-screen object-cover" /></div>
          <div><img src={swembertwo} alt="Slide 3" className="w-full h-screen object-cover" /></div>
          <div><img src={swemberthree} alt="Slide 4" className="w-full h-screen object-cover" /></div>
        </Slider>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 bg-black bg-opacity-50 text-white z-10">
        {/* Text Above the Carousel (Left-Aligned & Typewriter Effect) */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-pink-400 bg-clip-text text-transparent inline-block">
            <Typewriter
              words={['Swipe Less, Connect More – Real People, Real Vibes!']}
              loop={0}
              cursor={false}
              typeSpeed={50}
              deleteSpeed={0}
            />
          </h1>
          <h1 className="text-5xl mt-4 font-bold bg-gradient-to-r from-blue-300 to-pink-400 bg-clip-text text-transparent inline-block">
            <Typewriter
              words={['with Swember']}
              loop={0}
              cursor={false}
              typeSpeed={50}
              deleteSpeed={0}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
