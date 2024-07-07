import Link from "next/link";

export default function Footer () {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-bg bg-opacity-50 text-[12px] text-center py-2 text-black">
            <p className="text-black">Copyright&copy; {currentYear} Wandi CCTV. All Rights Reserved.</p>
            {/*<p className="font-light">*/}
            {/*    Developed by{" "}*/}
            {/*    <Link className="underline" href="/https://github.com/agisnarevaldo">*/}
            {/*        Agisna Revaldo*/}
            {/*    </Link>*/}
            {/*</p>*/}
        </footer>
    );
}