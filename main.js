const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);  //Math.random gera um numero entre 0 e 1, nesse caso estamos multiplicando esse número gerado pelo tamanho do array, depois o Math.floor vai pegar o numero inteiro desse numero , assim a variavel random recebe o valor final inteiro.
  return array[random]; //retornando o array de acordo com a posicao gerada
}

const storyText = `Estava 94 °F lá fora, então :insertx: e seus amigos foram dar uma volta. Quando chegaram  :inserty:, eles olharam horrorizados por alguns momentos, então :insertz:. Bob viu tudo, mas não ficou surpreso — :insertx: pesa 300 libras, e era um dia quente.`;

const insertX = ["o duende Willy", "a Fada do Dente", "o Papai Noel","o Peter Pan"];

const insertY = ["no fundo do quintal", "a Disneylândia", "a Casa Branca","debaixo da ponte"];

const insertZ = ["queimado espontaneamente", "derreteram em uma poça na calçada", "se transformaram em uma lesma e rastejaram para longe"];

randomize.addEventListener("click", result);


function result() {
  let newStory = storyText; //serve para que possamos criar um nova história sempre que o botao for pressionado;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  if (customName.value !== "") {
    let name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("br").checked) {
    const weight = Math.round(300 * 0.45) + " Kg";
    const temperature = Math.round(((94 - 32) * 5) / 9) + " °C";
    newStory = newStory.replace("300 libras", weight);
    newStory = newStory.replace("94 °F", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
 
}