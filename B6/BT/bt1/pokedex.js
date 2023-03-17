const pokemonCount= 20;
var pokedex={}

window.onload= async function () {
    for (let i = 1; i <= pokemonCount; i++) {
        await getEm(i);
        
        let pokemon = document.createElement("div");
        pokemon.id = i;
        pokemon.innerText = i.toString() + ". " + pokedex[i]["name"].toUpperCase();
        pokemon.classList.add("pokemon-name");
        pokemon.addEventListener("click", updatePokemon);
        document.getElementById("pokemon-list").append(pokemon);
    }


    console.log(pokedex);
}

async function getEm(num) {
           await axios.get("https://pokeapi.co/api/v2/pokemon/"+ num)
            .then( function(res){
                pokemon =  res.data;
                 let pokeName= pokemon["name"]
                 let pokeType= pokemon["types"]
                 let pokeImg= pokemon["sprites"]["front_default"]
                pokedex[num] = {"name": pokeName, "img":pokeImg, "types": pokeType} 
            })
            
            
} 
function updatePokemon(){
    document.getElementById("pokemon-img").src = pokedex[this.id]["img"];

    
    let typesDiv = document.getElementById("pokemon-types");
    while (typesDiv.firstChild) {
        typesDiv.firstChild.remove();
    }

    
    let types = pokedex[this.id]["types"];
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        type.innerText = types[i]["type"]["name"].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]); //adds background color and font color
        typesDiv.append(type);
    }

    
}
 

        
                  
                  
        