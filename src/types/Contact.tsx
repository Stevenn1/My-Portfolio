/**
 * Représente un tache à faire
 */
export type Message = {
  /**
   * Contient le nom
   */
  nom: string;
  /**
   * Contient le prénom
   */
  prenom: string;
  /**
   * Contient l'email
   */
  email: string;
  /**
   * Contient le message
   */
  message: string;

  /**
   * Rgpd cocher ou non
   */
  rgpd: boolean;
};

/**
 * Contient la liste des messages
 */
export type MyMessages = Message[];

/**
 * Crée un message
 */
export function createMessage(
  nom?: string,
  prenom?: string,
  email?: string,
  message?: string,
  rgpd?: boolean,
  date?: Date
): Message {
  return {
    nom: nom ?? "",
    prenom: prenom ?? "",
    email: email ?? "",
    message: message ?? "",
    rgpd: rgpd ?? false,
  };
}
