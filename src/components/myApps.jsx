import forecast from "../img/forecast1.png";
import beat from "../img/beat.png";
import gamesPlanet from "../img/gamesPlanet_2.png";
import chill from "../img/chill.jpg";
import html from "../img/html.png";
import css from "../img/css.png";
import react from "../img/react.png";
import js from "../img/javascript.png";
import sass from "../img/sass.svg";
import redux from "../img/redux.png";


function myApps() {
    return [
      {
        name: "ForecastNow",
        cover: `${forecast}`,
        description: "This React-based weather application dynamically fetches real-time weather data and displays it in a user-friendly manner. With just a city input, you can quickly access the current weather conditions, including temperature, humidity, wind speed, and more.", 
        aditional1: "What sets this app apart is its ability to dynamically change the background picture based on the entered city.",
        gitHub: "https://github.com/ViktorZbodulja/ReactJS-Weather-app",
        live: "forecastnow-weather.netlify.app/",
        stack: [`${html}`, `${css}`, `${sass}`, `${react}`]
      },
      {
        name: "Games Planet",
        cover: `${gamesPlanet}`,
        description: "Introducing a dynamic and immersive React application dedicated to video games. This cutting-edge app harnesses the power of API integration, enabling users to explore a vast collection of games right at their fingertips. With a seamless search functionality, users can effortlessly navigate through the extensive library and discover their favorite titles.",
        aditional1:"Upon finding a game of interest, a single click triggers a comprehensive details view, providing users with in-depth information, such as gameplay, ratings, and release date. ",
        gitHub: "https://github.com/ViktorZbodulja/Games_planet",
        live: "https://games-planet.netlify.app/",
        stack: [`${html}`, `${css}`, `${sass}`, `${react}`, `${redux}`]
      },
      {
        name: "Beat Creator",
        cover: `${beat}`,
        description: "Introducing a dynamic and engaging JavaScript application designed to ignite your creativity and rhythm: a beat-making platform.",
        aditional:"This intuitive application allows you to craft personalized beats by selecting various types of beats, including kicks and snares, and adjust the tempo to suit your desired vibe.",
        aditional2: "With its user-friendly interface, you'll find it effortless to explore the diverse range of beat options available. From punchy kicks to crisp snares, the application offers a wide array of sounds to choose from, enabling you to create the perfect beat that resonates with your musical vision. One notable feature of this application is its complete responsiveness.",
        gitHub: "https://github.com/ViktorZbodulja/BeatCreator_JS",
        live: "https://beatcreatorjs.netlify.app",
        stack: [`${html}`, `${css}`, `${js}`]
      },
      {
        name: "Chill.Vibes",
        cover: `${chill}`,
        description: "Introducing a dynamic and engaging JavaScript application designed to ignite your creativity and rhythm: a beat-making platform.",
        aditional:"This intuitive application allows you to craft personalized beats by selecting various types of beats, including kicks and snares, and adjust the tempo to suit your desired vibe.",
        aditional2: "With its user-friendly interface, you'll find it effortless to explore the diverse range of beat options available. From punchy kicks to crisp snares, the application offers a wide array of sounds to choose from, enabling you to create the perfect beat that resonates with your musical vision. One notable feature of this application is its complete responsiveness.",
        gitHub: "https://github.com/ViktorZbodulja/React_music_player",
        live: "https://chill-vibes.netlify.app/",
        stack: [`${html}`, `${css}`, `${sass}`, `${react}`]
      },
    ];
}

export default myApps;