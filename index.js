/**
 * @file mofron-comp-linertext/index.js
 * @brief grid component for mofron
 * @license MIT
 */
const Text    = require('mofron-comp-text');
const ExtLine = require('mofron-comp-extendline');
const ConfArg = mofron.class.ConfArg;
const comutl  = mofron.util.common;

module.exports = class extends Text {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("linertext");
            
	    /* init config */
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    initDomConts () {
        try {
            super.initDomConts();
            
	    let liner = new ExtLine({
                            size:      new ConfArg('100%','0.03rem'),
			    //baseColor: '#5a5a96',
			    visible:   false
		        });
            this.child(liner);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    accentColor (prm,opt) {
        try {
            return this.child()[0].baseColor(prm,opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    liner (prm) {
        try {
            this.child()[0].visible(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
