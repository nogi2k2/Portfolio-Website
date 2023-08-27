AOS.init();

//  Work experience cards

// const experiencecards = document.querySelector(".experience-cards");
// const exp = [
//   {
//     title: "Software Development Intern",
//     cardImage: "assets/images/experience-page/flipkart.jpg",
//     place: "Flipkart",
//     time: "(May, 2020 - present)",
//     desp: "<li>Worked to migrate Flipkart lite’s product page to AMP pages so that they load up instantly.</li> <li>Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.</li> <li>Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.</li>",
//   },
//   {
//     title: "Student Developer",
//     cardImage: "assets/images/experience-page/gsoc.png",
//     place: "Google Summer Of Code",
//     time: "(Mar - Aug, 2019)",
//     desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
//   },
//   {
//     title: "Research Intern",
//     cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
//     place: "IIT, Bombay",
//     time: "(Dec, 19 - Jan, 20)",
//     desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
//   },
// ];

// const showCards2 = () => {
//   let output = "";
//   exp.forEach(
//     ({ title, cardImage, place, time, desp }) =>
//       (output += `        
//     <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
//       <div class="card card1">
//         <img src="${cardImage}" class="featured-image"/>
//         <article class="card-body">
//           <header>
//             <div class="title">
//               <h3>${title}</h3>
//             </div>
//             <p class="meta">
//               <span class="pre-heading">${place}</span><br>
//               <span class="author">${time}</span>
//             </p>
//             <ol>
//               ${desp}
//             </ol>
//           </header>
//         </article>
//       </div>
//     </div>
//       `)
//   );
//   experiencecards.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards2);

// // Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
//   {
//     title: "PClub Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/3.jpg",
//     description:
//       "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//   },
//   {
//     title: "Hakin-Codes",
//     cardImage: "assets/images/experience-page/4.jpg",
//     description:
//       "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//   },
// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Deep Learning Specialization",
    subtitle: "July 2023",
    image: "assets/images/experience-page/DLS.png",
    desp: "Completed 5 Deep Learning courses as part of this Specialization.",
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/KGMVR3PX4R3W",
  },
  {
    title: "NFAB",
    subtitle: "August 2023",
    image: "assets/images/experience-page/nfab.png",
    desp: "Workshop and FDP on Natural Language Processing- Foundations and Beyond: A Comprehensive Programme (N-FAB)",
    href: "https://drive.google.com/file/d/14GZlTqKQknVhPLtIFguesBcISesqv2hS/view?usp=sharing",
  },
  {
    title: "30 Days GC",
    subtitle: "October 2021",
    image: "assets/images/experience-page/30DaysGC.jpg",
    desp: "The program offered practical training in Google Cloud's Kubernetes and Cloud management, secure networking, BigQuery, MySQL, machine learning API testing, data engineering, and creation of AI models for facial, verbal, and audio recognition.",
    href: "https://drive.google.com/file/d/1b7uZ3FYoKXJIe72RfZU7wWFFxP8MUP_N/view?usp=sharing",
  },
  {
    title: "L&T Techgium",
    subtitle: "May 2023",
    image: "assets/images/experience-page/techgium.jpg",
    desp: "Engaged in developing a proof of concept for interactive image-to-text Q/A for PDF documents.",
    href: "https://drive.google.com/file/d/1Ej1Z6S0HrxM34NDK8cRRmE53fSSVfjz1/view?usp=sharing",
  },
  {
    title: "DSSC South Zone",
    subtitle: "June 2022",
    image: "assets/images/experience-page/machinehack.jpg",
    desp: "The task involved using data science techniques, machine learning, and hyperparameter tuning to predict house rental prices.",
    href: "https://machinehack.com/hackathons/data_science_student_championship_south_zone/overview",
  },
  {
    title: "IITB NBCL",
    subtitle: "January 2022",
    image: "assets/images/experience-page/IITBNCML.jpg",
    desp: "Built predictive ML models with Knowledge Studio software for forecasting customer service discontinuation.",
    href: "https://drive.google.com/file/d/1F19CNmN_gmXMQa2sM8MHN8eNx3pDN_zO/view?usp=sharing",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
