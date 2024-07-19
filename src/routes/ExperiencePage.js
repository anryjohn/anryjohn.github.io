import React from 'react';
import resume from '../assets/andrew_johnson_resume.pdf';

function ExperiencePage() {
  return (
    <div className="page-body flex justify-center">
      <div className='max-w-3xl'>
        <div className="flex mb-6">
          <div className="border-r-2 border-gray-300 mr-4"></div>
          <h1 className="text-3xl font-black">
            <a href={resume} download className='page-link'>
              Download Resume
            </a>
          </h1>
        </div>
        <div className="flex mb-6">
          <div className="border-r-2 border-gray-300 mr-4"></div>
          <ul className="text-left">
            <li className='mb-2'>
              <h1 className="text-3xl font-black">Work Experience</h1>
            </li>
            <li className='mb-2'>
              {workExperienceEntry(lutherData)}
            </li>
            <li className='mb-2'>
              {workExperienceEntry(datacareData)}
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="border-r-2 border-gray-300 mr-4"></div>
          <ul className="text-left">
            <li className='mb-2'>
              <h1 className="text-3xl font-black">Education</h1>
            </li>
            <li className='mb-2'>
              <h2 className="text-2xl font-bold">Computer Science B.S.</h2>
              <h2 className="text-xl">UC Santa Cruz <span className='px-1.5'>|</span> 2014 - 2018</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Work experience data structures
const datacareData = {
  "company" : "Datacare",
  "location" : "San Jose, CA",
  "descriptions" : [
    "Engineered several client-facing, configurable modules and services that expedited key user workflows, resulting in 25% faster turnaround in document processing.",
    "Leveraged advanced SQL proficiency to craft dynamic queries for comprehensive data management and presentation, empowering both internal teams and clients with actionable insights.",
    "Accelerated bug resolution, ensuring seamless operation of the platform, and exceeded client onboarding needs by delivering tailor-made features and configurations.",
  ]
};

const lutherData = {
  "company" : "Luther Systems",
  "location" : "Los Gatos, CA",
  "descriptions" : [
    "Identified and filled in platform architectural and feature gaps while engaging in a highly dynamic and collaborative work environment.",
    "Developed and deployed robust RESTful APIs to support mobile and web applications, ensuring high performance and scalability.",
    "Led and facilitated team meetings, outlining story requirements and driving project progress through implementation roundtable sessions and feature workflow whiteboarding."
  ]
};

/*
// Placeholder for new entries
const companyData = {
  "company" : "",
  "location" : "",
  "descriptions" : []
};
*/

function workExperienceEntry(companyData) {
  const points = companyData["descriptions"].map((desc) => 
    <li>{desc}</li>);
  
  return (
    <div>
      <h2 className="text-2xl font-bold">{companyData["company"]} - {companyData["location"]}</h2>
      <ul className="list-disc ml-6">
          {points}
      </ul>
    </div>
  )

}

export default ExperiencePage;
