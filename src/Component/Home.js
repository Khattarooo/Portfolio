import React from "react";

const Home = () => {
  // URL of the placeholder image from Lorem Picsum
  const imageURL =
    "https://preview.bitmoji.com/bm-preview/v3/avatar/body?scale=2.5&gender=1&style=5&rotation=0&beard=-1&body=0&bottom=393&bottom_tone1=1513239&bottom_tone10=3223859&bottom_tone2=1706245&bottom_tone3=3156006&bottom_tone4=8392980&bottom_tone5=1776411&bottom_tone6=3815994&bottom_tone7=1776411&bottom_tone8=1776411&bottom_tone9=1776411&breast=0&brow=1538&clothing_type=1&ear=1424&eye=1610&eye_size=0&eye_spacing=0&face_proportion=1&footwear=363&footwear_tone1=1579032&footwear_tone10=15789288&footwear_tone2=2368548&footwear_tone3=1579032&footwear_tone4=1579032&footwear_tone5=4605252&footwear_tone6=4012605&footwear_tone7=5131595&footwear_tone8=657930&footwear_tone9=1579032&glasses=-1&hair=1328&hair_tone=2566954&hat=-1&is_tucked=0&jaw=1389&mouth=2337&nose=1436&pupil=2152&pupil_tone=5977116&skin_tone=16691590&top=509&top_tone1=16448250&top_tone10=10253397&top_tone2=16448250&top_tone3=16448250&top_tone4=16448250&top_tone5=16448250&top_tone6=10724259&top_tone7=1776411&top_tone8=1776411&top_tone9=1250067&version=0";
  return (
    <div className="min-w-full md:min-w-screen text-white my-1 mt-20 h-screen flex justify-center items-center">
      <div className="text-center ml-4 w-2/4">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mb-6">
          Explore my work, skills, and passions. Let's create together!
          <br />
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold">
          I'm Tannous, a web developer
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
          I specialize in creating web applications using modern technologies
          like React.js, Vue.js, etc...
        </p>
      </div>
      <div className="bg-transparent hover:border-4 border-sky-500  rounded-3xl ml-4">
        <img
          className="rounded-lg h-96 mr-1 object-cover min-w-0 min-w-sm md:min-w-md lg:min-w-lg xl:min-w-xl"
          src={imageURL}
          alt="Your Name"
        />
      </div>
    </div>
  );
};

export default Home;
