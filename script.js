document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const teamName = document.getElementById("teamName").value;
    const captain = document.getElementById("captain").value;

    document.getElementById("confirmationMessage").textContent = `¡El equipo ${teamName} liderado por ${captain} ha sido registrado con éxito!`;
    this.reset();
});
