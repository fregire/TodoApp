const getItems = () => {
	return JSON.parse(localStorage.getItem("items"));
}

const setItems = (items) => {
	localStorage.setItem("items", JSON.stringify(items));
}

export { getItems, setItems };