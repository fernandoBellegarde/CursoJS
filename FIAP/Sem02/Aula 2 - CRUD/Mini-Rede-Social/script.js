// Dados de exemplo dos posts
let posts = [
    // posição 0 do array
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021, 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022, 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
         image: "https://placedog.net/150?random=3",
        date: "12/10/2023, 12:00:00"
    }
];

window.onload = () => {
    showPost();
    document.querySelector("#postForm").addEventListener("submit", addPost);

    document.querySelector('#postList').addEventListener('click', handleClick);
}

const handleClick = (infosDoEvento) => {
    const action = infosDoEvento.target.dataset.action;
    const index = infosDoEvento.target.dataset.index;

    if (action === "Editar") updatePost(index);
    else if (action === "Deletar") deletePost(index);
}

function addPost(e){
    e.preventDefault();

    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postImage").value;
    const dataPost = new Date().toLocaleString();

    const novoPost = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        data: dataPost,
    }
    
    console.log(novoPost);
    posts.unshift(novoPost);

    showPost();
};

function showPost(){
    const listPost = document.querySelector('#postList');
    listPost.innerHTML = '';

    posts.forEach((pegaItem, i) => {
        const cardPost = document.createElement("div");
        cardPost.classList.add("card");

        cardPost.innerHTML = `
        <h2>${pegaItem.text}</h2>
        <img src="${pegaItem.image}"/>
        <p><strong>Categoria: </strong>${pegaItem.category}</p>
        <p><strong>Data e hora: </strong>${pegaItem.date}</p>
        <button data-action="Editar" data-index="${i}">Editar</button>
        <button data-action="Deletar" data-index="${i}">Deletar</button>
        `
        listPost.append(cardPost);

    });
};

function updatePost(index){
    const novoTexto = prompt('Edite o conteudo do post', posts[index].text);
    posts[index].text = novoTexto;

    showPost();
};

function deletePost(index){
    const confirmar = confirm("Voce deseja realmente excluir")
    if (confirmar) posts.splice(index, 1);
    showPost();
};

