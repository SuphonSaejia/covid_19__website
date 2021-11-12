function search_in() {
    document.getElementById("tableData").innerHTML = ``;
    document.getElementById("tableData").innerHTML = ` 
    <tr class="trPink">
    <td>NO</td>
    <td>SEX</td>
    <td>AGE</td>
    <td>NATIONALITY</td>
    <td>RISK</td>
    <td>PROVINCE</td>
</tr>`;
    var search = document.getElementById('jankvad').value;
    console.log(search);
    const target = `https://covid19.ddc.moph.go.th/api/Cases/today-cases-line-lists`;
    getData();
    async function getData() {

        var txd_date = [];
        var CPatient = [];
        var ages = [];
        var CGender = [];
        var nationalitys = [];
        var jobs = [];
        var risks = [];
        var provinces = [];

        var male = 0;
        var female = 0;
        var UnGender = 0;
        const response = await fetch(target);
        const data = await response.text();
        const table = data.split('\n').splice(1);
        var i = 0;
        i = 0;
        table.forEach(row => {
            // console.log(row);

            var columns = row.split(',');
            var date = columns[0];
            var IdPatient = columns[1];
            var gender = columns[2];
            var age = columns[3];
            var AgeRange = columns[4];
            var nationality = columns[5];
            var job = columns[6];
            var risk = columns[7];
            var PatientType = columns[8];
            var province = columns[9];
            console.log("kkk");
            console.log(province);
            if (search == province) {
                i++;
                if (i < 10) {
                    ages.push(columns[3] ?? "-");
                    nationalitys.push(columns[5] ?? "-");
                    jobs.push(columns[6] ?? "-");
                    risks.push(columns[7] ?? "-");
                    provinces.push(columns[8] ?? "-");
                    txd_date.push(columns[0]);
                    CPatient.push(columns[1]);
                    CGender.push(columns[2]);
                    console.log(job ?? "asdko");
                    // console.log(date,IdPatient,gender,age,AgeRange,nationality,job,risk,PatientType,province);
                    document.getElementById("tableData").innerHTML +=
                        `<tr class="trWhite">
                    <td>${i}</td>
                    <td>${columns[2] ?? "ไม่ระบุ"}</td>
                    <td>${columns[3] ?? "ไม่ระบุ"}</td>
                    <td>${nationality ?? "ไม่ระบุ"}</td>
                    <td>${risk ?? "ไม่ระบุ"}</td>
                    <td>${province ?? "ไม่ระบุ"}</td>
              </tr>`;
                }
            }


        });

    }
}
var next = 0;

function N_Next() {

    next = next + 10;
    console.log(next);
    console.log("A1");
    document.getElementById("tableData").innerHTML = ``;
    document.getElementById("tableData").innerHTML = ` 
    <tr class="trPink">
    <td>NO</td>
    <td>SEX</td>
    <td>AGE</td>
    <td>NATIONALITY</td>
    <td>RISK</td>
    <td>PROVINCE</td>
    
</tr>`;
    var search = document.getElementById('jankvad').value;
    console.log(search);
    const target = `https://covid19.ddc.moph.go.th/api/Cases/today-cases-line-lists`;
    getData();
    async function getData() {

        var txd_date = [];
        var CPatient = [];
        var ages = [];
        var CGender = [];
        var nationalitys = [];
        var jobs = [];
        var risks = [];
        var provinces = [];

        var male = 0;
        var female = 0;
        var UnGender = 0;
        const response = await fetch(target);
        const data = await response.text();
        const table = data.split('\n').splice(1);
        var i = 0;
        i = 0;
        table.forEach(row => {
            // console.log(row);

            var columns = row.split(',');
            var date = columns[0];
            var IdPatient = columns[1];
            var gender = columns[2];
            var age = columns[3];
            var AgeRange = columns[4];
            var nationality = columns[5];
            var job = columns[6];
            var risk = columns[7];
            var PatientType = columns[8];
            var province = columns[9];


         
            if (search == ' ') {   i++;
                if (i > next && i < next + 10) { 

                    ages.push(columns[3] ?? "-");
                    nationalitys.push(columns[5] ?? "-");
                    jobs.push(columns[6] ?? "-");
                    risks.push(columns[7] ?? "-");
                    provinces.push(columns[8] ?? "-");
                    txd_date.push(columns[0]);
                    CPatient.push(columns[1]);
                    CGender.push(columns[2]);
                    console.log(job ?? "asdko");
                    // console.log(date,IdPatient,gender,age,AgeRange,nationality,job,risk,PatientType,province);
                    document.getElementById("tableData").innerHTML +=
                        `<tr class="trWhite">
                    <td>${i}</td>
                    <td>${columns[2] ?? "ไม่ระบุ"}</td>
                    <td>${columns[3] ?? "ไม่ระบุ"}</td>
                    <td>${nationality ?? "ไม่ระบุ"}</td>
                    <td>${risk ?? "ไม่ระบุ"}</td>
                    <td>${province ?? "ไม่ระบุ"}</td>
              </tr>`;
                }
            }
            else if (search == province) { 
                console.log("marmai");
                console.log(i);
                i++;
                if (i > next && i < next + 10) {  
                    console.log("sav");
                    ages.push(columns[3] ?? "-");
                    nationalitys.push(columns[5] ?? "-");
                    jobs.push(columns[6] ?? "-");
                    risks.push(columns[7] ?? "-");
                    provinces.push(columns[8] ?? "-");
                    txd_date.push(columns[0]);
                    CPatient.push(columns[1]);
                    CGender.push(columns[2]);
                    console.log(job ?? "asdko");
                    // console.log(date,IdPatient,gender,age,AgeRange,nationality,job,risk,PatientType,province);
                    document.getElementById("tableData").innerHTML +=
                        `<tr class="trWhite">
                    <td>${i}</td>
                    <td>${columns[2] ?? "ไม่ระบุ"}</td>
                    <td>${columns[3] ?? "ไม่ระบุ"}</td>
                    <td>${nationality ?? "ไม่ระบุ"}</td>
                    <td>${risk ?? "ไม่ระบุ"}</td>
                    <td>${province ?? "ไม่ระบุ"}</td>
              </tr>`;
                }
            }




        });

    }
}

