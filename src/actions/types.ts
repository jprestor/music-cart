import { Dispatch } from 'redux';

/* Actions */
type AsyncFunc = (...args: any[]) => Promise<any>;

export { AsyncFunc, Dispatch };
