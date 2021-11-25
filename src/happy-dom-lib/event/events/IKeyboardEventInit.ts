import IUIEventInit from '../IUIEventInit';

export default interface IKeyboardEventInit extends IUIEventInit {
	key?: string;
	code?: string;
	location?: number;
	ctrlKey?: boolean;
	shiftKey?: boolean;
	altKey?: boolean;
	metaKey?: boolean;
	repeat?: boolean;
	isComposing?: boolean;
}
