import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { TbShoppingCart } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-white shadow-xl fixed w-full z-[999]">
      <Navbar fluid rounded className="mx-auto max-w-screen-xl w-full">
        <Navbar.Toggle />
        <Navbar.Brand as={Link} to="/">
          {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            MyShop
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-4">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <div className="indicator">
                <TbShoppingCart className="w-6 h-6" />
                <span className="badge badge-sm indicator-item">8</span>{" "}
              </div>
            }>
            <Dropdown.Header>
              <span className="block text-sm">8 Items</span>
            </Dropdown.Header>
            <Dropdown.Header>Subtotal: $999</Dropdown.Header>
            <Dropdown.Item as={Link} icon={TbShoppingCart} to={"/product/cart"}>
              View Cart
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }>
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        {/* <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/services">
          Services
        </Navbar.Link>
        <Navbar.Link as={Link} to="/pricing">
          Pricing
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
}
