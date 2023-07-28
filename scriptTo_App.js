// alert("hello")
const body = document.querySelector("body");
const div = document.createElement("div");
div.id = 'miDiv';
document.body.append(div);
console.log(div);   // adding new HTML Element with id as'miDiv

const miDiv = document.getElementById('miDiv');
miDiv.style.border = "red solid"
miDiv.style.height = "20rem"
miDiv.style.display = 'flex'
miDiv.style.justifyContent = 'center'

const text = document.createElement("span");
text.textContent ="Type new to-do";
miDiv.append(text)
console.log(text);
text.style.alignItems = 'center'

const inputHTML = document.createElement("input");
inputHTML.id = "valueInput"
inputHTML.type="text";
inputHTML.placeholder= "Add a task...";
console.log(inputHTML);
const formuLario = document.createElement('form')
miDiv.append(formuLario);
formuLario.appendChild(inputHTML);
console.log(formuLario);
// m.append("input")


const butonSubmit1 = document.createElement('button')
butonSubmit1.setAttribute('type','button')  // crea un elemento de tipo botón
butonSubmit1.id = 'botonAdd'
butonSubmit1.textContent = 'ADD'
miDiv.append(butonSubmit1)
butonSubmit1.style.height = '20px'
butonSubmit1.style.width = '50px'
// ----Botones-------------------------------------------------------------------
// crea un elemento de tipo botón
const butonSubmit2 = document.createElement('button')
butonSubmit2.setAttribute('type','button')
butonSubmit2.id = 'botonDelete'  // crea un elemento de tipo botón
butonSubmit2.textContent = 'Delete'
miDiv.append(butonSubmit2)
butonSubmit2.style.height = '20px' // crea un elemento de tipo botón

// formulario.addEventListener('submit', function (event){})


butonSubmit1.addEventListener('click',()=>{
    const inputValue = document.getElementById('valueInput').value
    const textSpanvalue = document.createElement('span')
    textSpanvalue.textContent = inputValue
    miDiv.append(textSpanvalue)
    console.log(textSpanvalue);
    listaDesordenada.innerHTML=`<li>${inputValue}`
    elementLi2.textContent = `<li>${inputValue}`
    

})

const addTextSpan = document.createElement('span')
// addTextSpan.textContent= 'hello world'
const listaDesordenada = document.createElement('ul')
const elementLi = document.createElement('li')
const elementLi2 = document.createElement('li')
elementLi.classList.add("itemLi")   // agrega una clase a la etiqueta
miDiv.appendChild(listaDesordenada)
elementLi.textContent='Elemento Creado por JS'
console.log(addTextSpan);
miDiv.appendChild(addTextSpan);






















