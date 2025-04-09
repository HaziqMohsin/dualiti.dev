import { Header } from "@/app/(main)/header";
// import { Footer } from "@/app/(main)/footer";

type Props = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
      <div className="w-full min-h-screen flex flex-col bg-primary-400">
        <Header />
        <main className="flex flex-col items-center justify-center">
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    )
}

export default MainLayout;