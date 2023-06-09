<template>
  <div class="font-sans bg-gray-800">
    <div
      class="
        container
        relative
        flex flex-col
        min-h-screen
        sm:justify-center
        items-center
      "
    >
      <div class="relative w-2/4">
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
            Register Account
          </label>
          <form method="POST" action="#" class="mt-10">
            <div class="grid gap-4 grid-cols-2 grid-rows-3">
              <div>
                <input
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

              <div>
                <input
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

              <div class="mt-2">
                <input
                  type="text"
                  placeholder="First name"
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

              <div class="mt-2">
                <input
                  type="text"
                  placeholder="Last Name"
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

              <div class="mt-2">
                <input
                  type="text"
                  placeholder="Organization Name"
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

              <div class="mt-2">
                <input
                  type="text"
                  placeholder="Organization type"
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

              <div class="mt-2">
                <input
                  type="text"
                  placeholder="Phone Number"
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

              <div class="mt-2">
                <div
                  class="
                    justify-center
                    bg-grey-lighter
                  "
                >
                  <label
                    class="
                    "
                  >
                    <p style="color:#9CA9CA" class="w-full p-2
                    h-12 text-base leading-normal rounded-xl
                      shadow-lg"
                      >Select Photo Organization (Optional)</p>
                    <input type="file" class="hidden" />
                  </label>
                </div>
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
                Register
              </button>
            </div>

            <div class="mt-7">
              <div class="flex justify-center items-center">
                <label class="mr-2">Already have an account?</label>
                <NuxtLink to="/auth/login" class="decoration-sky-500"><u>Login</u></NuxtLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',

  data() {
    return {
      usersData: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    sendLogin() {
      this.$api.post('', {
        email: this.usersData.email,
        password: this.$hashpw(this.usersData.password),
        isRemember: this.isRemember,
      })
    },
  },
}
</script>
