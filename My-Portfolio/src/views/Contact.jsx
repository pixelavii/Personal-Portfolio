import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { useNavigate } from 'react-router-dom';
import myImg from '../assets/avii007.jpg';

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const navigate = useNavigate();

  const key = process.env.REACT_APP_CONTACT_ACCESS_KEY;



  // Contact Us
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    

    formData.append("access_key", key);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message Sent Successfully");
      navigate("/");
    }
  };


  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0 pb-10 m-8">
          Contact
        </h2>
        <div style={{ height: "300px", width: "200px", margin: "auto" }} className="border border-dark border-2 rounded-3 mt-5">
          <img src={myImg} alt="" style={{ height: "200px" }} />
          <p style={{textAlign:'center', fontSize:'20px', margin:'5px'}}>Avinash Chaurasia</p>
          <div style={{display: 'flex', justifyContent: 'center', gap:'15px'}} >
            <a className="cursor-pointer hover:scale-125" href='https://www.instagram.com/avinashhh.ch/' target='blank'><img src='https://img.icons8.com/doodle/40/000000/instagram-new--v2.png' alt="" /></a>
            <a className="cursor-pointer hover:scale-125" href='https://www.linkedin.com/in/avinash-chaurasia-398269248/' target='blank'><img src='https://img.icons8.com/doodle/40/000000/linkedin--v2.png' alt="" /></a>
            <a className="cursor-pointer hover:scale-125" href='https://www.github.com/pixelavii/' target='blank'><img src='https://img.icons8.com/doodle/40/000000/github--v1.png' alt="" /></a>
          </div>
        </div>
        <div>
          <h4 style={{marginTop:'100px'}} className="text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <form onSubmit={onSubmit}>
              <div className="my-6">
                <label
                  for="name"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-black"
                      : "block mb-2 text-lg font-medium text-grey"
                  }
                >
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="email"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-black"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="message"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-black"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Message
                </label>
                <textarea
                  name="Message"
                  type="text"
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between ">
                <button type="submit" className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
            <h1 className="text-3xl text-grey font-bold">Email</h1>
            <a
            target="blank"
              href="pixelavii007@gmail.com"
              className="mb-12 mt-4 font-semibold text-blue-700 block"
            >
              pixelavii007@gmail.com
            </a>
            <h1 className="text-3xl text-grey font-bold">Address</h1>
            <a
              href="hello"
              className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block uppercase"
            >
              Noida, Uttar Pradesh
              <br />
              India
            </a>
            <h1 className="text-3xl text-grey font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center md:mt-20"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-20"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Avinash Chaurasia
      </div>
    </div>
  );
};

export default Contact;
