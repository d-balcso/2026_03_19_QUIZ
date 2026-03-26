function szamol(){
    console.log("Számolás...");
    let szelesseg = document.getElementById("szelesseg").value;
    let magassag = document.getElementById("magassag").value;


    let magassagErtek = document.getElementById("magassag_ertek");
    let teruletListaelem = document.getElementById("terulet");

    const teruletErtek = szelesseg * magassag;
    magassagErtek.innerText = `A magasság: ${magassag}`;
    teruletListaelem.innerText = `A terület: ${teruletErtek}`;

}