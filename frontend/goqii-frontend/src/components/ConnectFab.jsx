import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaCommentDots,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

// Theme colors
const primaryColor = "#00796B";
const accentColor = "#E0F2F1";
const white = "#ffffff";

// Animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Wrapper to lock FAB in place
const FabContainer = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 1000;
`;

// Position option box absolutely above the button
const FabOptionsWrapper = styled.div`
  position: absolute;
  bottom: 70px; /* Adjust so it starts above FAB */
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  animation: ${fadeInUp} 0.3s ease both;
`;

const FabButton = styled.button`
  background-color: ${primaryColor};
  color: ${white};
  border: none;
  border-radius: 50%;
  padding: 18px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const FabOption = styled.a`
  background-color: ${white};
  border: 1.8px solid ${primaryColor};
  color: ${primaryColor};
  padding: 10px 14px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  min-width: 160px;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background-color: ${accentColor};
  }

  svg {
    font-size: 16px;
  }
`;

export default function ConnectFab() {
  const [open, setOpen] = useState(false);

  return (
    <FabContainer>
      {open && (
        <FabOptionsWrapper>
          <FabOption href="https://wa.me/919875097169" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> WhatsApp
          </FabOption>
          <FabOption href="mailto:info@goqii.com">
            <FaEnvelope /> Email Us
          </FabOption>
          <FabOption href="tel:+919875097169">
            <FaPhoneAlt /> Call Us
          </FabOption>
          <FabOption href="#chatbot">
            <FaCommentDots /> Chatbot
          </FabOption>
        </FabOptionsWrapper>
      )}
      <FabButton onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaPlus />}
      </FabButton>
    </FabContainer>
  );
}
