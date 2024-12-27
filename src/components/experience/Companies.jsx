import React from "react";
import UnccImg from "../../assets/uncc.png";
import NcrImg from "../../assets/ncr.png";
import VirtusaImg from "../../assets/virtusa.png";
import AmazonImg from "../../assets/amazon.png";

const Companies = () => {
  return (
    <>
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
            ● Developed a social media platform with React.js, Material UI and
            Node.js, allowing users to add, delete, and comment on photos, and
            optimized the MongoDB database schema for data storage and
            retrieval.
            <br />
            ● Fetched model data from a web server using XMLHttpRequest and
            parsed JSON responses for dynamic content rendering.
            <br />
            ● Created automation to clone GitHub repos, slashing TA assessment
            time from half a day to 5 minutes.
            <br />
            ● Demonstrated strong knowledge and experience in Agile/Scrum
            methodologies, effectively applying these practices and mentoring
            students in creating and managing Issues in JIRA board.
            <br />● Mentored 80 students in Software Engineering, delivering a
            comprehensive curriculum and ensuring holistic evaluation for final
            grades.
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
            ● Spearheaded the development of the "Builder" product, an
            innovative Automated Teller Machine (ATM) solution for the banking
            sector. This solution facilitates flow creation and interface screen
            direction, leveraging Angular for the front-end UI and Spring MVC
            Technologies for robust back-end functionality.
            <br />
            ● Enhanced ATM solution UI with Angular migration, yielding a 10%
            performance boost. Streamlined load times and interactions of
            screens with responsive design.
            <br />
            ● Implemented microservices with morphs, reducing efforts for
            creating ATM screens by 50%, and presented processes to communicate
            with stakeholders effectively.
            <br />
            ● Spearheaded user story-centric RESTful API endpoints with Spring
            MVC controllers, seamlessly integrating Postgres SQL connections via
            Maven dependencies from JFrog.
            <br />
            ● Utilized the Hibernate framework to develop an efficient data
            access layer enhancing application performance and customer
            experience.
            <br />
            ● Developed shell scripts, Configured Jenkins triggers, and CI/CD
            pipelines with Git and Docker, reducing errors by 21%
            organization-wide, and documented processes for consistency and
            future reference.
            <br />
            ● Executed the software deployment process using Agile methodology,
            ensuring effective launches.
            <br />
            ● Participated in design and code reviews, ensuring best practices
            and enhancing code quality.
            <br />
            ● Efficiently resolved software bugs ahead of schedule,
            significantly enhancing product stability and improving user
            satisfaction.
            <br />● Tailored Mockito automated testing leveraging Protractor,
            facilitating effective coordination with cross-functional teams.
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
