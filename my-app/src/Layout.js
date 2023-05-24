import React from "react";
import "./Layout.css";
import Navbar from "./Navbar";
import "./Navbar.css";
import { useState, useRef, useEffect } from "react";

function Layout({ children, redirectToLogin, redirectToSignup }) {
  return (
    <div>
      <header>
        <div>
          <div className="auth-buttons">
            <button className="login-button" onClick={redirectToLogin}>
              Iniciar sesión
            </button>
            <button className="signup-button" onClick={redirectToSignup}>
              Registrarse
            </button>
          </div>
          {children}
        </div>
        <h1>CINEFILOS</h1>
        <img
          src="https://tellus.ars.usda.gov/media/1761/popcorn.jpg"
          alt="Ejemplo de imagen"
          width="150"
          height="150"
        ></img>
      </header>

      <main>
        <Navbar />
        <Carousel />
        {children}
      </main>
      <footer>
        <p>Pie de página</p>
      </footer>
    </div>
  );
}
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Referencia al contenedor del carrusel
  const sliderContainerRef = useRef(null);

  // Array de imágenes del carrusel
  const sliderImages = [
    "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/07/30/16591757825079.jpg",
    "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/G7DCA3VDNJADZN7OPGF2K2Y2VM.jpeg",
    "https://elcomercio.pe/resizer/V5_M2YGcSPvxILQvhH14ueVTYJw=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/NVBIMURKOVEDXAYI6RWI42YK4U.jpg",
    "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/G7DCA3VDNJADZN7OPGF2K2Y2VM.jpeg",
    "https://elcomercio.pe/resizer/V5_M2YGcSPvxILQvhH14ueVTYJw=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/NVBIMURKOVEDXAYI6RWI42YK4U.jpg",
  ];

  // Función para desplazar el carrusel a la siguiente imagen
  function goToNextSlide() {
    setCurrentIndex((index) => (index + 1) % sliderImages.length);
  }

  // Iniciar el carrusel cuando se monta elcomponente
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Actualizar la posición del carrusel cuando cambia el índice de la imagen actual
  useEffect(() => {
    sliderContainerRef.current.style.transform = `translateX(${
      -currentIndex * 100
    }%)`;
  }, [currentIndex]);

  return (
    <section className="slider">
      <div className="slider-container" ref={sliderContainerRef}>
        {sliderImages.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="slider-controls">
        <button
          onClick={() =>
            setCurrentIndex(
              (currentIndex - 1 + sliderImages.length) % sliderImages.length
            )
          }
        >
          &#8249;
        </button>
        <button
          onClick={() =>
            setCurrentIndex((currentIndex + 1) % sliderImages.length)
          }
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default Layout;
