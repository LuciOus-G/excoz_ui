<template>
  <center>
    <div
      class="
        items-center
        w-1/2
        bg-red-100
        border border-red-400
        text-red-700
        px-4
        py-3
        rounded
        sticky 
        top-0
      "
      role="alert"
    >
      <strong class="font-bold">{{bold}}</strong>
      <span class="block sm:inline">{{message}}</span>
    </div>
  </center>
</template>

<script>
export default {
    props: ['bold', 'message']
}
</script>