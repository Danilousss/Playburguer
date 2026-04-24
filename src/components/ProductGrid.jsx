import ProductCard from './ProductCard';

export default function ProductGrid({ products, category }) {
  const filteredProducts = products.filter(p => p.category === category);

  if (filteredProducts.length === 0) return null;

  return (
    <section id={category.toLowerCase().replace(' ', '-')} className="mb-12 scroll-mt-24">
      <h2 className="text-xl text-arcade-warning mb-6 uppercase border-b-4 border-arcade-warning pb-2 inline-block">
        &gt; {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
