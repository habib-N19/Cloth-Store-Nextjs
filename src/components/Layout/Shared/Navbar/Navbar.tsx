'use client';
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";


const Navbar = () => {
    const navItem = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Categories',
            link: '/categories'
        }
        ,
        {
            name: 'Products',
            link: '/products'
        }
        ,
        {
            name: 'Flash Sale',
            link: '/flash-sale'
        }
        ,
        {
            name: 'About Us',
            link: '/about'
        },
        {
            name: 'Contact Us',
            link: '/contact'
        }]
    return (
        <nav className="flex items-center justify-around w-full max-w-7xl mx-auto py-2">
            <Link className="flex-shrink" href='/'>Logo</Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="md:hidden" size="icon" variant="outline">
                        <HamburgerMenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    {
                        navItem.map((item, index) => (
                            <SheetClose asChild key={index}>
                                <Link href={item.link} legacyBehavior passHref>

                                    {item.name}

                                </Link>
                            </SheetClose>
                        )
                        )
                    }
                </SheetContent>
            </Sheet>

            <NavigationMenu className="hidden  md:block">
                <NavigationMenuList>
                    {
                        navItem.map((item, index) => (
                            <NavigationMenuItem key={index}>
                                <Link href={item.link} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {item.name}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>)
                        )
                    }
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}
export default Navbar;