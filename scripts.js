const personalProjectsButton = document.querySelector('.pp-btn');

personalProjectsButton.addEventListener('click', () => {
  const personalProjectsSection = document.querySelector('#personal-projects');
  personalProjectsSection.scrollIntoView({behavior: 'smooth'});
});