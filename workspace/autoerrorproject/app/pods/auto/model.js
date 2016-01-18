
import DS from 'ember-data';


// modellek megadása, ezekből a mezőkből fog állni, ()-on belül típust is lehet adni neki
// id-t nem kell feltüntetni itt
const AutoModel = DS.Model.extend({
    error: DS.attr(),
    type: DS.attr(),
    license: DS.attr(),
});

// változót exportáljuk
export default AutoModel;