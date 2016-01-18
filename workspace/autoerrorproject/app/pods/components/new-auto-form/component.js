import Ember from 'ember';

export default Ember.Component.extend({
    errors: Ember.Object.create(),
    hasErrors: false,
    
    
    actions: {
        submit(errorID){  // submit gomb megnyomására ez a függvény fut le
            //console.log('faintos szoveg')  // submit actionra kiírja ezt
            
            if(!this.validate()){
                return;
            }
            
            this.get('onSave')({    // kívülről kapott függvény, visszadja a kitöltött mezők adatait
                type: this.$('#helyszin').val(),
                license: this.$('#leiras').val(),
                error: errorID,
            });  
        }
    },
    
    validate() {
        var location = this.$('#helyszin').val();   // adatbeolvasása
        var description = this.$('#leiras').val();
        
        this.set('errors.location', location === '' ? 'Tipus kötelező' : '');
        this.set('errors.description', description === '' ? 'Rendszam kötelező' : '');
        
        return this.get('errors.location') === '' && this.get('errors.description') === '';
    }
    
});
