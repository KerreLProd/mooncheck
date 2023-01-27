function sendReport() {
    const input = document.getElementById('text');
    if (!input.value || input.value.lenght === 0) {
        return alert('Ошибка, введите корректный текст!');
    }
    // fetch('http://localhost:3000/contact/send-report', {
    // method: 'POST',
    // headers: {
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({ 
    // text: text
    // })
    // });
    input.value = ''
    return alert(`Ваше сообщение отправлено!`);
}