var data;
(function () {
    `use strict`;
    var Date = document.getElementById("Update_date");
    var new_case = document.getElementById("new_case");
    var total_case = document.getElementById("total_case");
    var new_death = document.getElementById("new_death");
    var total_death = document.getElementById("total_death");
    for( var i=1; i <= 30 ; i++){
        if( i < 10){
            document.getElementById("day").innerHTML += `<option value="0${i}">${i}</option>`;}
        else{
            document.getElementById("day").innerHTML += `<option value="${i}">${i}</option>`;
        }
    }
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
        url: 'https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces',
        success: function(response) {
           data = response;
           Date.textContent = response[0]['update_date'];
           new_case.textContent = response[1]['new_case'];
           total_case.textContent = response[1]['total_case']+" ราย";
           new_death.textContent = response[1]['new_death'];
           total_death.textContent = response[1]['total_death']+" ราย";
        }
    });
    
})();    
function onClicks(){
    var new_case = document.getElementById("new_case");
    var total_case = document.getElementById("total_case");
    var new_death = document.getElementById("new_death");
    var total_death = document.getElementById("total_death");
    var day = $('#day').val();
    var month = $('#month').val();
    var _province = $('#province').val();
    var s = '2021-'+month+'-'+day;
    for (index in data){
        if(s == data[index]['txn_date'] && _province == data[index]['province'])
        {
            new_case.textContent = data[index]['new_case'];
            total_case.textContent = data[index]['total_case']+" ราย";
            new_death.textContent = data[index]['new_death'];
            total_death.textContent = data[index]['total_death']+" ราย";
            return false;
        }
    }
}