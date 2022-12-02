export default function Title({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="inline-flex justify-center items-center w-full">
        <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
        <div className="absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-gray-900">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
