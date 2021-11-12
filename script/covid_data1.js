function Date_search(){
    `use strict`;
    document.getElementById("loading").innerHTML =`<img style=" height: 100px; width: 100px; " src="../images/200.gif">`;
    fetch('https://covid19.ddc.moph.go.th/api/Cases/round-1to2-all')
    .then(response => response.json())
    .then(data => {covid(data)})
    .catch(
    error => console.log(error)
    );
    var search = document.getElementById('datesearch').value;

function covid(data_t){
    console.log(search);
    document.getElementById("loading").innerHTML =``;
    var count = 0;
    while(1){
        var search_jv = data_t[count]['txn_date'];
      if(search_jv == search){
        add.textContent =  data_t[count]['new_case'] + " ราย";
        add_total.textContent = data_t[count]['total_case'] + " ราย";
        heal.textContent = data_t[count]['new_recovered'] + " ราย";
        heal_total.textContent = data_t[count]['total_recovered']+ " ราย";
        dead.textContent = data_t[count]['new_death']+ " ราย";
        dead_total.textContent = data_t[count]['total_death']+ " ราย";
        break;
      }
      count++;
    }
    
    
}
}