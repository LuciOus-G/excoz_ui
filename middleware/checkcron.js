export default function ({
    app,
    redirect
  }) {
    // TODO refresh token every changing page
    const source = app.$axios.CancelToken.source();
    source.cancel()
  }
  