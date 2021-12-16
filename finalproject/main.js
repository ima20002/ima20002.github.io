const searchBtn = document.getElementById('search-btn');
const universityList = document.getElementById('university');
// const universityCloseBtn = document.getElementById('uni-close-btn');

// event listeners
searchBtn.addEventListener('click', getUniversityList);
// universityList.addEventListener('click', getUniversityInfo);



//get school name list that matches with user input
function getUniversityList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`http://universities.hipolabs.com/search?name=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        
        if(data){
            
            data.forEach(school => {
                // console.log(school);
                html += `
                    <div class="uni-item">
                        <div class="uni-name">
                            <h3>${school.name}</h3>
                            <p>${school.country}</p>
                            <a href="${school.web_pages}" class="university-btn" target="_blank">official web page</a>
                        </div>
                        </div>
                    </div>
                `;
            });
        }
        universityList.innerHTML = html;
    });
}

//get school name list that matches with user input
// function getNationalFlagList(){
//     let test = 'AF';
//     // let searchInputTxt = document.getElementById('search-input').value.trim();
//     fetch(`https://api.coinpaprika.com/v1/coins`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
        // let html = "";
        
        // if(data){
            
        //     data.forEach(school => {
        //         // console.log(school);
        //         html += `
        //             <div class="uni-item">
        //                 <div class="uni-name">
        //                     <h3>${school.name}</h3>
        //                     <p>${school.country}</p>
        //                     <a href="${school.web_pages}" class="university-btn" target="_blank">official web page</a>
        //                 </div>
        //                 </div>
        //             </div>
        //         `;
        //     });
        // } 
        // universityList.innerHTML = html;
//     });
// }


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const x = new Date()
const date = days[x.getDay()] + ", " + x.getDate() + " " + months[x.getMonth()] + " " + x.getFullYear()
document.getElementById("currentTime").innerHTML = date;