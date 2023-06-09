<template>
  <div class="flex flex-wrap">
    <div class="w-full bg-gray-800 py-6 px-6 rounded-3xl">
      <div class="flex justify-between text-white items-center mb-8">
        <p class="text-2xl font-bold">Stoks</p>
        <p class="test">December, 12</p>
      </div>
      <Modals-addMenu v-if="isModal" @toggle-modal='toggleModals' @toggle-modal-save='toggleSave' />
      <center>
      <div class="flex container">
        <button
          @click.prevent="toggleModal"
          v-if="!loading"
          class="
            ml-auto
            bg-gray-900
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded-full
          "
        >
          Add Items
        </button>
      </div>
      </center>
      <LoadingBar v-if="loading" />
      <div v-else-if="!loading" class="items-center justify-between items-center pb-8">
        <div class="items-center justify-center">
          <div class="col-span-12">
            <div class="overflow-auto lg:overflow-visible">
              <table
                class="
                  container
                  mx-auto
                  table
                  text-gray-400
                  border-separate
                  text-sm
                "
              >
                <thead class="bg-gray-900 text-gray-500 w-full">
                  <tr>
                    <th class="p-3">Items Name</th>
                    <th class="p-3 text-left">Total Restock</th>
                    <th class="p-3 text-left">Single Price</th>
                    <th class="p-3 text-left">Stocks Available</th>
                    <th class="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody class="w-full">
                  <tr class="bg-gray-900">
                    <td class="p-3">
                      <div class="flex align-items-center">
                        <div class="ml-14">
                          <div class="">Appple</div>
                        </div>
                      </div>
                    </td>
                    <td class="p-3">Technology</td>
                    <td class="p-3 font-bold">200.00$</td>
                    <td class="p-3">
                      <span class="bg-green-400 text-gray-50 rounded-md px-2"
                        >available</span
                      >
                    </td>
                    <td class="flex p-3">
                      <a
                        href="#"
                        class="text-gray-400 hover:text-gray-100 mr-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <title>Add Stocks</title>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        class="text-gray-400 hover:text-gray-100 mx-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <title>Edit</title>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        class="text-gray-400 hover:text-gray-100 ml-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <title>Delete</title>
                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard_layout',
  data() {
    return {
      loading: true,
      isModal: false
    }
  },
  async fetch() {
    const source = this.$axios.CancelToken.source();

    await this.$apiauth.get('/user/test', { cancelToken: source.token }
    ).then(
      (res) => {
        return res.data
      }
    )
    this.loading = false
  },
  methods: {
    toggleModals(test) {
      console.log(test)
      this.isModal = !this.isModal
    },
    toggleModal() {
      this.isModal = !this.isModal
    }
  },
}
</script>

<style>
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

tr td:nth-child(n + 5),
tr th:nth-child(n + 5) {
  border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: 0.625rem 0 0 0.625rem;
}
</style>