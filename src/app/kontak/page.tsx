import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";
import FloatingChatButton from "@/app/components/floatingChatButton";

export default function Page () {
    return (
        <main className="">
            <FloatingChatButton bottom={"bottom-4"} />
            <Contact />
            <Footer />
        </main>
    )
}