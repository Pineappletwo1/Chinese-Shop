export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/public/resturant.jpg')"}}>
      <header className="p-4 bg-blue-500 text-white backdrop-filter backdrop-blur-lg bg-opacity-40">
        <h1 className="text-4xl">Bold Beijing</h1>
        <p className="text-lg">Welcome to Bold Beijing, your one-stop shop for all things Chinese!</p>
      </header>
      <main className="flex-grow p-4 backdrop-filter backdrop-blur-lg bg-opacity-40">
        <section className="mb-4">
          <h2 className="text-2xl mb-2">Our Products</h2>
          <p>We offer a wide range of products from traditional Chinese clothing to delicious Chinese tea.</p>
        </section>
        <section>
          <h2 className="text-2xl mb-2">Contact Us</h2>
          <p>Feel free to reach out to us at boldbeijing@example.com or call us at 123-456-7890.</p>
        </section>
      </main>
      <footer className="p-4 bg-blue-500 text-white text-center backdrop-filter backdrop-blur-lg bg-opacity-40">
        <p>© 2022 Bold Beijing. All rights reserved.</p>
      </footer>
    </div>
  );
}