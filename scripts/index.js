const buttons = [
    {short: 'tg', text: 'TELEGRAM', url: 'https://t.me/sanyabond008'},
    {short: 'tg_group', text: 'ÃÐÓÏÏÀ Â TG', url: 'https://t.me/+JSv387j2viZkMjZi'},
    {short: 'bh', text: 'ÏÐÎÔÈËÜ ÍÀ BLASTHACK', url: 'https://www.blast.hk/members/432349/'},
    {short: 'mlog', text: '×ÅÊÅÐ ÎØÈÁÎÊ MOONLOADER', url: 'https://kerrelprod.github.io/mooncheck/mooncheck.html'},
]

function openUrl(url) {
    window.location.replace(url)
    //document.location.href = url;
}

function drawButtons() {
    const div = document.getElementById('buttons')
    for (const button of buttons) {
        let newButton = document.createElement('button')
        newButton.setAttribute('class', 'urlbtn')
        newButton.addEventListener('click', () => openUrl(button.url))
        newButton.textContent = button.text
        div.append(newButton)
        //alert(button.text)
    }
}

function createParticle(count = 50) {
    const div = document.getElementById('particlesdiv')
    for (let i = 0; i < count; i++) {
        let newp = document.createElement('span')
        newp.setAttribute('class', 'particle')
        newp.setAttribute('style', 'z-index: 0')
        div.append(newp)
        console.log('spawned')
    }
}

const domain = 'https://kerrelprod.github.io/'

const main = () => {
    //alert('load')
    drawButtons();
    createParticle();
    console.log('document.location', document.location.href)
    for (const item of buttons) {
        if (document.location.href.endsWith(item.short)) {
            openUrl(item.url)
        }
    }
    
}

function openSchedule() {
    window.open("schedule.html")
}