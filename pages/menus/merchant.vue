<template>
  <div>
    <div class="flex item-center">
      <div class="xl:flex mb-4 w-full">
        <!-- #fafafa -->
        <div
          style="background: #fafafa; overflow: hidden; overflow-y: scrool"
          class="
            md:w-3/5
            xml:p-10 xml:pt-10
            xmp:p-5 xmp:pt-5
            md:p-10 md:pt-10
            rounded-r-3xl
          "
        >
          <div class="flex justify-between">
            <div class="text-3xl"><strong>Menu</strong> Category</div>
            <div class="relative text-gray-600">
              <input type="search" name="serch" placeholder="Search for food, coffe, etc" class="w-60 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
              <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                </svg>
              </button>
            </div>
          </div>

          <div>
            <div id="showmore" class="mt-16 show-category flex overflow-hidden flex-wrap">
              <div v-for="(x, count) in sampledata" :key='count'>
                  <button @click="setActive(count)" class="w-28 mb-6 active:bg-amber-400">
                    <center>
                      <div class="mx-3.5">
                        <div :style="{'background-color': activeButton === count + 1 ? color : ''}" class="w-full rounded-lg bg-white pb-4 pt-2">
                          <div class="rounded-lg border border-slate-200 py-4 mx-2 bg-white">
                            <img src="https://img.icons8.com/pastel-glyph/64/000000/fire-element.png" width="28" height="28" class="p-auto"/>
                          </div>
                          <p class="mt-4">Popular</p>
                        </div>
                      </div>
                    </center>
                  </button>
              </div>
            </div>
            <button @click="showMore" class="sticky bottom-0 left-2/4">
              <svg id="showmoreicon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down rotate-icon " viewBox="0 0 16 16">
                <title>Show More</title>
                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>

          <div class="flex justify-between mt-10">
            <div class="text-3xl"><strong>Choose</strong> Order</div>
          </div>

          <center>
            <div class="flex justify-between mt-10 flex-wrap mb-10">
                <button v-for="(x, count) in sampledata" :key="count" class="bg-white xmp:w-40 xl:w-52 pt-8 pb-2 mt-4 mr-2 rounded-lg hover:shadow-lg hover:scale-110 transform transition-all duration-100">
                  <center>
                    <img
                      class="rounded-2xl"
                      src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
                      alt="menu"
                      width="70%"
                      height="60%"
                    />
                    <p class="font-semibold mt-4 text-lg">{{ x.name }}</p>
                    <p class="text-gray-500 text-lg">{{ x.price }}</p>
                  </center>
                </button>
            </div>
          </center>

        </div>

        <div
          id="cart"
          class="
            z-50
            md:w-2/5
            xml:p-7 xml:pt-10
            xmp:p-5 xmp:pt-5
            md:p-100 md:pt-10
            fixed
            md:right-0
            xmp:bottom-0 xmp:bg-white xmp:w-full
            md:h-full
            nshowcart
          "
        >
          <div class="flex mb-5 place-content-evenly">
            <div class="w-4/5 text-3xl"><strong>Order </strong>Menu</div>
            <button class="md:hidden" @click="showCart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>

          <div
            style="overflow: hidden; overflow-y: scroll"
            class="scrolbar xmp:text-sm h-96 lanscp 2xl:h-4/5 xmp:p-0 xml:p-10 1/5md:p-10"
          >
            <!-- will loop the item in cart -->
            <div
              class="
                flex
                align-items-center
                hover:shadow-lg hover:scale-110
                p-4
                rounded-2xl
                hover:hover:w-3/5
                transform
                transition-all
                duration-100
              "
            >
              <img
                class="rounded-2xl"
                src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
                alt="menu"
                width="80px"
                height="80px"
              />

              <div class="ml-6">
                <div class="">Appple</div>
                <div class="text-gray-500">Rp. 3000</div>
              </div>

              <div style="margin: auto">2x</div>
              <div class="text-gray-500" style="margin: auto">Rp. 6000</div>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Edit</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title>Delete</title>
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <!--  -->

            <!--  -->
            <div
              class="
                flex
                align-items-center
                hover:shadow-lg hover:scale-110
                p-4
                rounded-2xl
                hover:hover:w-3/5
                transform
                transition-all
                duration-100
              "
            >
              <img
                class="rounded-2xl"
                src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
                alt="menu"
                width="80px"
                height="80px"
              />

              <div class="ml-6">
                <div class="">Appple</div>
                <div class="text-gray-500">Rp. 3000</div>
              </div>

              <div style="margin: auto">2x</div>
              <div class="text-gray-500" style="margin: auto">Rp. 6000</div>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Edit</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title>Delete</title>
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              class="
                flex
                align-items-center
                hover:shadow-lg hover:scale-110
                p-4
                rounded-2xl
                hover:hover:w-3/5
                transform
                transition-all
                duration-100
              "
            >
              <img
                class="rounded-2xl"
                src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
                alt="menu"
                width="80px"
                height="80px"
              />

              <div class="ml-6">
                <div class="">Appple</div>
                <div class="text-gray-500">Rp. 3000</div>
              </div>

              <div style="margin: auto">2x</div>
              <div class="text-gray-500" style="margin: auto">Rp. 6000</div>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Edit</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title>Delete</title>
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              class="
                flex
                align-items-center
                hover:shadow-lg hover:scale-110
                p-4
                rounded-2xl
                hover:hover:w-3/5
                transform
                transition-all
                duration-100
              "
            >
              <img
                class="rounded-2xl"
                src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
                alt="menu"
                width="80px"
                height="80px"
              />

              <div class="ml-6">
                <div class="">Appple</div>
                <div class="text-gray-500">Rp. 3000</div>
              </div>

              <div style="margin: auto">2x</div>
              <div class="text-gray-500" style="margin: auto">Rp. 6000</div>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Edit</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title>Delete</title>
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              class="
                flex
                align-items-center
                hover:shadow-lg hover:scale-110
                p-4
                rounded-2xl
                hover:hover:w-3/5
                transform
                transition-all
                duration-100
              "
            >
              <img
                class="rounded-2xl"
                src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
                alt="menu"
                width="80px"
                height="80px"
              />

              <div class="ml-6">
                <div class="">Appple</div>
                <div class="text-gray-500">Rp. 3000</div>
              </div>

              <div style="margin: auto">2x</div>
              <div class="text-gray-500" style="margin: auto">Rp. 6000</div>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Edit</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title>Delete</title>
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              class="
                flex
                align-items-center
                hover:shadow-lg hover:scale-110
                p-4
                rounded-2xl
                hover:hover:w-3/5
                transform
                transition-all
                duration-100
              "
            >
              <img
                class="rounded-2xl"
                src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
                alt="menu"
                width="80px"
                height="80px"
              />

              <div class="ml-6">
                <div class="">Appple</div>
                <div class="text-gray-500">Rp. 3000</div>
              </div>

              <div style="margin: auto">2x</div>
              <div class="text-gray-500" style="margin: auto">Rp. 6000</div>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Edit</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title>Delete</title>
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              class="
                flex
                align-items-center
                hover:shadow-lg hover:scale-110
                p-4
                rounded-2xl
                hover:hover:w-3/5
                transform
                transition-all
                duration-100
              "
            >
              <img
                class="rounded-2xl"
                src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
                alt="menu"
                width="80px"
                height="80px"
              />

              <div class="ml-6">
                <div class="">Appple</div>
                <div class="text-gray-500">Rp. 3000</div>
              </div>

              <div style="margin: auto">2x</div>
              <div class="text-gray-500" style="margin: auto">Rp. 6000</div>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Edit</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
              <button class="text-gray-400 hover:text-gray-300 mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title>Delete</title>
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <!--  -->
          </div>

          <div class="flex mt-3 pl-6 w-full justify-between">
            <div class="text-gray-500">Sub Total</div>
            <div>Rp. 20.000</div>
          </div>
          <div class="flex pl-6 w-full justify-between">
            <div class="text-gray-500">Tax</div>
            <div class="text-gray-500">Rp. 20.000</div>
          </div>


          <button
            class="
              w-full
              mt-3
              block
              uppercase
              shadow
              bg-indigo-800
              hover:bg-indigo-700
              focus:shadow-outline focus:outline-none
              text-white
              py-3
              px-10
              rounded-xl
            "
          >
            pay
          </button>
        </div>

        <div class="md:hidden bg-white w-full fixed bottom-0 h-10">
          <div class="h-12 fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex left-0 mx-auto justify-between bg-indigo-800 w-11/12 rounded-3xl">
            <button @click="showCart" class="relative inline-flex flex-col items-center text-xs font-medium text-white py-3 px-6 flex-grow">
              <div class="absolute bottom-3.5 p-3 rounded-full border-4 border-white bg-indigo-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
                </svg>
              </div>
            </button>
          </div>
        </div>

      
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      activeButton: 0,
      color:'#FFDA6D',
      slideStyle: {
        width: "6.4rem"
      },

      options: {
       currentPage: 0,
       tracking: true,
       infinite: 1,
       slidesToScroll: 4,
       loop: false,
       pagination: false
     },

      sampledata: [
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 1 seafood',
          price: '$10.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 2 seafood',
          price: '$20.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 2 seafood',
          price: '$20.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 2 seafood',
          price: '$20.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 3 seafood',
          price: '$30.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 4 seafood',
          price: '$40.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 6 seafood',
          price: '$60.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 6 seafood',
          price: '$60.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 6 seafood',
          price: '$60.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 6 seafood',
          price: '$60.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 6 seafood',
          price: '$60.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 4 seafood',
          price: '$40.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 4 seafood',
          price: '$40.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 4 seafood',
          price: '$40.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 4 seafood',
          price: '$40.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 4 seafood',
          price: '$40.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 4 seafood',
          price: '$40.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 4 seafood',
          price: '$40.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 4 seafood',
          price: '$40.0',
        },
        {
          image:
            'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
          name: 'salmon fish 4 seafood',
          price: '$40.0',
        },
      ],
    }
  },
  methods: {
    showCart() {
      $('#cart').toggleClass("yshowcart")
    },
    showMore() {
      $('#showmore').toggleClass("show-more")
      $('#showmoreicon').toggleClass("rotated-icon")
      
    },
    setActive(index) {
      this.activeButton = index + 1;
    }
  },
}
</script>

<style lang="scss">
.scrolbar::-webkit-scrollbar{
  width: 7px;
  background-color: white ;
}

.scrolbar::-webkit-scrollbar-thumb{
  background-color: #BFBFBF;
  border-radius: 10px;
}

body::-webkit-scrollbar{
  width: 12px;
  background-color: white ;
}

body::-webkit-scrollbar-thumb{
  background-color: #BFBFBF;
  border-radius: 10px;
}

.show-more::-webkit-scrollbar{
  width: 6px;
  background-color: white ;
}
.show-more::-webkit-scrollbar-thumb{
  background-color: #BFBFBF;
  border-radius: 10px;
}

.show-category{
  transition: all ease 0.7s;
  height: 9rem;
}

.show-more{
  height: 20rem !important;
  overflow-y: scroll !important;
}

.rotate-icon{
  transition: all ease 0.7s;
}

.rotated-icon{
  transform: rotate(180deg);
}

@media (max-height: 580px) {
  .lanscp {
    height: 11rem;
  }
}

@media (max-width: 768px){
  .nshowcart{
    bottom: -110%;
    transition: all ease 0.7s;
  }

  .yshowcart{
    bottom: 0;
  }
}
</style>