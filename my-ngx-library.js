import { CommonModule } from '@angular/common';
import { Component, Injectable, NgModule } from '@angular/core';

class LibComponent {
    constructor() {
        this.description = 'Angular library built with ❤ using ngx-library yeoman generator.';
    }
}
LibComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-lib-component',
                template: `
    <div class="card">
      <div class="card-block">
        <h3 class="card-title">Hello from <span class="highlight">my-ngx-library</span> Angular Library!</h3>
        <p class="card-text description">{{description}}</p>
        <a href="#" class="btn btn-primary">Component Button</a>
      </div>
    </div>
  `,
                styles: [`
    .title{font-size:2em}.highlight{background-color:green;opacity:.5}.description{color:grey;font-size:1em}
  `]
            },] },
];
/**
 * @nocollapse
 */
LibComponent.ctorParameters = () => [];

class LibService {
    constructor() { }
    /**
     * @param {?=} name
     * @return {?}
     */
    sayHello(name) {
        return `Hello ${name || 'Stanger'}!`;
    }
}
LibService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
LibService.ctorParameters = () => [];

class LibModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: LibModule,
            providers: [LibService]
        };
    }
}
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
LibModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { LibComponent, LibService, LibModule };
//# sourceMappingURL=my-ngx-library.js.map
