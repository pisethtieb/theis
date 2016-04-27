Package.describe({
    name: 'theara:admin-lte',
    version: '0.3.1',
    // Brief, one-line summary of the package.
    summary: 'AdmintLTE Layout',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript');

    // Package
    api.use([
        'jquery',
        'templating',
        'twbs:bootstrap@3.3.6',
        'fortawesome:fontawesome@4.5.0'
    ], 'client');

    // Plugins
    api.addFiles([
        // 'lib/plugins/fastclick/fastclick.min.js',
    ], 'client');

    // Style
    api.addFiles([
        // 'lib/css/AdminLTE.css',
    ], 'client');

    // Skins
    api.addFiles([
        // 'lib/css/skins/_all-skins.css',
    ], 'client');

    // Image
    api.addAssets([
        // 'lib/img/avatar.png',
    ], 'client');

    // Fonts
    api.addAssets([
        // 'lib/fonts/source-sans-pro-v9-latin-300.eot',
    ], 'client');

    api.addFiles([
        'admin-lte.html',
        'admin-lte.js'
    ], 'client');
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('theara:admin-lte');
    api.addFiles('admin-lte-tests.js');
});
