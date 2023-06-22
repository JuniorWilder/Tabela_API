const mostrarDados = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(json => {

        let dados = ''

        json.forEach(usuario => {
        dados += `<tr>
            <th scope="row">${usuario.id}</th>
            <td>Mark ${nome.id}</td>
            <td>mark@gmail.com</td>
            <td>mdo</td>
            <td>mark.com</td>
            <td>Av. perimetral, n 200 </td>
            </tr>`
        })
        // usar no for each sempre a estrutura do que será requisitado logo depois da iteração
    } 
)}

//chamada da função - caso seja chamada na tag d html não é necessário chamar aqui
mostrarDados()