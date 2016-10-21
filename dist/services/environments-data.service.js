"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var EnvironmentService = (function () {
    function EnvironmentService(_http) {
        this._http = _http;
        this._environmentsUrl = 'http://localhost:3000/getEnvironments';
        this._serverTestDataUrl = 'http://localhost:3000/getTestResultsByServer';
    }
    EnvironmentService.prototype.getEnvironmentData = function () {
        try {
            return this._http.get(this._environmentsUrl).map(function (res) { return res.json().data; });
        }
        catch (err) {
            console.log(err);
        }
    };
    EnvironmentService.prototype.getServer = function () {
        try {
            return this._http.get(this._serverTestDataUrl).map(function (res) { return res.json().data; });
        }
        catch (err) {
            console.log(err);
        }
    };
    EnvironmentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EnvironmentService);
    return EnvironmentService;
}());
exports.EnvironmentService = EnvironmentService;
;
//# sourceMappingURL=environments-data.service.js.map