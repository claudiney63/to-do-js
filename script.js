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

    div1 = document.createElement('div')
    div1.setAttribute('class', 'actions')

    b1 = document.createElement('button')
    b1.innerText = 'Editar'

    b2 = document.createElement('button')
    b2.innerText = "Apagar"

    div1.appendChild(b1)
    div1.appendChild(b2)

    div.appendChild(inp)
    div.appendChild(div1)

    lista_tarefas.push(div)

    lista_tarefas.map((i) => {
        console.log(i)
    })

    console.log()
})