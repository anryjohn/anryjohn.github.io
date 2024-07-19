import React from 'react';
import resume from '../assets/andrew_johnson_resume.pdf';
import workHistory from '../data/work-history.json'

function ExperiencePage() {
  return (
    <div className="page-body flex justify-center">
      <div className='max-w-3xl'>
        <div className="flex mb-6">
          <div className="experience-border"></div>
          <h1 className="text-3xl font-black">
            <a href={resume} download className='page-link'>
              Download Resume
            </a>
          </h1>
        </div>
        <div className="flex mb-6">
          <div className="experience-border"></div>
          <ul className="text-left">
            <li className='mb-2'>
              <h1 className="text-3xl font-black">Work Experience</h1>
            </li>
            <li className='mb-2'>
              {workExperienceEntry(workHistory["luther"])}
            </li>
            <li className='mb-2'>
              {workExperienceEntry(workHistory["datacare"])}
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="experience-border"></div>
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
