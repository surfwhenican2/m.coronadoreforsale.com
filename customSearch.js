document.getElementById('submitSearch').onclick = function() {
    var minBeds = document.getElementById('minBeds').value;
    var maxPrice = document.getElementById('maxPrice').value;
    //var url2 = "https://api.idxbroker.com/mls/zipcodes/b010?zipcode=92118";
    var url2 = "https://api.idxbroker.com/mls/listmethods";
    var url = "";
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
    //window.open(url,"_self");

    $.ajax({type:"GET",
            beforeSend: function (request){
                request.setRequestHeader('accesskey','tuyJ8N1ocyIITwfizYiwR6');
            },
            url: url2,
            data: {},
            contentType :'application/x-www-form-urlencoded',
            dataType:'jsonp',
            processData:false,
            success:function(msg){
                console.log(msg);
            },
            error:function(error){
                console.log(error);
            }
        });

    return false;
};