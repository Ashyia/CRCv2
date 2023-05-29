window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionApiUrl = 'https://crc-api-fin.azurewebsites.net/api/GetResumeCounter?code=f5dyDdB0lipPG_B9__4xZ3LCpPlwQUqEzzTRX-yjGHFyAzFuxO1wtQ==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
    console.log(error);
    });
    return count;
}