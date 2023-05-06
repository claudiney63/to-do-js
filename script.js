tarefa_txt = document.getElementById('tarefa_txt')
btn_add = document.getElementById('btn_add')
tarefas = document.getElementById('tarefas')

tarefa_casa = document.getElementById('tarefa_casa')
tarefa_trabalho = document.getElementById('tarefa_trabalho')
tarefa_escola = document.getElementById('tarefa_escola')

btn_search = document.getElementById('btn_search')

lista_tarefas = []
lista_tarefa_casa = []
lista_tarefa_trabalho = []
lista_tarefa_escola = []

btn_add.addEventListener('click', () => {

    if(!tarefa_txt.value) {
        alert('Informe uma tarefa!')
        return
    }

    div = document.createElement('div')
    div.setAttribute('class', 'tarefa')

    inp = document.createElement('input')
    inp.value = `${tarefa_txt.value}`
    inp.setAttribute('readonly', 'readonly')
    inp.setAttribute('class', 'tarefaName')

    div1 = document.createElement('div')
    div1.setAttribute('class', 'actions')

    b1 = document.createElement('button')
    b1.setAttribute('class', 'btn_editar')
    b1.innerText = 'Editar'

    b2 = document.createElement('button')
    b2.setAttribute('class', 'btn_remover')
    b2.innerText = "Apagar"

    ul = document.createElement('ul')
    ul.setAttribute('class', 'listaCategoria')


    div1.appendChild(b1)
    div1.appendChild(b2)

    div.appendChild(inp)

    if(tarefa_casa.checked) {
        li = document.createElement('li')
        li.setAttribute('class', 'itemCategoria')
        li.innerText = 'Tarefa de Casa'
        ul.appendChild(li)

        lista_tarefa_casa.push()
        
    } 
    if(tarefa_trabalho.checked) {
        li1 = document.createElement('li')
        li1.setAttribute('class', 'itemCategoria')
        li1.innerText = 'Tarefa de Trabalho'
        ul.appendChild(li1)

    }
    if(tarefa_escola.checked) {
        li2 = document.createElement('li')
        li2.setAttribute('class', 'itemCategoria')
        li2.innerText = 'Tarefa de Escola'
        ul.appendChild(li2)
    }


    div.appendChild(ul)
    div.appendChild(div1)

    if(tarefa_casa.checked) {
        lista_tarefa_casa.push(div)
    }
    if(tarefa_trabalho.checked) {
        lista_tarefa_trabalho.push(div)
    }
    if(tarefa_escola.checked) {
        lista_tarefa_escola.push(div)
    }

    lista_tarefas.push(div)

    lista_tarefas.map((i) => {
        tarefas.appendChild(i)
    })

    tarefa_txt.value = ''

    b1.addEventListener('click', (e) => {
        node = e.target.parentNode.parentNode

       if(e.target.innerText == 'Editar') {
            node.children[0].removeAttribute('readonly')
            e.target.setAttribute('class', 'nameSave')
            e.target.innerText = 'Salvar'
        } else {
            node.children[0].setAttribute('readonly', true)
            b1.classList.remove('nameSave')
            e.target.setAttribute('class', 'btn_editar')
            e.target.innerText = 'Editar'
        }

        console.log(node.children[0])
    })

    b2.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove()
        lista_tarefas = lista_tarefas.filter(
            list => {
                return list != e.target.parentNode.parentNode
            }
        )

        lista_tarefas.map((i) => {
            tarefas.appendChild(i)
        })
    })
})

btn_search.addEventListener('click', () => {

    console.log(tarefas.children[0])

    for(child of tarefas.children) {
        if(child != tarefas.children[0]) {
            child.remove()
        }
    }

    if(tarefa_casa.checked){
        lista_tarefa_casa.map((i) => {
            tarefas.appendChild(i)
        })
    }
    if(tarefa_escola.checked){
        lista_tarefa_escola.map((i) => {
            tarefas.appendChild(i)
        })
    }
    if(tarefa_trabalho.checked){
        lista_tarefa_trabalho.map((i) => {
            tarefas.appendChild(i)
        })
    }
})