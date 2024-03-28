'use client'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import React from 'react'
const navItem = [
    {
        name: 'Dashboard Overview',
        link: '/dashboard'
    },
    {
        name: 'All Products',
        link: '/dashboard/all-products'
    }
]
const Sidebar = () => {
    return (
        <nav className="w-full p-2 mt-4">
            <Link className="flex-shrink" href='/'>Logo</Link>
            <NavigationMenu className="hidden md:block ">
                <NavigationMenuList className='flex flex-col justify-start text-left items-start'>
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
    )
}

export default Sidebar