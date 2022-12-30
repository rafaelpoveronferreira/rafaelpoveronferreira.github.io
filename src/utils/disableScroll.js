/* Código de: https://github.com/gilbarbara/disable-scroll */

const canUseDOM = () => typeof window !== 'undefined' && !!window.document && !!window.document.createElement;
class DisableScroll {
    constructor() {
        this.handleWheel = (e) => {
            e.preventDefault();
        };
        this.handleScroll = () => {
            window.scrollTo(...this.lockToScrollPos);
        };
        this.handleKeydown = (e) => {
            let keys = this.options.keyboardKeys;
            /* istanbul ignore else */
            if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
                keys = keys.filter((key) => !this.options.authorizedInInputs.includes(key));
            }
            /* istanbul ignore else */
            if (keys.includes(e.keyCode)) {
                e.preventDefault();
            }
        };
        this.element = null;
        this.lockToScrollPos = [0, 0];
        this.options = {
            authorizedInInputs: [32, 37, 38, 39, 40],
            disableKeys: true,
            disableScroll: true,
            disableWheel: true,
            keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
            // space: 32, page up: 33, page down: 34, end: 35, home: 36
            // left: 37, up: 38, right: 39, down: 40
        };
        /* istanbul ignore else */
        if (canUseDOM()) {
            this.element = document.scrollingElement;
        }
    }
    /**
     * Disable Page Scroll
     */
    on(element, options) {
        var _a, _b, _c, _d;
        if (!canUseDOM())
            return;
        this.element = element || this.element;
        this.options = Object.assign(Object.assign({}, this.options), options);
        const { disableKeys, disableScroll, disableWheel } = this.options;
        /* istanbul ignore else */
        if (disableWheel) {
            document.addEventListener('wheel', this.handleWheel, { passive: false });
            document.addEventListener('touchmove', this.handleWheel, { passive: false });
        }
        /* istanbul ignore else */
        if (disableScroll) {
            this.lockToScrollPos = [(_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.scrollLeft) !== null && _b !== void 0 ? _b : 0, (_d = (_c = this.element) === null || _c === void 0 ? void 0 : _c.scrollTop) !== null && _d !== void 0 ? _d : 0];
            document.addEventListener('scroll', this.handleScroll, { passive: false });
        }
        /* istanbul ignore else */
        if (disableKeys) {
            document.addEventListener('keydown', this.handleKeydown, { passive: false });
        }
    }
    /**
     * Re-enable page scrolls
     */
    off() {
        if (!canUseDOM())
            return;
        document.removeEventListener('wheel', this.handleWheel);
        document.removeEventListener('touchmove', this.handleWheel);
        document.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('keydown', this.handleKeydown);
    }
}
export default new DisableScroll();
