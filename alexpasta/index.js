const titulo = document.querySelector('.titulo')
const imagemPerfil = document.querySelector('.imagem-perfil')
const loginPerfil = document.querySelector('.login-perfil')
const segPerfil = document.querySelector('.seg-perfil')
const reposPerfil = document.querySelector('.repos-perfil')
const bioPerfil = document.querySelector('.bio-perfil')
const localidadePerfil = document.querySelector('.localidade-perfil')

const getInfos = async () =>{
    const response = await fetch('https://api.github.com/users/Lety7salm')
    const data = await response.json()
    titulo.innerHTML = data.name
    localidadePerfil.innerHTML = data.locate
    reposPerfil.innerHTML = data.public_repos
    imagemPerfil.setAttribute('src', data.avatar_url)
    bioPerfil.innerHTML = data.bio
    segPerfil.innerHTML = "Seguindo " + data.following + " Seguidores " + data.followers
    if(!data.name){
        titulo.innerHTML = 'lety almeida'
    }else{
        titulo.innerHTML = data.name
    }

    if(!data.locate){
        localidadePerfil.innerHTML = 'brasil'
    }else{
        localidadePerfil.innerHTML = data.locate
    }

    if(!data.public_repos){
        reposPerfil.innerHTML = '4'
    }else{
        reposPerfil.innerHTML = data.public_repos
    }

}
getInfos()