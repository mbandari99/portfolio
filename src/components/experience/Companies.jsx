import React from "react";
import UnccImg from "../../assets/uncc.png";
import NcrImg from "../../assets/ncr.png";
import VirtusaImg from "../../assets/virtusa.png";
import AmazonImg from "../../assets/amazon.png";
import RandstadImg from "../../assets/salemAutomation.png"

const Companies = () => {
  return (
    <>

<div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> January 2025 - Present</p>
            <h3 className="experience__title">Software Developer</h3>
          </div>
          <div className="experience__image">
            <img src={RandstadImg} alt="Experience Image" />
          </div>
        </div>

        <div className="experience__box">
          <p>
          ● Designed and implemented a scalable Python application within the Ignition platform, integrating RESTful APIs to enable seamless data exchange and improving system performance.  <br/>
          ● Migrated complex Crisp logic to Python scripts within Ignition, streamlining process automation and improving execution efficiency.  <br/>
          ● Optimized database operations using Microsoft SQL Server, ensuring efficient data storage, retrieval, and management.  <br/>
          ● Created interactive screens and views to enhance user experience, improve accessibility, and streamline workflow to clients.
          </p>
        </div>
      </div>

      <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> August 2023 - May 2024</p>
            <h3 className="experience__title">Software Engineer Assistant</h3>
          </div>
          <div className="experience__image">
            <img src={UnccImg} alt="Experience Image" />
          </div>
        </div>

        <div className="experience__box">
          <p>
          ● Developed a social media platform using React.js and Node.js, enabling users to add, delete, and comment on photos, and optimized the MongoDB schema for efficient data storage and retrieval.  <br/>
          ● Automated GitHub repository cloning, reducing TA assessment time from half a day to just 5 minutes, significantly improving workflow efficiency.  <br/>
          ● Guided Agile teams by defining user stories, managing tasks on JIRA boards, and conducting regular sprint meetups, resulting in a 20% boost in team collaboration and a 15% increase in development efficiency.  <br/>
          ● Mentored and evaluated 80 students in Software Engineering, delivering a structured curriculum and providing comprehensive feedback to ensure academic excellence.  <br/>
          ● Fetched and parsed JSON data using XMLHttpRequest for seamless dynamic content rendering, enhancing the application’s user experience.  
          </p>
        </div>
      </div>

      <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> January 2020 - December 2022</p>
            <h3 className="experience__title">Software Engineer</h3>
          </div>
          <div className="experience__image">
            <img src={NcrImg} alt="Experience Image" />
          </div>
        </div>
        <div className="experience__box">
          <p>
          ● Developed the "Builder" product, an ATM solution for creating flows and interface screens using Angular for front-end UI, Spring MVC for back-end functionality, and PostgreSQL for database integration.  <br/>
          ● Migrated ATM solution UI to Angular, achieving a 10% performance boost, with improved load times and responsive design.  <br/>
          ● Engineered a microservice using RESTful APIs, reducing ATM screen creation efforts by 50% and enhancing developer productivity.  <br/>
          ● Designed and implemented an efficient data access layer using the Hibernate framework, improving application performance and scalability.  <br/>
          ● Configured CI/CD pipelines with Jenkins, Git, Docker, and JFrog, reducing deployment errors by 21% and streamlining workflows.  <br/>
          ● Integrated JFrog for artifact storage and retrieval, optimizing build and deployment processes.  <br/>
          ● Achieved 92% code coverage using Protractor and JUnit, ensuring high-quality standards through automated testing and rigorous code reviews.  <br/>
          ● Automated testing and debugging with Mockito, resolving software bugs ahead of schedule and enhancing product reliability.  
          </p>
        </div>
      </div>

      <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> May 2019 - July 2019</p>
            <h3 className="experience__title">Software Engineer Intern</h3>
          </div>
          <div className="experience__image">
            <img src={VirtusaImg} alt="Experience Image" />
          </div>
        </div>

        <div className="experience__box">
          <p>
            ● Created a coding platform using ReactJS, NodeJS, and MySQL, with
            custom IDEs and integrated compilers, engaging over 500 users and
            fostering skill development and collaboration.
            <br />
            ● Curated a dashboard to categorize 100+ coding problems, monitored
            KPIs, and enhanced user access to focused practice exercises.
            <br />
            ● Designed custom IDEs to streamline development and accommodate
            diverse language needs.
            <br />
            ● Developed comprehensive coding performance analytics
            utilizing MDB Bootstrap Charts to facilitate data-driven
            decision-making.
          </p>
        </div>
      </div>

      <div className="experience__content">
        <div className="experience__nameImg">
          <div className="experience__info">
            <p className="experience__year"> February 2019 - May 2019</p>
            <h3 className="experience__title">Software Engineer Intern</h3>
          </div>
          <div className="experience__image">
            <img src={AmazonImg} alt="Experience Image" />
          </div>
        </div>

        <div className="experience__box">
          <p>
            ● Designed a PHP school management web application with MySQL
            integration. Customized user-specific modules ensuring tailored
            interfaces and efficient operations.
            <br />
            ● Built a login authentication system utilizing session management,
            enhancing application security.
            <br />
            ● Deployed a notifications message box to promptly communicate
            important updates, enhancing user engagement and satisfaction.
            <br />● Designed a QR code-based attendance system, reducing
            lecturer workload by 70% and streamlining administrative processes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Companies;
