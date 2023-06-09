<template>
  <div
    class=" flex justify-center items-center-200 antialiased w-full h-full"
    style="position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);z-index:100;padding:2%;background: rgba(0, 0, 0, 0.4);"
  >
    <div
      class="
        m-auto
        flex flex-col
        w-5/12
        sm:w-5/6
        lg:w-1/2
        max-w-2xl
        mx-auto
        rounded-lg
        shadow-xl
      "
    >
      <LoadingBar v-if="isLoading" />
      <form @submit.prevent="onSave">
        <div
          class="
            flex flex-row
            justify-between
            p-6
            bg-white
            rounded-tl-lg rounded-tr-lg
          "
        >
          <p class="font-semibold text-gray-800">Add a stocks</p>
          <button @click.prevent='onClose'>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <center>
          <div class="bg-white p-5 flex justify-between">
            <div class="w-full">Items Name</div>
            <div class="w-full">Stock Pieces</div>
            <div class="w-full">Single Price</div>
            <div class="w-auto">
              <button
                @click.prevent='onAdd'
                v-if="isAdd"
                class="hover:text-gray-400 mr-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <title>Add More</title>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
        </center>

        <div class="bg-white h-96 overflow-hidden overflow-y-scroll custom">
          <div v-for="(applicant, counter) in ingridients" v-bind:key="counter" class="bg-white p-5 flex justify-between">
            <div class="align-items-center mr-3">
              <div class="">
                <div class="">
                  <input v-model="applicant.name" type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 border rounded border-gray-200" required/>
                </div>
              </div>
            </div>

            <div class="align-items-center mr-3">
              <div class="">
                <div class="">
                  <input v-model="applicant.stock" type="text" class="w-full leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 border rounded border-gray-200" required/>
                </div>
              </div>
            </div>

            <div class="align-items-center mr-3">
              <div class="">
                <div class="">
                  <input v-model="applicant.price" type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 border rounded border-gray-200" required/>
                </div>
              </div>
            </div>

            <div class="align-items-center">
              <div class="">
                <div class="">
                  <button
                    @click.prevent="onDelete(counter)"
                    class="hover:text-gray-400 ml-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <title>Delete</title>
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="
            flex flex-row
            items-center
            justify-between
            p-5
            bg-white
            border-t border-gray-200
            rounded-bl-lg rounded-br-lg
          "
        >
          <button @click.prevent='onClose' class="px-4 py-2 text-white font-semibold bg-red-500 rounded">
            cancel
          </button>
          <button type="submit" class="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdd: true,
      isLoading: false,
      ingridients :[{
        name: '',
        stock: '',
        price: ''
      }]
    }
  },
  methods: {
    onClose() {
      this.$emit('toggle-modal');
    },
    onAdd() {
      console.log(this.ingridients.lenght)
      this.ingridients.push({
        name: '',
        stock: '',
        price: ''
      })
      
    },
    onDelete(counter) {
      this.ingridients.splice(counter, 1)
    },
    onSave() {
      this.isLoading=true
      this.$apiauth.post('/item/new', {
        data: this.ingridients
      }).then((response) => {
        this.$emit('toggle-modal-save')
      }).catch((error) => {
        console.log(error)
      })
      
    }
  },
}
</script>

<style>
.custom::-webkit-scrollbar{
  width: 6px;
  background-color: white ;
}
.custom::-webkit-scrollbar-thumb{
  background-color: #BFBFBF;
  border-radius: 10px;
}
</style>