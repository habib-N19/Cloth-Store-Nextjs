import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { CSSProperties } from "react";


const ViewMore = ({ url, styles }: { url: string, styles: string }) => {
    return (
        <Button className={`mt-6 md:mt-12 ${styles}`}><Link className='inline-flex items-center' href={`/${url}`}>View All<ChevronRightIcon /> </Link></Button>
    );
};

export default ViewMore;