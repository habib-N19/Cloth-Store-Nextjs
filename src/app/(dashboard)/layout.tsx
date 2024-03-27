import RootLayout from "@/components/Layout/Shared/RootLayout/RootLayout"
import Sidebar from "@/components/Layout/Shared/Sidebar/Sidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <RootLayout>
            <div className="grid grid-cols-1 md:grid-cols-10  ">
                <div className="col-span-1 max-h-screen min-h-[50vh]  md:col-span-2 rounded shadow-lg
                 border">
                    <Sidebar />
                </div>
                <div className="col-span-8">

                    {children}
                </div>
            </div>
        </RootLayout>
    )
}

export default DashboardLayout