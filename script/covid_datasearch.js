(function () {
    `use strict`;
     var add = document.getElementById("add");
     var add_total = document.getElementById("add_total");
     var heal = document.getElementById("heal");
     var heal_total = document.getElementById("heal_total");
     var dead = document.getElementById("dead");
     var dead_total = document.getElementById("dead_total");

    $.ajax({
        dataType: "json",
        url: 'https://covid19.ddc.moph.go.th/api/Cases/round-1to2-all',
        success: function(response) {
        add.textContent =  response[1]['new_case'] + " ราย";
        add_total.textContent = response[1]['total_case'] + " ราย";
        heal.textContent = response[1]['new_recovered'] + " ราย";
        heal_total.textContent = response[1]['total_recovered']+ " ราย";
        dead.textContent = response[1]['new_death']+ " ราย";
        dead_total.textContent = response[1]['total_death']+ " ราย";
        document.getElementById("loading").innerHTML =``;
        }
    });
})();    