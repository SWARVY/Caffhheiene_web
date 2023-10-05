export default function PostSkeletonItem() {
  return (
    <li className="grid animate-pulse rounded-md p-10 shadow-md">
      <div className="grid gap-4">
        <div className="grid gap-3">
          <div className="grid gap-1">
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
            <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
          </div>
          <div className="flex items-center gap-3">
            <svg
              className="mr-4 h-8 w-8 text-gray-200 dark:text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <div className="mr-3 h-2.5 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="mr-3 h-2.5 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="mr-3 h-2.5 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
          <div className="mr-3 h-2.5 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </li>
  )
}
