const search = () => {
    const searchbox = document.getElementById("search").value.toUpperCase();
    const items = document.getElementById("produk");
    const produk = document.getElementById("produk-info");
    const pname = items.getElementsByTagName("h4");

    for(var i=0; i < pname.length; i++) {
        let match = produk[i].getElementsByTagName('h4')[0];

        if(match) {
            let textvalue =match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
                produk[i].style.display = "";
            } else {
                produk[i].style.display = "none";
            }
        }
    }
}