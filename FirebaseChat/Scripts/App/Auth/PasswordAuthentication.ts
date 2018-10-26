/// <reference path="../../typings/firebase/index.d.ts" />
namespace FirebaseChat.App.Auth {
    export class PasswordAuthentication {
        constructor() {}

        private redirectSignInSuccessPath: string = 'SignInSuccess';
        private redirectSignUpSuccessPath: string = 'SignUpSuccess';

        public SignUp(email: string, password: string): void {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                window.location.href = this.redirectSignUpSuccessPath;
            }).catch((err) =>
            {
                alert(err.message);
            });
        }

        public SignIn(email: string, password: string): void {
            firebase.auth().signInWithEmailAndPassword(email, password).then(() =>
            {
                window.location.href = this.redirectSignInSuccessPath;
            }).catch((err) =>
            {
                alert(err.message);
            });
        }

        public SignOut(): void {
            firebase.auth().signOut().then(() => { }).catch((err) =>
            {
                alert(err.message)
            });
        }
    }
}