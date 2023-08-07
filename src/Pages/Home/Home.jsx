import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Images
import Mian2 from "../../Assets/FreePics/HomePic2.jpg";
import Circle from "../../Assets/Circle.png";
import Chair from "../../Assets/FreePics/HomePic3.jpg";
import AboutImage2 from "../../Assets/About/Best.jpg";
import BPO from "../../Assets/Bpo/BpoVoice.jpg";
// Animation
import AOS from "aos";
import { Button, Card, CardSection, Center, Container } from "@mantine/core";

// Icons
import {
  Users,
  Code,
  Database,
  Timeline,
  DeviceMobile,
  ChartBar,
  ShoppingCart,
  Webhook,
  CircleCheck,
  BoxMargin,
  LayoutGrid,
  Shield,
} from "tabler-icons-react";

// Count
import CountUp from "react-countup";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // USeState
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  //   Animation init
  AOS.init();

  //   Map Data
  const GridCard = [
    {
      title: "Customer Friendly",
      text: `Helping Customers to meet their requirments and ideas.`,
      icon: <Users className="icons-hover-home-grid" />,
    },
    {
      title: "Quality Products",
      text: `Quality Products
      Providing secure and quality products to all your business.`,
      icon: <Code className="icons-hover-home-grid" />,
    },
    {
      title: "Innovativeness",
      text: `Trying new approaches to solve problems in all ways.`,
      icon: <Database className="icons-hover-home-grid" />,
    },
    {
      title: "Timely Delivery",
      text: `Ensuring quality, accuracy and reliability of deliverables.`,
      icon: <Timeline className="icons-hover-home-grid" />,
    },
  ];

  const Sec3Grid = [
    {
      title: `Web App Development`,
      icon: <Code className="sec3-container-right-grid-icon" />,
    },
    {
      title: ` Mobile App Development`,
      icon: <DeviceMobile className="sec3-container-right-grid-icon" />,
    },
    {
      title: ` Desktop App development`,
      icon: <DeviceMobile className="sec3-container-right-grid-icon" />,
    },
    {
      title: ` Digital Marketing`,
      icon: <ChartBar className="sec3-container-right-grid-icon" />,
    },
    {
      title: ` Branding`,
      icon: <ChartBar className="sec3-container-right-grid-icon" />,
    },
    {
      title: ` Software Support`,
      icon: <ShoppingCart className="sec3-container-right-grid-icon" />,
    },
    {
      title: `Web Designing`,
      icon: <Webhook className="sec3-container-right-grid-icon" />,
    },
    {
      title: `UI/UX Designing`,
      icon: <CircleCheck className="sec3-container-right-grid-icon" />,
    },
  ];

  const Sec5Grid = [
    {
      title: "Highly Qualified Team",
      text: `We have a highly skilled team to assist our clients in getting what they need and anticipate.`,
      icon: <Users className="sec5-container-grid-icon" />,
    },
    {
      title: "Technology Consultation",
      text: `We offer technological consulting to help choose the best technology for a specific need.`,
      icon: <BoxMargin className="sec5-container-grid-icon" />,
    },
    {
      title: "Customer Support",
      text: `All of our clients receive committed, 24/7 customer support that is simple to obtain.`,
      icon: <LayoutGrid className="sec5-container-grid-icon" />,
    },
    {
      title: "Safe and Secure",
      text: `All of our customers receive extremely safe and secure products from us.`,
      icon: <Shield className="sec5-container-grid-icon" />,
    },
  ];

  const sec6Count = [
    {
      title: "Team Size",
      start: 20,
      end: 100,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-users-group"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
          <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path>
          <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
          <path d="M17 10h2a2 2 0 0 1 2 2v1"></path>
          <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
          <path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>
        </svg>
      ),
    },
    {
      title: "Happy Clients",
      start: 50,
      end: 150,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-heart-handshake"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
          <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25"></path>
          <path d="M12.5 15.5l2 2"></path>
          <path d="M15 13l2 2"></path>
        </svg>
      ),
    },
    {
      title: "Completed Projects",
      start: 600,
      end: 800,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-certificate"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
          <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
          <path d="M6 9l12 0"></path>
          <path d="M6 12l3 0"></path>
          <path d="M6 15l2 0"></path>
        </svg>
      ),
    },
    {
      title: "Upcoming Projects",
      start: 0,
      end: 26,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-stackshare"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M19 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M5 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M7 12h3l3.5 6h3.5"></path>
          <path d="M17 6h-3.5l-3.5 6"></path>
        </svg>
      ),
    },
  ];
  const container1Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container1Rect = container1Ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (container1Rect.bottom <= windowHeight) {
        setIsTrue(true);
      } else {
        setIsTrue(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="home-page">
        {/* Sec 1 */}
        <div className="sec1-container">
          <div className="sec3-container-left">
            <div className="sec3-animation">
              <img src={Circle} alt="Circle_img" className="rotate" />
            </div>
            <img src={Mian2} alt="MainPic" />
          </div>
          <div className="sec1-container-right">
            <h1>
              Dominate the Digital Landscape with AJ InfoTeck 's Expert
              Marketing Strategies
            </h1>
            <p>
              Let's up your Ideas with us, we are the windows to the digital
              world. We strive to enrich your business, enhance your brand
              image, and drive customer engagement and conversions. With our
              strategies and innovative approaches, we ensure your success in
              today's competitive digital world.
            </p>
            <Button className="btn">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About Us
              </Link>
            </Button>
          </div>
        </div>
        {/* Sec 1 End */}

        {/* Sec 2  */}
        <Container>
          <div className="sec2-container">
            <div className="sec2-container-grid">
              {GridCard.map((value, index) => {
                return (
                  <Card
                    key={index}
                    className="sec2-container-grid-card"
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                  >
                    <CardSection>
                      <Center className="sec2-container-grid-icon">
                        {value.icon}
                      </Center>
                    </CardSection>
                    <Center style={{ padding: "1rem 0", textAlign: "center" }}>
                      <h3>{value.title}</h3>
                    </Center>
                    <Center style={{ textAlign: "center" }}>
                      <p>{value.text}</p>
                    </Center>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
        {/* Sec 2 End */}

        {/* Sec3 */}
        <div className="sec3-container">
          <div className="sec3-container-left">
            <div className="sec3-animation">
              <img src={Circle} alt="Circle_img" className="rotate" />
            </div>
            <img src={AboutImage2} alt="MainPic" />
          </div>
          <div className="sec3-container-right">
            <h2>Find out the key to the World</h2>
            <p>
              Our full-service team of inmakes professionals are ready here to
              help you.
            </p>
            <div className="sec3-container-grid">
              {Sec3Grid.map((value, index) => {
                return (
                  <Card
                    className="sec3-container-grid-card"
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "12px",
                    }}
                    shadow="sm"
                    padding="sm"
                    radius="md"
                    withBorder
                  >
                    {value.icon} {value.title}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        {/* Sec3 End */}

        {/* Sec4  */}
        <div className="sec4-container">
          <div className="sec4-container-left">
            <h1>AJ infoteck : Your Gateway to Digital Success</h1>
            <p>
              We have a deep understanding of client thoughts. We are the vision
              of your target customer and build trust. Let us create you as a
              brand that leaves an enduring conception. Our experts will work
              closely with you to create engaging and shareable content that
              connects with your audience. We know the power of social media
              platforms and will utilize them strategically to expand your
              brand's reach.
            </p>
            <p>
              We know your business objectives, target market, and competition
              to develop a comprehensive brand strategy that aligns with your
              vision. Our strategic approach ensures that every element of your
              brand communicates a consistent message and reinforces your core
              values.
            </p>
            <Button className="btn">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                Learn More
              </Link>
            </Button>
          </div>
          <div className="sec4-container-right">
            <div className="sec3-container-left">
              <div className="sec3-animation">
                <img src={Circle} alt="Circle_img" className="rotate" />
              </div>
              <div className="sec3-container-left-image">
                <img src={Chair} alt="MainPic" />
              </div>
            </div>
          </div>
        </div>
        {/* Sec4  End */}

        <div
          style={{ flexDirection: "row-reverse" }}
          className="sec4-container"
        >
          <div className="sec4-container-left">
            <h1>AJ infoteck : Your Gateway to Digital Success</h1>
            <p>
              We have a deep understanding of client thoughts. We are the vision
              of your target customer and build trust. Let us create you as a
              brand that leaves an enduring conception. Our experts will work
              closely with you to create engaging and shareable content that
              connects with your audience. We know the power of social media
              platforms and will utilize them strategically to expand your
              brand's reach.
            </p>
            <p>
              We know your business objectives, target market, and competition
              to develop a comprehensive brand strategy that aligns with your
              vision. Our strategic approach ensures that every element of your
              brand communicates a consistent message and reinforces your core
              values.
            </p>
            <Button className="btn">
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                Learn More
              </Link>
            </Button>
          </div>
          <div className="sec4-container-right">
            <div className="sec3-container-left">
              <div className="sec3-animation">
                <img src={Circle} alt="Circle_img" className="rotate" />
              </div>
              <div className="sec3-container-left-image">
                <img src={BPO} alt="MainPic" />
              </div>
            </div>
          </div>
        </div>

        {/* Sec5 */}
        <div className="sec5-container">
          <div className="sec5-container-title">
            <Center>
              <h1>What Makes Us Special</h1>
            </Center>
          </div>
          <div className="sec5-container-grid">
            {Sec5Grid.map((value, index) => {
              return (
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  key={index}
                  ref={container1Ref}
                  className="sec5-container-grid-card"
                >
                  <div className="sec5-container-grid-card-left">
                    {value.icon}
                  </div>
                  <div className="sec5-container-grid-card-right">
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        {/* Sec5 ENd */}

        {/* Sec6 */}
        {isTrue ? (
          <div className="sec6-container">
            <div className="sec6-container-grid">
              {sec6Count.map((value, index) => {
                return (
                  <div className="sec6-container-grid-count">
                    <Center className="sec6-container-grid-count-svg">
                      {value.svg}
                    </Center>
                    <Center>
                      <h1>
                        <CountUp
                          key={index}
                          start={value.start}
                          end={value.end}
                          duration={2}
                          separator=","
                        />
                        +
                      </h1>
                    </Center>
                    <Center>
                      <h2>{value.title}</h2>
                    </Center>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Sec6 ENd */}
      </div>
    </div>
  );
};

export default Home;
