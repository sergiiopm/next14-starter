"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  console.log(pathname); // => /navigationtest
  console.log(q); // ?q=testing => "testing"

  const handleClick = () => {
    console.log("clicked");
    // router.push("/"); // Esto permite volver a la página anterior.
    // router.replace("/"); // Esto hace que no se pueda volver a la página anterior.
    // router.refresh(); // Esto hace que se recargue la página actual.
    router.back(); // Esto permite volver a la página anterior.
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>

      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};
export default NavigationTestPage;
