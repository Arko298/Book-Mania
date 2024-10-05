//Reading list books in tsx 

import Footer from "../Footer/Footer"

const ReadingList = () => {
  return (
    <div className="bg-[#7F642E] p-5 flex justify-between">
      <div className="flex-1 mx-2 bg-white p-4 rounded">
        <h2 className="text-center">Section 1</h2>
        {/* Add book suggestions for Section 1 */}
      </div>
      <div className="flex-1 mx-2 bg-white p-4 rounded">
        <h2 className="text-center">Section 2</h2>
        {/* Add book suggestions for Section 2 */}
      </div>
      <div className="flex-1 mx-2 bg-white p-4 rounded">
        <h2 className="text-center">Section 3</h2>
        {/* Add book suggestions for Section 3 */}
      </div>
      <Footer/>
      
    </div>
  )
}

export default ReadingList
