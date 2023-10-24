// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
function destructivelyAppendCat(name = 'Ralph'){
    
    const desappendCat = cats.push(name);
}

cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");

  function destructivelyPrependCat(name = 'Bob'){

    const desprependCat = cats.unshift(name);
  }
  
cats.length = 0;

cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveLastCat(){
    const desRemoveLastCat = cats.pop();
}
cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");

  function destructivelyRemoveFirstCat(){

    const desRemoveFirstCat = cats.shift();
  }

  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");

  function appendCat(name = 'Broom'){
    const nondesAppendcat = [...cats, name];
    return nondesAppendcat;
  }


  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");

  function prependCat(name = 'Arnold'){
    const nondesPrependcat = [name,...cats];
    return nondesPrependcat;
  }

  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");

  function removeLastCat(){
    const nondesRemoveLastCat = cats.slice(0,-1);
    return nondesRemoveLastCat;
  }

  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
  
  function removeFirstCat(){
    const nondesRemoveFirstCat = cats.slice(1);
    return nondesRemoveFirstCat;
  }


