document.getElementById('submitSearch').onclick = function() {

    //var url2 = "https://api.idxbroker.com/mls/zipcodes/b010?zipcode=92118";
    var url2 = "https://api.idxbroker.com/mls/zipcodes/idxID=b010?zipcode=92118";
    console.log(url2);

    $.ajax({
            type:'GET',
            //beforeSend: function (request){
            //    request.setRequestHeader('accesskey','gY15jJpvJI_GyFnANULFsi');
            //    request.setRequestHeader('ancillarykey','gY15jJpvJI_GyFnANULFsi');
            //},
            url: url2,
            headers: {'accesskey':'gY15jJpvJI_GyFnANULFsi'},
            contentType :'application/x-www-form-urlencoded',
            dataType:'jsonp',
            success:function(msg){
                console.log("Success");
                console.log(msg);
            },
            error:function(error){
                console.log("Error");
                console.log(error);
            }
        }).done(function(data){
            console.log("Done");
            console.log(data);
        });
};