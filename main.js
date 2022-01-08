//Agrupando com o tipo var Objeto, (o nome "links" = nome da var)
const LinksSocialMedia = {
  github: 'Bruno-Omena',
  youtube: 'Bruno Omena',
  facebook: '100002070788879',
  instagram: 'bruno_omena_',
  twitter: 'omenabrunoo'
}

//a função abaixo irá mudar algo
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  // fetch vai pegar as info da url e armazenar na sua função
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
