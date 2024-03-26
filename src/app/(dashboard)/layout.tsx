import Footer from "@/components/Layout/Shared/Footer/Footer"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}

export default DashboardLayout