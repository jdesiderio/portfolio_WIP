async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Une erreur s'est produite lors de la récupération des données JSON: ${error.message}`);
    throw error;
  }
}

async function createProjectCards() {
  const cardContainer = document.querySelector('.card-container');
  const jsonPath = 'projects.json';

  try {
    const data = await fetchData(jsonPath);

    data.forEach((project, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.setAttribute('id', `card-${index + 1}`);

      const image = document.createElement('img');
      image.src = project.imageUrl;
      image.className = 'small';
      image.alt = project.alt;

      const title = document.createElement('h3');
      title.textContent = project.title;

      const subtitle = document.createElement('p');
      subtitle.textContent = project.subtitle;

      const icons = document.createElement('div');
      icons.className = 'icons';

      project.icons.forEach((iconClass) => {
        const icon = document.createElement('i');
        icon.className = `fa-brands fa-xl ${iconClass}`;
        icons.appendChild(icon);
      });

      const details = document.createElement('div');
      details.className = 'details';
      details.innerHTML = `
        <p>${project.description}</p>
        <div class="details-links">
        <a href="${project.github}" target="_blank"><i class="fa-brands fa-github"></i> Voir le code</a>
        <a href="${project.site}" target="_blank">Voir le site <i class="fa-solid fa-eye"></i></a>
        </div>
      `;

      const expandLink = document.createElement('div');
      expandLink.className = 'expand-link';
      expandLink.textContent = 'En savoir plus';

      expandLink.addEventListener('click', () => {
        const isExpanded = card.classList.toggle('expanded');
        image.classList.toggle('bigger', isExpanded);
        image.classList.toggle('small', !isExpanded);
        details.classList.toggle('show', isExpanded);
        expandLink.textContent = isExpanded ? 'Réduire' : 'En savoir plus';
      });

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(subtitle);
      card.appendChild(icons);
      card.appendChild(details);
      card.appendChild(expandLink);

      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la création des cartes de projet:', error);
  }
}

createProjectCards();