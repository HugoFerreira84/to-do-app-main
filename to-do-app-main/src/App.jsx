import { Button, Checkbox, Grid, TextField } from "@mui/material"
import "./style.css";
import { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Task } from "@mui/icons-material";




function App() {
  const [textTarefa, setTextTarefa] = useState("");
  const [listTarefa, setListTarefa] = useState([]);

  function handleClick() {
    if (!textTarefa) {
      alert('Preencha os campo')
    } else {
      setListTarefa((old) => [...old, { id: Date.now(), title: textTarefa, indFinishi: false }]);
      setTextTarefa("");

    }
  }

  function handleFinishedTask(idTask) {
    setListTarefa(listTarefa.map((task) => task.id === idTask ? { ...task, indFinishi: !task.indFinishi } : task))

  }

  function handleDelete() {
    setListTarefa([])
  }

  function handleDeleteTask(idTask) {
    setListTarefa(listTarefa.filter(el => el.id !== idTask))
  }



  return (
    <>

    
      <form className="form-container">
        <TextField
          value={textTarefa}
          id="standard-basic"
          label="Tarefa"
          variant="standard"
          placeholder="Digite a tarefa"
          onChange={({ target }) => setTextTarefa(target.value)}
        />
        <Button variant="contained" onClick={handleClick}>
          Add
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Deletar
        </Button>

      </form>

      <div className="container-task">
        <div className="box-task">
          {
            listTarefa.map((tarefa) => (
              <div key={tarefa.id}>

                <div className="task-single">

                  <div className="task">
                    
                    <Checkbox onClick={() => handleFinishedTask(tarefa.id)} />

                    <span style={{ color: tarefa.indFinishi ? 'red' : ''}}>
                      {tarefa.title}
                    </span>
                  </div>
                  <HighlightOffIcon onClick={() => handleDeleteTask(tarefa.id)} />

                </div>

                <div className="divider" />

              </div>
            ))
          }

        </div>
      </div>

    </>
  )
}

export default App
