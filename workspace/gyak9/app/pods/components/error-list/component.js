import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteError(error) {
            error.deleteRecord();
            error.save();   // a változást is mentse el az adatbázisban
        }
    }
});
