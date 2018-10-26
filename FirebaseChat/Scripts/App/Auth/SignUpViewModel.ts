namespace FirebaseChat.App.Auth {
    export class SignUpViewModel extends Infra.ViewModelBase {
        constructor() {
            super();
        }

        public get Email(): string {
            return this.GetValue('SignUp.Email')
        }
        public get Password(): string {
            return this.GetValue('SignUp.Password')
        }

        public Attach(): void {
            this.RegisterEvent('SignUp.BtnSignUp', Infra.EventKind.OnClick, () => {
                new PasswordAuthentication().SignUp(this.Email, this.Password);

                //TODO: 改ざん検証の仕組みが必要
                if (!('sessionStorage' in window) || window.sessionStorage === null) {
                    throw new Error('SessionStrageに未対応です');
                }
                sessionStorage['User.EmailAddress'] = this.Email;
            });
        }
    }
}