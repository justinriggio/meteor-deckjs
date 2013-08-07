Package.describe({
  summary: "Modern HTML Presentations"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/modernizr.custom.js',
    'lib/core/deck.core.js',
    'lib/core/deck.core.css',
    'lib/extensions/goto/deck.goto.js',
    'lib/extensions/goto/deck.goto.js',
    'lib/extensions/hash/deck.hash.js',
    'lib/extensions/hash/deck.hash.css',
    'lib/extensions/menu/deck.menu.js',
    'lib/extensions/menu/deck.menu.css',
    'lib/extensions/navigation/deck.navigation.js',
    'lib/extensions/navigation/deck.navigation.css',
    'lib/extensions/scale/deck.scale.js',
    'lib/extensions/scale/deck.scale.css',
    'lib/extensions/status/deck.status.js',
    'lib/extensions/status/deck.status.css',
    'lib/themes/transition/fade.css', 
    'lib/themes/transition/horizontal-slide.css',
    'lib/themes/transition/vertical-slide.css'
  ], 'client'
  );
});
