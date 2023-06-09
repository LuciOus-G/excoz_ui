<template>
  <div class="flex flex-wrap">
    <div class="w-full bg-gray-800 py-6 px-6 rounded-3xl">
      <div class="flex justify-between text-white items-center mb-8">
        <p class="text-2xl font-bold">{{ title }}</p>
        <p class="">December, 12</p>
      </div>
      <div class="flex flex-wrap justify-between items-center pb-8">
        <line-chart :chartdata="chartdata" :option="chartoptions"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartdata: {
        labels: ['January', 'February', 'February', 'February', 'February', 'February', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 20, 20, 20, 20, 20],
          },
        ],
      },

      chartoptions: {
        responsive: true,
        maintainAspectRatio: false,
      },

      title: {
        type: String,
        default: '',
      }
    }
  },
}
</script>


<script>
export default {
  name: 'Dash',
  props: ['title']
}
</script>