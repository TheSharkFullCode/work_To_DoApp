// // alert("hello")
// const body = document.querySelector("body");
// const div = document.createElement("div");
// div.id = 'miDiv';
// document.body.append(div);
// console.log(div);   // adding new HTML Element with id as'miDiv

// const miDiv = document.getElementById('miDiv');
// miDiv.style.border = "red solid"
// miDiv.style.height = "20rem"
// miDiv.style.display = 'flex'
// miDiv.style.justifyContent = 'center'

// const text = document.createElement("span");
// text.textContent ="Type new to-do";
// miDiv.append(text)
// console.log(text);
// text.style.alignItems = 'center'

// const inputHTML = document.createElement("input");
// inputHTML.id = "valueInput"
// inputHTML.type="text";
// inputHTML.placeholder= "Add a task...";
// console.log(inputHTML);
// const formuLario = document.createElement('form')
// miDiv.append(formuLario);
// formuLario.appendChild(inputHTML);
// console.log(formuLario);
// // m.append("input")


// const butonSubmit1 = document.createElement('button')
// butonSubmit1.setAttribute('type','button')  // crea un elemento de tipo botón
// butonSubmit1.id = 'botonAdd'
// butonSubmit1.textContent = 'ADD'
// miDiv.append(butonSubmit1)
// butonSubmit1.style.height = '20px'
// butonSubmit1.style.width = '50px'
// // ----Botones-------------------------------------------------------------------
// // crea un elemento de tipo botón
// const butonSubmit2 = document.createElement('button')
// butonSubmit2.setAttribute('type','button')
// butonSubmit2.id = 'botonDelete'  // crea un elemento de tipo botón
// butonSubmit2.textContent = 'Clear'
// miDiv.append(butonSubmit2)
// butonSubmit2.style.height = '20px' // crea un elemento de tipo botón

// // formulario.addEventListener('submit', function (event){})

// function agregarElemento() {
//     const inputValue = valueInput.value;
//     const nuevoElemento = document.createElement('li');
//     nuevoElemento.textContent = inputValue;
//     listaDesordenada.appendChild(nuevoElemento);
//     textSpanvalue.textContent = `${inputValue}`
//   }

// const textSpanvalue = document.createElement('span')
// const listaDesordenada = document.createElement('ul')
// body.append(textSpanvalue)
// console.log(textSpanvalue);

// butonSubmit1.addEventListener('click',()=>{
//     agregarElemento();

// })


// const buttonBorrar = document.getElementById('botonDelete')

// function borrarValor(){
//     valueInput.value = "";
// }

// buttonBorrar.addEventListener('click', ()=>{
//     borrarValor();
// })



// const addTextSpan = document.createElement('span')
// // addTextSpan.textContent= 'hello world'
// const elementLi2 = document.createElement('li')
// // elementLi.classList.add("itemLi")
//    // agrega una clase a la etiqueta
// miDiv.appendChild(listaDesordenada)
// // elementLi.textContent='Elemento Creado por JS'
// console.log(addTextSpan);
// miDiv.appendChild(addTextSpan);

// // ---------------------------------------------
// const buttonEliminar = document.createElement('button')
// buttonEliminar.setAttribute('id','btnDelete');
// buttonEliminar.textContent = 'Delete'
// miDiv.append(buttonEliminar)
// // ---------------------------------
// buttonEliminar.style.height = '50px'

// buttonEliminar.addEventListener('click',eliminarElemento)
// function eliminarElemento(){
//     //verificar si la lista tiene elementos.
// if(listaDesordenada.children.length > 0){
//  listaDesordenada.remove(listaDesordenada.firstChild)

// }
// }
// // 

// Crear un div principal
const divViaje = document.createElement('div');
divViaje.style.display = 'flex';
divViaje.style.flexDirection = 'column';
 // Crear elementos label e input para el número de noches de hotel
const divNoches = document.createElement('div');
divNoches.style.marginBottom = '10px';
const labelNoches = document.createElement('label');
labelNoches.textContent = 'Número de noches de hotel: ';
const inputNoches = document.createElement('input');
inputNoches.type = 'number';
divNoches.appendChild(labelNoches);
divNoches.appendChild(inputNoches);
 // Crear elementos label e input para la ciudad de destino
const divCiudad = document.createElement('div');
divCiudad.style.marginBottom = '10px';
const labelCiudad = document.createElement('label');
labelCiudad.textContent = 'Ciudad de destino: ';
const inputCiudad = document.createElement('input');
inputCiudad.type = 'text';
divCiudad.appendChild(labelCiudad);
divCiudad.appendChild(inputCiudad);
 // Crear elementos label e input para los días de alquiler de coche
const divDias = document.createElement('div');
divDias.style.marginBottom = '10px';
const labelDias = document.createElement('label');
labelDias.textContent = 'Días de alquiler de coche: ';
const inputDias = document.createElement('input');
inputDias.type = 'number';
divDias.appendChild(labelDias);
divDias.appendChild(inputDias);
 // Agregar los elementos al div principal
divViaje.appendChild(divNoches);
divViaje.appendChild(divCiudad);
divViaje.appendChild(divDias);
 // Agregar comentarios explicativos al código
// ...
 // Agregar el código anterior dentro del div principal
 const costeHotel = (nNight) => {
    return nNight * 140;
  };
   console.log(costeHotel(5));
   const costeAvion = (city, nNight) => {
    let cityCoste = 0;
    switch (city) {
      case "Madrid":
      case "Barcelona":
        cityCoste = 90;
        break;
      case "Sevilla":
        cityCoste = 50;
        break;
      case "Valencia":
        cityCoste = 40;
        break;
    }
     if (nNight > 3) {
      cityCoste -= cityCoste * 0.1;
    }
     return cityCoste;
  };
   console.log(costeAvion("Valencia", 5));
   const costeCoche = (rentalDays) => {
    let carRentalCoste = rentalDays * 40;
     if (rentalDays >= 3 && rentalDays < 7) {
      carRentalCoste -= 20;
    }
     if (rentalDays >= 7) {
      carRentalCoste -= 50;
    }
     return carRentalCoste;
  };
   console.log(costeCoche(5));
   let totalCoste = 0;
   const calcularCoste = (nNight, city, rentalDays) => {
    totalCoste = costeHotel(nNight) + costeAvion(city, nNight) + costeCoche(rentalDays);
    return totalCoste;
  };

   console.log(calcularCoste(5, "Valencia", 5));

//    objeto.addEventListener("event", () => {
//     h1.innerText = `Coste: ${calcularCoste(a, b, c)} €`;
//   });
//   ---------------------------------------------------------------------
 const codigoDiv = document.createElement('div');
codigoDiv.style.whiteSpace = 'pre-wrap';

// codigoDiv.textContent = codigoViaje;
divViaje.appendChild(codigoDiv);
 // Agregar el div principal al DOM
document.body.appendChild(divViaje);













