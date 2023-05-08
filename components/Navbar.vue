<template>
  <div class="navbar bg-base-100 container mx-auto">
    <div class="navbar-start">
      <div class="dropdown">
        <label class="btn btn-ghost btn-circle" tabindex="0">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </label>
        <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" tabindex="0">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li>
            <button @click="logOut()">Log Out</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl">Ecommerce</a>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"/>
          </svg>
        </div>
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <span class="indicator-item px-1 py-0.5 bg-gray-300 rounded-lg text-[10px]">2</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                stroke-linecap="round"
                stroke-linejoin="round"/>
          </svg>
        </div>
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"/>
          </svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const client = useSupabaseAuthClient()
const logOut = () => {
  client.auth.signOut()
}

</script>
