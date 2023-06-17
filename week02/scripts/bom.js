const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', () => {
    if (input.value !== "") {
        const item = document.createElement("li");
        item.textContent = input.value;
    
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";

        item.append(deleteButton);
        this.list.appendChild(item);

        deleteButton.addEventListener('click', () => {
            this.list.removeChild(item);
            input.focus();
        });

        input.focus();
        
        input.value = "";
    }
    else
    {
        input.focus();
        input.value ="Insert something";
    }
});