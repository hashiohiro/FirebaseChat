namespace FirebaseChat.Infra {
    export class DateHelper {
        constructor() { }
        private static monthNames: string[] = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        public static GetMonthName(monthValue: number): string {
            return DateHelper.monthNames[monthValue - 1];
        }
    }
}