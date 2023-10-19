import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/ui/product-list";

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("9e5a51a6-a621-4609-a8ee-7bb64476cc8f");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
