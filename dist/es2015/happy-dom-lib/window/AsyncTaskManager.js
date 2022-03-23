var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AsyncTaskTypeEnum from './AsyncTaskTypeEnum';
/**
 * Handles async tasks.
 */
export default class AsyncTaskManager {
    constructor() {
        this.tasks = {};
        this.queue = [];
    }
    /**
     * Returns a promise that is fulfilled when async tasks are complete.
     * This method is not part of the HTML standard.
     *
     * @returns Promise.
     */
    whenComplete() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const timerID = global.setTimeout(() => {
                    this.endTimer(timerID);
                }, 0);
                this.startTimer(timerID);
                this.queue.push({ resolve, reject });
            });
        });
    }
    /**
     * Cancels all tasks.
     *
     * @param [error] Error.
     */
    cancelAllTasks(error) {
        if (this.tasks[AsyncTaskTypeEnum.timer]) {
            for (const id of this.tasks[AsyncTaskTypeEnum.timer]) {
                global.clearTimeout(id);
            }
        }
        const promises = this.queue;
        this.tasks = {};
        this.queue = [];
        for (const promise of promises) {
            if (error) {
                promise.reject(error);
            }
            else {
                promise.resolve();
            }
        }
    }
    /**
     * Starts a timer.
     *
     * @param id Timer ID.
     */
    startTimer(id = null) {
        this.tasks[AsyncTaskTypeEnum.timer] = this.tasks[AsyncTaskTypeEnum.timer] || [];
        this.tasks[AsyncTaskTypeEnum.timer].push(id);
    }
    /**
     * Ends a timer.
     *
     * @param id Timer ID.
     */
    endTimer(id = null) {
        if (this.tasks[AsyncTaskTypeEnum.timer]) {
            const index = this.tasks[AsyncTaskTypeEnum.timer].indexOf(id);
            if (index !== -1) {
                this.tasks[AsyncTaskTypeEnum.timer].splice(index, 1);
                if (this.tasks[AsyncTaskTypeEnum.timer].length === 0) {
                    delete this.tasks[AsyncTaskTypeEnum.timer];
                    if (Object.keys(this.tasks).length === 0) {
                        this.cancelAllTasks();
                    }
                }
            }
        }
    }
    /**
     * Starts an async task.
     *
     * @param type Task type.
     */
    startTask(type) {
        this.tasks[type] = this.tasks[type] || [];
        this.tasks[type].push(type);
    }
    /**
     * Ends an async task.
     *
     * @param type Task type.
     * @param [error] Error.
     */
    endTask(type, error) {
        if (error) {
            this.cancelAllTasks(error);
        }
        else if (this.tasks[type]) {
            this.tasks[type].pop();
            if (this.tasks[type].length === 0) {
                delete this.tasks[type];
                if (Object.keys(this.tasks).length === 0) {
                    this.cancelAllTasks();
                }
            }
        }
    }
    /**
     * Returns the amount of running tasks by type.
     *
     * @param type Task type.
     * @returns Count.
     */
    getRunningCount(type) {
        if (this.tasks[type]) {
            return this.tasks[type].length;
        }
        return 0;
    }
}
//# sourceMappingURL=AsyncTaskManager.js.map