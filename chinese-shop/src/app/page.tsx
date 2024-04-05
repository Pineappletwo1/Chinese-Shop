import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header
        className="p-16"
        style={{
          backgroundImage:
            "url(https://lh3.googleusercontent.com/p/AF1QipNQzPrzyRJOKSeea5Vo7aAZAQ6i14WrFH7tUfAY=s680-w680-h510)",
        }}
      >
        <div
          className="p-8 bg-neutral-800 bg-opacity-70"
          style={{ maxWidth: "960px" }}
        >
          <h1 className="text-white text-6xl">Bold Beijing</h1>
          <p className="text-2xl text-white mt-6">
            Welcome to Bold Beijing, your one-stop shop for all things Chinese!
          </p>
        </div>
      </header>
      <main className="flex-grow p-16 backdrop-filter backdrop-blur-lg bg-opacity-40">
        <div style={{ maxWidth: "960px" }}>
          <section className="mb-8">
            <h2 className="text-4xl mb-2">Our Products</h2>
            <p className="text-xl">
              We offer a wide range of products from traditional Chinese
              clothing to delicious Chinese tea.
            </p>
          </section>
          <section>
            <h2 className="text-4xl mb-2">Contact Us</h2>
            <p className="text-xl">
              Feel free to reach out to us at boldbeijing@example.com or call us
              at 123-456-7890.
            </p>
          </section>
        </div>
      </main>
     
    </div>
  );
}
