import img1 from "../../images/Screenshot 2024-10-12 170934.png";
import img2 from '../../images/Screenshot 2024-10-13 124553.png'
import img3 from '../../images/Screenshot 2024-10-13 131708.png'
import img4 from '../../images/Screenshot 2024-10-13 145305.png'
import ProjectProps from "./ProjectProps";

const ProjectsBody = () => {
  const movieSite = [
    { name: "React" },
    { name: "Tailwindcss" },
    { name: "Strapi" },
  ];
  const searchEngine = [
    {name: 'React'},
    {name: 'CSS'}
  ]
  const crudO = [
    {name: 'Node.js'},
    {name: 'Express.js'},
    {name: 'Prisma ORM'}
  ]
  const portF = [
    {name: 'React'},
    {name: 'CSS'}
  ]
  return (
    <div className="project-b">
      <div className="proj1">
        <h2>My Projects</h2>
        <p>Take at some of the Projects I built</p>
      </div>
      <div className="proj2">
        <ProjectProps
          image={img1}
          title={"Movie site"}
          text={`This project is a dynamic movie website built using React for the frontend. It allows users to browse my top 5 movies in different genres, displaying detailed information like the title, genre. The website features a clean and responsive design, providing a seamless user experience across devices. React's component-based architecture ensures modular and reusable code, making the application scalable and easy to maintain. The project images and text are from a strapi backend.`}
          tool={movieSite.map((tool, index) => {
            return <li key={index}>{tool.name}</li>;
          })}
          icon={"bx bxl-github"}
        />
        <ProjectProps
        image={img2}
          title={"Search Engine"}
          text={`A Search Engine that looks and finds a certain data by character, number, text from a backend using an api and displaying it to the front end.
                Used React to fetch data,search and filter out the needed data. React js functions fetch api,
                filter fuction, and case sensitive to ignore whether capital or small characters during the search. I setup a Postgressql backend with the api to connect to it.`}
          tool={searchEngine.map((tool, index) => {
            return <li key={index}>{tool.name}</li>;
          })}
          icon={"bx bxl-github"}
        />
        <ProjectProps
        image={img3}
          title={"Dynamic CRUD API"}
          text={`This project is a backend built using PostgreSQL as the database, Node.js as the runtime environment, and Express for handling HTTP requests and routing. It utilizes Prisma, an ORM (Object Relational Mapping) tool, to perform CRUD (Create, Read, Update, Delete) operations on the database.`}
          tool={crudO.map((tool, index) => {
            return <li key={index}>{tool.name}</li>;
          })}
          icon={"bx bxl-github"}
        />
        <ProjectProps
        image={img4}
          title={"Personal Portfolio Website"}
          text={`My personal portfolio website serves as a showcase of my skills, projects, and professional journey.I built it with  web technologies to create a dynamic and responsive platform where visitors can learn about me, explore my work, and get in touch easily.`}
          tool={portF.map((tool, index) => {
            return <li key={index}>{tool.name}</li>;
          })}
          icon={"bx bxl-github"}
        />
      </div>
    </div>
  );
};

export default ProjectsBody;
