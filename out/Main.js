/// <reference path="src/require/require.d.ts" />
require.config({
    baseUrl: ''
});
require(['out/bootstrapper'], function (bootstrapper) {
    bootstrapper.run();
});
//# sourceMappingURL=Main.js.map