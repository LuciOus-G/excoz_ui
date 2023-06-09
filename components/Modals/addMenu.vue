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
            <div class="bg-gray-900 text-white p-7">
                <div class="form">
                    <input type="text" id="email" class="form-input" autocomplete="off" placeholder=" ">
                    <label for="email" class="form-label">Email</label>
                </div>
            </div>
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
      this.$emit('toggle-modal', 'ini dari modal');
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

.form-input{
    position: relative;
    width: 20rem;
    height: 3rem;
    border:2px solid #e1e5ee;
    border: 2px solid #e1e5ee;
    border-radius: 0.5rem;
    font-family: inherit;
    font-size: inherit;
    color: white;
    outline: none;
    padding: 1.25rem;
    background: none;
}

.form-input:hover{
    border-color: #adffff;
}

.form-input:hover{
    border-color: #18ffff;
}

.form-label{
    position: relative;
    width: 20rem;
    height: 3rem;
    padding: 0 0.5rem;
    color: white;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
}

.form-input:focus ~ .form-label,
.form-input:not(:placeholder-shown).form-input:not(:focus) ~ .form-label {
  top: -0.5rem;
  font-size: 0.8rem;
  left: 0.8rem;
}

</style>