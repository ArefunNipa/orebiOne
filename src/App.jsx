import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Logo from './assets/logo.png'
import Menu from './components/Menu'
import Button from './components/Button'
import Heading from './components/Heading'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUser, FaShoppingCart, FaTruck, FaUndo } from "react-icons/fa";
import { TbNumber2 } from "react-icons/tb";
import Heading2 from './components/Heading2'


function App() {
  return (
    <>
      {/* Menu-top Part Start */}
      <div className="bg-white border-b border-borderColor py-5">
        <Container>
          <Flex className={"items-center"}>
            <div className="w-[15%]">
              <Image imgSrc={Logo} imgAlt={"Image"} />
            </div>
            <div className="w-[65%]">
              <Flex className={"justify-center text-menuColor"}>
                <Menu menuTxt={"Home"} className={"hover:font-bold"} />
                <Menu menuTxt={"Shop"} className={"hover:font-bold"} />
                <Menu menuTxt={"About"} className={"hover:font-bold"} />
                <Menu menuTxt={"Contacts"} className={"hover:font-bold"} />
                <Menu menuTxt={"Journal"} className={"hover:font-bold"} />
              </Flex>
            </div>

          </Flex>
        </Container>
      </div>
      {/* Menu-top Part End */}


      {/* Menu Part Start */}
      <div className="bg-menuBg border-b border-borderColor py-5">
        <Container>
          <Flex className={"items-center"}>
            <div className="w-[20%]">
              <Flex className={"justify-start"}>
                <HiMiniBars3BottomLeft className='relative top-[2px] mr-1' />
                <Button btnName={"Shop by Category"} />
              </Flex>
            </div>
            <div className="w-[60%]">
              <form class="flex items-center justify-center relative">
                <input placeholder="Search Products" type="search" className='inline w-full border-0 bg-white py-3 pl-3 pr-3 leading-5 placeholder-gray-300 focus:outline-none' />
                <button type="submit" className='absolute right-4 top-0 bottom-0 text-xl'><IoSearch /></button>
              </form>
            </div>
            <div className="w-[20%]">
              <Flex className={"justify-end"}>
                <FaUser className='mr-5' />
                <FaShoppingCart />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Menu Part End */}

      {/* Banner Part Start */}
      <div className="bg-banner bg-no-repeat bg-cover bg-center">
        <Container>
          <Flex className={"justify-start"}>
            <div className="w-1/2 ml-40 py-44">
              <Heading as={"h1"} className={"font-DMSans font-bold text-[64px] w-8/12 "} text={"Final Offer"} />
              <Heading2 className={"font-DMSans font-normal text-xl w-10/12 mt-4"}
                text={"Up to #50%# sale for all furniture items!"} />
              <Button btnName={"Shop Now"} className={"py-4 px-12 mt-16 text-white bg-black "} />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Banner Part End */}

      {/* Information Part Start */}
      <div className="bg-white py-10">
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="w-[30%]">
              <Flex className={"items-center"}>
                <TbNumber2 className='pr-2 text-3xl'/>
                <Heading as={"h4"} className={"font-DMSans text-[16px]"} text={"Two years warranty"} />
              </Flex>
            </div>
            <div className="w-[30%]">
              <Flex className={"items-center justify-center"}>
                <FaTruck className='pr-2 text-3xl'/>
                <Heading as={"h4"} className={"font-DMSans text-[16px]"} text={"Two years warranty"} />
              </Flex>
            </div>
            <div className="w-[30%]">
              <Flex className={"items-center justify-end"}>
                <FaUndo className='pr-2 text-3xl'/>
                <Heading as={"h4"} className={"font-DMSans text-[16px]"} text={"Two years warranty"} />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Information Part End */}
    </>
  )
}
export default App
