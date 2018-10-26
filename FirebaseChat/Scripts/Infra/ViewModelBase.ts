namespace FirebaseChat.Infra {
    export abstract class ViewModelBase {
        constructor() {
            this.binds = {};
            this.BindComponent();
            this.Attach();
        }

        private binds: { [bindKey: string]: HTMLElement; };

        public BindComponent(): void {
            let components = document.getElementsByClassName('fc-component');

            for (let i = 0; i < components.length; i++) {
                let el = (components[i] as HTMLElement);
                if (!el.dataset.bind) {
                    continue;
                }
                this.binds[el.dataset.bind] = el;
            }
        }

        public GetValue(bindKey: string): string {
            let el = this.GetComponentElement(bindKey);

            let value = (el as any).value;
            if (value !== undefined) {
                return value;
            }

            let nodeValue = (el as any).nodeValue;
            if (nodeValue !== undefined) {
                return nodeValue;
            }
        }
        public SetValue(bindKey: string, value: string): void {
            let el = this.GetComponentElement(bindKey);

            if ((el as any).value !== undefined) {
                (el as any).value = value;
            } else if ((el as any).nodeValue !== undefined) {
                (el as any).nodeValue = value;
            }
        }

        public RegisterEvent(bindKey: string, event: EventKind, handler: (...args: any[]) => void) {
            switch (event) {
                case EventKind.OnClick:
                    this.GetComponentElement(bindKey).onclick = handler;
                    break;

                default:
                    break;
            }
        }

        public GetComponentElement(bindKey: string): HTMLElement {
            let bindValue = this.binds[bindKey];
            if (bindValue === null || bindValue === undefined) {
                throw new Error('無効なバインドです');
            }
            return this.binds[bindKey];
        }

        /**
         * バインドコントロールに対し、イベントを紐づけます
         */
        protected abstract Attach(): void;
    }
    export enum EventKind {
        OnClick = 0,
    }
}