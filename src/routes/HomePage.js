import React from 'react';
import portrait from '../assets/portrait.jpg';
import resume from '../assets/andrew_johnson_resume.pdf';


function HomePage() {
  return (
    <div className="page-body flex-row">
      {getPortrait()}
      <div className="max-w-screen-sm text-left ml-4  ">
        <h1 className='text-5xl font-black'>Hi! I'm Andrew Johnson</h1>
        <p className='text-xl pt-6'>
          I'm a Software Engineer with 5 years professional experience translating business requirements
          and user stories into code modules and software solutions. Comprehensive top-to-bottom experience
          with project management and the development lifecycle for web applications and back-end systems.
        </p>
        <p className='text-xl pt-6'>And while I have your attention, feel free to grab a copy of my&nbsp;
          <a href={resume} download className='font-semibold page-link'>resume</a>.
        </p>
      </div>
    </div>
  );
}

function getPortrait() {
  const captions = ["",
                    "hey, that's me!",
                    "it's just a placeholder, ok?",
                    "talk about bedhead...",
                    "c. 1915",
                    "what're you lookin' at?",
                    "i could use a shave",
                    "wow so handsome"];
  const randomIndex = Math.floor(Math.random() * captions.length);
  const caption = captions[randomIndex];

  // Add grayscale tag to old-timey image caption
  let imgClass = "h-auto max-w-full rounded-lg"
  if (caption === "c. 1915") imgClass += " grayscale";

  return (
    <figure className="max-w-xs">
      <img className={imgClass} src={portrait} alt="portrait" />
      <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{caption}</figcaption>
    </figure>
  );
}
  

export default HomePage;
