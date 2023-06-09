<template>
  <div
    class=" flex justify-center items-center-200 antialiased w-full h-full"
    style="position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);z-index:100;padding:2%;background: rgba(0, 0, 0, 0.4);"
  >
    <div
      class="
        flex flex-col
        w-5/12
        sm:w-5/6
        lg:w-1/2
        max-w-2xl
        mx-auto
        rounded-lg
        shadow-xl
        h-1/2
      "
    >
      <LoadingBar v-if="isLoading" />
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
      <div class="flex flex-col px-6 py-5 bg-gray-50 h-3/4">

        <table>
          <thead class="w-full">
            <tr>
              <th class="p-3 text-left">Items Name</th>
              <th class="p-3 text-left">Stock Pieces</th>
              <th class="p-3 text-left">Single Price</th>
            </tr>
          </thead>

          <tbody class="w-full" style="overflow-y:auto;">
            <tr>
              <td class="p-3">
                <div class="align-items-center">
                  <div class="">
                    <div class="">
                      <input v-model="ingridients.name" type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 border rounded border-gray-200" />
                    </div>
                  </div>
                </div>
                <td class="p-3">
                <div class="align-items-center">
                  <div class="">
                    <div class="">
                      <input v-model="ingridients.stock" type="text" class="w-full leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 border rounded border-gray-200" />
                    </div>
                  </div>
                </div>
              </td>
              <td class="p-3">
                <div class="align-items-center">
                  <div class="">
                    <div class="">
                      <input v-model="ingridients.price" type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 border rounded border-gray-200" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
        <button @click.prevent='onSave' class="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      isLoading: false,
      ingridients :{
        name: this.item.name,
        stock: this.item.total_restock,
        price: this.item.single_price
      }
    }
  },
  methods: {
    onClose() {
      this.$emit('toggle-modal-edit');
    },

    onSave() {
      this.isLoading=true
      this.$apiauth.post('/item/new', {
        data: this.ingridients
      }).then((response) => {
        this.$emit('toggle-modal-save-edit')
      }).catch((error) => {
        console.log(error)
      })
      
    }
  },
}
</script>