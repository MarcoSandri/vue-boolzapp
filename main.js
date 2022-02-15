const app = new Vue({
    el : "#app",
    data : {
        search : "",
        selectedChat: [],
        sendMessage: "",
        randomReply: [
                'Ok',
                'Va bene',
                'Sono daccordo',
                'Ottimo',
                'Allora va bene',
                'Capito!',
                'Si!',
                'Ma per forza!',
                'Assolutamente.',
                'Ma è chiaro!',
                'È vero',
                'Perfetto'
        ],
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
    },
    methods : {
        select(index) {
            for(let i = 0; i < this.contacts.length; i++) {
                console.log(i + " è " + this.contacts[i].visible);
                this.contacts[i].visible = false;
            }
            this.contacts[index].visible = true;
            this.selectedChat = this.contacts[index]
        },
        send() {
            if(this.sendMessage.trim() != "") {
                this.selectedChat.messages.push(
                        {
                            date: '000000',
                            text: this.sendMessage,
                            status: 'sent'
                        }
                    );

                this.sendMessage = "";
                setTimeout(this.reply, 1000);
            }
        },
        reply() {
            let randomMsg = this.randomReply[Math.floor(Math.random() * (this.randomReply.length))];
            console.log(randomMsg);
            this.selectedChat.messages.push(
                {
                    date: '000000',
                    text: randomMsg,
                    status: 'received'
                }
            );
        }
    }
});