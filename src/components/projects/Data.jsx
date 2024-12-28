import Image1 from "../../assets/festManagement.png";
import Image2 from "../../assets/covidDashboard.png";
import Image3 from "../../assets/sentimentalAnalysis.png";
import Image4 from "../../assets/schoolManagement.jpg";
import Image5 from "../../assets/breastCancer.png";
import Image6 from "../../assets/insuranceRatio.png";

export const Data = [
  {
    id: 1,
    image: Image1,
    title: "Fest Management",
    description:
      "This project involved creating a comprehensive event registration platform with a focus on usability and security. The platform featured an intuitive user interface built with React, enabling seamless navigation for event participants. Secure payment processing was implemented using Node.js, ensuring reliable and encrypted transactions. The solution streamlined event registration and payment workflows, enhancing the overall efficiency and user experience for organizers and attendees.",
  },
  {
    id: 2,
    image: Image2,
    title: "Covid-19 Dashboard",
    description:
      "This project leverages D3.js to create a comprehensive visualization platform for COVID-19 data in India. The dashboard features an interactive map showcasing regional case numbers and vaccine distribution, line graphs tracking temporal trends across states, and scatter plots analyzing the relationship between state GDP and vaccination rates. By offering an intuitive interface and detailed insights, the project aims to enhance understanding of the pandemic's impact and support data-driven decision-making for policymakers and public health professionals.",
  },
  {
    id: 3,
    image: Image3,
    title: "Sentimental Analysis Code Mixed Language",
    description:
      "This project addresses the growing challenge of processing code-mixed language text, commonly found on social media platforms. It involves developing a web application capable of performing context-aware sentiment analysis on code-mixed data, such as Hindi-English. By leveraging machine learning algorithms, the application processes and classifies sentiment into categories like Positive, Negative, and Neutral. The solution focuses on handling the unique complexities of code-mixed language structures, providing accurate insights into user sentiment for enhanced social media data analysis.",
  },
  {
    id: 4,
    image: Image4,
    title: "Eduware",
    description:
      "This project features a comprehensive school management system with four distinct modules—Parent, Student, Teacher, and Admin—each designed to fulfill their respective roles. The platform facilitates seamless communication, efficient task management, and real-time updates. Parents can track their child’s progress, students can access academic resources, teachers can manage assignments and grades, and administrators can oversee operations, ensuring a streamlined and efficient educational ecosystem.",
  },
  {
    id: 5,
    image: Image5,
    title: "Breast Cancer Prediction",
    description:
      "This project focuses on predicting the likelihood of breast cancer using advanced supervised learning techniques, specifically classification algorithms. By analyzing comprehensive medical datasets containing key features such as tumor dimensions and patient demographics, the model aims to deliver precise and reliable predictions. The approach emphasizes the importance of accuracy and interpretability, supporting healthcare professionals in early detection and facilitating data-driven decision-making for improved patient outcomes and treatment planning.",
  },
  {
    id: 6,
    image: Image6,
    title: "Insurance Loss Ratio Prediction",
    description:
      "This project involved building a predictive model to estimate insurance portfolio loss ratios using a dataset of 330 policy portfolios, successfully applied and validated on Kaggle. Detailed feature engineering was performed, including variables such as average driver age and commute distances, to enhance the model’s accuracy. The model provides insights into future insurance claims, aiding in understanding and planning for potential future costs. Robust data handling techniques were implemented to manage extreme data points, ensuring consistent and reliable predictions even in scenarios with significant claim values.",
  }
];
