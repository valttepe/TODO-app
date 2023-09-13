interface AddTodoData {
  title: string,
  description: string,
}

interface UpdateTodoData {
  id: number,
  progressState: boolean,
}


export async function getTodoItemList() {
  try {
    const response = await fetch("http://localhost:1337/todo", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function addTodoItem(data: AddTodoData) {
  try {
    const response = await fetch("http://localhost:1337/todo/add", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.status;
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function updateTodoItem(data: UpdateTodoData) {
  try {
    const response = await fetch("http://localhost:1337/todo/update", {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.status;
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function deleteTodoItem(id: number) {
  try {
    const response = await fetch("http://localhost:1337/todo/delete", {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: id}),
    });

    const result = await response.status;
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}