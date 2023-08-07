import React, { useEffect, useState } from "react";
import "./DigitalMarketing.css";

// Mantine Core
import { Center, Card, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// Images
import Branding from "../../Assets/DgMarketing/Branding.jpg";
import Logo from "../../Assets/DgMarketing/LogoDesgin.jpg";
import WebDevelopement from "../../Assets/DgMarketing/WebDevelopment.jpg";
import App from "../../Assets/DgMarketing/App.jpg";
import Seo from "../../Assets/DgMarketing/Seo.jpg";
import Email from "../../Assets/DgMarketing/Email.jpg";
import Social from "../../Assets/DgMarketing/SocialMedia.jpg";
import Influence from "../../Assets/Assets/Images/Influncer_marketing2.jpg";
import Graphics from "../../Assets/DgMarketing/Graphics.jpg";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const gridData = [
    {
      title: `Branding`,
      para: [
        `We have a deep understanding of 
        client thoughts. We are the vision 
        of your target customer and build 
        trust. Let us create you as a brand 
        that leaves an enduring conception. 
        Our experts will work closely with you 
        to create engaging and shareable 
        content that connects with your 
        audience. We know the power of social 
        media platforms and will utilize them 
        strategically to expand your brand's reach.`,
        `We know your business objectives, target 
        market, and competition to develop a comprehensive 
        brand strategy that aligns with your vision. 
        Our strategic approach ensures that every element 
        of your brand communicates a consistent message 
        and reinforces your core values.`,
      ],
      image: Branding,
    },
    {
      title: `Logo design`,
      para: [
        `Your logo is the index of your business, and we will create a distinctive visual representation that outlines your brand's essence. With our expertise, we'll conceptualize and design a logo that distinguishes you in the market.`,
        `Your logo is the visual cornerstone of your brand. Our creative team crafts exceptional logos that embody the essence of your business. We focus on simplicity, versatility, and timelessness, ensuring that your logo stands the test of time and makes a lasting impression.`,
      ],
      image: Logo,
    },
    {
      title: `Web development`,
      para: [
        `We believe that a well-designed and functional website is the cornerstone of any successful online presence. Our talented team of developers will create a user-friendly website that enhances your brand's story, captivates your visitors, and converts them into loyal customers.`,
        `Our skilled web development team specializes in creating custom websites for your specific requirements. We leverage the latest technologies and industry best practices to develop responsive and intuitive websites that not only engage visitors but also drive conversions.`,
      ],
      image: WebDevelopement,
    },
    {
      title: `App development`,
      para: [
        `Utilize the power of social media to increase brand awareness, drive traffic, and strengthen relationships with your target audience. Our customized strategies and compelling content will amplify your online presence, connect you with potential customers, and boost your business.`,
        `Our social media marketing experts will develop a customized strategy to amplify your brand presence across various social media channels. We create engaging content, run targeted ad campaigns, and analyze data to optimize your social media performance and increase brand awareness. From content creation and community management to targeted advertising campaigns, we made our approach to suit your business objectives and maximize your social media presence.`,
      ],
      image: App,
    },
    {
      title: `SEO`,
      para: [
        `Search Engine Optimization (SEO) is not just a word for us- it's our expertise. We will Optimize your website, ensuring that it ranks highly in Search engine results driving organic traffic and increasing your Online Visibility.`,
        `Our SEO experts are well-versed in the latest algorithms and techniques to optimize your website's visibility and improve its search engine rankings. Through comprehensive keyword research, on-page optimization, link building, and content strategy, we ensure that your website stands out in the competitive digital world.`,
      ],
      image: Seo,
    },
    {
      title: `Email marketing`,
      para: [
        `AJ infoteck  offers customized email marketing strategies to reach and engage your target audience effectively.`,
        `Email marketing remains one of the most effective ways to engage with your audience and nurture leads. Our team can help you create targeted email campaigns that drive customer engagement and conversions. We optimize your email marketing efforts for maximum results.`,
      ],
      image: Email,
    },
    {
      title: `Social media marketing`,
      para: [
        `Utilize the power of social media to increase brand awareness, drive traffic, and strengthen relationships with your target audience. Our customized strategies and compelling content will amplify your online presence, connect you with potential customers, and boost your business.`,
        `Our social media marketing experts will develop a customized strategy to amplify your brand presence across various social media channels. We create engaging content, run targeted ad campaigns, and analyze data to optimize your social media performance and increase brand awareness. From content creation and community management to targeted advertising campaigns, we made our approach to suit your business objectives and maximize your social media presence.`,
      ],
      image: Social,
    },
    {
      title: ` Influencer marketing`,
      para: [
        `Tap into the influential power of key personalities in your industry to promote your brand and products. With our expertise in identifying and partnering with relevant influencers, your message will reach a wider audience, creating brand engagement`,
      ],
      image: Influence,
    },
    {
      title: `Graphic Design`,
      para: [
        `With our graphic designing expertise, we provide visually appealing content that captures the attention of your target audience. Capture and engage your audience with visually stunning, professionally designed graphics that set your brand apart. Our talented designers will create captivating images, illustrations, and layouts that grab attention, convey your message, and leave a lasting impression.`,
        `Visual communication is key to capturing your audience's attention. Our talented graphic designers create stunning visuals that align with your brand's aesthetics and effectively convey your message.`,
      ],
      image: Graphics,
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
      <div className="dg-page">
        <Modal
          size={700}
          centered
          opened={opened}
          onClose={close}
          title={modalData.title}
          className="Modal-Mantine"
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
      </div>
    </div>
  );
};

export default DigitalMarketing;
