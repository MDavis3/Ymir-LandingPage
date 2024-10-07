function App() {
    const [count, setCount] = React.useState(0)
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setCount((prevCount) => (prevCount < 2000 ? prevCount + 1 : 2000))
      }, 50)
      return () => clearInterval(timer)
    }, [])
  
    return (
      <div
        className="min-h-screen bg-cover bg-center text-white font-sans"
        style={{
          backgroundImage: "url('/Ymir-LandingPage/images/pathbackground.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="min-h-screen bg-black bg-opacity-40">
          <header className="p-6 flex justify-between items-center bg-black bg-opacity-60">
            <div className="flex items-center">
              <img
                src="/Ymir-LandingPage/images/ymirlogo.png"
                alt="Ymir Logo"
                className="mr-2"
                style={{ width: '80px', height: '80px' }}
              />
              <h1 className="text-3xl font-bold font-serif text-teal-300">Ymir</h1>
            </div>
            <nav>
              <a href="#about" className="mx-2 hover:text-teal-300 font-sans text-blue-200">
                About
              </a>
              <a href="#features" className="mx-2 hover:text-teal-300 font-sans text-blue-200">
                Features
              </a>
              <a href="#signup" className="mx-2 hover:text-teal-300 font-sans text-blue-200">
                Sign Up
              </a>
            </nav>
          </header>
  
          <main className="container mx-auto px-4 py-12">
            <section className="text-center mb-16 bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-5xl font-bold mb-4 font-serif text-teal-300">
                <span className="block">Longevity Research</span>
                <span className="block">for you, in {count} years.</span>
              </h2>
              <p className="text-xl mb-8 font-sans text-blue-200">
                Millennia of vital health wisdom, personalized for your path
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 font-serif text-lg">
                Coordinate your lifespan
              </button>
            </section>
  
            <section id="about" className="mb-16 bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-semibold mb-4 font-serif text-teal-300">About Ymir</h3>
              <p className="text-lg font-sans text-blue-200">
                Ymir leverages AI-powered algorithms to analyze and distill complex longevity research into actionable insights. 
                Our platform scans thousands of academic papers, clinical trials, and health studies to deliver personalized 
                recommendations tailored to your unique health profile. By bridging cutting-edge science with your individual needs, 
                Ymir aims to extend your healthspan and optimize your quality of life.
              </p>
            </section>
  
            <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Millennia-Spanning Research Analysis",
                  description: "Our AI transforms complex scientific papers into easy-to-understand summaries, making centuries of research accessible and actionable for you."
                },
                {
                  title: "Timeless Weekly Newsletters",
                  description: "Stay at the forefront of longevity science with our weekly updates, delivering the latest research findings directly to your inbox as soon as they're published."
                },
                {
                  title: "Futuristic Health Dashboard",
                  description: "Customize your health preferences and track your progress with our intuitive dashboard, ensuring you receive the most relevant and impactful longevity information."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
                  <span className="text-teal-300 text-2xl">⭐</span>
                  <h4 className="text-xl font-semibold mb-2 font-serif text-teal-300">{feature.title}</h4>
                  <p className="font-sans text-blue-200">{feature.description}</p>
                </div>
              ))}
            </section>
  
            <section id="signup" className="text-center bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-3xl font-semibold mb-4 font-serif text-teal-300">Traverse Time with Ymir</h3>
              <p className="text-lg mb-6 font-sans text-blue-200">
                Be among the first to receive longevity insights from the future.
              </p>
              <form className="max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 mb-4 rounded-full text-gray-800 font-sans text-center"
                />
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 w-full font-serif text-lg"
                >
                  Embark on Your 2000-Year Journey
                </button>
              </form>
            </section>
          </main>
  
          <footer className="text-center py-6 bg-black bg-opacity-60">
            <p className="font-sans text-blue-200">© 2024 Ymir. Keep Moving Forward.</p>
          </footer>
        </div>
      </div>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));