import Navbar from "@/components/Layout/Shared/Navbar/Navbar";
import RootLayout from "@/components/Layout/Shared/RootLayout/RootLayout";

export default function LandingPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <RootLayout>
            <Navbar />
            {children}
        </RootLayout>
    );
}
