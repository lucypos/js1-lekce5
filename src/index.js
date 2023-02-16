
let jmeno = prompt('Zadejte své jméno')
let prijmeni = prompt('Zadejte své příjmení')
let vek = Number(prompt('Zadejte svůj věk'))

console.log('Jméno a příjmení: ' + jmeno + ' ' + prijmeni)
console.log('Věk: ' + vek)


if (vek >= 65) {
    let heslo = prompt('V pořádku. Zadejte heslo')
    console.log('Heslo: ' + heslo)

    if (heslo.length <= 8) {
        document.body.innerHTML = 'Slabé heslo'
    } else {
        document.body.innerHTML = 'Heslo je v pořádku.'
    }

} else {
    (vek < 65) 
    document.body.innerHTML = 'Nízký věk'
    }
 
