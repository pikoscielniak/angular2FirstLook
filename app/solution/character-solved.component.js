System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var Character, Vehicle, CharacterSolvedComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Character = (function () {
                function Character(id, name, side, imageUrl, link) {
                    this.id = id;
                    this.name = name;
                    this.side = side;
                    this.imageUrl = imageUrl;
                    this.link = link;
                }
                return Character;
            }());
            Vehicle = (function () {
                function Vehicle(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Vehicle;
            }());
            CharacterSolvedComponent = (function () {
                function CharacterSolvedComponent() {
                    this.color = '';
                    this.isSelected = false;
                    this.selectLabel = 'Select a Character';
                    this.vehicles = [
                        new Vehicle(1, 'Slave 1'),
                        new Vehicle(2, 'Imperial Star Destroyer'),
                        new Vehicle(3, 'Escape Pod')
                    ];
                    this.character = new Character(100, 'Boba Fett', 'dark', 'assets/man.png', 'http://angular.io');
                }
                CharacterSolvedComponent.prototype.select = function (name) {
                    var msg = "You selected " + name;
                    console.log(msg);
                    this.isSelected = !this.isSelected;
                };
                CharacterSolvedComponent = __decorate([
                    core_1.Component({
                        selector: 'story-character-solved',
                        templateUrl: './app/solution/character-solved.component.html',
                        styleUrl: ['./app/solution/character-solved.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CharacterSolvedComponent);
                return CharacterSolvedComponent;
            }());
            exports_1("CharacterSolvedComponent", CharacterSolvedComponent);
        }
    }
});
//# sourceMappingURL=character-solved.component.js.map