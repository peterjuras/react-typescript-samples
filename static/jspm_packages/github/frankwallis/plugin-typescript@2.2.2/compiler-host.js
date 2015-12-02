/* */ 
"format cjs";
var ts = require('typescript');
var logger_1 = require('./logger');
var utils_1 = require('./utils');
var logger = new logger_1.default({ debug: false });
exports.__HTML_MODULE__ = "__html_module__";
;
var CompilerHost = (function () {
    function CompilerHost(options) {
        this._options = options || {};
        this._options.module = this.getEnum(this._options.module, ts.ModuleKind, ts.ModuleKind.System);
        this._options.target = this.getEnum(this._options.target, ts.ScriptTarget, ts.ScriptTarget.ES5);
        this._options.jsx = this.getEnum(this._options.jsx, ts.JsxEmit, ts.JsxEmit.None);
        this._options.allowNonTsExtensions = (this._options.allowNonTsExtensions !== false);
        this._options.skipDefaultLibCheck = (this._options.skipDefaultLibCheck !== false);
        this._options.noResolve = true;
        this._files = new Map();
        this._fileResMaps = new Map();
        this.addFile(exports.__HTML_MODULE__, "var __html__: string = ''; export default __html__;");
    }
    CompilerHost.prototype.getEnum = function (enumValue, enumType, defaultValue) {
        if (enumValue == undefined)
            return defaultValue;
        for (var enumProp in enumType) {
            if (enumProp.toLowerCase() === enumValue.toString().toLowerCase()) {
                if (typeof enumType[enumProp] === "string")
                    return enumType[enumType[enumProp]];
                else
                    return enumType[enumProp];
            }
        }
        throw new Error("Unrecognised value [" + enumValue + "]");
    };
    Object.defineProperty(CompilerHost.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    CompilerHost.prototype.getSourceFile = function (fileName) {
        return this._files[fileName];
    };
    CompilerHost.prototype.fileExists = function (fileName) {
        return !!this._files[fileName];
    };
    CompilerHost.prototype.readFile = function (fileName) {
        throw new Error("Not implemented");
    };
    CompilerHost.prototype.writeFile = function (name, text, writeByteOrderMark) {
        throw new Error("Not implemented");
    };
    CompilerHost.prototype.getDefaultLibFileName = function () {
        return "typescript/lib/lib.es6.d.ts";
    };
    CompilerHost.prototype.useCaseSensitiveFileNames = function () {
        return false;
    };
    CompilerHost.prototype.getCanonicalFileName = function (fileName) {
        return fileName;
    };
    CompilerHost.prototype.getCurrentDirectory = function () {
        return "";
    };
    CompilerHost.prototype.getNewLine = function () {
        return "\n";
    };
    CompilerHost.prototype.addFile = function (filename, text, isDefaultLib) {
        if (isDefaultLib === void 0) { isDefaultLib = false; }
        this._files[filename] = ts.createSourceFile(filename, text, this._options.target);
        this._files[filename].isDefaultLib = isDefaultLib;
        logger.debug("added " + filename);
        return this._files[filename];
    };
    CompilerHost.prototype.addResolutionMap = function (filename, map) {
        this._fileResMaps[filename] = map;
    };
    CompilerHost.prototype.resolveModuleNames = function (moduleNames, containingFile) {
        var _this = this;
        return moduleNames.map(function (modName) {
            var mappings = _this._fileResMaps[containingFile];
            if (utils_1.isHtml(modName)) {
                return { resolvedFileName: exports.__HTML_MODULE__ };
            }
            else if (mappings) {
                var resolvedFileName = mappings[modName];
                var isExternalLibraryImport = utils_1.isTypescriptDeclaration(resolvedFileName);
                return { resolvedFileName: resolvedFileName, isExternalLibraryImport: isExternalLibraryImport };
            }
            else {
                return ts.resolveModuleName(modName, containingFile, _this._options, _this).resolvedModule;
            }
        });
    };
    return CompilerHost;
})();
exports.CompilerHost = CompilerHost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXItaG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21waWxlci1ob3N0LnRzIl0sIm5hbWVzIjpbIkNvbXBpbGVySG9zdCIsIkNvbXBpbGVySG9zdC5jb25zdHJ1Y3RvciIsIkNvbXBpbGVySG9zdC5nZXRFbnVtIiwiQ29tcGlsZXJIb3N0Lm9wdGlvbnMiLCJDb21waWxlckhvc3QuZ2V0U291cmNlRmlsZSIsIkNvbXBpbGVySG9zdC5maWxlRXhpc3RzIiwiQ29tcGlsZXJIb3N0LnJlYWRGaWxlIiwiQ29tcGlsZXJIb3N0LndyaXRlRmlsZSIsIkNvbXBpbGVySG9zdC5nZXREZWZhdWx0TGliRmlsZU5hbWUiLCJDb21waWxlckhvc3QudXNlQ2FzZVNlbnNpdGl2ZUZpbGVOYW1lcyIsIkNvbXBpbGVySG9zdC5nZXRDYW5vbmljYWxGaWxlTmFtZSIsIkNvbXBpbGVySG9zdC5nZXRDdXJyZW50RGlyZWN0b3J5IiwiQ29tcGlsZXJIb3N0LmdldE5ld0xpbmUiLCJDb21waWxlckhvc3QuYWRkRmlsZSIsIkNvbXBpbGVySG9zdC5hZGRSZXNvbHV0aW9uTWFwIiwiQ29tcGlsZXJIb3N0LnJlc29sdmVNb2R1bGVOYW1lcyJdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBWSxFQUFFLFdBQU0sWUFBWSxDQUFDLENBQUE7QUFDakMsdUJBQW1CLFVBQVUsQ0FBQyxDQUFBO0FBQzlCLHNCQUE0RCxTQUFTLENBQUMsQ0FBQTtBQUV0RSxJQUFJLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUMvQix1QkFBZSxHQUFHLGlCQUFpQixDQUFDO0FBRStCLENBQUM7QUFFL0U7SUFLQ0Esc0JBQVlBLE9BQVlBO1FBQ3ZCQyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxPQUFPQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUM5QkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFB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Q0EsRUFBRUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxPQUFPQSxFQUFFQSxjQUFjQSxFQUFFQSxLQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxLQUFJQSxDQUFDQSxDQUFDQSxjQUFjQSxDQUFDQTtZQUUxRkEsQ0FBQ0E7UUFDRkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDSkEsQ0FBQ0E7SUFDRmYsbUJBQUNBO0FBQURBLENBQUNBLEFBeEhELElBd0hDO0FBeEhZLG9CQUFZLGVBd0h4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyogKi9cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQge2lzSHRtbCwgaXNUeXBlc2NyaXB0RGVjbGFyYXRpb24sIGlzSmF2YVNjcmlwdH0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSBuZXcgTG9nZ2VyKHsgZGVidWc6IGZhbHNlIH0pO1xuZXhwb3J0IGxldCBfX0hUTUxfTU9EVUxFX18gPSBcIl9faHRtbF9tb2R1bGVfX1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbWJpbmVkT3B0aW9ucyBleHRlbmRzIFBsdWdpbk9wdGlvbnMsIHRzLkNvbXBpbGVyT3B0aW9ucyB7IH07XG5cbmV4cG9ydCBjbGFzcyBDb21waWxlckhvc3QgaW1wbGVtZW50cyB0cy5Db21waWxlckhvc3Qge1xuXHRwcml2YXRlIF9vcHRpb25zOiBhbnk7XG5cdHByaXZhdGUgX2ZpbGVzOiBNYXA8c3RyaW5nLCB0cy5Tb3VyY2VGaWxlPjtcblx0cHJpdmF0ZSBfZmlsZVJlc01hcHM6IE1hcDxzdHJpbmcsIGFueT47XG5cblx0Y29uc3RydWN0b3Iob3B0aW9uczogYW55KSB7XG5cdFx0dGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0dGhpcy5fb3B0aW9ucy5tb2R1bGUgPSB0aGlzLmdldEVudW0odGhpcy5fb3B0aW9ucy5tb2R1bGUsIHRzLk1vZHVsZUtpbmQsIHRzLk1vZHVsZUtpbmQuU3lzdGVtKTtcblx0XHR0aGlzLl9vcHRpb25zLnRhcmdldCA9IHRoaXMuZ2V0RW51bSh0aGlzLl9vcHRpb25zLnRhcmdldCwgdHMuU2NyaXB0VGFyZ2V0LCB0cy5TY3JpcHRUYXJnZXQuRVM1KTtcblx0XHR0aGlzLl9vcHRpb25zLmpzeCA9IHRoaXMuZ2V0RW51bSh0aGlzLl9vcHRpb25zLmpzeCwgdHMuSnN4RW1pdCwgdHMuSnN4RW1pdC5Ob25lKTtcblx0XHR0aGlzLl9vcHRpb25zLmFsbG93Tm9uVHNFeHRlbnNpb25zID0gKHRoaXMuX29wdGlvbnMuYWxsb3dOb25Uc0V4dGVuc2lvbnMgIT09IGZhbHNlKTtcblx0XHR0aGlzLl9vcHRpb25zLnNraXBEZWZhdWx0TGliQ2hlY2sgPSAodGhpcy5fb3B0aW9ucy5za2lwRGVmYXVsdExpYkNoZWNrICE9PSBmYWxzZSk7XG5cdFx0dGhpcy5fb3B0aW9ucy5ub1Jlc29sdmUgPSB0cnVlO1xuXG5cdFx0dGhpcy5fZmlsZXMgPSBuZXcgTWFwPHN0cmluZywgdHMuU291cmNlRmlsZT4oKTtcblx0XHR0aGlzLl9maWxlUmVzTWFwcyA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG5cblx0XHQvLyBzdXBwb3J0IGZvciBpbXBvcnRpbmcgaHRtbCB0ZW1wbGF0ZXMgdW50aWxcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI3MDkjaXNzdWVjb21tZW50LTkxOTY4OTUwIGdldHMgaW1wbGVtZW50ZWRcblx0XHQvLyBub3RlIC0gdGhpcyBvbmx5IGFmZmVjdHMgdHlwZS1jaGVja2luZywgbm90IHJ1bnRpbWUhXG5cdFx0dGhpcy5hZGRGaWxlKF9fSFRNTF9NT0RVTEVfXywgXCJ2YXIgX19odG1sX186IHN0cmluZyA9ICcnOyBleHBvcnQgZGVmYXVsdCBfX2h0bWxfXztcIik7XG5cdH1cblxuXHRwcml2YXRlIGdldEVudW08VD4oZW51bVZhbHVlOiBhbnksIGVudW1UeXBlOiBhbnksIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xuXHRcdGlmIChlbnVtVmFsdWUgPT0gdW5kZWZpbmVkKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuXG5cdFx0Zm9yICh2YXIgZW51bVByb3AgaW4gZW51bVR5cGUpIHtcblx0XHRcdGlmIChlbnVtUHJvcC50b0xvd2VyQ2FzZSgpID09PSBlbnVtVmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZW51bVR5cGVbZW51bVByb3BdID09PSBcInN0cmluZ1wiKVxuXHRcdFx0XHRcdHJldHVybiBlbnVtVHlwZVtlbnVtVHlwZVtlbnVtUHJvcF1dO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0cmV0dXJuIGVudW1UeXBlW2VudW1Qcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXNlZCB2YWx1ZSBbJHtlbnVtVmFsdWV9XWApO1xuXHR9XG5cblx0cHVibGljIGdldCBvcHRpb25zKCk6IENvbWJpbmVkT3B0aW9ucyB7XG5cdFx0cmV0dXJuIHRoaXMuX29wdGlvbnM7XG5cdH1cblxuXHRwdWJsaWMgZ2V0U291cmNlRmlsZShmaWxlTmFtZTogc3RyaW5nKTogdHMuU291cmNlRmlsZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2ZpbGVzW2ZpbGVOYW1lXTtcblx0fVxuXG5cdHB1YmxpYyBmaWxlRXhpc3RzKGZpbGVOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISF0aGlzLl9maWxlc1tmaWxlTmFtZV07XG5cdH1cblxuXHRwdWJsaWMgcmVhZEZpbGUoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xuXHR9XG5cblx0cHVibGljIHdyaXRlRmlsZShuYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgd3JpdGVCeXRlT3JkZXJNYXJrOiBib29sZWFuKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xuXHR9XG5cblx0cHVibGljIGdldERlZmF1bHRMaWJGaWxlTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBcInR5cGVzY3JpcHQvbGliL2xpYi5lczYuZC50c1wiO1xuXHR9XG5cblx0cHVibGljIHVzZUNhc2VTZW5zaXRpdmVGaWxlTmFtZXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGdldENhbm9uaWNhbEZpbGVOYW1lKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHJldHVybiBmaWxlTmFtZTtcblx0fVxuXG5cdHB1YmxpYyBnZXRDdXJyZW50RGlyZWN0b3J5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFwiXCI7XG5cdH1cblxuXHRwdWJsaWMgZ2V0TmV3TGluZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBcIlxcblwiO1xuXHR9XG5cblx0cHVibGljIGFkZEZpbGUoZmlsZW5hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBpc0RlZmF1bHRMaWI6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuX2ZpbGVzW2ZpbGVuYW1lXSA9IHRzLmNyZWF0ZVNvdXJjZUZpbGUoZmlsZW5hbWUsIHRleHQsIHRoaXMuX29wdGlvbnMudGFyZ2V0KTtcblx0XHR0aGlzLl9maWxlc1tmaWxlbmFtZV0uaXNEZWZhdWx0TGliID0gaXNEZWZhdWx0TGliO1xuXG5cdFx0bG9nZ2VyLmRlYnVnKGBhZGRlZCAke2ZpbGVuYW1lfWApO1xuXHRcdHJldHVybiB0aGlzLl9maWxlc1tmaWxlbmFtZV07XG5cdH1cblxuXHQvKlxuXHRcdENhbGxlZCBieSB0aGUgdHlwZS1jaGVja2VyLCB0aGlzIG1ldGhvZCBhZGRzIGEgbWFwIG9mIGltcG9ydHMvcmVmZXJlbmNlcyB1c2VkXG5cdFx0YnkgdGhpcyBmaWxlIHRvIHRoZWlyIHJlc29sdmVkIGxvY2F0aW9ucy5cblx0XHRUaGVzZSB3aWxsIGluY2x1ZGUgYW55IHJlZGlyZWN0aW9ucyB0byBhIHR5cGluZ3MgZmlsZSBpZiBvbmUgaXMgcHJlc2VudC5cblx0XHRUaGlzIG1hcCBpcyB0aGVuIHVzZWQgaW4gcmVzb2x2ZU1vZHVsZU5hbWVzIGJlbG93LlxuXHQqL1xuXHRwdWJsaWMgYWRkUmVzb2x1dGlvbk1hcChmaWxlbmFtZTogc3RyaW5nLCBtYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4pIHtcblx0XHR0aGlzLl9maWxlUmVzTWFwc1tmaWxlbmFtZV0gPSBtYXA7XG5cdH1cblxuXHQvKlxuXHRcdE92ZXJyaWRlcyB0aGUgc3RhbmRhcmQgcmVzb2x1dGlvbiBhbGdvcml0aG0gdXNlZCBieSB0aGUgY29tcGlsZXIgc28gdGhhdCB3ZSBjYW4gdXNlIHN5c3RlbWpzXG5cdFx0cmVzb2x1dGlvbi4gQmVjYXVzZSBUeXBlU2NyaXB0IHJlcXVpcmVzIHN5bmNocm9ub3VzIHJlc29sdXRpb24sIGV2ZXJ5dGhpbmcgaXMgcHJlLXJlc29sdmVkXG5cdFx0YnkgdGhlIHR5cGUtY2hlY2tlciBhbmQgcmVnaXN0ZXJlZCB3aXRoIHRoZSBob3N0IGJlZm9yZSB0eXBlLWNoZWNraW5nLlxuXHQqL1xuXHRwdWJsaWMgcmVzb2x2ZU1vZHVsZU5hbWVzKG1vZHVsZU5hbWVzOiBzdHJpbmdbXSwgY29udGFpbmluZ0ZpbGU6IHN0cmluZyk6IHRzLlJlc29sdmVkTW9kdWxlW10ge1xuXHRcdHJldHVybiBtb2R1bGVOYW1lcy5tYXAoKG1vZE5hbWUpID0+IHtcblx0XHRcdGxldCBtYXBwaW5ncyA9IHRoaXMuX2ZpbGVSZXNNYXBzW2NvbnRhaW5pbmdGaWxlXTtcblxuXHRcdFx0aWYgKGlzSHRtbChtb2ROYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4geyByZXNvbHZlZEZpbGVOYW1lOiBfX0hUTUxfTU9EVUxFX18gfTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKG1hcHBpbmdzKSB7XG5cdFx0XHRcdGxldCByZXNvbHZlZEZpbGVOYW1lID0gbWFwcGluZ3NbbW9kTmFtZV07XG5cdFx0XHRcdGxldCBpc0V4dGVybmFsTGlicmFyeUltcG9ydCA9IGlzVHlwZXNjcmlwdERlY2xhcmF0aW9uKHJlc29sdmVkRmlsZU5hbWUpO1xuXG5cdFx0XHRcdHJldHVybiB7IHJlc29sdmVkRmlsZU5hbWUsIGlzRXh0ZXJuYWxMaWJyYXJ5SW1wb3J0IH07XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRzLnJlc29sdmVNb2R1bGVOYW1lKG1vZE5hbWUsIGNvbnRhaW5pbmdGaWxlLCB0aGlzLl9vcHRpb25zLCB0aGlzKS5yZXNvbHZlZE1vZHVsZTtcblx0XHRcdFx0Ly8gXHR0aHJvdyBuZXcgRXJyb3IoYGNvbnRhaW5pbmcgZmlsZSAke2NvbnRhaW5pbmdGaWxlfSBoYXMgbm90IGJlZW4gbG9hZGVkYCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==