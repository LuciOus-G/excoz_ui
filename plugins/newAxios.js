export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
        }
      }
    })
  
    // Set baseURL to something different
    api.setBaseURL("http://192.176.145.49:5000/eshier")
  
    // Inject to context as $api
    inject('api', api)
  }