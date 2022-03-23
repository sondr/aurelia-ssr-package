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
import WhatwgMIMEType from 'whatwg-mimetype';
import WhatwgEncoding from 'whatwg-encoding';
import ProgressEvent from '../event/events/ProgressEvent';
import DOMException from '../exception/DOMException';
import DOMExceptionNameEnum from '../exception/DOMExceptionNameEnum';
import FileReaderReadyStateEnum from './FileReaderReadyStateEnum';
import FileReaderFormatEnum from './FileReaderFormatEnum';
import EventTarget from '../event/EventTarget';
import FileReaderEventTypeEnum from './FileReaderEventTypeEnum';
/**
 * Reference:
 * https://developer.mozilla.org/sv-SE/docs/Web/API/FileReader.
 *
 * Based on:
 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/file-api/FileReader-impl.js (MIT licensed).
 */
var FileReader = /** @class */ (function (_super) {
    __extends(FileReader, _super);
    function FileReader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.error = null;
        _this.result = null;
        _this.readyState = FileReaderReadyStateEnum.empty;
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
        this._readFile(blob, FileReaderFormatEnum.buffer);
    };
    /**
     * Reads as binary string.
     *
     * @param blob Blob.
     */
    FileReader.prototype.readAsBinaryString = function (blob) {
        this._readFile(blob, FileReaderFormatEnum.binaryString);
    };
    /**
     * Reads as data URL.
     *
     * @param blob Blob.
     */
    FileReader.prototype.readAsDataURL = function (blob) {
        this._readFile(blob, FileReaderFormatEnum.dataURL);
    };
    /**
     * Reads as text.
     *
     * @param blob Blob.
     * @param [encoding] Encoding.
     */
    FileReader.prototype.readAsText = function (blob, encoding) {
        if (encoding === void 0) { encoding = null; }
        this._readFile(blob, FileReaderFormatEnum.text, WhatwgEncoding.labelToName(encoding) || 'UTF-8');
    };
    /**
     * Aborts the file reader.
     */
    FileReader.prototype.abort = function () {
        var window = this.constructor._ownerDocument.defaultView;
        window.clearTimeout(this._loadTimeout);
        window.clearTimeout(this._parseTimeout);
        if (this.readyState === FileReaderReadyStateEnum.empty ||
            this.readyState === FileReaderReadyStateEnum.done) {
            this.result = null;
            return;
        }
        if (this.readyState === FileReaderReadyStateEnum.loading) {
            this.readyState = FileReaderReadyStateEnum.done;
            this.result = null;
        }
        this._isTerminated = true;
        this.dispatchEvent(new ProgressEvent(FileReaderEventTypeEnum.abort));
        this.dispatchEvent(new ProgressEvent(FileReaderEventTypeEnum.loadend));
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
        if (this.readyState === FileReaderReadyStateEnum.loading) {
            throw new DOMException('The object is in an invalid state.', DOMExceptionNameEnum.invalidStateError);
        }
        this.readyState = FileReaderReadyStateEnum.loading;
        this._loadTimeout = window.setTimeout(function () {
            if (_this._isTerminated) {
                _this._isTerminated = false;
                return;
            }
            _this.dispatchEvent(new ProgressEvent(FileReaderEventTypeEnum.loadstart));
            var data = blob._buffer;
            if (!data) {
                data = Buffer.alloc(0);
            }
            _this.dispatchEvent(new ProgressEvent(FileReaderEventTypeEnum.loadstart, {
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
                    case FileReaderFormatEnum.buffer: {
                        _this.result = new Uint8Array(data).buffer;
                        break;
                    }
                    case FileReaderFormatEnum.binaryString: {
                        _this.result = data.toString('binary');
                        break;
                    }
                    case FileReaderFormatEnum.dataURL: {
                        // Spec seems very unclear here; see https://github.com/w3c/FileAPI/issues/104.
                        var contentType = WhatwgMIMEType.parse(blob.type) || 'application/octet-stream';
                        (_this.result) = "data:".concat(contentType, ";base64,").concat(data.toString('base64'));
                        break;
                    }
                    case FileReaderFormatEnum.text: {
                        _this.result = WhatwgEncoding.decode(data, encoding);
                        break;
                    }
                }
                _this.readyState = FileReaderReadyStateEnum.done;
                _this.dispatchEvent(new ProgressEvent(FileReaderEventTypeEnum.load));
                _this.dispatchEvent(new ProgressEvent(FileReaderEventTypeEnum.loadend));
            });
        });
    };
    FileReader._ownerDocument = null;
    return FileReader;
}(EventTarget));
export default FileReader;
