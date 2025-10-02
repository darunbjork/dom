  const input = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const listEl = document.getElementById("taskList");
  const container = document.getElementById("container")
  const colorSwitcher = document.getElementById("btnSwitch");

  colorSwitcher.addEventListener("click" , () => {
    
  isDark = !isDark
   container.style.backgroundColor = isDark ? "black" : "#fff"
   colorSwitcher.style.backgroundColor = isDark ? "#fff" : "#333" 
   colorSwitcher.style.color = isDark ? "#333"  : "#fff" 
   colorSwitcher.textContent = isDark ? "Switch to light ☀️" : "Switch to dark 🌒"
})

  let isDark = false;

  let listItems = [];

  addBtn.addEventListener("click" , () => {
    const text = input.value.trim();
    if(text === "" ) return;

    let newList = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toLocaleDateString()
    }

    listItems.push(newList);

    const li = document.createElement("li");
    li.id = `task-${newList.id}`; // Unique ID for styling

    li.innerText = `${newList.text} ${newList.createdAt}`
    
    li.addEventListener("click" , () => {
      li.classList.toggle("done")
      newList.completed = !newList.completed;
    })

    const deletBtn = document.createElement("button")
    deletBtn.innerText = "Delete";
    deletBtn.style.marginLeft = "20px";
    deletBtn.style.padding = "8px"
    deletBtn.style.backgroundColor = "black";
    deletBtn.style.border = " 1px solid  #ea0404"
    deletBtn.style.color = "#fff"
    deletBtn.style.fontSize = "16px"
    

    deletBtn.addEventListener("click" , (e) => {
      e.stopPropagation()

   
      listItems = listItems.filter(item => item.id !== newList.id)
      li.remove();
    });


     li.appendChild(deletBtn);
    listEl.appendChild(li);
    input.value = "";

  })