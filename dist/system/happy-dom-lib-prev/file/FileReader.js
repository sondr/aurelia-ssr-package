System.register(["whatwg-mimetype", "whatwg-encoding", "../event/events/ProgressEvent", "../exception/DOMException", "../exception/DOMExceptionNameEnum", "./FileReaderReadyStateEnum", "./FileReaderFormatEnum", "../event/EventTarget", "./FileReaderEventTypeEnum"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var whatwg_mimetype_1, whatwg_encoding_1, ProgressEvent_1, DOMException_1, DOMExceptionNameEnum_1, FileReaderReadyStateEnum_1, FileReaderFormatEnum_1, EventTarget_1, FileReaderEventTypeEnum_1, FileReader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (whatwg_mimetype_1_1) {
                whatwg_mimetype_1 = whatwg_mimetype_1_1;
            },
            function (whatwg_encoding_1_1) {
                whatwg_encoding_1 = whatwg_encoding_1_1;
            },
            function (ProgressEvent_1_1) {
                ProgressEvent_1 = ProgressEvent_1_1;
            },
            function (DOMException_1_1) {
                DOMException_1 = DOMException_1_1;
            },
            function (DOMExceptionNameEnum_1_1) {
                DOMExceptionNameEnum_1 = DOMExceptionNameEnum_1_1;
            },
            function (FileReaderReadyStateEnum_1_1) {
                FileReaderReadyStateEnum_1 = FileReaderReadyStateEnum_1_1;
            },
            function (FileReaderFormatEnum_1_1) {
                FileReaderFormatEnum_1 = FileReaderFormatEnum_1_1;
            },
            function (EventTarget_1_1) {
                EventTarget_1 = EventTarget_1_1;
            },
            function (FileReaderEventTypeEnum_1_1) {
                FileReaderEventTypeEnum_1 = FileReaderEventTypeEnum_1_1;
            }
        ],
        execute: function () {
            FileReader = /** @class */ (function (_super) {
                __extends(FileReader, _super);
                /**
                 * Reference:
                 * https://developer.mozilla.org/sv-SE/docs/Web/API/FileReader.
                 *
                 * Based on:
                 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/file-api/FileReader-impl.js (MIT licensed).
                 */
                function FileReader() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.error = null;
                    _this.result = null;
                    _this.readyState = FileReaderReadyStateEnum_1.default.empty;
                    _this.onabort = null;
                    _this.onerror = null;
                    _this.onload = null;
                    _this.onloadstart = null;
                    _this.onloadend = null;
                    _this.onprogress = null;
                    _this._isTerminated = false;
                    _this._loadTimeout = null;
                    _this._parseTimeout = null;
                    return _this;
                }
                /**
                 * Reads as ArrayBuffer.
                 *
                 * @param blob Blob.
                 */
                FileReader.prototype.readAsArrayBuffer = function (blob) {
                    this._readFile(blob, FileReaderFormatEnum_1.default.buffer);
                };
                /**
                 * Reads as binary string.
                 *
                 * @param blob Blob.
                 */
                FileReader.prototype.readAsBinaryString = function (blob) {
                    this._readFile(blob, FileReaderFormatEnum_1.default.binaryString);
                };
                /**
                 * Reads as data URL.
                 *
                 * @param blob Blob.
                 */
                FileReader.prototype.readAsDataURL = function (blob) {
                    this._readFile(blob, FileReaderFormatEnum_1.default.dataURL);
                };
                /**
                 * Reads as text.
                 *
                 * @param blob Blob.
                 * @param [encoding] Encoding.
                 */
                FileReader.prototype.readAsText = function (blob, encoding) {
                    if (encoding === void 0) { encoding = null; }
                    this._readFile(blob, FileReaderFormatEnum_1.default.text, whatwg_encoding_1.default.labelToName(encoding) || 'UTF-8');
                };
                /**
                 * Aborts the file reader.
                 */
                FileReader.prototype.abort = function () {
                    var window = this.constructor._ownerDocument.defaultView;
                    window.clearTimeout(this._loadTimeout);
                    window.clearTimeout(this._parseTimeout);
                    if (this.readyState === FileReaderReadyStateEnum_1.default.empty ||
                        this.readyState === FileReaderReadyStateEnum_1.default.done) {
                        this.result = null;
                        return;
                    }
                    if (this.readyState === FileReaderReadyStateEnum_1.default.loading) {
                        this.readyState = FileReaderReadyStateEnum_1.default.done;
                        this.result = null;
                    }
                    this._isTerminated = true;
                    this.dispatchEvent(new ProgressEvent_1.default(FileReaderEventTypeEnum_1.default.abort));
                    this.dispatchEvent(new ProgressEvent_1.default(FileReaderEventTypeEnum_1.default.loadend));
                };
                /**
                 * Reads a file.
                 *
                 * @param blob Blob.
                 * @param format Format.
                 * @param [encoding] Encoding.
                 */
                FileReader.prototype._readFile = function (blob, format, encoding) {
                    var _this = this;
                    if (encoding === void 0) { encoding = null; }
                    var window = this.constructor._ownerDocument.defaultView;
                    if (this.readyState === FileReaderReadyStateEnum_1.default.loading) {
                        throw new DOMException_1.default('The object is in an invalid state.', DOMExceptionNameEnum_1.default.invalidStateError);
                    }
                    this.readyState = FileReaderReadyStateEnum_1.default.loading;
                    this._loadTimeout = window.setTimeout(function () {
                        if (_this._isTerminated) {
                            _this._isTerminated = false;
                            return;
                        }
                        _this.dispatchEvent(new ProgressEvent_1.default(FileReaderEventTypeEnum_1.default.loadstart));
                        var data = blob._buffer;
                        if (!data) {
                            data = Buffer.alloc(0);
                        }
                        _this.dispatchEvent(new ProgressEvent_1.default(FileReaderEventTypeEnum_1.default.loadstart, {
                            lengthComputable: !isNaN(blob.size),
                            total: blob.size,
                            loaded: data.length
                        }));
                        _this._parseTimeout = window.setTimeout(function () {
                            if (_this._isTerminated) {
                                _this._isTerminated = false;
                                return;
                            }
                            switch (format) {
                                default:
                                case FileReaderFormatEnum_1.default.buffer: {
                                    _this.result = new Uint8Array(data).buffer;
                                    break;
                                }
                                case FileReaderFormatEnum_1.default.binaryString: {
                                    _this.result = data.toString('binary');
                                    break;
                                }
                                case FileReaderFormatEnum_1.default.dataURL: {
                                    // Spec seems very unclear here; see https://github.com/w3c/FileAPI/issues/104.
                                    var contentType = whatwg_mimetype_1.default.parse(blob.type) || 'application/octet-stream';
                                    (_this.result) = "data:".concat(contentType, ";base64,").concat(data.toString('base64'));
                                    break;
                                }
                                case FileReaderFormatEnum_1.default.text: {
                                    _this.result = whatwg_encoding_1.default.decode(data, encoding);
                                    break;
                                }
                            }
                            _this.readyState = FileReaderReadyStateEnum_1.default.done;
                            _this.dispatchEvent(new ProgressEvent_1.default(FileReaderEventTypeEnum_1.default.load));
                            _this.dispatchEvent(new ProgressEvent_1.default(FileReaderEventTypeEnum_1.default.loadend));
                        });
                    });
                };
                FileReader._ownerDocument = null;
                return FileReader;
            }(EventTarget_1.default));
            exports_1("default", FileReader);
        }
    };
});
//# sourceMappingURL=FileReader.js.map