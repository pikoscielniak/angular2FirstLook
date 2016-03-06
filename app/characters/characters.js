System.register(['./characters.component', './character.component', './character-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (characters_component_1_1) {
                exportStar_1(characters_component_1_1);
            },
            function (character_component_1_1) {
                exportStar_1(character_component_1_1);
            },
            function (character_list_component_1_1) {
                exportStar_1(character_list_component_1_1);
            }],
        execute: function() {
        }
    }
});
//export * from './character.service'
//export * from './sort-characters.pipe' 
//# sourceMappingURL=characters.js.map