
    const projects = document.getElementById('products');
    
  
    let projectCount = 0;
    
  
    const projectTarget = 3000;
    
    
  
    const countProjects = () => {
      if (projectCount < projectTarget) {
        projectCount++;
        projects.textContent = '+' + projectCount;
        setTimeout(countProjects, 1);
      }
    }
    
    countProjects();