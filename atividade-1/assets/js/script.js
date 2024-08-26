let botao = document.getElementById("trocar-emoji")
let texto = document.getElementById("texto-01")


let index = 0
function trocarEmoji() {
    let emojis = ["🛹", "💻", "🔥", "🇧🇷", "🌎"]
    let numeroAleatorio = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    
    
    switch (index) {
        case 0:
            texto.innerHTML = emojis[index]+ "Olá, mundo!" + emojis[index]
            index+= 1 
            break;
        case 1:
            texto.innerHTML = emojis[index]+ "Olá, mundo!" + emojis[index]
            index+= 1
            break;

        case 2:
            texto.innerHTML = emojis[index]+ "Olá, mundo!" + emojis[index]
            index+= 1
            break;

        case 3: 
            texto.innerHTML = emojis[index]+ "Olá, mundo!" + emojis[index]
            index+= 1
            break;

        case 4:
            texto.innerHTML = emojis[index]+ "Olá, mundo!" + emojis[index]
            index+= 1
            break;
    }

    if(index > 4) {
        index = 0;
    }
    
        
    

     

}