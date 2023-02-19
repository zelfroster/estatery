import { SiHomeadvisor } from 'react-icons/si'
import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(isOpen => !isOpen)
  return (
    <header className="w-full px-8 py-5 flex gap-12 justify-between items-center border-b-[1px] border-lightGray relative lg:pr-0">
      <div className="flex gap-1 items-center">
        <SiHomeadvisor className='text-2xl text-purple' />
        <p className="text-md font-bold text-[#24104f]">Estatery</p>
      </div>
      <div className={`${isOpen ? "flex" : "hidden"} absolute lg:relative flex-col gap-4 md:flex md:flex-row items-center md:w-full bg-lightGray lg:bg-transparent top-16 right-2 z-50 p-4 lg:p-0 md:inset-0 rounded-md`}>
        <nav className='flex flex-col gap-2 text-sm lg:flex-row lg:gap-4'>
          <a href="/" className="px-3 py-1 bg-lightGray text-purple rounded-sm">Rent</a>
          <a href="/" className="px-3 py-1 duration-200 hover:bg-lightGray hover:text-purple hover:rounded-sm">Buy</a>
          <a href="/" className="px-3 py-1 duration-200 hover:bg-lightGray hover:text-purple hover:rounded-sm">Sell</a>
          <a href="/" className="px-3 py-1 duration-200 hover:bg-lightGray hover:text-purple hover:rounded-sm">Manage Property</a>
          <a href="/" className="px-3 py-1 duration-200 hover:bg-lightGray hover:text-purple hover:rounded-sm">Resources</a>
        </nav>
        <div className="text-purple text-sm flex flex-col gap-4 lg:flex-row lg:ml-auto">
          <button className="px-4 py-2 border-purple/40 border-2 rounded-md duration-200 hover:border-purple/80 lg:border-lightGray">Login</button>
          <button className="px-4 py-2 border-lightGray border-2 rounded-md bg-purple text-white duration-200 hover:border-purple/80">Sign up</button>
        </div>
      </div>
      <div onClick={toggleMenu} className="text-2xl text-darkPurple">
        {
          isOpen ? (
            <CgClose className="lg:hidden" />
          ) : (
            <FiMenu className="lg:hidden" />
          )
        }
      </div>
    </header>
  )
}

export default Header
