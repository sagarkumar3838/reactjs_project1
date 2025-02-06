import React from 'react'

const AddBus = () => {
  return (
    <div class="w-330px p-40px-30px bg-gray-300 rounded-lg shadow-2xl">
    <h1 class="text-3xl font-semibold mb-35px text-gray-700">Login</h1>
    <form action="#">
      <div class="relative w-full h-50px mb-20px">
        <input required="" type="text" class="w-full h-full pl-45px outline-none border-none text-xl bg-gray-300 text-gray-700 rounded-2xl shadow-inner focus:shadow-inner">
        <span class="absolute top-0 left-0 w-50px h-full flex items-center justify-center text-gray-700"><svg class="" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 512 512" y="0" x="0" height="20" width="50" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path class="" data-original="#000000" fill="#595959" d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51 .255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"></path></g></svg></span>
        <label class="absolute top-1/2 transform -translate-y-1/2 left-11 pointer-events-none text-gray-500">Email or Phone</label>
      </div>
      <div class="relative w-full h-50px mb-20px">
        <input required="" type="password" class="w-full h-full pl-45px outline-none border-none text-xl bg-gray-300 text-gray-700 rounded-2xl shadow-inner focus:shadow-inner">
        <span class="absolute top-0 left-0 w-50px h-full flex items-center justify-center text-gray-700"><svg class="" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 512 512" y="0" x="0" height="20" width="50" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><path class="" data-original="#000000" fill="#595959" d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0"></path></g></svg></span>
        <label class="absolute top-1/2 transform -translate-y-1/2 left-11 pointer-events-none text-gray-500">Password</label>
      </div>
      <div class="text-left mb-2">
        <a href="#" class="text-gray-500 text-base">Forgot Password?</a>
      </div>
      <button class="w-full h-50px text-xl font-semibold bg-gray-300 rounded-2xl border-none outline-none cursor-pointer text-gray-700 shadow-md hover:bg-gray-400">Sign in</button>
      <div class="mt-2 text-gray-700 text-base">
        Not a member? <a href="#" class="text-blue-500 hover:underline">signup now</a>
      </div>
    </form>
  </div>
  )
}

export default AddBus
