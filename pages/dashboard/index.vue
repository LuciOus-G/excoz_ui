<template>
  <div class="flex flex-wrap">
    <div class="w-full bg-gray-800 py-6 px-6 rounded-3xl">
      <div class="flex justify-between text-white items-center mb-8">
        <p class="text-2xl font-bold">Home</p>
        <p class="">December, 12</p>
      </div>

      <div class="flex w-full items-center place-content-around px-20 mb-4 text-white">
        <div class="w-full bg-gray-900 mr-6 p-3 rounded-xl">
          <div class="flex justify-between">
            <p>This Week Income</p>
            <span class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-green-500 bi bi-caret-up-fill mr-1" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
              </svg>
              <p class="m-0 p-0 text-green-400 text-sm">12%</p>
            </span>
          </div>
          <div class="py-8 font-bold text-2xl">
            Rp. 12,000,000.00
          </div>
        </div>

        <div class="w-full bg-gray-900 mr-6 p-3 rounded-xl">
          <div class="flex justify-between">
            <p>This Week Outcome</p>
            <span class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-green-500 bi bi-caret-up-fill mr-1" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
              </svg>
              <p class="m-0 p-0 text-green-400 text-sm">12%</p>
            </span>
          </div>
          <div class="py-8 font-bold text-2xl">
            Rp. 12,000,000.00
          </div>
        </div>

        <div class="w-full bg-gray-900 p-3 rounded-xl">
          <div class="flex justify-between">
            <p>This Week Orders</p>
            <span class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-green-500 bi bi-caret-up-fill mr-1" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
              </svg>
              <p class="m-0 p-0 text-green-400 text-sm">12%</p>
            </span>
          </div>
          <div class="py-8 font-bold text-2xl">
            1000
          </div>
        </div>

      </div>

      <center>
        <div class="flex items-center place-content-around pb-8">
          <charts-LineChart width="1600" height="600" :chartdata="chartdata" :chartoptions="chartoptions" />
        </div>
      </center>


      <div class="flex justify-between items-center pb-8">
        <div class="basis-1/2 w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
          <div class="bg-gray-800 rounded-3xl px-6 pt-6">
            <div class="flex text-white text-2xl pb-6 font-bold">
              <p>TOP 10 Menus</p>
            </div>
            <div>
              <div
                class="
                  border-t
                  solid
                  border-gray-700
                  p-4
                  flex
                  2xl:items-start
                  w-full
                  hover:bg-gray-700
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="profile image"
                  class="object-cover w-10 h-10 rounded-full"
                />
                <div class="pl-4 w-full">
                  <div class="flex items-center justify-between w-full">
                    <div class="text-white font-medium">Stephanie</div>
                    <div class="text-white font-medium">Stephanie</div>
                    <div
                      class="
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        h-7
                        w-7
                      "
                    >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="basis-1/2 w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
          <div class="bg-gray-800 rounded-3xl px-6 pt-6">
            <div class="flex text-white text-2xl pb-6 font-bold">
              <p>Client Messages</p>
            </div>
            <div>
              <div
                class="
                  border-t
                  solid
                  border-gray-700
                  p-4
                  flex
                  2xl:items-start
                  w-full
                  hover:bg-gray-700
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="profile image"
                  class="object-cover w-10 h-10 rounded-full"
                />
                <div class="pl-4 w-full">
                  <div class="flex items-center justify-between w-full">
                    <div class="text-white font-medium">Stephanie</div>
                    <div
                      class="
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        h-7
                        w-7
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-white"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p class="my-2 text-sm text-gray-400">
                    I got your first assignment. It was quite good. 🥳 We can
                    continue with the next assignment.
                  </p>
                  <p class="text-right text-gray-400 text-sm">Dec, 12</p>
                </div>
              </div>
              <div
                class="
                  border-t
                  solid
                  border-gray-700
                  p-4
                  flex
                  2xl:items-start
                  w-full
                  hover:bg-gray-700
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="profile image"
                  class="object-cover w-10 h-10 rounded-full"
                />
                <div class="pl-4 w-full">
                  <div class="flex items-center justify-between w-full">
                    <div class="text-white font-medium">Mark</div>
                    <div
                      class="
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        h-7
                        w-7
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-white"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p class="my-2 text-sm text-gray-400">
                    Hey, can tell me about progress of project? I'm waiting for
                    your response.
                  </p>
                  <p class="text-right text-gray-400 text-sm">Dec, 12</p>
                </div>
              </div>
              <div
                class="
                  border-t
                  solid
                  border-gray-700
                  p-4
                  flex
                  2xl:items-start
                  w-full
                  hover:bg-gray-700
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  alt="profile image"
                  class="object-cover w-10 h-10 rounded-full"
                />
                <div class="pl-4 w-full">
                  <div class="flex items-center justify-between w-full">
                    <div class="text-white font-medium">David</div>
                    <div
                      class="
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        h-7
                        w-7
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-white"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p class="my-2 text-sm text-gray-400">
                    Hey, can tell me about progress of project? I'm waiting for
                    your response.
                  </p>
                  <p class="text-right text-gray-400 text-sm">Dec, 12</p>
                </div>
              </div>
              <div
                class="
                  border-t
                  solid
                  border-gray-700
                  p-4
                  flex
                  2xl:items-start
                  w-full
                  hover:bg-gray-700
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  alt="profile image"
                  class="object-cover w-10 h-10 rounded-full"
                />
                <div class="pl-4 w-full">
                  <div class="flex items-center justify-between w-full">
                    <div class="text-white font-medium">Mark</div>
                    <div
                      class="
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        h-7
                        w-7
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-white"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p class="my-2 text-sm text-gray-400">
                    I am really impressed! Can't wait to see the final result.
                  </p>
                  <p class="text-right text-gray-400 text-sm">Dec, 12</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="basis-1/2 w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
          <div class="bg-gray-800 rounded-3xl px-6 pt-6">
            <div class="flex text-white text-2xl pb-6 font-bold">
              <p>Client Messages</p>
            </div>
            <div>
              <div
                class="
                  border-t
                  solid
                  border-gray-700
                  p-4
                  flex
                  2xl:items-start
                  w-full
                  hover:bg-gray-700
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="profile image"
                  class="object-cover w-10 h-10 rounded-full"
                />
                <div class="pl-4 w-full">
                  <div class="flex items-center justify-between w-full">
                    <div class="text-white font-medium">Stephanie</div>
                    <div
                      class="
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        h-7
                        w-7
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-white"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p class="my-2 text-sm text-gray-400">
                    I got your first assignment. It was quite good. 🥳 We can
                    continue with the next assignment.
                  </p>
                  <p class="text-right text-gray-400 text-sm">Dec, 12</p>
                </div>
              </div>
              <div
                class="
                  border-t
                  solid
                  border-gray-700
                  p-4
                  flex
                  2xl:items-start
                  w-full
                  hover:bg-gray-700
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  alt="profile image"
                  class="object-cover w-10 h-10 rounded-full"
                />
                <div class="pl-4 w-full">
                  <div class="flex items-center justify-between w-full">
                    <div class="text-white font-medium">Mark</div>
                    <div
                      class="
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        h-7
                        w-7
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-white"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p class="my-2 text-sm text-gray-400">
                    Hey, can tell me about progress of project? I'm waiting for
                    your response.
                  </p>
                  <p class="text-right text-gray-400 text-sm">Dec, 12</p>
                </div>
              </div>
              <div
                class="
                  border-t
                  solid
                  border-gray-700
                  p-4
                  flex
                  2xl:items-start
                  w-full
                  hover:bg-gray-700
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  alt="profile image"
                  class="object-cover w-10 h-10 rounded-full"
                />
                <div class="pl-4 w-full">
                  <div class="flex items-center justify-between w-full">
                    <div class="text-white font-medium">David</div>
                    <div
                      class="
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        h-7
                        w-7
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-white"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p class="my-2 text-sm text-gray-400">
                    Hey, can tell me about progress of project? I'm waiting for
                    your response.
                  </p>
                  <p class="text-right text-gray-400 text-sm">Dec, 12</p>
                </div>
              </div>
              <div
                class="
                  border-t
                  solid
                  border-gray-700
                  p-4
                  flex
                  2xl:items-start
                  w-full
                  hover:bg-gray-700
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  alt="profile image"
                  class="object-cover w-10 h-10 rounded-full"
                />
                <div class="pl-4 w-full">
                  <div class="flex items-center justify-between w-full">
                    <div class="text-white font-medium">Mark</div>
                    <div
                      class="
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        h-7
                        w-7
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-white"
                      >
                        <polygon
                          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        />
                      </svg>
                    </div>
                  </div>
                  <p class="my-2 text-sm text-gray-400">
                    {{ orgId }}
                  </p>
                  <p class="text-right text-gray-400 text-sm">Dec, 12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
export default {
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  layout: 'dashboard_layout',
  data() {
    return {
      orgId: this.$orgId(),
      chartdata: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Income',
            backgroundColor: '#EA5C2B',
            borderColor: '#CFFFDC',
            borderWidth: 3,
            fill: false,
            data: [10, 20, 30, 40, 20, 35, 18],
          },
          {
            label: 'Outcome',
            backgroundColor: '#FF7F3F',
            borderColor: '#F6D860',
            borderWidth: 3,
            fill: false,
            data: [18, 15, 14, 16, 19, 25, 3],
          },
        ],
      },

      chartoptions: {
        responsive: false,
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: '#303030',
          titleFontColor: '#ffffff',
        },
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: true,
                color: 'rgba(255, 255, 255, 0.3)',
              },
              scaleLabel: {
                display: true,
                labelString: 'Days',
              },
            },
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: true,
                color: 'rgba(255, 255, 255, 0.3)',
              },
              scaleLabel: {
                display: true,
                labelString: 'Value (Rp)',
              },
            },
          ],
        },
      },
    }
  },

  computed: {
    myStyles() {
      return {
        width: '100vh',
        position: 'relative',
      };
    }
  }
}

</script>

<style>
canvas {
  width: 100%;
  height: 50%;
}
</style>


