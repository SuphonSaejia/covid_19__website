(function () {
    `use strict`;
     var today_new = document.getElementById("today_new");
     var today_total = document.getElementById("today_total");
     var total = document.getElementById("total");
     var dead = document.getElementById("dead");
     var total_dead = document.getElementById("total_dead");

    $.ajax({
        dataType: "json",
        url: 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces',
        success: function(response) {
        today_new.textContent = "+ " + response[1]['new_case'] + " ราย";
        today_total.textContent = "ผู้ป่วยรวมสะสม " +response[1]['total_case'] + " ราย";
        total.textContent = response[1]['total_case'] + " ราย";
        dead.textContent = response[1]['new_death']+ " ราย";
        total_dead.textContent ="เสียชีวิตสะสม " + response[1]['total_death']+ " ราย";
        }
    });
})();    