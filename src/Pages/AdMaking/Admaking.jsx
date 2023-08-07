import React, { useEffect, useState } from "react";
import "./Admaking.css";

// Images
import Circle from "../../Assets/Circle.png";

import AdmakingImage from "../../Assets/AdMaking/AdMaking.jpg";
import Cinema from "../../Assets/AdMaking/Cinema.jpg";
import VFX from "../../Assets/AdMaking/VFX.jpg";
import PostProduction from "../../Assets/AdMaking/Post.jpg";
import Voice from "../../Assets/AdMaking/Voice.jpg";
import Jingles from "../../Assets/AdMaking/Jingles.jpg";
import BPO from "../../Assets/AdMaking/BPO.jpg";

// Mantine Core
import { Card, Center, Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Admaking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const gridData = [
    {
      title: `Cinematic video shoot`,
      para: [
        `Our experienced team of videographers and cinematographers is dedicated to capturing your vision and bringing it to life on the screen. We have the skills and expertise to deliver high-quality results that exceed your expectations. We use state-of-the-art equipment and techniques to ensure that every shot is visually stunning and impactful.`,
      ],
      image: Cinema,
    },
    {
      title: `CGI graphics and VFX`,
      para: [
        `With our CGI graphics and VFX services, we can turn your imaginations into visually stunning realities. Our experienced team of artists and animators are well-versed in the latest CGI techniques, allowing us to create jaw-dropping graphics and seamless visual effects that elevate your brand advertisement to the next level. Whether you need realistic 3D models, product visualizations, or virtual environments, we can bring your vision to life with our photorealistic CGI capabilities.`,
      ],
      image: VFX,
    },
    {
      title: `Post-production`,
      para: [
        `At AJ InfoTeck , we understand the importance of post-production in creating a professional video. Our post-production services encompass everything from video editing and color grading to audio mixing and final touches. We strive to deliver a final product that not only meets but exceeds your expectations.`,
        `Our post-production services encompass everything from video editing and color grading to sound design and final mastering. We understand the importance of engaging your audience. With our attention to detail and creative approach, we ensure that your videos are polished and professional, leaving an enduring impact on viewers.`,
      ],
      image: PostProduction,
    },
    {
      title: `Voice-Over`,
      para: [
        `Fascinate your viewers with professional voice-over narration that adds depth. Our voice-over artists are skilled at delivering a wide range of styles and tones, ensuring that your message is conveyed effectively and convincingly.`,
        `To add an impressive voice to your videos, we provide top-notch voice-over services. Our talented voice-over artists offer a diverse range of styles and accents to suit your project's requirements. Whether you need a voice-over for a corporate, commercial, or narration, we will help you find the perfect voice that resonates with your target audience.`,
      ],
      image: Voice,
    },
    {
      title: `Jingles and flex print`,
      para: [
        `A memorable jingle can make your brand stand out from your audience. Our team of talented technicians creates catchy and original jingles that reflect your brand's personality.`,
        `Make your brand memorable with jingles and soundtracks that resonate with your audience. 
        Create a visual impact with our high-quality flex prints. Whether it's banners, posters, or other promotional materials which are durable, vibrant, and designed to attract attention. With our attention to detail and commitment to quality, you can rest assured that your brand will be represented in the best possible light
        .`,
      ],
      image: Jingles,
    },
    {
      title: `BPO`,
      para: [
        `Business Process Outsourcing (BPO) is a strategic practice in which an organization delegates specific non-core business functions or processes to external service providers. BPO has become a significant component of modern business operations, offering a range of benefits to companies across various industries.`,
        `Business Process Outsourcing has evolved into a powerful tool for companies seeking to streamline operations, enhance productivity, and achieve cost savings. By leveraging the expertise of external service providers, businesses can focus on their core strengths and gain a competitive edge in the global marketplace. However, it is essential for companies to choose the right BPO partners, aligning their goals and values for a successful and mutually beneficial partnership
        .`,
      ],
      image: BPO,
    },
  ];

  const [modalData, setModalData] = useState({
    title: "",
    para: "",
    image: "",
  });

  //   Modal State
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <div className="ad-making-page">
        <div className="ad-making-container">
          <div className="ad-making-container-left">
            <img
              src={AdmakingImage}
              alt="Circle"
              className="ad-making-container-left-image"
            />
          </div>
          <div className="ad-making-container-right">
            <h1>ad-making-container-left</h1>
            <p>
              Our advertisement-making and designing services seize your
              audience's attention with captivating stories, transformative
              visuals, and professional post-production, elevating your brand to
              new heights. , we offer a wide range of services to enhance your
              brand.
            </p>
            <p>
              From captivating voice-overs to catchy jingles and eye-catching
              flex prints, we have the expertise to elevate your business to the
              potential audience. By understanding your brand and target
              audience, we will create a concept that aligns with your
              objectives and resonates with your viewers.
            </p>
          </div>
        </div>

        {/* Sec 2 */}
        <div className="ad-making-sec2-container"></div>
        <Modal
          size={"768px"}
          centered
          opened={opened}
          onClose={close}
          title={modalData.title}
        >
          <div className="modal-image">
            <img src={modalData.image} alt="img" />
          </div>
          <h1 style={{ padding: "1rem 0", textAlign: "center" }}>
            {modalData.title}
          </h1>
          <p style={{ textAlign: "justify" }}>{modalData.para}</p>
        </Modal>
        <div className="dg-page-title">
          <Center style={{ padding: "1rem 0 0 0 " }}>
            <h1>Our Services</h1>
          </Center>
        </div>
        <div className="dg-container">
          <div className="dg-container-grid">
            {gridData.map((value, index) => {
              return (
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  key={index}
                  className="dg-container-grid-card"
                >
                  <Card.Section className="dg-container-grid-card-section">
                    <img src={value.image} alt="Grid - Digital Marketing" />
                  </Card.Section>
                  <Center
                    style={{
                      textAlign: "center",
                      textTransform: "uppercase",
                      padding: "1rem 0",
                    }}
                  >
                    <h1>{value.title}</h1>
                  </Center>
                  <Center style={{ textAlign: "justify" }}>
                    <p>{value.para}</p>
                  </Center>
                  <Center className="dg-grid-btn">
                    <Button
                      onClick={open}
                      onMouseOver={() => setModalData(value)}
                      className="dg-grid-btn1"
                    >
                      See More
                    </Button>
                  </Center>
                </Card>
              );
            })}
          </div>
        </div>
        {/* Sec 2 End */}
      </div>
    </div>
  );
};

export default Admaking;
