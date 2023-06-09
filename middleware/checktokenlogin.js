export default function ({
  app,
  redirect
}) {
  // TODO refresh token every changing page
  console.log(app.$getses('esh.aid'))
    console.log(app.$cookies.get('esh.aid', {
      parseJSON: false
    }))
  if (app.$cookies.get('esh.aid', {
      parseJSON: false
    }) !== undefined || app.$getses('esh.aid') !== null) {
    console.log(app.$getses('esh.aid'))
    console.log(app.$cookies.get('esh.aid', {
      parseJSON: false
    }))
    redirect('/dashboard')
  }
}
