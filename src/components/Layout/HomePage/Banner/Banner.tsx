import BannerCarousel from "./BannerCarousel"

const Banner = () => {

    return (
        <section className='h-svh w-full max-w-7xl mx-auto text-center space-y-4' >
            <h1 className='text-5xl mt-8 font-bold'>Welcome to our store</h1>
            <p className='text-2xl'>Get the best products at the best prices</p>
            <div className="w-2/3 pt-4 mx-auto">
                <BannerCarousel />

            </div>

        </section>
    )
}

export default Banner