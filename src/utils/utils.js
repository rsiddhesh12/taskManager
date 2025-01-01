const taskKey = 'tasks';

export const getTasks = () =>{
    const saved = localStorage.getItem(taskKey);
    if(!saved) return [];
    return JSON.parse(saved);
}

export const setTask = (tasks) =>{
    localStorage.setItem(taskKey, JSON.stringify(tasks));
}
