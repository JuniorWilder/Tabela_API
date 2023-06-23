const buscarUsuarios = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await response.json();

    return usuarios;
}

const usuarioToRowHTML = (usuario) => {
    return `
    <tr>
            <td>${usuario.id}</td>
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
            <td>${usuario.username}</td>
            <td>${usuario.website}</td>
    </tr>`
}
const filtrar = (usuario) => {
    const filtro = document.getElementById('filtro')
    return usuario.name.toUpperCase().includes(filtro.value.toUpperCase())
}

const construir_tabela = async () => {

    const usuarios = await buscarUsuarios()

    const content = document.getElementById('content'); 
    content.innerHTML = ""
    
    const usuariosHTML = usuarios.filter(filtrar).map(usuarioToRowHTML)

    usuariosHTML.forEach((elementoHTML) => content.innerHTML += elementoHTML)

}
