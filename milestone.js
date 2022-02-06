let plusSignElmnt = document.getElementById("plusMminusButton");
let descriptionEl = document.getElementById("discreptionId");
let minusBtnEl = document.getElementById("expand-con");
let minusSignEl = document.createElement("button");
minusSignEl.textContent = "-";
minusSignEl.classList = "plus_icon";
minusSignEl.id = "minusSignEl";

function expand() {
    descriptionEl.textContent = "The creation of 1440 Multiversity stemmed from a desire by Joanie and Scott Kriens to establish a beautiful and nurturing destination where people and organizations could gather in community to explore, learn, reflect, connect and reenergize. Since opening in May 2017, the unique nonprofit has established itself as a premier learning destination in the world, having welcomed over 100,000 visitors from more than 54 countries.Together with the 1440 Foundation, 1440 Multiversity has provided more than 750 scholarships to individuals in need and granted hundreds of thousands of dollars to other nonprofit organizations. Groups and individuals who visit 1440 experience time differently, exploring important global issues that matter to the greater good while surrounded by mountain air and towering ancient redwoods. 1440 Multiversity meticulously curates experiences that connect people while allowing them to discover new approaches for how to live, lead, love, work and wonder.";
    minusBtnEl.removeChild(plusSignElmnt);
    minusBtnEl.appendChild(minusSignEl);
}
minusSignEl.addEventListener("click", function() {
    minusBtnEl.removeChild(minusSignEl);
    minusBtnEl.appendChild(plusSignElmnt);
    descriptionEl.textContent = "The creation of 1440 Multiversity stemmed from a desire by Joanie and Scott Kriens to establish a beautiful and nurturing destination where people and organizations could gather in community to explore, learn, reflect, connect and reenergize. Since opening in May 2017, the unique nonprofit has established itself as a premier learning destination in the world, having welcomed over 100,000 visitors from more than 54 countries.";
});