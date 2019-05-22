function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      pokemonData = JSON.parse(this.responseText)
      pokemonData["name"]
      pokemonData["id"]
      pokemonData["hp"]
      pokemonData["atk"]
      pokemonData["def"]
      pokemonData["spAtk"]
      pokemonData["spDef"]
      pokemonData["spd"]
    }
  };
  xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${}`, true);
  xhttp.send();
}
loadDoc()

class Pokemon {
  constructor(name, id, hp, atk, def, spAtk, spDef, spd) {
    this.name = name
    this.id = id
    this.hp = hp
    this.atk = atk
    this.def = def
    this.spAtk = spAtk
    this.spDef = spDef
    this.spd = spd
  }

}
