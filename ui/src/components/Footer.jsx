import Auth from "./Auth";

export default function Footer() {
  return (<>
    <Auth/>
    <footer className="bg-gradient-to-l from-black via-gray-900 to-black text-gray-400 text-center py-6">
      <p>
        ©2026 <span className="text-yellow-400">GoldTrust</span>{" "}
        <span className="text-orange-500">Pawn shop</span>. All Rights Reserved.
      </p>
    </footer>
  </>
  );
}
