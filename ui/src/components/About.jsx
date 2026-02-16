
function About() {
  return (
<>    
{/* Featured Items */}
      <section className="bg-gray-200 py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Featured Items</h3>
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/36/18/79/361879aae0ebd7e22af746d931a94979.jpg"
              className="w-full h-56 object-cover"
              alt="Rolex Watch"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">Rolex Watch</h4>
              <p className="text-yellow-600 font-bold mt-2">$2,500</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
              className="w-full h-56 object-cover"
              alt="Gold Necklace"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">Gold Necklace</h4>
              <p className="text-yellow-600 font-bold mt-2">$1,200</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              className="w-full h-56 object-cover"
              alt="Gaming Laptop"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">Gaming Laptop</h4>
              <p className="text-yellow-600 font-bold mt-2">$900</p>
            </div>
          </div>

        </div>
      </section>

</>
  );
}

export default About;