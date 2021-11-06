(function () {
    `use strict`;
     var Date = document.getElementById("Update_date");
     var Total_case = document.getElementById("Total_case");
     var New_case = document.getElementById("New_case");
     var New_case2 = document.getElementById("New_case2");
     var new_case_excludeabroad = document.getElementById("new_case_excludeabroad");
    //  var total_case_excludeabroad = document.getElementById("total_case_excludeabroad");
     var new_recovered = document.getElementById("new_recovered");
     var total_recovered = document.getElementById("total_recovered");
     var total_death = document.getElementById("total_death");
     var new_death = document.getElementById("new_death");
     var new_death2 = document.getElementById("new_death2");
    $.ajax({
        dataType: "json",
        url: 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all',
        success: function(response) {
        Date.textContent = response[0]['update_date'];
        New_case.textContent = response[0]['new_case'];
        New_case2.textContent = response[0]['new_case'];
        Total_case.textContent = response[0]['total_case'];
        new_case_excludeabroad.textContent =response[0]["new_case_excludeabroad"];
        // total_case_excludeabroad.textContent = response[0]['new_recovered'];
        new_recovered.textContent =  response[0]['new_recovered'];
        total_recovered.textContent = response[0]['total_recovered'];
        total_death.textContent =  response[0]['total_death'];
        new_death.textContent = response[0]['new_death'];
        new_death2.textContent = response[0]['new_death'];
        }
    });
})();    