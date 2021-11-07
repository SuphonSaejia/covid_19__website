(function () {
    `use strict`;
     var today_new = document.getElementById("today_new");
     var today_total = document.getElementById("today_total");
     var finish = document.getElementById("finish");
     var finish_total = document.getElementById("finish_total");
     var dead = document.getElementById("dead");
     var dead_total = document.getElementById("dead_total");

    $.ajax({
        dataType: "json",
        url: 'https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all',
        success: function(response) {
        today_new.textContent =  response[1]['new_case'] + " ราย";
        today_total.textContent = "สะสม " +response[1]['total_case'] + " ราย";
        finish.textContent = response[1]['new_recovered'] + " ราย";
        finish_total.textContent = response[1]['total_recovered']+ " ราย";
        dead.textContent = response[1]['new_death']+ " ราย";
        dead_total.textContent = response[1]['total_death']+ " ราย";
        }
    });
})();    