type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

const PostFilter = ({ searchQuery, onSearchChange }: Readonly<PostFilterProps>) => {
  return ( 
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search posts..."
        className="w-full py-2 px-4 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
   );
}
 
export default PostFilter;