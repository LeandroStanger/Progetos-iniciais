let looping = false;
const output = document.getElementById('output');

document.getElementById('startLoop').addEventListener('click', () =>{
    if(looping) return;
    looping = true;
    output.textContent = "Loop iniciado. Pressione ESC para parar. \n";

    const loop = () => {
        if (!looping) return;
        const timestamp = new Date().toLocaleTimeString();
        output.textContent += `Looping... ${timestamp} \n`;
        output.scrollTop = output.scrollHeight;
        setTimeout(loop, 100);
    };
    loop();
})

document.addEventListener('keydown', (e) =>{
    if(e.key === "Escape"){
        looping = false;
        output.textContent += "Loop encerrado. \n";
    }
});