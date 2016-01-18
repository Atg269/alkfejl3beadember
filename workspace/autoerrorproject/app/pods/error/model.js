import DS from 'ember-data';


// modellek megadása, ezekből a mezőkből fog állni, ()-on belül típust is lehet adni neki
// id-t nem kell feltüntetni itt
const ErrorModel = DS.Model.extend({
    date: DS.attr(),
    location: DS.attr(),
    description: DS.attr(),
});

ErrorModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            date: '1212-12-21',
            location: 'pc6',
            description: 'rossz'
        },
        {
            id: 2,
            date: '2212-12-21',
            location: 'pc7',
            description: 'még rosszabb'
        },
    ]
});
// változót exportáljuk
export default ErrorModel;
