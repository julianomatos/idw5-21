const h1 = document.getElementById('titulo')
h1.style.color = 'blue'
h1.style.fontSize = '50px'
//h1.innerText = 'DOM'
h1.innerHTML = 'Manipuando <hr> DOM'


const paragrafos = document.getElementsByTagName('p')
paragrafos[0].innerText = 'Texto 1'
paragrafos[1].innerText = 'Texto 2'
paragrafos[2].innerText = 'Texto 3'
//paragrafos[3].innerHTML = 'Texto 4' posição não existe
for(let i =0; i < paragrafos.length; i++){  // Iterando a lista de paragrafos
    paragrafos[i].style.color = 'green'
    paragrafos[i].style.fontWeight = 'bold'
}

const titulo2 = document.querySelector('.fundoAzul')
titulo2.innerText = 'Titulo alterado'
titulo2.style.backgroundColor= 'green'

function trocaImagem(){
    const img = document.querySelector('img')
    img.src = 'js2.jpeg'
}

function voltaImagem(){
    const img = document.querySelector('img')
    img.src = 'js1.png'
}

const link = document.querySelector('a')
link.textContent = 'Site do Google'
link.href = 'https://google.com'
link.target = '_blank'

const minhaHeader = document.querySelector('header')
minhaHeader.style.backgroundColor = 'black'
minhaHeader.style.width = '50%'
minhaHeader.style.padding = '5%'
minhaHeader.style.margin = '0 auto'
minhaHeader.style.color = 'white'

function adicionar(){
    const club = document.getElementById('club').value
    const li = document.createElement('li')
    if(club != ''){
        li.textContent = club
        const ol = document.getElementById('listaClubs')
        ol.appendChild(li)
    }else{
        alert('Informe o nome do time.')
    }
    document.getElementById('club').value = ''
    document.getElementById('club').focus()
}

function remover(){
    const clubRemove = document.getElementById('clubRemove').value
    const li = document.getElementsByTagName('li')
    let achou = false
    for (let i = 0; i < li.length; i++){
        if(clubRemove == li[i].textContent){
            li[i].remove()
            achou = true
        }
    }
    if (achou == false){
        alert('Time não encontrado.')
    }
    document.getElementById('clubRemove').value = ''
    document.getElementById('clubRemove').focus()
}

function manipulaClasse(){
    const h4 = document.querySelector('h4')
    //h4.classList.add('fundoAzul') // Adiciona Classe
    //h4.classList.remove('fundoAzul') //Remove Classe
    h4.classList.toggle('fundoAzul') //Adiciona e remove
}

const btnClasse = document.getElementById('btnClasse')
btnClasse.style.backgroundColor = 'blue'
btnClasse.addEventListener('click',manipulaClasse) //Adiciona Evento
btnClasse.removeEventListener('mouseover',manipulaClasse) //Remove Evento

