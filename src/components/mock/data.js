export const ButtonComponent=`
<button>Hello</button>
`

export const obj = [
    {
      name: "Ibrohim",
      token: "Ibrohimasdvdffghkfdffdsll112"
    },
    {
      name: "Admin",
      token: "Adminasdvdffghkfdffdsll112"
    },
  ];

export const button = [
  {
    id: 1,
    title: 'Type',
    content: (
<div className="p-4 rounded-md flex-wrap flex gap-2">
  {/* Primary Button */}
  <button
    className="!bg-blue-500 text-white py-1.5 px-3 text-sm rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Primary Button
  </button>

  {/* Default Button */}
  <button
    className="border border-gray-300 py-1.5 px-3 text-sm rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Default Button
  </button>

  {/* Dashed Button */}
  <button
    className="border border-dashed border-gray-300 py-1.5 px-3 text-sm rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Dashed Button
  </button>

  {/* Text Button */}
  <button
    className="bg-transparent  py-1.5 px-3 text-sm transition hover:opacity-75 active:opacity-60"
  >
    Text Button
  </button>

  {/* Link Button */}
  <a
    href="#hi"
    className="text-blue-500 hover:opacity-75 active:opacity-60 py-1.5 px-3 text-sm transition"
  >
    Link Button
  </a>
</div>

    ),
    component: `
 <div className="p-4 rounded-md flex-wrap flex gap-2">
  {/* Primary Button */}
  <button
    className="!bg-blue-500 text-white py-1.5 px-3 text-sm rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Primary Button
  </button>

  {/* Default Button */}
  <button
    className="border border-gray-300 py-1.5 px-3 text-sm rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Default Button
  </button>

  {/* Dashed Button */}
  <button
    className="border border-dashed border-gray-300 py-1.5 px-3 text-sm rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Dashed Button
  </button>

  {/* Text Button */}
  <button
    className="bg-transparent  py-1.5 px-3 text-sm transition hover:opacity-75 active:opacity-60"
  >
    Text Button
  </button>

  {/* Link Button */}
  <a
    href="#hi"
    className="text-blue-500 hover:opacity-75 active:opacity-60 py-1.5 px-3 text-sm transition"
  >
    Link Button
  </a>
</div>
`,
    description: 'There are five type of buttons in DocUI, namely they are: primary buttons, default buttons, dashed buttons, text buttons, and link buttons.'
  },
  {
    id: 1,
    title: 'Buttons',
    content: (
      <div class="p-4 rounded-md flex-wrap flex gap-2">
      {/* <!-- Small Square Button --> */}
      <button class="bg-blue-500 text-white p-2 text-sm rounded-md transition hover:opacity-75 active:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
      </button>

      {/* <!-- Small Circle Button --> */}
      <button class="bg-blue-500 text-white p-2 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
      </button>

      {/* <!-- Medium Circle Button --> */}
      <button class="bg-blue-500 text-white p-3 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
      </button>

      {/* <!-- Button with Text --> */}
      <button class="bg-blue-500 text-white py-2 px-4 text-sm rounded-full transition hover:opacity-75 active:opacity-60 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          download
      </button>
  </div>
    ),
    component: `
    <div class="p-4 rounded-md flex-wrap flex gap-2">
        <!-- Small Square Button -->
        <button class="bg-blue-500 text-white p-2 text-sm rounded-md transition hover:opacity-75 active:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

        <!-- Small Circle Button -->
        <button class="bg-blue-500 text-white p-2 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

        <!-- Medium Circle Button -->
        <button class="bg-blue-500 text-white p-3 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

        <!-- Button with Text -->
        <button class="bg-blue-500 text-white py-2 px-4 text-sm rounded-full transition hover:opacity-75 active:opacity-60 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            download
        </button>
    </div>
`,
    description: 'this is button'
  },
  {
    id: 1,
    title: 'Buttons',
    content: (
      <div class="p-4 rounded-md flex-wrap flex gap-2">
      {/* <!-- Small Square Button --> */}
      <button class="bg-blue-500 text-white p-2 text-sm rounded-md transition hover:opacity-75 active:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
      </button>

      {/* <!-- Small Circle Button --> */}
      <button class="bg-blue-500 text-white p-2 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
      </button>

      {/* <!-- Medium Circle Button --> */}
      <button class="bg-blue-500 text-white p-3 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
      </button>

      {/* <!-- Button with Text --> */}
      <button class="bg-blue-500 text-white py-2 px-4 text-sm rounded-full transition hover:opacity-75 active:opacity-60 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          download
      </button>
  </div>
    ),
    component: `
    <div class="p-4 rounded-md flex-wrap flex gap-2">
        <!-- Small Square Button -->
        <button class="bg-blue-500 text-white p-2 text-sm rounded-md transition hover:opacity-75 active:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

        <!-- Small Circle Button -->
        <button class="bg-blue-500 text-white p-2 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

        <!-- Medium Circle Button -->
        <button class="bg-blue-500 text-white p-3 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

        <!-- Button with Text -->
        <button class="bg-blue-500 text-white py-2 px-4 text-sm rounded-full transition hover:opacity-75 active:opacity-60 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            download
        </button>
    </div>
`,
    description: 'this is button'
  },
]
  