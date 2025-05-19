import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const FooterContainer = styled.footer`
  background-color: #101820;
  color: white;
  padding: 20px 40px;
  text-align: center;
`;

const MobileFooterContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 20px;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
  text-align: left;

  h3 {
    font-size: 18px;
    margin: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    i {
      margin-left: 10px;
      font-size: 14px;
      transition: transform 0.3s ease;
    }

    &.open i {
      transform: rotate(180deg);
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
    display: ${(props) => (props.isOpen ? "block" : "none")};

    li {
      margin: 10px 0;

      a {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #ffd700;
        text-decoration: none;

        .icon {
          font-size: 20px;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  hr {
    border: none;
    border-top: 1px solid #333;
    margin: 10px 0;
  }
`;

const FooterContact = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;

  p {
    margin: 5px 0;
  }

  a {
    color: #ffd700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .contact-horizontal {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 10px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 20px;
    }

    p {
      margin: 0;
      white-space: nowrap;
    }
  }
`;

const SocialContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLinks = styled.div`
  background-color: #1a1a1a;
  padding: 10px 30px;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    margin: 0 10px;
    display: inline-block;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #333;
  margin-top: 20px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;

  img {
    height: 50px;
    display: block;
  }
`;

const FooterImage = styled.img`
  margin-bottom: 10px;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactLink = styled.a`
  color: #ffd700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const BranchAddress = styled.p`
  font-size: 14px;
  margin: 5px 0;
  line-height: 1.4;
  color: #ffd700;
`;

const BranchContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 8px;
`;


const socialMediaLinks = [
  { href: "#", src: "https://images.wanderon.in/icons/facebook", alt: "Facebook" },
  { href: "#", src: "https://images.wanderon.in/icons/instagram", alt: "Instagram" },
  { href: "#", src: "https://images.wanderon.in/icons/linkedin", alt: "LinkedIn" },
  { href: "#", src: "https://images.wanderon.in/icons/youtube", alt: "YouTube" },
];

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About GOQii", href: "#" },
      { label: "Our Mission", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
  {
    title: "Talk to Us",
    links: [
      { label: "+91-9969954445", href: "tel:+919969953445", icon: <FaPhoneAlt /> },
      { label: "info@goqii.com", href: "mailto:info@goqii.com", icon: <FaEnvelope /> },
      { label: "WhatsApp Us", href: "https://wa.me/919969953445", icon: <FaWhatsapp /> },
    ],
  },
];

const Footer = () => {
  const [dropdowns, setDropdowns] = useState({});
  const [isMobile, setIsMobile] = useState(true);

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FooterContainer>
      <MobileFooterContainer>
        {footerSections.map((section) => (
          <FooterSection key={section.title} isOpen={dropdowns[section.title]}>
            <h3
              onClick={() => toggleDropdown(section.title)}
              className={dropdowns[section.title] ? "open" : ""}
            >
              {section.title} <i>▼</i>
            </h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.icon && <span className="icon">{link.icon}</span>}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <hr />
          </FooterSection>
        ))}
      </MobileFooterContainer>

      <FooterContact>
        <img
          src="https://storecdn.goqii.com/media/goqiiweb/assets/images/site-logo.png"
          alt="GOQii Logo"
          style={{ width: "120px", marginBottom: "1rem" }}
        />
        <p>
          Headquartered in Menlo Park, California, with offices in Mumbai, India,
          GOQii is on a mission to shift the focus from reactive "sick care" to
          proactive preventive healthcare.
        </p>
        <div className="contact-horizontal">
          <p><a href="mailto:info@goqii.com">info@goqii.com</a></p>
          <p><a href="tel:+919875097169">+91 9969953445</a></p>
          <p><a href="https://www.goqii.com">www.goqii.com</a></p>
        </div>
      </FooterContact>

      <SocialContainer>
        <SocialLinks>
          {socialMediaLinks.map((link) => (
            <a href={link.href} key={link.alt} target="_blank" rel="noopener noreferrer">
              <img src={link.src} alt={link.alt} />
            </a>
          ))}
        </SocialLinks>
      </SocialContainer>

      <FooterBottom>
       
        <p>© {new Date().getFullYear()} GOQii | All rights reserved</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
