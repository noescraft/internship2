import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Rentals from "./components/Rentals";
import Footer from "./components/Footer";
import Login from "./components/Login";



function App() {
  return (
    <div className="App">
     {/* Navbar */}
     
     <Navbar />
     <Login />
     {/* Filters */}
     <div className='sm:mx-6 md:mx-10 lg:mx-12 px-3'>
     <Filters />
     {/* Rentals */}
     <Rentals />
     </div>
     {/* Footer */}
     <Footer />
    </div>
  );
}

export default App;
