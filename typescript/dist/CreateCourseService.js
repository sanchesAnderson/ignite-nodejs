"use strict";
/**
 * name - string
 * duration - number
 * educator - string
 * ? optional field
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (_a) {
        var duration = _a.duration, _b = _a.educator, educator = _b === void 0 ? "Joseph" : _b, name = _a.name;
        console.log(name, duration, educator);
    };
    return CreateCourseService;
}());
exports.default = new CreateCourseService();
