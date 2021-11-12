function Test(){
    `use strict`;
    fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces')
    .then(response => response.json())
    .then(data => {covid(data)})
    .catch(
    error => console.log(error)
    );
    var search = document.getElementById('JV').value;
function covid(data_t){
    console.log(search);
    var count = 0;
    while(1){
        var search_jv = data_t[count]['province'];
      if(search_jv == search){
        new_d.textContent = "+ " + data_t[count]['new_case'] + " ราย";
        total_new.textContent = data_t[count]['total_case'] + " ราย";
        dead.textContent = data_t[count]['new_death'] + " ราย";
        total_dead.textContent = data_t[count]['total_death']+ " ราย";
        break;
      }
      count++;
    }
    
}
}