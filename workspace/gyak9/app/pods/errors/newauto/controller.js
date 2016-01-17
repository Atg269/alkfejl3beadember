import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newauto(formData) {
            console.log(formData);
            var kocsi = this.store.createRecord('auto', Object.assign({  // auto modelben adjuk meg az objektumot
                type: 'tipus',
                license: 'rendszam',
                error: null,
            }, formData));  // formData - ami bejön a formon érték az felül írja az alapértéket
            kocsi.save();
           // this.transitionToRoute('errors.list')  // ugyanazon az oldalon vagyunk, ezért nem kell
        }
    }
});
