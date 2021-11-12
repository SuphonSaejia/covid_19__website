(function () {
    `use strict`;
     var new_d = document.getElementById("new_d");
     var total_new = document.getElementById("total_new");
     var dead = document.getElementById("dead");
     var total_dead = document.getElementById("total_dead");

    $.ajax({
        dataType: "json",
        url: 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces',
        success: function(response) {
        new_d.textContent = "+ " + response[1]['new_case'] + " ราย";
        total_new.textContent = response[1]['total_case'] + " ราย";
        dead.textContent = response[1]['new_death'] + " ราย";
        total_dead.textContent = response[1]['total_death']+ " ราย";
        }
    });
})();    