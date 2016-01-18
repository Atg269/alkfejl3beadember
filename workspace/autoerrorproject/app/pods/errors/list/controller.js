import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newError(formData) {
            console.log(formData);
            var error = this.store.createRecord('error', Object.assign({  // error modelben adjuk meg az objektumot
                date: Date.now().toString(),  // alapértékek adása az adattagoknak
                location: 'labor',
                description: 'hiba',
            }, formData));  // formData - ami bejön a formon érték az felül írja az alapértéket
            error.save();
           // this.transitionToRoute('errors.list')  // ugyanazon az oldalon vagyunk, ezért nem kell
        }
    }
});
