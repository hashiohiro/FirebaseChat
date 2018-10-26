namespace FirebaseChat.App {
    export class User {
        constructor(emailAddress: string) {
            this._emailAddress = emailAddress;
        }

        public get EmailAddress(): string {
            return this._emailAddress;
        }
        private _emailAddress: string;
    }
}