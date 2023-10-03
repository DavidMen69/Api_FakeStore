function apiCompra(done){
    const result = fetch('https://fakestoreapi.com/products');
        result
            .then(response=>response.json())
            .then(data =>{
                done(data)
            });
            
}


apiCompra(data => {
    const cardContainer = document.querySelector(".card-container"); // Obtén el contenedor una sola vez

    data.forEach(producto => {
        const card = document.createRange().createContextualFragment(`
            <div class="card h-100">
                <img src="${producto.image}" class="card-img-top">
                <hr>
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <hr>
                    <h5>Precio: $${producto.price}</h5>
                    <hr>
                    <button href="#" class="btn-Carrito">Añadir Al Carrito</button>
                </div>
            </div>
        `);
        cardContainer.appendChild(card); // Agrega cada tarjeta al contenedor
    });
});