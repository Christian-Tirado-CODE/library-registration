//  Book Constructor
function Member(name, state, number) {
  this.name = name;
  this.state = state;
  this.number = number;
}

// UI Constructor
function UI() {}
//Add book to list
UI.prototype.addMemberToList = function(member) {
  const list = document.getElementById("registration-list");
  // Create tr element
  const row = document.createElement("tr");
  //Inser cols
  row.innerHTML = `
       <td>${member.name}</td>
       <td>${member.state}</td>
       <td>${member.number}</td>
       <td><a href="#" class="delete">X<a></td>

     `;
  list.appendChild(row);
};
UI.prototype.clearFields = function() {
  document.getElementById("name").value = "";
  document.getElementById("state").value = "";
  document.getElementById("phoneNumber").value = "";
};

// Show alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement("div");
  div.className = `${className}`;
  div.appendChild(document.createTextNode(message));
  //Get parent
  const container = document.querySelector(".container");
  const form = document.querySelector("#registration");
  //Insert alert
  container.insertBefore(div, form);
};

// Delete Member
UI.prototype.deleteMember = function(target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

// Event Listener for addMember();
document.querySelector("form").addEventListener("submit", function(e) {
  // Get form values
  const name = document.getElementById("name").value,
    state = document.getElementById("state").value,
    number = document.getElementById("phoneNumber").value;

  // Instantiate member
  const member = new Member(name, state, number);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if (name === "" || state === "" || number === "") {
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    //Add book to list
    ui.addMemberToList(member);

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event listener for deleteMember();
document
  .getElementById("registration-list")
  .addEventListener("click", function(e) {
    const ui = new UI();
    ui.deleteMember(e.target);

    // Show message

    e.preventDefault();
  });
