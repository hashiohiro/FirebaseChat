namespace FirebaseChat.App.Chat {
    export class ChatViewModel extends Infra.ViewModelBase {
        constructor() {
            super();
        }

        public get Message(): string {
            return this.GetValue('Chat.Message')
        }

        private messageList: Array<IMessage>;

        public Attach(): void {
            this.RegisterEvent('Chat.BtnSend', Infra.EventKind.OnClick, () => {
                if (!('sessionStorage' in window) || window.sessionStorage === null) {
                    throw new Error('SessionStrageに未対応です');
                }
                let emailAddress = sessionStorage.getItem('User.EmailAddress');

                this.SaveMessage(this.messageList.length, emailAddress, this.Message);
            });

            this.SyncMessage();
        }

        private SyncMessage(): void {
            firebase.database().ref('messages/').on('value', (snapshot) => {
                let messages = snapshot.val() as Array<IMessage>
                if (messages == null) {
                    this.messageList = [];
                } else {
                    this.messageList = messages;
                }
                this.DrawMessageList(this.messageList);
            });
        }

        private SaveMessage(id: number, emailAddress: string, message: string): void {
            let database = firebase.database();
            database.ref(`messages/${id}`).set({
                EmailAddress: emailAddress,
                Message: message
            });
        }

        private DrawMessageList(messages: Array<IMessage>): void {
            let el = this.GetComponentElement('Chat.MessageList');
            el.innerHTML = messages.map(x => Infra.HtmlHelper.CreateChatMessageItem(x.EmailAddress, x.Message, new Date())).join();
        }
        
    }
    interface IMessage {
        EmailAddress: string,
        Message:string 
    }
}