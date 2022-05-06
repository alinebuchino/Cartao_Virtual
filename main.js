function getGitHubProfileInfos() {
  const url = 'https://api.github.com/users/alinebuchino'
  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
  // Fetch pega as informações do Json da API do GitHub, e o Then executa ações com essas infos que foi pega
  // Response pegou essas infos e transformou em um Json chamado data
}

getGitHubProfileInfos()
