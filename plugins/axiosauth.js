export default ({
  $axios,
  app,
  redirect
}, inject) => {
  // Create a custom axios instance

  function getTimeJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const jsonLoad = JSON.parse(jsonPayload)
    return jsonLoad
  }

  const apiauth = $axios.create({
    headers: {
      common: {}
    }
  })

  // Set baseURL to something different
  apiauth.setBaseURL("http://192.176.145.49:5000/eshier")

  apiauth.interceptors.request.use(async function (config) {
    const fromCookie = app.$cookies.get('auth', {parseJSON: false});
    const fromSession = sessionStorage.getItem('auth');
    let jwts = ''
    let token

    // Do something before request is sent
    if (fromCookie === undefined) {
      jwts = getTimeJwt(fromSession)
      token = fromSession
    } else if (fromSession === null) {
      jwts = getTimeJwt(fromCookie)
      token = fromCookie
    } else {
      app.$cookies.remove('esh.aid', {
        parseJSON: false
      })
      try {
        sessionStorage.removeItem('esh.aid');
      } catch (err) {}
      redirect('/auth/login')
    }

    // check expire date().getTime() - jwt_decoded.exp <= 5 minute in unix timestamp
    const isValid = jwts.exp - Math.round((new Date()).getTime() / 1000)

    if (isValid <= 420) {
      // request new token from backend

      const isCookie = app.$cookies.get('esh.aid', {
        parseJSON: false
      })
      const isSession = app.$getses("esh.aid")
      let aid;

      if (isCookie === undefined) {
        aid = isSession
      } else if (isSession === null) {
        aid = isCookie
      }

      aid = aid.split("54a1e50b0567435=")[0]
      aid = aid + '90d3eae0c8165ffdc20='

      token = await $axios.post('/auth/refresh-token', {
        token: aid
      }).then((response) => {
        if (isCookie === undefined) {
          sessionStorage.setItem(
            'esh.aid',
            response.data.refresh_token
          )
          sessionStorage.setItem(
            'auth',
            response.data.access_token
          )
        } else if (isSession === null) {
          const d = new Date()
          d.setTime(d.getTime() + 90 * 24 * 60 * 60 * 1000)
          const expires = 'expires=' + d.toUTCString()
          document.cookie = 'esh.aid=' + response.data.refresh_token + ';' + expires + ';path=/';
          document.cookie = 'auth=' + response.data.access_token + ';' + expires + ';path=/';
        } else {
          app.$cookies.remove('esh.aid', {
            parseJSON: false
          })
          try {
            sessionStorage.removeItem('esh.aid');
          } catch (err) {}
          redirect("/auth/login")
        }
        console.log(token)
        token = response.data.access_token
        return token
      }).catch((error) => {
        console.log(error)
        app.$cookies.remove('esh.aid', {
          parseJSON: false
        })
        try {
          sessionStorage.removeItem('esh.aid');
        } catch (err) {}
        redirect("/auth/login")
      });
    }

    config.headers.common.Authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  apiauth.interceptors.response.use(function (config) {
    // Do something before request is sent
    console.log('ini dari interceptors after request before response')
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // apiauth.onRequest(config => {
  //   const isCookie = app.$cookies.get('auth', {
  //     parseJSON: false
  //   })
  //   const isSession = sessionStorage.getItem('auth');
  //   let tokens = 'notoken'

  //   if (isCookie === undefined) {
  //     tokens = isSession
  //   } else if (isSession === null) {
  //     tokens = isCookie
  //   }

  //   config.headers.common.Authorization = `Bearer ${tokens}`;
  // });

  // Inject to context as $apiauth
  inject('apiauth', apiauth)
}
