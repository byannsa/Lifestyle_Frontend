document.getElementById('search-input').addEventListener('input', function () {
    // Ambil nilai input pencarian
    const query = this.value.toLowerCase();

    // Ambil semua elemen produk
    const products = document.querySelectorAll('.produk-box');

    let found = false;

    products.forEach(product => {
        // Ambil nama produk dari setiap produk
        const productName = product.querySelector('h4').textContent.toLowerCase();

        // Cek apakah nama produk sesuai dengan query
        if (productName.includes(query)) {
            product.style.display = "block"; // Tampilkan produk jika cocok
            found = true;
        } else {
            product.style.display = "none"; // Sembunyikan produk jika tidak cocok
        }
    });

    // Jika tidak ada produk yang ditemukan
    if (!found && query) {
        console.log('Produk tidak ditemukan.');
    }
});