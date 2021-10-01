
namespace SDD.Transaction {

    /**
     * Our select editor with hardcoded values.
     * 
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available 
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    @Serenity.Decorators.registerEditor()
    export class JenisDagangan extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);

            // add option accepts a key (id) value and display text value
            this.addOption("Sembako", "Sembako");
            this.addOption("Makanan Minuman", "Makanan Minuman");
            this.addOption("Pulsa", "Pulsa");
            this.addOption("Baju Fashion", "Baju Fashion");
            this.addOption("Elektronik", "Elektronik");
            this.addOption("Tanaman", "Tanaman");
            this.addOption("Rental", "Rental");
            // you may also use addItem which accepts a Select2Item parameter

        }
    }
}