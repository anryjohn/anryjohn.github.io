import React, { useEffect, useState } from 'react';

function ProjectsPage() {
  const projects = handleProjectData();

  return (
    <div className="page-body flex justify-center">
      <h1 className="text-4xl font-bold text-center mr-4">Pet Projects<br />+<br />Collaborative Efforts</h1>
      <div className="flex mx-1 max-w-xl">
        <div className="vertical-border" />
        <ul>
          {projects.map(p => (
            <li key={p.id} className="text-left my-2 rounded-lg bg-purple-300 hover:bg-purple-600 hover:text-white">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >                
              <div className="p-2">
                <p className="text-lg font-semibold">{p.name} <span className="font-light">- {p.createdYear}</span></p>
                <p className="">{p.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function handleProjectData() {
  let projects = []
  const repos = GetGithubProjects()
  
  repos.forEach((repo) => {
    const createdDate = new Date(repo.created_at);

    projects.push({
      id: repo.id,
      name: repo.name,
      url: repo.html_url,
      createdYear: createdDate.getFullYear(),
      description: repo.description
    })
  })

  return projects
}

function GetGithubProjects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
      const fetchRepos = async () => {
        const response = await fetch(`https://api.github.com/users/anryjohn/repos`);
        const data = await response.json();
        setRepos(data);
      };
  
      fetchRepos();
    }, []);

    return repos
}

export default ProjectsPage;
