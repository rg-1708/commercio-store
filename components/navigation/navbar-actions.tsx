"use client";

import { useEffect, useState } from "react";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import { LoaderRounded } from "@/components/ui/loaders";

import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoaderRounded className="ml-auto" iconSize={20} />;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
