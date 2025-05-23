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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class ProcessDto {
    constructor(partial = {}) {
        this.periodoInicio = partial.periodoInicio ?? "";
        this.periodoTermino = partial.periodoTermino ?? "";
        this.inicio = partial.inicio ?? new Date();
        this.termino = partial.termino ?? new Date();
    }
}
exports.ProcessDto = ProcessDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: '2025/1' }),
    __metadata("design:type", String)
], ProcessDto.prototype, "periodoInicio", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: '2025/2' }),
    __metadata("design:type", String)
], ProcessDto.prototype, "periodoTermino", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ example: '2025-04-23T10:30:00.000Z' }),
    __metadata("design:type", Date)
], ProcessDto.prototype, "inicio", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ example: '2025-04-23T10:30:00.000Z' }),
    __metadata("design:type", Date)
], ProcessDto.prototype, "termino", void 0);
