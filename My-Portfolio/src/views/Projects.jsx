import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import riddle from '../assets/Riddle.png';
import rentassure from '../assets/RentAssure.png';
import inrainconstructionCom from '../assets/inrainconstruction.com.png';
import inrainconstructionIn from '../assets/inrainconstruction.in.png';

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Build
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <Card
            img={riddle}
            heading="Riddle Web App"
            details="The Riddle Web Application helps user to rent bike according
            to there accomodation. Built with React.js, Node.js and Express.js.
             It boasts real-time updates on bike 
            availability, seamless reservations, and a user-driven rating 
            system. This platform empowers users to effortlessly rent bikes 
            tailored to their location, duration, and preferences, enhancing
            their overall experience with user-friendly design to smooth accessbility
            across devices."
            url="https://riddle-283e1.web.app/"
          />
          <Card
            img={rentassure}
            heading="RentAssure Web App"
            details="Rentassure is a cutting-edge web application designed to streamline the rental property market,
            featuring 20+ dummy data entries. Built with Node.js, Firebase, and React.js. In the backend,
            meticulously crafted REST APIs using Node.js and Firebase ensure optimal functionality and scalability.
             On the frontend, React.js interfaces offer an
            intuitive user experience, with user-friendly design and smooth accessibility across devices. Advanced search
            features simplify property discovery, prioritizing efficiency."
            url="https://rentassure-app.web.app/"
          />
          <Card
            img={inrainconstructionCom}
            heading="My Industrial Project"
            details="InRain Construction Pvt. Ltd., a company specializing in 
            sustainable rainwater harvesting solutions. Their services include designing, installing, and maintaining rainwater
             harvesting systems for residential, commercial, and industrial properties. As a Web Developer at InRain Pvt. Ltd.,
              my primary role involves creating and maintaining websites while ensuring their functionality and performance. 
              My focus on enhancing the user experience by optimizing and improving website functionalities. Additionally, I
              leverage Nodemailer to implement email-sending functionalities for confirmation emails to users."
            url="https://www.inrainconstruction.com/"
          />
          <Card
            img={inrainconstructionIn}
            heading="My Industrial Project"
            details="InRain Construction Pvt. Ltd., this is the company's second website. As a Web Developer,
              my primary role is to creating and maintaining company's website all by myself. My focus on enhancing the user
              experience by optimizing and improving website functionalities. I apply Search Engine Optimization (SEO) best 
              practices to improve the ranking of the website on Google and I did rank good their website on Google on various competative
              keyword."
            url="https://www.inrainconstruction.in/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
