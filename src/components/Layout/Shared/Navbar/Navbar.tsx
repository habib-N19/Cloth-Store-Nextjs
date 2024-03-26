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
        <nav className="flex items-center justify-around w-full max-w-7xl mx-auto">
            <Link className="flex-shrink" href='/'>Logo</Link>
            <NavigationMenu className="hidden md:block">
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