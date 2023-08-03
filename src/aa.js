import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Container, TodoList, Input, Button, ListItem, Trash, Check, Titulo } from './styles.js'

function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')

  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
      setInputTask('') // Reset the input field after adding the task to the list
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(newList)
  }

  function deletarItem(id) {
    const newList = list.filter((item) => item.id !== id)
    setList(newList)
  }

  return (
    <Container>
      <TodoList>
        <Input onChange={inputMudou} value={inputTask} placeholder="Informe a tarefa a ser cumprida..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletarItem(item.id)} />
              </ListItem>
            ))
          ) : (
              <Titulo>Não há tarefas!</Titulo>
            )}
        </ul>
      </TodoList>
    </Container>
  )
}

export default App;
