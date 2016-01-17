import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyError(formData) {
            console.log(formData);
            var error = this.get('model');
            //error.set('location', formData.location);  // location részt beállítja a formData értékére
            //error.set('description', formData.description);
            error.setProperties(formData);  // előző két sort ezzel az eggyel is le lehet írni
            return error.save().then(() => {
                this.transitionToRoute('errors.list');
            })
        }
    }
});
