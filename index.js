// Função para alternar a visibilidade do chatbot
function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    if (chatbotWindow.style.display === 'flex') {
        chatbotWindow.style.display = 'none';
    } else {
        chatbotWindow.style.display = 'flex';
    }
}
