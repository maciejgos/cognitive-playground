/*
  1. We should have a main content with a search bar and a list of items
  2. On the bottom we should have a footer
  3. Selected item should be open in a modal
  4. In modal window we should have a button to close it and 5 predefined buttons on right side
*/
import { LeftSidebarComponent } from './components/LeftSidebarComponent'
import { NavbarComponent } from './components/NavbarComponent'
import { SearchResultsComponent } from './components/SearchResultsComponent'

export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <div className='grid grid-flow-col-dense grid-cols-3'>
        <div className='bg-white-200'>
          <LeftSidebarComponent />
        </div>
        <div className='col-span-2'>
          <SearchResultsComponent />
        </div>
      </div>
    </main>
  )
}