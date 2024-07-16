document.addEventListener('DOMContentLoaded', function () {
    const repoContainer = document.getElementById('repo-container');
    const username = 'Hamza-Hacked-911';
    const GITHUB_API_URL = `https://api.github.com/users/Hamza-Hacked-911/repos`;

    fetch(GITHUB_API_URL)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const repoDiv = document.createElement('div');
                repoDiv.className = 'repo';
                repoDiv.innerHTML = `
                    <h2>${repo.name}</h2>
                    <p>${repo.description}</p>
                    <p><a href="${repo.html_url}" target="_blank">View on GitHub</a></p>
                `;
                repoContainer.appendChild(repoDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
        });
});
