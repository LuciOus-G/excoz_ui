<template>
  <div class="flex flex-wrap">
    <div class="w-full bg-gray-800 py-6 px-6 rounded-3xl">
      
      <Modal v-if="isModal" @toggle-modal='toggleModal' @toggle-modal-save='toggleSave' />
      <EditModal v-if="editModal" :item='itemEdit' @toggle-modal-edit='editData' @toggle-modal-save-edit='editData' />

      <div class="flex justify-between text-white items-center mb-8">
        <p class="text-2xl font-bold">Stoks</p>
        <p class="test">December, 12</p>
      </div>
      <center>
      <div class="flex container">
        <form @submit.prevent="searchFunc">
          <button>
            <svg
              class="
                absolute
                fill-current
                h-4
                hidden
                left-0
                ml-4
                pointer-events-none
                text-gray-500
                w-4
                group-hover:text-gray-400
                sm:block
              "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
          </button>
          <input
            v-model="search"
            type="text"
            class="
              bg-gray-900
              block
              leading-normal
              pl-10
              py-1.5
              pr-4
              ring-opacity-90
              rounded-2xl
              text-gray-400
              focus:border-transparent
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            placeholder="Search"
            />
        </form>

        <button
          v-if="!loading"
          @click.prevent="toggleModal"
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
                    <th class="p-3 text-left">Items Name</th>
                    <th class="p-3 text-left">Total Restock</th>
                    <th class="p-3 text-left">Single Price</th>
                    <th class="p-3 text-left">Stocks Available</th>
                    <th class="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody v-for="(item, counter) in items" v-bind:key="counter" class="w-full">
                  <tr class="bg-gray-900 rounded-md">
                    <td class="p-3">
                      <div class="flex align-items-center">
                        <div class="">
                          <div><p class="text-center">{{item.name}}</p></div>
                        </div>
                      </div>
                    </td>
                    <td class="p-3">{{item.total_restock}}</td>
                    <td class="p-3 font-bold">{{item.single_price}}</td>
                    <td v-if="item.stock_left >= 5" class="p-3">
                      <span class="bg-green-400 text-gray-50 rounded-md px-2"
                        >{{item.stock_left}}</span
                      >
                    </td>
                    <td v-else class="p-3">
                      <span class="bg-red-400 text-gray-50 rounded-md px-2"
                        >{{item.stock_left}}</span
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
                      <button
                      @click.prevent="editData(item)"
                        class="text-gray-400 hover:text-gray-100 mx-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <title>Edit</title>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
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

              <div class="flex flex-col items-center">
                <div class="flex text-gray-500 bg-gray-900 rounded-lg">
                  <button @click.prevent="toLastPage(0)" class="h-8 w-8 flex justify-center items-center  cursor-pointer" :disabled="!isPrev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                      <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </button>
                  <button @click.prevent="next_prev(5, 'prev')" class="h-8 w-8 mr-1 flex justify-center items-center  cursor-pointer" :disabled="!isPrev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-4 h-4">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <div class="flex h-8 ">
                    <div class="w-15 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">{{curePage}} of {{page}}</div>
                  </div>
                  <button @click.prevent="next_prev(5, 'next')" class="h-8 w-8 ml-1 flex justify-center items-center  cursor-pointer" :disabled="!isNext">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-4 h-4">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                  <button @click.prevent="toLastPage(itemsLen)" class="h-8 w-8 flex justify-center items-center  cursor-pointer" :disabled="!isNext">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                      <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </button>
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
export default {
  layout: 'dashboard_layout',
  data() {
    return {
      isModal: false,
      loading: true,
      items: [],
      editModal: false,
      page: 0,
      offset: 0,
      isPrev: false,
      isNext: true,
      itemsLen: 0,
      curePage: 0,
      search: ''

    }
  },
  async fetch() {
    await this.$apiauth.get(`/item/${this.$orgId()}`).then(
      (res) => {
        this.items = res.data.data
        this.page = res.data.metadata.pages
        this.offset = res.data.metadata.offset
        this.itemsLen = res.data.metadata.max_item
        this.curePage = res.data.metadata.current_page
        return res.data
      }
    )
    this.loading = false
  },
  methods: {
    searchFunc(){
      this.$apiauth.get(`/item/${this.$orgId()}?q=${this.search}`).then(
      (res) => {
        this.items = res.data.data
        this.page = res.data.metadata.pages
        this.offset = res.data.metadata.offset
        this.itemsLen = res.data.metadata.max_item
        this.curePage = res.data.metadata.current_page

        if (this.itemsLen <= 5){
          this.isNext = false
        } else {
          this.isNext = true
        }
        return res.data
      }
    )
    },

    next_prev(offset, method){

      let newOffset;
      if (method === 'next') {
        newOffset = this.offset + offset
        if (newOffset >= this.itemsLen || this.itemsLen <= 5) {
          this.isNext = false
        }
        this.isPrev = true
      } else if (method === 'prev'){
        newOffset = this.offset - offset
        if (newOffset <= 0 || this.itemsLen <= 5){
          this.isPrev = false
        }
        this.isNext = true
      }

      this.$apiauth.get(`/item/${this.$orgId()}?offset=${newOffset}&q=${this.search}`).then(
        (res) => {
          this.items = res.data.data
          this.offset = newOffset
          this.curePage = res.data.metadata.current_page
          return res.data
        }
      )
    },

    toLastPage(offset){
      if (offset === 0) {
        this.isPrev = false
        this.isNext = true
      } else if (offset !== 0) {
        this.isPrev = true
        this.isNext = false
      }

      this.$apiauth.get(`/item/${this.$orgId()}?offset=${offset}&q=${this.search}`).then(
        (res) => {
          this.items = res.data.data
          this.offset = offset
          this.curePage = res.data.metadata.current_page
          return res.data
        }
      )
    },

    editData(item=null){
      this.itemEdit = item
      this.editModal = !this.editModal
    },


    toggleModal() {
      this.isModal = !this.isModal
    },

    toggleSave() {
      this.$apiauth.get(`/item/${this.$orgId()}`).then(
      (res) => {
        this.items = res.data.data
        return res.data
      }
    )
      this.isModal = false

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