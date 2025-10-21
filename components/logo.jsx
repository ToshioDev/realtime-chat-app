import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href={"/chat"}>
            <div className="hover:opacity-75 transition flex items-center gap-x-2">
<div className="relative flex items-center justify-center cursor-pointer group">
    <div className="absolute w-10 h-10 rounded-full bg-blue-500 opacity-30 animate-ping"></div>
    <div className="absolute w-14 h-14 rounded-full bg-blue-400 opacity-20 animate-ping delay-150"></div>
    <Image
        src={"/logo.svg"}
        alt="Pulse Chat Logo"
        width={30}
        height={30}
        className="relative z-10 transition-transform duration-500 group-hover:scale-110"
    />
</div>
            </div>
        </Link>
    );
};
