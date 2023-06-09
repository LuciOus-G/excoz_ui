<template>
  <client-only placeholder="Loading...">
    <div class="font-sans bg-gray-800">
      <alert-RedAlert v-if="mainMessage" :bold='boldMessage' :message='mainMessage' />
      <div
        class="relative min-h-screen flex flex-col sm:justify-center items-center"
      >
        <div v-if="isToken" class="relative sm:max-w-sm w-full">
          <div
            class="
              card
              bg-blue-400
              shadow-lg
              w-full
              h-full
              rounded-3xl
              absolute
              transform
              -rotate-6
            "
          ></div>
          <div
            class="
              card
              bg-red-400
              shadow-lg
              w-full
              h-full
              rounded-3xl
              absolute
              transform
              rotate-6
            "
          ></div>
          <div
            class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md"
          >
            <label
              for=""
              class="block mt-3 text-sm text-gray-700 text-center font-semibold"
            >
              Login
            </label>
            <form class="mt-10" @submit.prevent="sendLogin">
              <LoadingBar v-if='loading' />
              <div>
                <input
                  v-model="usersData.email"
                  type="email"
                  placeholder="example@example.com"
                  class="
                    p-2
                    mt-1
                    block
                    w-full
                    border-none
                    bg-gray-100
                    h-11
                    rounded-xl
                    shadow-lg
                    hover:bg-blue-100
                    focus:bg-blue-100 focus:ring-0
                  "
                />
              </div>

              <div class="mt-7">
                <input
                  v-model="usersData.password"
                  type="password"
                  placeholder="Password"
                  class="
                    p-2
                    mt-1
                    block
                    w-full
                    border-none
                    bg-gray-100
                    h-11
                    rounded-xl
                    shadow-lg
                    hover:bg-blue-100
                    focus:bg-blue-100 focus:ring-0
                  "
                />
              </div>

              <div class="mt-7 flex">
                <label
                  for="remember_me"
                  class="inline-flex items-center w-full cursor-pointer"
                >
                  <input
                    id="remember_me"
                    v-model="isRemember"
                    value="true"
                    type="checkbox"
                    class="
                      rounded
                      border-gray-300
                      text-indigo-600
                      shadow-sm
                      focus:border-indigo-300
                      focus:ring
                      focus:ring-indigo-200
                      focus:ring-opacity-50
                    "
                    name="remember"
                  />
                  <span class="ml-2 text-sm text-gray-600"> Remember me </span>
                </label>

                <div class="w-full text-right">
                  <a
                    class="underline text-sm text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div class="mt-7">
                <button
                  class="
                    bg-blue-500
                    w-full
                    py-3
                    rounded-xl
                    text-white
                    shadow-xl
                    hover:shadow-inner
                    focus:outline-none
                    transition
                    duration-500
                    ease-in-out
                    transform
                    hover:-translate-x hover:scale-105
                  "
                >
                  Login
                </button>
              </div>

              <div class="mt-7">
                <div class="flex justify-center items-center">
                  <label class="mr-2">Not have an account?</label>
                  <NuxtLink to="/auth/register" class="text-sky-500"
                    ><u>Create one</u></NuxtLink
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  layout: 'empty',    
  middleware: 'checktokenlogin',
  data() {
    return {
      usersData: {
        email: '',
        password: '',
      },
      isRemember: [],
      isToken: true,
      loading: false,
      boldMessage: '',
      mainMessage: ''
    }
  },

  methods: {
      sendLogin() {
        this.$api
          .post('/auth/login', {
            email: this.usersData.email,
            password: this.$hashpw(this.usersData.password),
            isRemember: this.isRemember,
          })
          .then((response) => {
            const d = new Date()
            d.setTime(d.getTime() + 90 * 24 * 60 * 1000)
            const expires = 'expires=' + d.toUTCString()

            if (this.isRemember.length !== 0) {
              document.cookie ='esh.aid=' +response.data.refresh_token +';' +expires +';path=/';
              document.cookie ='auth=' +response.data.access_token +';' +expires +';path=/';
            } else {
              sessionStorage.setItem(
                'esh.aid',
                response.data.refresh_token
              )
              sessionStorage.setItem(
                'auth',
                response.data.access_token
              )
            }
            this.loading = false
            document.cookie ='org.id=' +response.data.org_id +';' +expires +';path=/;';
            this.$router.push({path: "/dashboard"})
          }).catch((error) => {
            this.loading = false
            this.boldMessage = 'Opps!, '
            this.mainMessage = 'Account you input is not exists'
            console.log(error);
      });
    },
  },
}
</script>
