import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

// Mantine Core
import {
  Card,
  Input,
  Button,
  Center,
  Container,
  Textarea,
  ThemeIcon,
} from "@mantine/core";

// Image
import ContactImage from "../../Assets/Contact.png";

// Email js
import emailjs from "@emailjs/browser";
import { showNotification } from "@mantine/notifications";
import { Check } from "tabler-icons-react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // History
  const History = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });
  const userForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yscld3s",
        "template_lvcre2q",
        userForm.current,
        "9SJu7KBkenAvvYrMp"
      )
      .then((result) => {
        showNotification({
          message: "Mail Send Successfully",
          icon: (
            <ThemeIcon variant="light" radius="xl" size="50px" color="#79d27e">
              <Check color="Green" size={30} />
            </ThemeIcon>
          ),
          autoClose: 2000,
          style: { padding: "1rem", fontSize: "205px" },
        });
      })
      .catch((err) => alert("Error"))
      .finally(() => window.location.reload(History.push("/contact")));
  };
  return (
    <div>
      <div className="contact-page">
        <Center>
          <h1>Contact Us</h1>
        </Center>
        <div className="contact-container">
          <div className="contact-container-left">
            <Card>
              <form ref={userForm} method="POST">
                <Input.Wrapper withAsterisk label="Name" p={"sm"}>
                  <Input
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </Input.Wrapper>
                <Input.Wrapper withAsterisk label="Email" p={"sm"}>
                  <Input
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Input.Wrapper>
                <Input.Wrapper withAsterisk label="Phone Number" p={"sm"}>
                  <Input
                    placeholder="Phone Number"
                    name="number"
                    value={formData.number}
                    onChange={(e) =>
                      setFormData({ ...formData, number: e.target.value })
                    }
                  />
                </Input.Wrapper>
                <Input.Wrapper withAsterisk label="Subject" p={"sm"}>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </Input.Wrapper>
                <Input.Wrapper withAsterisk label="Message" p={"sm"}>
                  <Input
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </Input.Wrapper>
                <Center>
                  <Button
                    onClick={handleSubmit}
                    className="contact-container-left-btn"
                  >
                    Submit
                  </Button>
                </Center>
              </form>
            </Card>
          </div>
          <div className="contact-container-right">
            <div className="contact-container-right-image">
              <img src={ContactImage} alt="Contact" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <Container size={"100%"} style={{ padding: "2rem 1rem" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.9142674928726!2d77.7326928!3d8.699691599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04135e313d5495%3A0xb07b24533e63b70d!2sAJ%20INFOTECK!5e0!3m2!1sen!2sin!4v1691334170737!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
