let form = document.querySelector("form");
let inps = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    console.log(inps[0].value,
        inps[1].value,
        inps[2].value,
        inps[3].value
    );
    //ek div banaya jiska naam card
    let card = document.createElement("div");
    card.classList.add("card");

    //ek div banaya jiska naam profile
    let profile = document.createElement("div");
    profile.classList.add("profile");  

    //profile div .. card div ke andr aa gyi hain ab
    // card.appendChild(profile); 

    let img = document.createElement("img");
    img.setAttribute("src", inps[0].value);
    
    let h3 = document.createElement("h3");
    h3.textContent = inps[1].value;

    let h5 = document.createElement("h5");
    h5.textContent = inps[2].value;

    let p = document.createElement("p");
    p.textContent = inps[3].value;

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inps.forEach(function(inp){
        if(inp.type != "submit"){
        inp.value = "";
        }

    });
});