let sort = Math.floor(Math.random()*100)+1;
let tentativas = 5;
let saida = document.getElementById("output");
document.getElementById("chances").innerHTML = "Tentativas: " + tentativas;

function clique(){
    let valor = document.getElementById("input").value;

    if(valor > 0 && valor <=100){
        if (tentativas > 0){
            if(valor == sort){
            saida.innerHTML = "Acertou!"; 
          } if (valor < sort){
            saida.innerHTML = "O número sorteado é maior";
          } if (valor > sort){
            saida.innerHTML = "O número sorteado é menor";
          }
        }
    } else {
        saida.innerHTML = "O valor digitado está fora do intervalo";
    }
    tentativas--;
    document.getElementById("chances").innerHTML = "Tentativas: " + tentativas;
    if(tentativas == 0){
      document.getElementById("btn").disabled = true;
      saida.innerHTML = "Acabaram as tentativas, o número sorteado era: " + sort;
    }
}

function novo(){
  sort = Math.floor(Math.random()*100)+1;
  tentativas = 5;
  document.getElementById("chances").innerHTML = "Tentativas: " + tentativas;
  document.getElementById("btn").disabled = false;
  saida.innerHTML = "";
}