<template>
  <br>
  <h2>Here are our list of items: </h2>
  <div class="overflow-x-auto">
    <table class="table table-zebra w-full">
      <!-- head -->
      <thead>
      <tr>
        <th></th>
        <th>Item</th>
        <th>Description</th>
        <th>Image</th>
      </tr>
      </thead>
      <tbody>
      <!-- row 1 -->
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
      <!-- row 2 -->
      <tr>
        <th>2</th>
        <td>valge nartsiss</td>
        <td>kevadlill, ka sibulaga</td>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="https://lillesibulad.ee/wp-content/uploads/2022/08/narcissus-recurvus-584113_1920.jpg"
                     alt="valge nartsiss"/>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>sinilill</td>
        <td>kevadlill, mis õitseb metsas</td>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="https://www.muhutikand.ee/wp-content/uploads/2010/04/sl21.jpg" alt="sinilill"/>
              </div>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "items"
}
</script>

<style scoped>

</style>