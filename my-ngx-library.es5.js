import { CommonModule } from '@angular/common';
import { Component, Injectable, NgModule } from '@angular/core';

var LibComponent = (function () {
    function LibComponent() {
        this.description = 'Angular library built with ❤ using ngx-library yeoman generator.';
    }
    LibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-lib-component',
                    template: "\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Hello from <span class=\"highlight\">my-ngx-library</span> Angular Library!</h3>\n        <p class=\"card-text description\">{{description}}</p>\n        <a href=\"#\" class=\"btn btn-primary\">Component Button</a>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .title{font-size:2em}.highlight{background-color:green;opacity:.5}.description{color:grey;font-size:1em}\n  "]
                },] },
    ];
    /**
     * @nocollapse
     */
    LibComponent.ctorParameters = function () { return []; };
    return LibComponent;
}());

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
    LibService.decorators = [
        { type: Injectable },
    ];
    /**
     * @nocollapse
     */
    LibService.ctorParameters = function () { return []; };
    return LibService;
}());

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
    LibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [LibComponent],
                    declarations: [LibComponent]
                },] },
    ];
    /**
     * @nocollapse
     */
    LibModule.ctorParameters = function () { return []; };
    return LibModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LibComponent, LibService, LibModule };
//# sourceMappingURL=my-ngx-library.es5.js.map
