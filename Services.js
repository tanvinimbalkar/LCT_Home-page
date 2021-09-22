import React from "react";
import {FaGithub,FaCamera,FaCandyCane } from "react-icons/fa";
const Services = () => {
    const[header] = React.useState({
      mainHeader:"SERVICES", 
      subHeading: "My Services",
      text:"Lorem ipsum.",
    });
 
  const [state] = React.useState([
    {   
       id:1, 
        icon:"FaGithub",
        heading:"Web Development",
        text:"Web Development services provided",
      
    },
    {   
      id:2, 
      icon:"FaCamera",
      heading:"photography",
      text:"Web Development services provided", 
    
  },
  {    
    id:3, 
    icon:"FaCandyCane",
    heading:"design",
    text:"Web Development services provided",
  
}
  ]);
    return (
        <div className="services">
         <div className="container">
         <div className="services__header">
         <div className="common">
           <h3 className="heading">{header.mainHeader}</h3>
           <h1 className="mainHeader">{header.subheading}</h1>
          <p className="mainContent">
               {header.text}
          </p>
          <div className="commonBorder"></div>
           </div>
          <div className="row bgMain">
            {state.map(info => (
              <div className="col-4 bgMain">
              <div className="services__box">
                <FaGithub className="commonIcons"/>
                <div className="services__box-header">
                 {info.heading}
                   </div>
                <div className="services__box-p">
                  {info.text}
                  </div>
              </div>
              </div>

            ))}
          
        
          </div>
        </div>
     </div>
    </div>

   );
};

export default Services;