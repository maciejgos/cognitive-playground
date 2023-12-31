import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  handleSearch: () => void;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string;
}

/*
  Navigation bar component with a logo and search bar with magnifying glass icon.
*/
export function NavbarComponent({ handleSearch, setSearchInput, searchInput }:NavbarProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */} 
        <span className="font-semibold text-xl tracking-tight">Logo</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="relative flex items-center w-full">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute right-0 mr-2" />
          <input className="block w-full bg-gray-900 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search" value={searchInput} onChange={(e) => handleChange(e)} onKeyDown={(e) => handleKeyDown(e)} />
        </div>
      </div>
    </nav>
  )
}