/// <reference path="src/require/require.d.ts" />

require.config({
    baseUrl: ''
});


require(['out/bootstrapper'],
    (bootstrapper) => {
        bootstrapper.run();
    });