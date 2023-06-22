"use strict";

const construir_tabela = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(json=>{
        content.innerHTML = ''
        json.forEach(element => {
            let endereco = ''

            Object.keys(element.address).forEach(e=>{
                if(e != 'geo') endereco += ', ' + element.address[e]
            })

            endereco = endereco.replace(', ','')
            
            let conteudo = `<tr><td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.username}</td>
            <td>${element.website}</td>
            <td>${endereco}</td></tr>`

            if(!filtro.value || conteudo.includes(filtro.value)) content.innerHTML += conteudo
        });
    })
}

construir_tabela()