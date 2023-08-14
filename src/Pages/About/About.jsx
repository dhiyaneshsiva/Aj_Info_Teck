import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";

// Mantine Core
import { Button, Center, Card } from "@mantine/core";

// Images
import AboutImage1 from "../../Assets/About/TeamWoek.jpg";
import Circle from "../../Assets/Circle.png";
import Main from "../../Assets/FreePics/HomePic1.jpg";

// Tabler icon
import { Medal, Code, Affiliate, CalendarTime } from "tabler-icons-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const GridCArd = [
    {
      title: "Our History",
      para: `
      AJ INFOTECK was established in 2022,December. From its inception, we set out on a mission to revolutionize the IT industry by providing cutting-edge solutions that cater to our clients' specific needs. Over the years, we have grown into a leading player in the market, with a diverse portfolio of successful projects and a satisfied clientele.`,
    },
    {
      title: "Growth and Expansion",
      para: `
      Through continuous innovation and a commitment to understanding our clients' evolving requirements, we have achieved steady growth and expanded our presence across Tirunelveli,
      Tamil Nadu. Our ability to adapt to changing technologies and trends has allowed us to stay ahead of the curve and provide tailored solutions that drive success for our clients.`,
    },
    {
      title: "Vision for the Future",
      para: `
      Looking ahead, we envision AJ INFOTECK as the go-to partner for transformative IT solutions across diverse industries. By harnessing the power of emerging technologies, we aim to lead the way in delivering solutions that drive our clients' success. Our focus on client-centricity and innovation will remain at the heart of our endeavors`,
    },
  ];

  const Sec3Card = [
    {
      title: "Quality Products",
      para: "At , our foremost commitment is to deliver secure and top-quality products that cater to all your business needs.",
      icon: <Medal size={40} className="about-sec3-grid-card-icon" />,
    },
    {
      title: "Innovation",
      para: "At AJ INFOTECK, we thrive on embracing innovative approaches to problem-solving, exploring diverse avenues to overcome challenges effectively.",
      icon: <Code size={40} className="about-sec3-grid-card-icon" />,
    },
    {
      title: "Customer Friendly",
      para: "At AJ INFOTECK, we take immense pride in our role as a partner, helping customers meet their unique requirements and bring their ideas to life.",
      icon: <Affiliate size={40} className="about-sec3-grid-card-icon" />,
    },
    {
      title: "Timely Delivery",
      para: "At AJ INFOTECK, we prioritize the utmost quality, accuracy, and reliability of all our deliverables, ensuring excellence at every step of our processes.",
      icon: <CalendarTime size={40} className="about-sec3-grid-card-icon" />,
    },
  ];
  return (
    <div>
      <div className="about-page">
        <Center style={{ padding: "1rem 0" }}>
          <h1>
            About <span className="about-page-title"> AJ INFOTECK </span>
          </h1>
        </Center>

        {/* Sec1 */}
        <div className="about-sec1">
          <div className="about-sec1-container">
            <div className="about-sec1-container-left">
              <h1>
                Your Gateway to Digital
                Success find out the key to the World
              </h1>
              <p>
                We are the windows to the digital
                world. We strive to enrich your business, enhance your brand
                image, and drive customer engagement and conversions. With our
                strategies and innovative approaches, we ensure your success in
                today's competitive digital world
              </p>
              <p>
                Using tried and tested methods in digital marketing like social
                media and SEO, we are eager to take your brand to the next
                level. Reach out to your customers in relevant ways through
                different platforms and raise your online visibility.
              </p>
              <Button
                style={{ maxWidth: "fit-content", color: "white" }}
                className="btn"
              >
                <Link
                  className="link-text-none"
                  style={{ color: "white" }}
                  to="/marketing"
                >
                  OUR SERVICES
                </Link>
              </Button>
            </div>
            <div className="about-sec1-container-right">
              <div className="about-sec1-container-right-image">
                <img src={AboutImage1} alt="AboutTeam" />
              </div>
            </div>
          </div>
        </div>
        {/* Sec1 End */}

        {/* Sec2 */}
        <div className="about-sec2-container">
          <div className="about-sec2-container-grid">
            {GridCArd.map((value, index) => {
              return (
                <Card className="about-sec2-container-grid-card" key={index}>
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                </Card>
              );
            })}
          </div>
        </div>
        {/* Sec2 ENd */}

        {/* Sec3  */}

        <div className="about-sec3-container">
          <div className="about-sec3-container-left">
            <div className="about-sec3-container-left-title">
              <h1>We Are Best</h1>
              <p>
                At AJ INFOTECK, we harness our expertise and extensive
                experience to craft technologies that make a tangible impact on
                the present and shape a brighter future. Our commitment to
                excellence, unwavering integrity in fulfilling promises, and
                ever-expanding reservoir of knowledge form the bedrock of every
                project we undertake.
              </p>
            </div>
            <div className="about-sec3-container-left-image">
              <img src={Circle} alt="Circle" className="rotate" />
              <img src={Main} alt="About2" className="we-are-best" />
            </div>
          </div>
          <div className="about-sec3-container-right">
            <div className="about-sec3-container-right-grid">
              {Sec3Card.map((value, index) => {
                return (
                  <Card
                    key={index}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    className="about-sec3-container-right-grid-card"
                  >
                    <Card.Section className="about-sec3-container-right-grid-card-section">
                      {value.icon}
                    </Card.Section>
                    <h3>{value.title}</h3>
                    <p>{value.para}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        {/* Sec3  End */}
      </div>
    </div>
  );
};

export default About;
