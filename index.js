
const verifyTernos = (ternos) => {
    for (let i = 0; i <3; i++) {
        let xPlayer = 0, oPlayer = 0;
        ternos[i].map(element => {
            if (element == 1) xPlayer++;
            if (element == 2) oPlayer++;
        });

        if (xPlayer == 3) return [true, 1];
        if (oPlayer == 3) return [true, 2];
    }
    return [false, 0]
}

function isSolved(table) {
    let ternos = [];
    let key = 0, movements = 0;

    let ternoDiagonalP = [], ternoDiagonalS = [];

    for (let columna = 0; columna < table.length; columna++) {

        let ternoColumna = [];

        for (let fila = 0; fila < table.length; fila++) {

            if (table[columna][fila] == 0) movements++;
            ternoColumna.push(table[fila][key])
            if (columna == fila) ternoDiagonalP.push(table[columna][fila]);
            if ((2 - columna) == fila) ternoDiagonalS.push(table[columna][fila])

        }

        key++;

        ternos.push(table[columna]);
        ternos.push(ternoColumna);
    }

    ternos.push(ternoDiagonalP);
    ternos.push(ternoDiagonalS);

    const result = verifyTernos(ternos);
    if (result[0] == true) return result[1]
    if (movements > 0) return -1
    return 0

}

module.exports = isSolved;