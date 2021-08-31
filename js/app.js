/* Milestone 1:
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse. */

/* Milestone 2
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato. */

/* Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo. */

/* Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina). */

/* Milestone 5( BONUS OPZIONALE)
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato.
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti */

/* Super bonus
Per chi riuscisse a completare tutte e 5 le milestones, ecco alcune idee extra:
Allungare la risposta dell'interlocutore a 3 secondi e far comparire "sta scrivendo..." sotto al nome del contatto attivo
Se nessun contatto attivo è selezionato mostrare al posto della chat una schermata diversa introduttiva (come fa il vero Whatsapp Web) .
Al click dell'icona della lente di ingrandimento in cima alla chat, far comparire un input per un filtro interno al testo dei messaggi.
Stilizzare i box dei messaggi a mo' di fumetto (Sfida CSS!) */

console.log("Vue OK", Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    user: {
      name: "Elena Durante",
      avatar: "_io",
    },
    contacts: [
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "received",
          },
        ],
      },
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_6",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
    activeContact: {
      name: "",
      avatar: "",
      visible: true,
      messages: [],
    },
    text: "",
    userMessage: {
      date: "28/03/2020 17:10:37",
      text: "",
      status: "sent",
    },
    automaticMessage: {
      date: "",
      text: "Ok",
      status: "received",
    },
    currentDate: new Date(),
  },
  methods: {
    onClickedContact(clickedContact) {
      this.activeContact = clickedContact;
    },
    onClickedSendButton() {
      this.activeContact.messages.push(this.userMessage);
      this.activeContact.messages.push(this.automaticMessage);
      this.userMessage.text = this.text
      this.text = ''
    },
    formatTime(stringDate) {
      return moment(stringDate, 'DD/MM/YYYY HH:mm:ss').format('HH:mm')
    },
  },
  mounted() {
    this.activeContact = this.contacts[0];
  },
});
