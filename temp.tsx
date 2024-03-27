
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
    return (
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <Link className="relative mx-3 mt-3 h-60 overflow-hidden rounded-xl block" href="#">
                <Image alt="product image" className="object-cover" src="/placeholder.svg" />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    39% OFF
                </span>
            </Link>
            <div className="mt-4 px-5 pb-5">
                <Link href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                </Link>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-slate-900">$449</span>
                        <span className="text-sm text-slate-900 line-through">$699</span>
                    </p>
                    <div className="flex items-center">
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <StarIcon className="text-yellow-400" />
                        <span className="ml-2 text-sm font-semibold text-slate-600">5.0</span>
                    </div>
                </div>
                <Button className="w-full">Add to cart</Button>
            </div>
        </div>
    )
}

function StarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
