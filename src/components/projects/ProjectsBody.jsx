import img1 from '../../images/Screenshot 2024-10-12 170934.png'
import ProjectProps from "./ProjectProps";

const ProjectsBody = () => {
  const movieSite = [
    { name: "React" },
    { name: "Tailwindcss" },
    { name: "Strapi" },
  ];
  return (
    <div className="project-b">
      <div className="proj1">
        <h2>My Projects</h2>
        <p>Take at some of the Projects I built</p>
      </div>
      <div className="proj2">
        <ProjectProps
        image = {img1}
          title={"Movie site"}
          text={`My colleague and I collaborated on developing an online learning
            platform for Electrical Engineering students at UNIZIK, where I
            served as the project manager and also personally developed the
            entire frontend. This innovative platform offers students access to
            course outlines, downloadable resources like handouts, exam past
            questions, and textbooks, along with a CGPA calculator for grade
            tracking students grade. Additionally, we maintain an informative
            blog section for updates in the field of electrical engineering.`}
        
            tool = {
                movieSite.map((tool, index)=>{
                    return <li key={index}>{tool.name}</li>
                })
            }
          icon={"bx bxl-github"}
        />
        <ProjectProps
          title={"Movie site"}
          text={`My colleague and I collaborated on developing an online learning
            platform for Electrical Engineering students at UNIZIK, where I
            served as the project manager and also personally developed the
            entire frontend. This innovative platform offers students access to
            course outlines, downloadable resources like handouts, exam past
            questions, and textbooks, along with a CGPA calculator for grade
            tracking students grade. Additionally, we maintain an informative
            blog section for updates in the field of electrical engineering.`}

            tool = {
                movieSite.map((tool, index)=>{
                    return <li key={index}>{tool.name}</li>
                })
            }

          icon={"bx bxl-github"}
        />
        <ProjectProps
          title={"Movie site"}
          text={`My colleague and I collaborated on developing an online learning
            platform for Electrical Engineering students at UNIZIK, where I
            served as the project manager and also personally developed the
            entire frontend. This innovative platform offers students access to
            course outlines, downloadable resources like handouts, exam past
            questions, and textbooks, along with a CGPA calculator for grade
            tracking students grade. Additionally, we maintain an informative
            blog section for updates in the field of electrical engineering.`}

            tool = {
                movieSite.map((tool, index)=>{
                    return <li key={index}>{tool.name}</li>
                })
            }

          icon={"bx bxl-github"}
        />
        <ProjectProps
          title={"Movie site"}
          text={`My colleague and I collaborated on developing an online learning
            platform for Electrical Engineering students at UNIZIK, where I
            served as the project manager and also personally developed the
            entire frontend. This innovative platform offers students access to
            course outlines, downloadable resources like handouts, exam past
            questions, and textbooks, along with a CGPA calculator for grade
            tracking students grade. Additionally, we maintain an informative
            blog section for updates in the field of electrical engineering.`}

            tool = {
                movieSite.map((tool, index)=>{
                    return <li key={index}>{tool.name}</li>
                })
            }

          icon={"bx bxl-github"}
        />
        <ProjectProps
          title={"Movie site"}
          text={`My colleague and I collaborated on developing an online learning
            platform for Electrical Engineering students at UNIZIK, where I
            served as the project manager and also personally developed the
            entire frontend. This innovative platform offers students access to
            course outlines, downloadable resources like handouts, exam past
            questions, and textbooks, along with a CGPA calculator for grade
            tracking students grade. Additionally, we maintain an informative
            blog section for updates in the field of electrical engineering.`}

            tool = {
                movieSite.map((tool, index)=>{
                    return <li key={index}>{tool.name}</li>
                })
            }

          icon={"bx bxl-github"}
        />
      </div>
    </div>
  );
};

export default ProjectsBody;
