const app = document.getElementById('root');

const container = document.createElement('div')
container.setAttribute('class', 'container');

app.appendChild(container); = new XMLHttpRequest();
request.open('GET' 'https://', true);
request.onload = function (){
    
}

