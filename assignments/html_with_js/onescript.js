const roleButton = document.getElementById('changeRoleBtn');
const roleDisplay = document.getElementById('role-display');

roleButton.addEventListener('click', function() {
    
    let newRole = prompt("CRITICAL SYSTEM UPDATE: Enter your new designation:");
debugger;
    if (newRole !== null && newRole.trim() !== "") {
        
        roleDisplay.textContent = newRole;
        alert("Access Granted. Role updated to: " + newRole);
        
    } else {
        alert("Update Cancelled. Current credentials retained.");
    }
});
