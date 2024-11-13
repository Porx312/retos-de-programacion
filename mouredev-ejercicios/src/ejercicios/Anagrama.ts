/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
export default function Anagrama(str1 :string , str2: string): boolean{
    if (str1.length !== str2.length) return false;
    const arra1 = str1.split("").sort();
    const arra2 = str2.split("").sort();
    return arra1.join("") === arra2.join("");
}

console.log(Anagrama("toro","orto"))