import { Link } from 'react-scroll'
import './navbar.css'

// import title from './KY Header Logo.svg'

function NavBar() {

    function toggle(){
        document.getElementById("navbar-cta").classList.toggle("hidden");
    }

    const h = window.innerHeight;

    return (
        <div class="outer-nav" style={{height: h}}>
        <div class="sidebar">
            <div class="title"></div>
            <ul class="nav">
                <li>
                    <a href="#">
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Profile</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Event Registration</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Ambassador</span>
                    </a>
                </li>
                <li>
                    {/* <a href="#">
                        <span>Login</span>
                    </a> */}

                    <Link to="/Login">
                     <button>Login</button>
                    </Link>
                    
                </li>
                {/* <li class="logout">
                    <a href="#">
                        <span>Logout</span>
                    </a>
                </li> */}
            </ul>
            <div class="logout">Log Out</div>
        </div>
        <div class="sideline1"></div>
        <div class="sideline2"></div>
        
        </div>
        
    // <nav data-aos="fade-down" data-aos-duration="3000" class="border-gray-200 mx-0 z-10 py-4" style={{backgroundColor: "#256D85"}}>
    //     <div class="container1 flex flex-wrap justify-between items-center mx-auto w-full lg:px-8 px-3">
    //         <a href="/" class="flex">
    //             <span class="self-center text-2xl  font-semibold border-transparent border-b-4 whitespace-nowrap text-dark-800">KASHIYATRA</span>
    //         </a>
    //         <div class="flex md:order-2">
    //             <button type="button" class="text-white mx-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-1 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
    //             <button data-collapse-toggle="navbar-cta" type="button" onClick={toggle} class="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="true">
    //                 <span class="sr-only">Open main menu</span>
    //                 <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    //             </button>
    //         </div>
    //         <div id="navbar-cta" class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
    //             <ul class="flex flex-col content-between items-center p-3 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium md:border-0">
    //             <li class="transition ease-in-out delay-200 justify-center align-middle items-center hover:bg-black rounded-lg hover:rounded-lg py-2 hover:py-2 px-2 hover:px-2 hover:text-white ">
    //                 <Link to="whyca" smooth={true} class="block py-2 pr-2 pl-3 cursor-pointer text-dark-700 rounded text-xl bg-dark-400 hover:bg-dark-500 md:p-0 dark:text-dark-400 dark:hover:bg-dark-700 dark:border-gray-700">WHY CA?</Link>
    //             </li>
    //             <li class="transition ease-in-out delay-200 hover:bg-black rounded-lg hover:rounded-lg py-2 hover:py-2 px-2 hover:px-2 hover:text-white ">
    //                 <Link to="duties" smooth={true} class="block py-2 pr-2 pl-3 cursor-pointer text-dark-700 rounded text-xl hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-dark-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">DUTIES</Link>
    //             </li>
    //             <li class="transition ease-in-out delay-200 hover:bg-black rounded-lg hover:rounded-lg py-2 hover:py-2 px-2 hover:px-2 hover:text-white ">
    //                 <Link to="benefits" smooth={true} class="block py-2 pr-2 pl-3 cursor-pointer text-dark-700 rounded text-xl hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-dark-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">BENEFITS</Link>
    //             </li>
    //             <li class="transition ease-in-out delay-200 hover:bg-black rounded-lg hover:rounded-lg py-2 hover:py-2 px-2 hover:px-2 hover:text-white ">
    //                 <Link to="contacts" smooth={true} class="block py-2 pr-2 pl-3 cursor-pointer text-dark-700 rounded text-xl hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-dark-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">CONTACTS</Link>
    //             </li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>
    )
}

export default NavBar;

// style={`:hover::before{
    // content: "",
    // position: absolute,
    // width: 100%,
    // height: 2px,
    // bottom: 0,
    // left:0,
    // background-color: white,
    // transform: scaleX(0),
    // transition: all .3s ease-in-out 0s,
// }`}