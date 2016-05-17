// Module
Module = typeof Module === 'undefined' ? {} : Module;
Meteor.isClient && Template.registerHelper('Module', Module);

Module.Rabbit = {
    name: 'Rabbit System',
    version: '0.0.1',
    summary: 'Rabbit Management System',
    roles: [
        'setting',
        'data',
        'report',
        'restore'
    ],
    dump: {
        setting: [
            'rabbit_contractor',
            'rabbit_product'
        ],
        data: [
            'rabbit_customer',
            'rabbit_quotation',
            'rabbit_agent',
            'rabbit_contract',
            'rabbit_office',
            'rabbit_paymentMaintenance',
            'rabbit_paymentOffice',
            'rabbit_paymentWebsite',
            'rabbit_service',
            'rabbit_website'
        ]
    }
};
