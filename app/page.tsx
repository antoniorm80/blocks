import StarRating_Basic_Ex_01 from "@/components/commerce-ui/star-rating-basic-ex-01";
import Image from "next/image";
import Rating from "./blocks/review";
import ProductCard_01 from "@/components/commerce-ui/product-card-01";
import Address_01 from "@/components/commerce-ui/address-01";
import Banner_01 from "@/components/commerce-ui/banner-01";
import Banner_02 from "@/components/commerce-ui/banner-02";
import Banner_03 from "@/components/commerce-ui/banner-03";
import Banner_04 from "@/components/commerce-ui/banner-04";
import Banner_05 from "@/components/commerce-ui/banner-05";
import Banner_06 from "@/components/commerce-ui/banner-06";
import Banner_07 from "@/components/commerce-ui/banner-07";
import ProductCard_12 from "@/components/commerce-ui/product-card-12";
import { Carter_One } from "next/font/google";
import Cart_01 from "@/components/commerce-ui/cart-01";
import CartExample_01 from "@/components/commerce-ui/cart-01-ex";
import ProductsBlock from "./blocks/products";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-emerald-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center py-10 px-16 bg-white dark:bg-black sm:items-center">
       {/* <StarRating_Basic_Ex_01/> */}
       {/* <Rating/> */}
       {/* <ProductCard_01/> */}
        <ProductsBlock/>
       {/* <ProductCard_12/> */}
       {/* <Cart_01/> */}
       {/* <CartExample_01/> */}
       {/* <Address_01/> */}
       {/* <Banner_01/> */}
       {/* <Banner_02/> */}
       {/* <Banner_03/> */}
       {/* <Banner_04/> */}
       {/* <Banner_05/> */}
       {/* <Banner_06/> */}
       {/* <Banner_07/> */}
       
      </main>
    </div>
  );
}
