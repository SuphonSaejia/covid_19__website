function Date_search(){
    `use strict`;
    fetch('https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all')
    .then(response => response.json())
    .then(data => {covid(data)})
    .catch(
    error => console.log(error)
    );
    var search = document.getElementById('datesearch').value;
    console.log(search);

function covid(data_t){
    console.log(search);
    var count = 0;
    while(1){
        var search_jv = data_t[count]['txn_date'];
      if(search_jv == search){
        console.log("aa");
        today_new.textContent =  data_t[count]['new_case'] + " ราย";
        today_total.textContent = "สะสม " +data_t[count]['total_case'] + " ราย";
        finish.textContent = data_t[count]['new_recovered'] + " ราย";
        finish_total.textContent = data_t[count]['total_recovered']+ " ราย";
        dead.textContent = data_t[count]['new_death']+ " ราย";
        dead_total.textContent = data_t[count]['total_death']+ " ราย";
        break;
      }
      count++;
    }
    
}
}