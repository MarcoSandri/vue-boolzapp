const app = new Vue({
    el : "#app",
    data : {
        search : "",
        selectedChat: 0,
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
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        menu: false
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
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        menu: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        menu: false
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
                        status: 'received',
                        menu: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        menu: false
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
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        menu: false
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

            // for(let i = 0; i < this.contacts[index].messages.length; i++) {
            //     this.contacts[index].messages.menu = false;
            // }

            this.contacts[index].visible = true;
            this.selectedChat = index;
        },
        send() {
            if(this.sendMessage.trim() != "") {
                this.selectedChat.messages.push(
                        {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            text: this.sendMessage,
                            status: 'sent',
                            menu: false
                        }
                    );

                this.sendMessage = "";
                setTimeout(this.reply, 1000);

                // Scroll down automatico
                setTimeout(() => {
                    var scroll = document.querySelector(".selectedChat");
                    scroll.scrollTop = scroll.scrollHeight;
                },1100)
            }
        },
        reply() {
            let randomMsg = this.randomReply[Math.floor(Math.random() * (this.randomReply.length))];
            console.log(randomMsg);
            this.selectedChat.messages.push(
                {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: randomMsg,
                    status: 'received',
                    menu: false
                }
            );
        },
        showDropdown(index) {
            let dropdown = document.getElementsByClassName("dropdown");
            this.contacts[this.selectedChat].messages[index].menu = !this.contacts[this.selectedChat].messages[index].menu
            // if(this.contacts[this.selectedChat].messages[index].menu) {
            //     dropdown[index].style.display = 'block';
            // } else {
            //     dropdown[index].style.display = 'none';
            // }
        },
        deleteMessage(index) {

        }
    }
});