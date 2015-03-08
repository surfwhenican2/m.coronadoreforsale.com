document.getElementById('submitSearch').onclick = function() {
    var minBeds = document.getElementById('minBeds').value;
    var maxPrice = document.getElementById('maxPrice').value;
    var url = "http://search.coronadoreforsale.com/idx/results/listings?idxID=b010&pt=1&";
    url += "hp="+maxPrice;
    url += "&bd="+minBeds;
    var cays = document.getElementById("checkbox-cays").checked;
    var village = document.getElementById("checkbox-village").checked;
    var shores = document.getElementById("checkbox-shores").checked;
    if (cays == true){
        url += "&a_community%5B%5D=CORONADO+CAYS"
    }
    if (village == true){
        url +=  "&a_community%5B%5D=CORONADO+VILLAGE"
    }
    if (shores== true){
        url += "&a_community%5B%5D=CORONADO+SHORES"
    }
    window.open(url,"_self");
    return false;
};