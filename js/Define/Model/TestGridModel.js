﻿Ext.define('chl.Model.TestGridModel', {
    extend: 'Ext.data.Model',
    idProperty: 'Id',
    alternateClassName: ['TestGridModel'],
    fields: [{
        name: 'Id',
        type: 'string'
    }, {
        name: 'Date',
        mapping: 'Date',
        type: 'string'
    }, {
        name: 'Applicanter',
        type: 'string'
    }, {
        name: 'IDNumber',
        type: 'string'
    }, {
        name: 'Telephone',
        type: 'string'

    }]
});