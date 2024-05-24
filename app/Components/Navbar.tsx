import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return ( 
        <div className="w-full py-5">
            <div className="container w-[85%] mx-auto flex justify-between items-center">
                <div>
                    <Image src="/logo.png" width={250} height={250} className="w-[100px]" alt="Prime Next"/>
                </div>
                <div className="flex gap-3 items-center">
                        <Link href="/">Hello</Link> 
                        <Link href="/">Hello</Link> 
                        <Link href="/">Hello</Link> 
                        <Button>Zoek een verzekering</Button>
                </div>
            </div>
        </div>
      );
}
 
export default Navbar;