import { getEnv } from '../../utils/env';

class Gnav {
    constructor(body, el) {
        this.el = el;
        this.body = body;
        this.env = getEnv();
        this.desktop = window.matchMedia('(min-width: 1200px)');
    }
}
