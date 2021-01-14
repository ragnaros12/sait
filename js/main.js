let i = 1;
let mas = ["Returning and Changing Your Tickets","Best offers","See you more often","Everything is on again"];
let mas1  = ["The pandemic has changed many travelers’ plans, but we know that it will not last forever. \n" +
"Once all of this is over, we will continue exploring this world the way we used to. \n" +
"Special rules that have been developed for this challenging situation will help you cancel your trip\n" +
"or postpone it until later.",
"To see again the streets that witnessed so much. To hug your beloved ones and look back to see\n" +
"what you’ve come through. And to think of new dreams that will be so special!",
"Since the beginning of January, we have been expanding the geography of flights in Russia so that you can\n" +
"see your loved ones more often. Choose our company to fly to where you are always expected.",
"From August 10, we will resume flights to Turkey. Flights from Moscow to Antalya will be operated twice\n" +
"a day daily, and flights on the Moscow-Dalaman route will be operated three to seven times a week."
]
function click_function(){
    i--;
    if(i == 0){
        i = 4;
    }
    document.getElementById("h3").innerText = mas[i-1];
    document.getElementById("div").innerText = mas1[i-1];
    document.getElementById("img").src = "./img/promotion" + i + ".jpg";
}
function click_function_res(){
    i++;
    if(i == 5){
        i = 1;
    }
    document.getElementById("h3").innerText = mas[i-1];
    document.getElementById("div").innerText = mas1[i-1];
    document.getElementById("img").src = "./img/promotion" + i + ".jpg";
}

