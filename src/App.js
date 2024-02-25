import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer";
import AboutMe from "./Component/AboutMe";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";

import p1 from "./Component/Assets/vue1.png";
import p2 from "./Component/Assets/vue2.png";
import vue from "./Component/Assets/vue.png";
import react from "./Component/Assets/react.png";

import moviemapper from "./Component/Assets/logo1.png";
import moviemapper1 from "./Component/Assets/movie.jpg";
import moviemapper2 from "./Component/Assets/movie2.jpg";
import moviemapper3 from "./Component/Assets/movie3.jpg";
import moviemapper4 from "./Component/Assets/movie4.jpg";
import moviemapper5 from "./Component/Assets/movie5.jpg";
import moviemapper6 from "./Component/Assets/movie6.jpg";
import moviemapper7 from "./Component/Assets/movie7.jpg";
import moviemapper8 from "./Component/Assets/movie8.jpg";

import scanner from "./Component/Assets/scanner.jpg";
import scanner1 from "./Component/Assets/scanner1.jpg";
import scanner2 from "./Component/Assets/scanner2.jpg";
import scanner3 from "./Component/Assets/scanner3.jpg";
import scanner4 from "./Component/Assets/scanner4.jpg";
import scanner5 from "./Component/Assets/scanner5.jpg";

import menu1 from "./Component/Assets/menu1.jpg";
import menu2 from "./Component/Assets/menu2.jpg";
import menu3 from "./Component/Assets/menu3.jpg";
import menu4 from "./Component/Assets/menu4.jpg";

const projectData = [
  {
    title: "Submit Order",
    description:
      "This is a one page website, the main function of it to submit new order and fill all the requirements",
    images: [p1],
    type: "Vue.js",
    typeImage: vue,
  },
  {
    title: "Orders List",
    description:
      "This is a one page website, the main function of it is to filter and display all the orders placed before",
    images: [p2],
    type: "Vue.js",
    typeImage: vue,
  },
  {
    title: "MovieMapper",
    description:
      "Senior Project was about cinema's in Lebanon, it has admin and user panel. It was developped using Html CSS and JavaScript for the front-end part and back-end part was writen in php language and database i used the phpmyadmin",
    images: [
      moviemapper1,
      moviemapper2,
      moviemapper3,
      moviemapper4,
      moviemapper6,
      moviemapper5,
      moviemapper7,
      moviemapper8,
    ],
    type: "Html,CSS,Javascript and php",
    typeImage: moviemapper,
  },
  {
    title: "Cross-Market",
    description:
      "BarcodeScanner reader attached to a supermarkt database,the main idea is to scan the item to get its price",
    images: [scanner1, scanner2, scanner3, scanner4, scanner5],
    type: "React-native",
    typeImage: scanner,
  },
  {
    title: "Digital menu",
    description:
      "Restaurant Digital-Menu,it show the items in the database based on their category and it convert the price from LBP to USD.",
    images: [menu1, menu2, menu3, menu4],
    type: "React",
    typeImage: react,
  },
];

function App() {
  return (
    <Router>
      <div className="h-screen bg-black flex justify-end flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route
            path="/projects"
            element={<Projects projects={projectData} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
