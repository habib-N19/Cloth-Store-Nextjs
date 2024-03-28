
import React from "react";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CardContent } from "@/components/ui/card";

export function TopCategoryItems() {
    return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   border border-transparent dark:border-white/[0.2] ">
        <CardContent className=" aspect-square relative p-0">
            <Image
                className="h-fit rounded"
                src='https://i.ibb.co/HCzcDs2/image.png'
                alt='img'
                height={200}
                width={400}
            />
        </CardContent>
    </div>
);
const items = [
    {
        title: <Link href='/mens-wear?category=Hoodies'>Hoodies</Link>,
        description: "Explore the top trending hoodies.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {

        title: <Link href='/mens-wear?category=Jackets'>Jackets</Link>,
        description: "Discover the latest jackets for all seasons.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {

        title: <Link href='/mens-wear?category=Jeans'>Jeans</Link>,
        description: "Find the perfect pair of jeans for you",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {

        title: <Link href='/mens-wear?category=Polo Shirts'>Polo Shirts</Link>,
        description:
            "Shop the best polo shirt brands in the world.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];
