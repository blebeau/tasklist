import React from "react";
import Tags from "./tags";

const Task = ({ tasks }) => {
    const initials = (name) => {
        // let inital = '';
        const nameSplit = name.split(' ');
        return nameSplit[0][0].toUpperCase() + nameSplit[1][0].toUpperCase();
    }
    return (
        <div className='task_list_todo'>
            {tasks.length > 0 ?
                tasks.map((task) => {
                    console.log()
                    return (
                        <div className={`task ${task.Priority.replace(/\s/g, "")}`} key={task.Id}>
                            <p><strong>Task - {task.Id}</strong></p>
                            <p>{task.Summary}</p>
                            <div style={{
                                float: 'right',
                                marginRight: '10px',
                                border: 'solid',
                                borderRadius: '100%',
                                margin: '1px',
                                padding: '3px'
                            }}>{initials(task.Assignee)}</div>
                            <Tags tags={task.Tags.split(',')} />
                        </div>
                    );
                }) :
                <h3>Loading Tasks!</h3>
            }
        </div>
    )
}

export default Task;