
namespace SDD.Administration {

    /**
     * Our select editor with hardcoded values.
     * 
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available 
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    @Serenity.Decorators.registerEditor()
    export class Pendidikan extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);

            // add option accepts a key (id) value and display text value
            this.addOption("SD", "SD");
            this.addOption("SMP", "SMP");
            this.addOption("SMA", "SMA");
            this.addOption("S1", "S1");
            this.addOption("S2", "S2");

            // you may also use addItem which accepts a Select2Item parameter

        }
    }
}