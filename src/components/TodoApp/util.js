// Возвращает массив задач
const getUserTasks = () => {
	return JSON.parse(localStorage.getItem("items"));
}

// items - array 
// Элементы, которые будут заноситься в localStorage
const saveUserTasks = (items) => {
	localStorage.setItem("items", JSON.stringify(items));
}

export { getUserTasks, saveUserTasks };