function B_BACK() {
if(next == 0){
 return false;
}
    next = next - 10;
    console.log(next);
    console.log("A1");
    document.getElementById("tableData").innerHTML = ``;
    document.getElementById("tableData").innerHTML = ` 
    <tr class="trPink">
    <td>NO</td>
    <td>SEX</td>
    <td>AGE</td>
    <td>NATIONALITY</td>
    <td>RISK</td>
    <td>PROVINCE</td>
    
</tr>`;
    var search = document.getElementById('jankvad').value;
    console.log(search);
    const target = `https://covid19.ddc.moph.go.th/api/Cases/today-cases-line-lists`;
    getData();
    async function getData() {

        var txd_date = [];
        var CPatient = [];
        var ages = [];
        var CGender = [];
        var nationalitys = [];
        var jobs = [];
        var risks = [];
        var provinces = [];

        var male = 0;
        var female = 0;
        var UnGender = 0;
        const response = await fetch(target);
        const data = await response.text();
        const table = data.split('\n').splice(1);
        var i = 0;
        i = 0;
        table.forEach(row => {
            // console.log(row);

            var columns = row.split(',');
            var date = columns[0];
            var IdPatient = columns[1];
            var gender = columns[2];
            var age = columns[3];
            var AgeRange = columns[4];
            var nationality = columns[5];
            var job = columns[6];
            var risk = columns[7];
            var PatientType = columns[8];
            var province = columns[9];


         
            if (search == ' ') {   i++;
                if (i > next && i < next +10) { 

                    ages.push(columns[3] ?? "-");
                    nationalitys.push(columns[5] ?? "-");
                    jobs.push(columns[6] ?? "-");
                    risks.push(columns[7] ?? "-");
                    provinces.push(columns[8] ?? "-");
                    txd_date.push(columns[0]);
                    CPatient.push(columns[1]);
                    CGender.push(columns[2]);
                    console.log(job ?? "asdko");
                    // console.log(date,IdPatient,gender,age,AgeRange,nationality,job,risk,PatientType,province);
                    document.getElementById("tableData").innerHTML +=
                        `<tr class="trWhite">
                    <td>${i}</td>
                    <td>${columns[2] ?? "ไม่ระบุ"}</td>
                    <td>${columns[3] ?? "ไม่ระบุ"}</td>
                    <td>${nationality ?? "ไม่ระบุ"}</td>
                    <td>${risk ?? "ไม่ระบุ"}</td>
                    <td>${province ?? "ไม่ระบุ"}</td>
              </tr>`;
                }
            }
            else if (search == province) { 
                console.log("marmai");
                console.log(i);
                i++;
                if (i > next && i < next + 10) {  
                    console.log("sav");
                    ages.push(columns[3] ?? "-");
                    nationalitys.push(columns[5] ?? "-");
                    jobs.push(columns[6] ?? "-");
                    risks.push(columns[7] ?? "-");
                    provinces.push(columns[8] ?? "-");
                    txd_date.push(columns[0]);
                    CPatient.push(columns[1]);
                    CGender.push(columns[2]);
                    console.log(job ?? "asdko");
                    // console.log(date,IdPatient,gender,age,AgeRange,nationality,job,risk,PatientType,province);
                    document.getElementById("tableData").innerHTML +=
                        `<tr class="trWhite">
                    <td>${i}</td>
                    <td>${columns[2] ?? "ไม่ระบุ"}</td>
                    <td>${columns[3] ?? "ไม่ระบุ"}</td>
                    <td>${nationality ?? "ไม่ระบุ"}</td>
                    <td>${risk ?? "ไม่ระบุ"}</td>
                    <td>${province ?? "ไม่ระบุ"}</td>
              </tr>`;
                }
            }




        });

    }
}



