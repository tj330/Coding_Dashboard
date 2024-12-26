import { useEffect, useState } from "react"
import { Button, Form, InputGroup, ListGroup } from "react-bootstrap"

export default function Todo() {
    const [text, setText] = useState('')
    const [tasks, setTasks] = useState([])

    function addTask(text) {
        setTasks([...tasks, text])
        
    }

    // useEffect(() => {
    //     console.log(tasks)
    // })

    return (
        <>
            <InputGroup className="mb-5 mt-2">
                <Form.Control
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <Button onClick={() => addTask(text)}>Add Task</Button>
            </InputGroup>
            <h2>Tasks:</h2>
            {tasks.map(
                task => (
                    <ListGroup className="mb-2">
                        <ListGroup.Item as="li">{task}</ListGroup.Item>
                    </ListGroup>
                )
            )}
            
        </>
    )
}