export default function Footer(){
    const footerItems = ["Help", "Books", "Read", "Download", "Like", "Bookmark"];
    
    return(
        <footer className="border-gray-4 bg-paper dark:bg-dark-layer-bg mx-4 mt-[50px] border-t p-5 dark:mx-0 dark:border-none md:mt-24 text-label-2 dark:text-dark-label-2" aria-label="Footer">
            <div className="w-full">
                <div className="m-auto max-w-6xl">
                    <nav className="text-xs md:flex md:text-sm">
                        <div>
                            Copyrights
                        </div>
                        <div>
                            {footerItems.map((item, index) => (
                                <span key={index}>{item} | </span>
                            ))}
                        </div>
                        <div>
                            India
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}