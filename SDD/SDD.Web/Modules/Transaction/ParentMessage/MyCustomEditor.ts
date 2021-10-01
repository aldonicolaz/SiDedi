namespace SDD.Transaction {

    @Serenity.Decorators.registerEditor()
    export class MyCustomEditor extends Serenity.HtmlContentEditor {
        constructor(textArea: JQuery, opt?: Serenity.HtmlContentEditorOptions) {
            super(textArea, opt);
        }

        protected getConfig(): Serenity.CKEditorConfig {
            var config = super.getConfig();
            (config as any).allowedContent = true;
            (config as any).autoParagraph = false;

            return config;
        }

        get_value() {
            var value = super.get_value();
              value = trimNewlineEnd(value);

            return value;
        }
    }

    export function trimNewlineEnd(text: string): string {
        /*
        ^\|+   beginning of the string, pipe, one or more times
        |      or
        \|+$   pipe, one or more times, end of the string
        */
        return text.replace(/\s+$/g, '');
    }
}