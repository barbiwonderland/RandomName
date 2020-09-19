var contenido = document.querySelector('#contenido')
function traer(){
 fetch('https://randomuser.me/api/')
 .then(res => res.json())
 .then(data=> {
     console.log(data.results['0'])
     contenido.innerHTML=`
     <img src="${data.results['0'].picture.large}" alt="" srcset="" class="rounded-circle img-fluid">
     <p>Nombre: ${data.results['0'].name.last}</p>
     <p>Nacionalidad: ${data.results['0'].nat}</p>
     <p>Celular: ${data.results['0'].cell}</p>
     <p>Email: ${data.results['0'].email}</p>

     `
 })
}