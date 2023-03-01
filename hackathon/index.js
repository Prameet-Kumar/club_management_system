// visits
function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}

// Voting system
let poll={
    question:"Which One you Want to Vote?",
    answers:[
        "Prameet" , "Mithlesh" ,"Dezy" ,"Other" ,
    ],
    pollCount:20,
    answersWeight:[4,4,2,10],
    selectAnswer: -1
};

let pollDOM={
    question:document.querySelector(".poll .question"),

}