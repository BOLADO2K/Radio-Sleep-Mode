// script.js
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById("datetime");
    
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        
    };
    
    const formattedDateTime = now.toLocaleDateString("pt-BR", options);
    datetimeElement.textContent = formattedDateTime;
}

// Atualiza a data e hora a cada segundo
setInterval(updateDateTime, 1000);

// Atualiza a data e hora imediatamente ao carregar a página
updateDateTime();
