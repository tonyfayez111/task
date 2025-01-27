import Header from "./components/Header/Index";
import Language from "./components/Language/Index";
import Hero from "./components/Hero/Index";
import LearnFaster from "./components/Learn_Faster/Index";
import Newbe from "./components/Newbe/Index";
import WhoAreWe from "./components/WhoAreWe/Index";
import Courses from "./components/courses/Index";
import AboutUs from "./components/AboutUs/Index";
import Instructors from "./components/Instructors/Index";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
  
      <Hero />
      <Newbe />
      <WhoAreWe />
      <Courses /> 
      <AboutUs />
      <Instructors />
    </>
  );
}


