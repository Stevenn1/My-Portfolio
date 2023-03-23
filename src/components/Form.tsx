import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useRef,
  useEffect,
} from "react";
import { saveMessage } from "../Assets/Message-api";
import * as Type from "../types/Contact";

export default function Form() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [messages, setMessages] = useState<
    (
      | Type.MyMessages[number]
      | {
          name: string;
          firstname: string;
          email: string;
          message: string;
          rgpd: boolean;
        }
    )[]
  >([]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const sendToFirebase = async () => {
      await Promise.all(messages.map((message) => saveMessage(message)));
    };

    sendToFirebase();
  }, [messages]);

  const [state, setState] = useState({
    contactName: "",
    contactFirstname: "",
    contactEmail: "",
    contactMessage: "",
    contactRgpd: false,
  });

  const [errors, setErrors] = useState({
    contactName: "",
    contactFirstname: "",
    contactEmail: "",
    contactMessage: "",
    contactRgpd: "",
  });

  const onFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setState((prevState) => ({ ...prevState, [name]: checked }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    let newErrors: {
      contactName: string;
      contactFirstname: string;
      contactEmail: string;
      contactMessage: string;
      contactRgpd: string;
    } = {
      contactName: "",
      contactFirstname: "",
      contactEmail: "",
      contactMessage: "",
      contactRgpd: "",
    };

    if (state.contactName.trim() === "") {
      newErrors.contactName = "Le nom est obligatoire";
    }

    if (state.contactFirstname.trim() === "") {
      newErrors.contactFirstname = "Le prénom est obligatoire";
    }

    if (state.contactEmail.trim() === "") {
      newErrors.contactEmail = "L'email est obligatoire";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(state.contactEmail)) {
      newErrors.contactEmail = "L'email est invalide";
    }

    if (state.contactMessage.trim() === "") {
      newErrors.contactMessage = "Le message est obligatoire";
    }

    if (!state.contactRgpd) {
      newErrors.contactRgpd =
        "Vous devez accepter les conditions d'utilisation";
    }

    if (
      newErrors.contactName ||
      newErrors.contactFirstname ||
      newErrors.contactEmail ||
      newErrors.contactMessage ||
      newErrors.contactRgpd
    ) {
      setErrors(newErrors);
      setIsSubmitting(false);
    } else {
      const message = {
        name: state.contactName,
        firstname: state.contactFirstname,
        email: state.contactEmail,
        message: state.contactMessage,
        rgpd: state.contactRgpd,
      };

      await saveMessage(message);

      setIsSubmitting(false);
      setIsFormSubmitted(true);
      // Réinitialisation automatique des champs du formulaire
      setState({
        contactName: "",
        contactFirstname: "",
        contactEmail: "",
        contactMessage: "",
        contactRgpd: false,
      });
      setErrors({
        contactName: "",
        contactFirstname: "",
        contactEmail: "",
        contactMessage: "",
        contactRgpd: "",
      });
    }
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <div className="names">
        <div className="layoutName">
          <label htmlFor="contactName">Nom :</label>
          <input
            type="text"
            name="contactName"
            id="contactName"
            onChange={onFieldChange}
            value={state.contactName}
            placeholder="Entrez votre nom"
          />
          {errors.contactName && <p className="error">{errors.contactName}</p>}
        </div>

        <div className="layoutName">
          <label htmlFor="contactFirstname">Prénom :</label>
          <input
            type="text"
            name="contactFirstname"
            id="contactFirstname"
            onChange={onFieldChange}
            value={state.contactFirstname}
            placeholder="Entrez votre prénom"
          />
          {errors.contactFirstname && (
            <p className="error">{errors.contactFirstname}</p>
          )}
        </div>
      </div>

      <br />

      <div className="layoutEmail">
        <label htmlFor="contactEmail">Votre adresse mail :</label>
        <input
          type="email"
          name="contactEmail"
          id="contactEmail"
          onChange={onFieldChange}
          value={state.contactEmail}
          placeholder="Entrez votre adresse mail"
        />
        {errors.contactEmail && <p className="error">{errors.contactEmail}</p>}
      </div>

      <br />

      <div className="layoutMessage">
        <label htmlFor="contactMessage">Votre Message :</label>
        <textarea
          placeholder="Entrez votre message ..."
          onChange={onFieldChange}
          value={state.contactMessage}
          name="contactMessage"
          id="contactMessage"
          cols={30}
          rows={10}
        ></textarea>
        {errors.contactMessage && (
          <p className="error">{errors.contactMessage}</p>
        )}
      </div>

      <br />

      <div className="LayoutRgpd">
        <input
          type="checkbox"
          name="contactRgpd"
          id="contactRgpd"
          onChange={handleCheckboxChange}
          checked={state.contactRgpd}
        />
        <label htmlFor="contactRgpd">
          J'accepte la collecte de mes données conformément au règlement général
          sur la protection des données.
        </label>
      </div>
      {errors.contactRgpd && <p className="error">{errors.contactRgpd}</p>}

      <br />

      <input type="submit" value="Envoyer" disabled={isSubmitting} />
      {isFormSubmitted && <h4>Votre message a bien été envoyé!</h4>}
    </form>
  );
}
