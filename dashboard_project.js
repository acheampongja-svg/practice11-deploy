const API_URL = "http://localhost:3000";

async function loadItems() {
  const status = document.getElementById("status");
  const list = document.getElementById("itemList");

  status.textContent = "Loading items...";

  try {
    const res = await fetch(`${API_URL}/api/items`);
    const data = await res.json();

    list.innerHTML = "";

    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.name;
      list.appendChild(li);
    });

    status.textContent = "Items loaded.";
  } catch (error) {
    status.textContent = "Error loading items.";
  }
}

async function addItem() {
  const input = document.getElementById("itemInput");

  if (!input.value) {
    alert("Please enter an item name.");
    return;
  }

  await fetch(`${API_URL}/api/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: input.value })
  });

  input.value = "";
  loadItems();
}

loadItems();