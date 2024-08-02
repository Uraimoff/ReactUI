export const ButtonComponent=`
<button>Hello</button>
`

export const obj = [
    {
      name: "Ibrohim",
      token: "Ibrohimasdvdffghkfdffdsll112"
    },
    {
      name: "Murod",
      token: "Murodasdfghfsdfkllfds112"
    },
    {
      name: "Abdulloh",
      token: "Abdullohasdfghkklkll112"
    },
    {
      name: "Sanjar",
      token: "Sanjarasdfghkfsdfllfds112"
    },
    {
      name: "Islom",
      token: "Islomasdfghkdffdskll112"
    },
    {
      name: "Akmal",
      token: "Akmalasdfghkklkllfds12"
    },
    {
      name: "Webbrain",
      token: "Webbrainasdfghkklklldsff"
    },
    {
      name: "Ilxom",
      token: "Ilxomasdfghkklkll112"
    },
    {
      name: "akow",
      token: "akowasdfghkklklldcsc"
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
    href="#"
    className="text-blue-500 hover:opacity-75 active:opacity-60 py-1.5 px-3 text-sm transition"
  >
    Link Button
  </a>
</div>

    ),
    component: `
 <div className="p-4 rounded-md flex gap-2">
  {/* Primary Button */}
  <button
    className="!bg-blue-500 text-white py-2 px-4 rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Primary Button
  </button>

  {/* Default Button */}
  <button
    className="border border-gray-300 py-2 px-4 rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Default Button
  </button>

  {/* Dashed Button */}
  <button
    className="border border-dashed border-gray-300 py-2 px-4 rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Dashed Button
  </button>

  {/* Text Button */}
  <button
    className="bg-transparent  py-2 px-4 transition hover:opacity-75 active:opacity-60"
  >
    Text Button
  </button>

  {/* Link Button */}
  <a
    href="#"
    className="text-blue-500 hover:opacity-75 active:opacity-60 py-2 px-4 transition"
  >
    Link Button
  </a>
</div>
`,
    description: 'There are five type of buttons in antd, namely they are: primary buttons, default buttons, dashed buttons, text buttons, and link buttons.'
  },
  {
    id: 1,
    title: 'Buttons',
    content: (<div>Hello World</div>),
    component: `
    <div className="flex flex-wrap space-x-2 space-y-2">
      <button className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700">
        <AiOutlineSearch className="text-xl" />
      </button>
      <button className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-full w-8 h-8 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700">
        A
      </button>
      <button className="flex items-center p-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700">
        <span className="mr-2">Search</span>
        <AiOutlineSearch className="text-xl" />
      </button>
      <button className="flex items-center p-2 bg-white border border-gray-300 text-black rounded hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
        <AiOutlineSearch className="text-xl" />
      </button>
      <button className="flex items-center p-2 bg-white border border-gray-300 text-black rounded hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
        <span className="mr-2">Search</span>
        <AiOutlineSearch className="text-xl" />
      </button>
      <button className="flex items-center p-2 bg-white border-dotted border-2 border-gray-300 text-black rounded hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
        <AiOutlineSearch className="text-xl" />
      </button>
      <button className="flex items-center p-2 bg-white border-dotted border-2 border-gray-300 text-black rounded hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
        <span className="mr-2">Search</span>
        <AiOutlineSearch className="text-xl" />
      </button>
      <button className="flex items-center justify-center p-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700">
        <AiOutlineLoading3Quarters className="text-xl animate-spin" />
        <span className="ml-2">Loading</span>
      </button>
    </div>
`,
    description: 'this is button'
  },
]
  