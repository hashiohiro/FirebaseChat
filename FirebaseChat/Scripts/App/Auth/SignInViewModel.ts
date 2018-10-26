namespace FirebaseChat.App.Auth {
    export class SignInViewModel extends Infra.ViewModelBase {
        constructor() {
            super();
        }

        public get Email(): string {
            return this.GetValue('SignIn.Email')
        }
        public get Password(): string {
            return this.GetValue('SignIn.Password')
        }

        public Attach(): void {
            this.RegisterEvent('SignIn.BtnSignIn', Infra.EventKind.OnClick, () => {
                new PasswordAuthentication().SignIn(this.Email, this.Password);

                if (!('sessionStorage' in window) || window.sessionStorage === null) {
                    throw new Error('SessionStrageに未対応です');
                }

                sessionStorage['User.EmailAddress'] = this.Email;
            });
        }
    }
}