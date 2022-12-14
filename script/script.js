let imglamp = document.createElement("img")
imglamp.src="./imagens/desligado.png"
document.body.appendChild(imglamp)
imglamp.style.cssText="width: 200px; transform: rotate(180deg); margin-top: 9vh;";


let imginter = document.createElement("img")
imginter.src="./imagens/off.png"
document.body.appendChild(imginter)
imginter.style.cssText="width: 100px; margin-left: 50vh; cursor:pointer; pointer-events:auto;";

document.body.style.cssText='text-align: center; background-color: black; margin: 0 auto; top: 0; bottom: 0; left: 0; right: 0; margin: auto;'

imginter.onclick=interruptor;
function interruptor() {
    if (imginter.src.match("on")) {
      imginter.src = "./imagens/off.png";
      imglamp.src = "./imagens/desligado.png";
      document.body.style.backgroundColor= "black";

    }else{
      imginter.src = "./imagens/on.png";
      imglamp.src = "./imagens/ligado.png";
      document.body.style.backgroundColor= "white";

    }
}
