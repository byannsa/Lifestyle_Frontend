document.getElementById('search-input').addEventListener('input', function () {
    const query = this.value.toLowerCase();

    const products = document.querySelectorAll('.produk-box');
    const categories = document.querySelectorAll('.produk');

    let found = false;

    categories.forEach(category => {
        let categoryFound = false;
        const categoryProducts = category.querySelectorAll('.produk-box');
        
        categoryProducts.forEach(product => {
            const productName = product.querySelector('h4').textContent.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = "block";
                found = true;
                categoryFound = true;
            } else {
                product.style.display = "none";
            }
        });

        if (categoryFound) {
            category.style.display = "block"; 
        } else {
            category.style.display = "none";
        }
    });

    if (!found && query) {
        notFoundMessage.style.display = "block";
    } else {
        notFoundMessage.style.display = "none";
    }
});
