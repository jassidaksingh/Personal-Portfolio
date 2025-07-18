import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";
import { ThemeProvider } from "./components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className='relative z-0 bg-primary-light dark:bg-primary-dark'>
          <div className='bg-primary-light dark:bg-primary-dark'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;