import { useEffect, useRef, useState } from "react";

const carouselData = [
  {
    id: "1",
    image:
      "https://media.istockphoto.com/id/2152515127/photo/southern-lights-over-lake-te-anau.webp?a=1&b=1&s=612x612&w=0&k=20&c=jw-iKB4Beau2CTargKPi6VjZSAj4wTsZ7-5s7bqpX2I=",
    title: "Welcome to the Carousel",
    description: "Swipe left or right to explore amazing content.",
  },
  {
    id: "2",
    image:
      "https://media.istockphoto.com/id/2166282428/photo/a-beautiful-and-lush-green-forest-canopy-illuminated-by-warm-sunlight-streaming-through.webp?a=1&b=1&s=612x612&w=0&k=20&c=pAbM-TaCjxMefRxZBp3uQp27lwlEFFqni5yJnrzpPho=",
    title: "Discover New Features",
    description: "Our latest update brings powerful tools to your fingertips.",
  },
  {
    id: "3",
    image:
      "https://media.istockphoto.com/id/2181735944/photo/natural-mountains-landscapes.webp?a=1&b=1&s=612x612&w=0&k=20&c=kXWPxrf8Gs_2e35F31rKlguPcI2JE2dtGQ58HS0-W7c=",
    title: "Stay Connected",
    description: "Never miss an update with real-time notifications.",
  },
  {
    id: "4",
    image:
      "https://media.istockphoto.com/id/2157089736/photo/red-car-on-a-winding-road.webp?a=1&b=1&s=612x612&w=0&k=20&c=WHTlb6dw20zsqwOk3Xx0ZHxNKb5xKJjbmPFWCUf1CTc=",
    title: "Join the Community",
    description: "Be a part of our growing user base and share your feedback.",
  },
];

const Carousel = () => {
  const [showImage, setShowImage] = useState(0);
  const CarouselRef = useRef(null);

  useEffect(() => {
    CarouselRef.current = setInterval(nextImage, 3000);
    return () => {
      clearInterval(CarouselRef.current);
    };
  }, []);

  const nextImage = () => {
    setShowImage((prev) => {
      if (prev >= carouselData.length - 1) return 0;
      return prev + 1;
    });
  };
  const prevImage = () => {
    setShowImage((prev) => {
      if (prev <= 0) return 0;
      return prev + -1;
    });
  };

  const stopAuto = () => {
    clearInterval(CarouselRef.current);
  };

  const resumeAuto = () => {
    CarouselRef.current = setInterval(nextImage, 3000);
  };

  return (
    <>
      <div className="parent">
        <div className="bg left" onClick={prevImage}>
          {"<"}
        </div>
        <div className="bg right" onClick={nextImage}>
          {">"}
        </div>
        {carouselData.map((val, index) => (
          <>
            {showImage == index && (
              <div key={val.id} style={{ height: "400px", width: "100%" }}>
                <img
                  onMouseEnter={stopAuto}
                  onMouseLeave={resumeAuto}
                  src={val.image}
                  height="100%"
                  width="100%"
                />
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default Carousel;
