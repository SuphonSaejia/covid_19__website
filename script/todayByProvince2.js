var data;
(function () {
    `use strict`;
    var Date = document.getElementById("Update_date");
    var new_case = document.getElementById("new_case");
    var total_case = document.getElementById("total_case");
    var new_death = document.getElementById("new_death");
    var total_death = document.getElementById("total_death");

    $.ajax({
        dataType: "json",
        url: 'https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json',
        success: function(response) {
            for (index in response){
                document.getElementById("province").innerHTML += `<option value="${response[index]["name_th"]}">${response[index]["name_th"]}</option>`;
            }
        }
    });
    $.ajax({
        dataType: "json",
        url: 'https://covid19.ddc.moph.go.th/api/Cases/round-1to2-by-provinces',
        success: function(response) {
           data = response;
           Date.textContent = response[0]['txn_date'];
           new_case.textContent = response[1]['new_case'];
           total_case.textContent = response[1]['total_case'];
           new_death.textContent = response[1]['new_death']+" ราย";
           total_death.textContent = response[1]['total_death']+" ราย";
        }
    });
    
})();    
function onClicks(){
    var new_case = document.getElementById("new_case");
    var total_case = document.getElementById("total_case");
    var new_death = document.getElementById("new_death");
    var total_death = document.getElementById("total_death");
    var D_Date = document.getElementById('D_Date').value;
    var _province = $('#province').val();
    var d = parseInt(D_Date.split("-")[1]);
    var m = parseInt(D_Date.split("-")[2]);
    var y = parseInt(D_Date.split("-")[0]);
    var s ;
    if(d<10){
        s = y+'-'+m+'-0'+d;
    }
    else{
        s = y+'-'+m+'-'+d;
    }
    for (index in data){
        if(s == data[index]['txn_date'] && _province == data[index]['province'])
        {
            new_case.textContent = data[index]['new_case'];
            total_case.textContent = data[index]['total_case'];
            new_death.textContent = data[index]['new_death']+" ราย";
            total_death.textContent = data[index]['total_death']+" ราย";
            return false;
        }
    }
}