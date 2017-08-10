(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/common', '@angular/core'], factory) :
	(factory((global.myNgxLibrary = {}),global.ng.common,global.ng.core));
}(this, (function (exports,_angular_common,_angular_core) { 'use strict';

var LibComponent = (function () {
    function LibComponent() {
        this.description = 'Angular library built with ❤ using ngx-library yeoman generator.';
    }
    return LibComponent;
}());
LibComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'my-lib-component',
                template: "\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Hello from <span class=\"highlight\">my-ngx-library</span> Angular Library!</h3>\n        <p class=\"card-text description\">{{description}}</p>\n        <a href=\"#\" class=\"btn btn-primary\">Component Button</a>\n      </div>\n    </div>\n  ",
                styles: ["\n    .title{font-size:2em}.highlight{background-color:green;opacity:.5}.description{color:grey;font-size:1em}\n  "]
            },] },
];
/**
 * @nocollapse
 */
LibComponent.ctorParameters = function () { return []; };

var LibService = (function () {
    function LibService() {
    }
    /**
     * @param {?=} name
     * @return {?}
     */
    LibService.prototype.sayHello = function (name) {
        return "Hello " + (name || 'Stanger') + "!";
    };
    return LibService;
}());
LibService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
LibService.ctorParameters = function () { return []; };

var LibModule = (function () {
    function LibModule() {
    }
    /**
     * @return {?}
     */
    LibModule.forRoot = function () {
        return {
            ngModule: LibModule,
            providers: [LibService]
        };
    };
    return LibModule;
}());
LibModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
                ],
                exports: [LibComponent],
                declarations: [LibComponent]
            },] },
];
/**
 * @nocollapse
 */
LibModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

exports.LibComponent = LibComponent;
exports.LibService = LibService;
exports.LibModule = LibModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-ngx-library.umd.js.map
