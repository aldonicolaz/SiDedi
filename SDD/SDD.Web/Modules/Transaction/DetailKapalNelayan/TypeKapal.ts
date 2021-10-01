
namespace SDD.Transaction {

    /**
     * Our select editor with hardcoded values.
     * 
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available 
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    @Serenity.Decorators.registerEditor()
    export class TypeKapal extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);

            // add option accepts a key (id) value and display text value
            this.addOption("Kapal Pukat Hela", "Kapal Pukat Hela");
            this.addOption("Kapal Jaring Insang", "Kapal Jaring Insang");
            this.addOption("Kapal Rawai", "Kapal Rawai");
            this.addOption("Kapal Jaring Angkat", "Kapal Jaring Angkat");
            this.addOption("Kapal Pancing Joran", "Kapal Pancing Joran");
            this.addOption("Perahu Jukung", "Perahu Jukung");
            this.addOption("Perahu Kano", "Perahu Kano");
            this.addOption("Perahu Dredger", "Perahu Dredger");
            this.addOption("Kapal Pengangkut Ikan", "Kapal Pengangkut Ikan");
            this.addOption("Kapal Untuk Penelitian Ikan", "Kapal Untuk Penelitian Ikan");
            this.addOption("Kapal Latihan Perikanan", "Kapal Latihan Perikanan");
            this.addOption("Kapal Penangkap Ikan", "Kapal Penangkap Ikan");
            // you may also use addItem which accepts a Select2Item parameter

        }
    }
}