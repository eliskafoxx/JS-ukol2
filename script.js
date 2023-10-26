const pocetKusu = Number(prompt("Zadejte počet kusů:"))
document.body.innerHTML += "<p>" + "Počet objednaných kusů: " + pocetKusu + "</p>"

if (pocetKusu < 50)
{
    document.body.innerHTML += "Cena objednávky je " + (pocetKusu * 300) + " Kč."
} else if (pocetKusu < 201)
{
    document.body.innerHTML += "Cena objednávky je " + (pocetKusu * 250) + " Kč."
} else if (pocetKusu < 501)
{
    document.body.innerHTML += "Cena objednávky je " + (pocetKusu * 200) + " Kč."
} else if (pocetKusu < 1001)
{
    document.body.innerHTML += "Cena objednávky je " + (pocetKusu * 150) + " Kč."
} else (pocetKusu > 1001)
{
    document.body.innerHTML += "Cena objednávky je " + (pocetKusu * 120) + " Kč."
}
