<template>
  <div id="app">
    <div class="flex-parent">
      <div
        class="flex-1 flex-parent flex-direction-column justify-content-center"
      >
        1
      </div>
      <div
        class="flex-2 flex-parent flex-direction-column justify-content-center"
      >
        2
      </div>
      <div
        class="flex-3 flex-parent flex-direction-column justify-content-center"
      >
        3
      </div>
      <div class="flex-4 flex-parent align-items-center">
        <div class="flex-parent flex-direction-column">
          <div class="flex-1">row 1</div>
          <div class="flex-1">row 2</div>
          <div class="flex-1">row 3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.flex-parent {
  // Add this class to create a flexbox parent
  display: flex;
  &.flex-direction-column {
    // This changes the layout direction from the default horizontal to vertical
    flex-direction: column;
  }
  &.justify-content-center {
    // This centers the parent's children along the main axis (horizontal by default, vertical if the parent has the  flex-direction-column class)
    justify-content: center;
  }
  &.align-items-center {
    // This centers the parent's children along the cross axis
    justify-content: center;
  }
  &.flex-wrap-wrap {
    // This allows the children to wrap as needed
    flex-wrap: wrap;
  }
  @for $i from 1 through 12 {
    // Here we loop through numbers 1 to 12, generating flex child classes for each number, eg. .flex-1, .flex-2 etc.
    .flex-#{$i} {
      flex: $i;
    }
  }
}
</style>
