export default function SearchBox() {
  return (
    <div className="flex justify-center items-center mx-14">
      <input
        type="text"
        placeholder="Search for a movie"
        className="my-6 px-4 py-2 rounded-md flex-1 bg-transparent border-none outline-none focus:ring-2 focus:ring-gray-800"
      />
      <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-400">
        Search
      </button>
    </div>
  );
}
