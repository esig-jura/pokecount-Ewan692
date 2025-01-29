/**
 * Fichier JavaScript pour l'application PokeCount
 * @author Ewan Pfister <ewan.pfister@divcom.ch>
 * @version 1.0 (Version actuelle)
 * @since 2025-01-29 (Date de création)
 */
"use strict"

console.log("Hello World");

let compteur = 0;
const compteurEl = document.getElementById("compteur-el");
const sauvegardeEl = document.getElementById("sauvegarde-el");

function capturer() {
    compteur += 1; // Incrémenter le compteur de 1
    compteurEl.textContent = compteur; // Mettre à jour le texte de l'élément <h2>
    if (compteur < 5) {
        compteurEl.style.color = "green"; // Couleur verte pour moins de 5 captures
    } else if (compteur < 10) {
        compteurEl.style.color = "yellow"; // Couleur jaune pour 5 à 9 captures
    } else {
        compteurEl.style.color = "red"; // Couleur rouge pour 10 captures ou plus
    }
}

function sauvegarder() {
    let compteurStr = compteur + " Pokémons - ";
    sauvegardeEl.textContent += compteurStr; // Ajouter la valeur actuelle du compteur
    compteur = 0;
    compteurEl.textContent = compteur;
}
