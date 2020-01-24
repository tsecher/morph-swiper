// const mix = require('laravel-mix');
const mixEasy = require('laravel-mix-easy-structure');


/* ---------------------------
 | Add the porject specific configuration here.
 | You can interact directly with the mix object.
 |----------------------------
*/
// Ex:
const mix = mixEasy.getMix();

// Disable notification.
mix.disableSuccessNotifications();

// Enable live reload.
const LiveReloadPlugin = require('webpack-livereload-plugin');
mix.webpackConfig({
plugins: [
	new LiveReloadPlugin()
]
});




/* ---------------------------
 | You can although interact directly with the mixExasy object to add configuration.
 |----------------------------
 */
// const ownConfiguration = new mixEasy.config('own_js')
// 	.setInputRep('own_js')
// 	.setDestinationRep('js')
// 	.setMixCallbackName('js')
// 	.setExtension('js')
// 	.allFilesNotStartingWithUnderscoreAreEntryPoints();
// mixEasy.addProcessConfig(test);
//
//// Remove a default process id :
// mixEasy.removeProcessId('js');
//
//// Change the destination path :
// mixEasy.setDestination('../', '../build');

// Launch porcess configuration.
mixEasy.process();
