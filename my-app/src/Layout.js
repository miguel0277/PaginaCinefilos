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
  
  <div class="main-container">
    <div class="left-menu">
    <button class="menu-button-1">Botón 1</button>
    <button class="menu-button-2">Botón 2</button>
    <button class="menu-button-3">Botón 3</button>
    </div>
    <div class="center-content">
    <Carousel />
      <p class="parrafo1">
        Aliquip proident pariatur est sunt laborum esse dolore tempor sit.
        Dolor minim dolor excepteur dolor. Id velit tempor reprehenderit
        adipisicing id anim minim id magna et aliqua exercitation. Mollit
        consectetur pariatur Lorem veniam minim cillum id nulla mollit
        consequat amet. Velit exercitation ea officia ex culpa eiusmod
        voluptate velit. Nostrud aute est officia consecteturet non sint
        cillum ullamco. Ea exercitation elit velit excepteur non. Nulla
        eiusmod laboris nostrud duis minim.
      </p>

    </div>
    <div class="right-menu">

    </div>
  </div>
</main>
      <footer>
        <h3>Todos los derechos Reservados</h3>
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
  });

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
