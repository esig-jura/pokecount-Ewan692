/**
 * Fichier JavaScript pour l'application PokeCount
 * @author Ewan Pfister <ewan.pfister@divcom.ch>
 * @version 1.1 (Version actuelle)
 * @since 2025-01-29 (Date de création)
 */
"use strict"

// Récupération des éléments HTML
const compteurEl = document.getElementById("compteur-el");
const sauvegardeEl = document.getElementById("sauvegarde-el");
const capturerBtn = document.getElementById("capturer-btn");
const sauvegarderBtn = document.getElementById("sauvegarder-btn");
const reinitialiserBtn = document.getElementById("reinitialiser-btn");

// Gestion des événements
capturerBtn.addEventListener("click", capturer);
sauvegarderBtn.addEventListener("click", sauvegarder);
reinitialiserBtn.addEventListener("click", reinitialiser);

// Initialisation des variables de calcul
let compteur = 0;

// Attendre que la page soit chargée pour exécuter le code
window.addEventListener("load", () => {
    // Charger les captures de pokémon sauvegardées ou une chaîne vide
    sauvegardeEl.innerHTML = localStorage.getItem("captures") || "";
});

/**
 * Fonction qui change la couleur du compteur
 * en fonction du nombre de pokémon.
 */
function capturer() {
    compteur++;

    // Mettre à jour le texte de l'élément <h2>
    compteurEl.textContent = compteur;

    // Couleur verte pour moins de 5 captures
    if (compteur < 5) {
        compteurEl.style.color = "green";

    // Couleur jaune pour 5 à 9 captures
    } else if (compteur < 10) {
        compteurEl.style.color = "yellow";

    // Couleur rouge pour 10 captures ou plus
    } else {
        compteurEl.style.color = "red";
    }
}

/**
 * Fonction qui ajoute à la chaîne de caractères les nouveaux pokémon capturés
 * et sauvegarde la cha'ine de caractères dans le stockage local.
 */
function sauvegarder() {
    let compteurStr = `<li>${compteur} - Pokémons</li>`;
    sauvegardeEl.innerHTML += compteurStr; // Ajouter la valeur actuelle du compteur
    localStorage.setItem("captures", sauvegardeEl.innerHTML); // Sauvegarder les captures dans le localStorage
    compteur = 0;
    compteurEl.innerHTML = compteur;
    compteurEl.style.color = "black"; // Réinitialiser la couleur du compteur
}

/**
 * Focnction réinitialise la chaîne de caractères contenant
 * les pokémon capturés dans le stokage local.
 */
function reinitialiser() {
    compteur = 0;
    compteurEl.textContent = compteur;

    // Réinitialise l'affichage
    sauvegardeEl.textContent = "";

    // Réinitialise le stockage local
    localStorage.removeItem("captures");
}
