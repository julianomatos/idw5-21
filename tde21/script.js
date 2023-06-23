function inserir(){
    const tarefa = document.getElementById('tarefa').value
    const li = document.createElement('li')
    li.textContent = tarefa

    const btn = document.createElement('button')
    btn.textContent = 'Remover'
    btn.type = 'button'
    btn.style.marginLeft = '20px'
    btn.addEventListener('click', function(){li.remove()})

    const btnConcluir = document.createElement('button')
    btnConcluir.textContent = 'Concluir tarefa'
    btnConcluir.type = 'button'
    btnConcluir.style.marginLeft = '20px'
    //btnConcluir.addEventListener('click', function(){li.remove()})


    li.appendChild(btn)
    li.appendChild(btnConcluir)

    const ol = document.getElementById('pendentes')
    ol.appendChild(li)
}
