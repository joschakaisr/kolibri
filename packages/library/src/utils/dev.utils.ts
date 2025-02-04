import { ModalService } from '../components/modal/service';
import { ToasterService } from '../components/toast/toaster';

let WINDOW: Window | null = null;
let DOCUMENT: Document | null = null;

export const configKoliBri = (window: Window): void => {
	if (window instanceof Window) {
		WINDOW = window;
		if (WINDOW.document instanceof Document) {
			DOCUMENT = window.document;
		} else {
			console.warn(`The given Window has no valid Document.`);
		}
	} else {
		console.warn(`The given Window is not valid.`);
	}
};

export const getWindow = (): Window => (WINDOW || typeof window === 'undefined' ? (null as unknown as Window) : window);
export const getDocument = (): Document => (DOCUMENT || typeof getWindow().document === 'undefined' ? (null as unknown as Document) : getWindow().document);

let META_CONFIG: string | null = null;
let DEV_MODE: boolean | null = null;
let EXPERIMENTAL_MODE: boolean | null = null;
let COLOR_CONTRAST_ANALYSIS: boolean | null = null;

export const getDevMode = (): boolean => DEV_MODE === true;
export const getExperimalMode = (): boolean => EXPERIMENTAL_MODE === true;
export const getColorContrastAnalysis = (): boolean => COLOR_CONTRAST_ANALYSIS === true;

type LogShield = {
	label: string;
	style: string;
};

type LogShieldOptions = {
	classifier?: string;
	forceLog?: boolean;
	overwriteStyle?: string;
};

export class Log {
	private static shield: LogShield = {
		label: '%cKoliBri',
		style: 'color: white; background: #666; font-weight: bold; padding: .25em .5em; border-radius: 3px; border: 1px solid #000',
	};

	private static mapToArray(msg: unknown | unknown[]): unknown[] {
		return Array.isArray(msg) ? msg : [msg];
	}

	private static handleClassifier(classifier?: string): string {
		if (typeof classifier === 'string' && classifier.length > 0) {
			return `${Log.shield.label} | ${classifier}`;
		} else {
			return Log.shield.label;
		}
	}

	private static getShield(options?: LogShieldOptions): string[] {
		return [Log.handleClassifier(options?.classifier), `${Log.shield.style};${options?.overwriteStyle || ''}`];
	}

	public static debug(msg: unknown | unknown[], options?: LogShieldOptions): void {
		if (DEV_MODE || options?.forceLog === true) {
			console.log(...Log.getShield(options), ...Log.mapToArray(msg));
		}
	}

	public static info(msg: unknown | unknown[], options?: LogShieldOptions): void {
		if (DEV_MODE || options?.forceLog === true) {
			console.info(...Log.getShield(options), ...Log.mapToArray(msg));
		}
	}

	public static trace(msg: unknown | unknown[], options?: LogShieldOptions): void {
		if (DEV_MODE || options?.forceLog === true) {
			console.trace(...Log.getShield(options), ...Log.mapToArray(msg));
		}
	}

	public static warn(msg: unknown | unknown[], options?: LogShieldOptions): void {
		if (DEV_MODE || options?.forceLog === true) {
			console.warn(...Log.getShield(options), ...Log.mapToArray(msg));
		}
	}

	public static error(msg: unknown | unknown[], options?: LogShieldOptions): void {
		if (DEV_MODE || options?.forceLog === true) {
			console.error(...Log.getShield(options), ...Log.mapToArray(msg));
		}
	}

	public static throw(msg: unknown | unknown[], options?: LogShieldOptions): void {
		if (DEV_MODE || options?.forceLog === true) {
			throw new Error(...Log.getShield(options), ...Log.mapToArray(msg));
		}
	}
}

const initMeta = (): void => {
	if (DEV_MODE === null && EXPERIMENTAL_MODE === null && COLOR_CONTRAST_ANALYSIS === null) {
		const meta = getDocument().querySelector('meta[name="kolibri"]');
		if (meta && meta.hasAttribute('content')) {
			META_CONFIG = meta.getAttribute('content');
			if (typeof META_CONFIG === 'string') {
				DEV_MODE = META_CONFIG.includes('dev-mode=true');
				EXPERIMENTAL_MODE = META_CONFIG.includes('experimental-mode=true');
				COLOR_CONTRAST_ANALYSIS = META_CONFIG.includes('color-contrast-analysis=true');
			}
		}
	} else {
		console.warn(`You can only initialize DEV_MODE and COLOR_CONTRAST_ANALYSIS once.`);
	}
};

let KoliBri: Record<string, unknown> | null = null;
export const getKoliBri = (): Record<string, unknown> => KoliBri || {};
export const initKoliBri = (): void => {
	if (KoliBri === null) {
		KoliBri = getWindow().KoliBri || {};
		const Modal = new ModalService();
		const Toaster = new ToasterService(getDocument());
		Object.defineProperty(KoliBri, 'Modal', {
			get: function (): ModalService {
				return Modal;
			},
		});
		Object.defineProperty(KoliBri, 'Toaster', {
			get: function (): ToasterService {
				return Toaster;
			},
		});
		initMeta();
	} else {
		console.warn(`You can only initialize KoliBri once.`);
	}
};
export { KoliBri };

export const renderDevAdvice = (): void => {
	if (getWindow().KoliBri === undefined) {
		Object.defineProperty(window, 'KoliBri', {
			get: function () {
				return KoliBri;
			},
		});
	}
	if (getKoliBri().adviceShown !== true) {
		Object.defineProperty(KoliBri, 'adviceShown', {
			get: function () {
				return true;
			},
		});
		Log.debug(
			`

Sie verwenden die KoliBri-Komponenten-Bibliothek. Sollten Sie Verbesserungsvorschläge haben oder ein Problem feststellen, dann wenden Sie sich gerne an kolibri@itzbund.de.

Hinweise:
- WAI Web Accessibility Tutorials (https://www.w3.org/WAI/tutorials/)
- The first rule of ARIA is “Don't use ARIA” (https://cccaccessibility.org/web-1/web-developer-tutorials/how-not-to-use-aria)
- BIK BITV-Test (https://www.bitvtest.de/bitv_test.html)
- A11y-Checkliste (https://www.a11yproject.com/checklist/)
- BSI CON.10: Entwicklung von Webanwendungen (Edition 2021)

`
		);
	}
};

let nonce = (): string => Math.floor(Math.random() * 16777215).toString(16);

if (process.env.NODE_ENV === 'test') {
	nonce = (): string => 'nonce';
}

export { nonce };
