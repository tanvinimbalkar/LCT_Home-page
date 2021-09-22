import React from "react";

const About = () => {
    const [header] = React.useState({
        subHeader:"About Me",
        text:"lorem ipsum",
     
});
const [state]=React.useState([
    {id:1,title:'Name:', text:'Person name'},
    {id:1,title:'Email:', text:'example@gmail.com'},
    {id:1,title:'Phone:', text:'2308854985'},
    {id:1,title:'LinkedIn', text:'person_handle'},
])
    return (
        <div className="about">
            <div className="container">
            <div className="common">
           <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">
               {header.text}
          </p>
          <div className="commonBorder"></div>
           </div>
           <div className="row h-650 alignCenter">
            <div className="col-6">
            <div className="about__img">
                <img src="/assets/testimonials1.png" alt="man" />

            </div>   
           </div>
           <div className="col-6">
               <div className="about__info">
                   <h1>Hii</h1>
               
               <div className="about__info-p1">
                   "The services provided by the company are up to the mark"
               </div>
               <div className="about__info-p2">
                     "Services are best"
           </div>
            <div className="info__contacts">
                
            <div className="row">
                {state.map((info)=> (
            <div className="col-6">
                <strong>{info.title}</strong>
                <p>{info.text}</p>
            </div>
          ))}
            
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
    );
};

export default About;
