const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const pname = product.querySelector('h2').textContent.toUpperCase();
        
        if (pname.indexOf(searchbox) > -1) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
};
