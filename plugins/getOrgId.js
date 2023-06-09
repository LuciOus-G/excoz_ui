const jwtJsDecode = require("jwt-js-decode")

export default function ({app}, inject) {
    function orgId() { 
        let fromCookie = app.$cookies.get('org.id')
        if (fromCookie === undefined) {
            // get org id by jwt
            const jwt = app.$cookies.get('auth')
            const decoded = jwtJsDecode.jwtDecode(jwt);
            app.$cookies.set("org.id", decoded.payload.eshier_organization)
            fromCookie = decoded.payload.eshier_organization
            console.log(decoded.payload)
        }
        return fromCookie
    }
    // Inject to context as $hashpw
    inject('orgId', orgId)
  }