
export default function Service() {
  return    <section className="py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h4 className="text-xl font-semibold mb-4">Pawn Loans</h4>
            <p>Quick short-term loans with secure collateral.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h4 className="text-xl font-semibold mb-4">Buy & Sell</h4>
            <p>Best deals on electronics, gold, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h4 className="text-xl font-semibold mb-4">Jewelry Appraisal</h4>
            <p>Professional gold & diamond evaluation.</p>
          </div>
        </div>
      </section>;
}
