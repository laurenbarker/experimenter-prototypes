import DS from 'ember-data';

export default DS.Model.extend({
    content: DS.attr('string'),
    required: DS.attr('boolean'),
});
