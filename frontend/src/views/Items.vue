<template>
  <br>
  <h2>Here are our list of items: </h2>
  <div class="overflow-x-auto">
    <table class="table table-zebra w-full">
      <thead>
      <tr>
        <th></th>
        <th>Item</th>
        <th>Description</th>
        <th>Image</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>1</th>
        <td>punane tulp</td>
        <td>see on kevadlill, sibulaga</td>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="https://live.staticflickr.com/5120/7070214021_a1bd2773d9_b.jpg" alt="punane tulp"/>
              </div>
            </div>
          </div>
        </td>
      </tr>

      </tbody>
    </table>

    <!--    <table class="table table-zebra w-full">
          &lt;!&ndash; head &ndash;&gt;
          <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <th>{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img :src="item.image" :alt="item.name"/>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>-->

  </div>
</template>

<script>
export default {
  name: "items"
}

/*
import { PrismaClient } from '@prisma/client'
import { reactive } from 'vue'

const prisma = new PrismaClient()

export default {
  setup() {
    const state = reactive({
      items: []
    })

    const fetchData = async () => {
      const items = await prisma.item.findMany()
      state.items = items
    }

    fetchData()

    return {
      ...state
    }
  }
} */
</script>

<style scoped>

</style>