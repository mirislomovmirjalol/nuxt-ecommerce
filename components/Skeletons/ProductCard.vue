<template>
  <div
      class="animate-pulse border border-1 border-gray-200 my-4 mx-4 p-2 rounded-xl w-72 h-auto flex-shrink-0 snap-center cursor-wait">
    <skeletons-image class="aspect-square object-cover rounded-md"/>
    <div class="p-3">
      <div class="mt-4 flex flex-row justify-between flex-wrap">
        <!--   left side   -->
        <div class="w-2/3">
          <p class="mt-1 text-sm text-gray-500 font-medium w-28 h-3 bg-slate-200 mb-2 rounded-md"/>
          <h3 class="text-md text-gray-700 font-medium h-6 w-48 bg-slate-200 rounded-md"/>
          <p class="text-sm font-medium text-gray-900 mt-4 h-4 w-32 bg-slate-200 rounded-md"/>
        </div>
      </div>
    </div>
  </div>
</template>
