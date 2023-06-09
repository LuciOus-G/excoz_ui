export default function ({x}, inject) {
    function hashpw(plainPassword) {
        const hashModule = require('js-sha1');
        const hashEngine = hashModule.create();
        const hashes = hashEngine.update(`6X!u6z?!2M[$&XD%qeKLxd${plainPassword}`).hex();
        return hashes;
    }  
    // Inject to context as $hashpw
    inject('hashpw', hashpw)

    function getses(name) {
        try {
            const res = sessionStorage.getItem(name);
            return res
        } catch{
            return null
        }
        
    }  
    // Inject to context as $hashpw
    inject('getses', getses)
  }