namespace FirebaseChat.Infra {
    export class HtmlHelper {
        constructor() { }

        public static CreateChatMessageItem(senderName: string, message: string, messageDate: Date): string {
            let messageItemDom = `\
                <li>\
                    <img  src="../images/pawn.png" class="avatar" alt="Avatar">\
                    <div class="message_date">\
                        <h3 class="date text-info">${messageDate.getDate()}</h3>\
                        <p class="month">${Infra.DateHelper.GetMonthName(messageDate.getMonth())}</p>\
                    </div>\
                    <div class="message_wrapper">\
                        <h4 class="heading">${ senderName }</h4>\
                        <blockquote class="message">${ message }</blockquote>\
                    </div>\
                </li>\
            `;

            return messageItemDom;
        }
    }
}