import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { db } from "./firebase";

/**
 * Ce fichier contient toutes les fonction concernant
 * firebase
 */

/**
 * Récupère tout les message depuis firebase
 */
export async function fetchMessages() {
  // Créer une demande à firebase
  const q = query(collection(db, "messages"));
  // On récupère les documents
  const docs = await getDocs(q);

  // On formatte les documents pour react
  const messages = docs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // Retourne les messages
  return messages;
}

export async function saveMessage(message: any) {
  try {
    // Ajoute un nouvel identifiant unique pour chaque document
    const newMessageRef = doc(collection(db, "messages"));

    // Ajoute la date et l'heure actuelles
    const timestamp = Date.now();
    const date = new Date(timestamp).toLocaleString();
    message.date = date;

    // Enregistre le message dans la base de données
    await setDoc(newMessageRef, message);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du message:", error);
    throw error;
  }
}
// Enregistre un message dans firebase
// export async function saveMessage(message: any) {
//   try {
//     // Ajoute un nouvel identifiant unique pour chaque document
//     const newMessageRef = doc(collection(db, "messages"));
//     await setDoc(newMessageRef, message);
//   } catch (error) {
//     console.error("Erreur lors de l'enregistrement du message:", error);
//     throw error;
//   }
// }
