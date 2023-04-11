tarefa_txt = document.getElementById('tarefa_txt')
btn_add = document.getElementById('btn_add')
tarefas = document.getElementById('tarefas')

lista_tarefas = []

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

    div1.appendChild(b1)
    div1.appendChild(b2)

    div.appendChild(inp)
    div.appendChild(div1)

    lista_tarefas.push(div)

    lista_tarefas.map((i) => {
        tarefas.appendChild(i)
    })

    b1.addEventListener('click', () => {

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