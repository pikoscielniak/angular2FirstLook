System.register(["angular2/core", "angular2/http", "./solution/character-solved.component", "./character.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, character_solved_component_1, character_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (character_solved_component_1_1) {
                character_solved_component_1 = character_solved_component_1_1;
            },
            function (character_component_1_1) {
                character_component_1 = character_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.showSolution = false;
                    this.buttonText = 'Switch to Solution';
                }
                AppComponent.prototype.solve = function () {
                    this.showSolution = !this.showSolution;
                    this.buttonText = this.showSolution ? 'Switch to  Starter' : 'Switch to Solution';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'story-app',
                        template: "<div>\n    <h3>Storyline Tracker - Data Binding Demo</h3>\n    <div style=\"margin: 1em;\">\n        <button class=\"dashboard-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\n      mdl-button--accent\" (click)=\"solve()\">{{buttonText}}</button>\n    </div>\n\n    <span [ngSwitch]=\"showSolution\">\n        <template [ngSwitchWhen]=\"true\" ]>\n            <story-character-solved></story-character-solved>\n        </template>\n        <template ngSwitchDefault>\n            <story-character></story-character>\n        </template>\n    </span>\n</div>\n    ",
                        directives: [character_component_1.CharacterComponent, character_solved_component_1.CharacterSolvedComponent],
                        providers: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map