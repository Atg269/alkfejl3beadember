import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newError(formData) {
            console.log(formData);
            this.store.createRecord('error', Object.assign({  // error modelben adjuk meg az objektumot
                date: Date.now().toString(),  // alapértékek adása az adattagoknak
                location: 'labor',
                description: 'hiba',
            }, formData));  // formData - ami bejön a formon érték az felül írja az alapértéket
            this.transitionToRoute('errors.list')
        }
    }
});
