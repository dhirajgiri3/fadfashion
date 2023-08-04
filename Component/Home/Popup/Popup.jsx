import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const PopupContainer = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: transparent;
  z-index: 999;
  left: 0;
  top: 0;

  .left {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 50%;
    height: 85vh;
    padding: 5rem;
    color: #111;
    border-radius: 50px;
    flex-direction: column;
    gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 80vh;
    }

    .cls {
      width: 100%;
      font-family: "tenon";
      height: 100%;
      font-size: 1.5rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-weight: 500;
      cursor: pointer;
      color: #ff005c;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #111;
      }
    }

    .heading {
      display: flex;
      h1 {
        font-size: 5rem;
        font-weight: 700;
        color: #111;
        margin-bottom: 3rem;
        font-family: "tenon";
        margin: 0 auto;

        @media screen and (max-width: 768px) {
          font-size: 3rem;
        }
      }

      p {
        margin-left: 5rem;
        cursor: pointer;
      }
    }

    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      label {
        color: #111;
        font-family: "tenon";
        font-weight: 700;
        font-size: 1.5rem;
        margin: 1.5rem 0;
        letter-spacing: 1px;
      }

      input {
        width: 70%;
        padding: 1.5rem;
        border: 1.5px solid #00000050;
        border-radius: 100px;
        color: #111;
        transition: all 0.3s ease-in-out;
        margin-bottom: 1rem;

        &:focus {
          outline: none;
          border: 1.5px solid #111;
        }

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }

      textarea {
        width: 70%;
        padding: 1rem 2rem;
        border: 1.5px solid #00000020;
        border-radius: 100px;
        color: #111;
        transition: all 0.3s ease-in-out;
        margin-bottom: 4rem;
        margin-top: 1rem;
        resize: none;
        font-family: "tenon";
        display: none;

        &::placeholder {
          color: #999;
        }

        &:focus {
          outline: none;
          border: 1.5px solid #111;
        }

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }

      button {
        padding: 1.5rem 3rem;
        border-radius: 100px;
        background: #ff005c;
        width: 70%;
        border: none;
        outline: none;
        cursor: pointer;
        color: #eee;
        font-family: "tenon";
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease-in-out;
        margin: 3rem 0;

        &:hover {
          background: #111;
        }

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
`;

const NewsletterPopup = () => {
  const [state, handleSubmit] = useForm("moqojwav");
  const [showPopup, setShowPopup] = useState(false); // State to control the visibility of the popup

  const handleClose = () => {
    setShowPopup(false); // Set the state to false to hide the popup
  };

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      alert("Thanks for subscribing us");
      handleClose(); // Close the popup when the form is successfully submitted
    }
  }, [state.succeeded]);

  return (
    <AnimatePresence>
      {showPopup && ( // Render the popup only if showPopup is true
        <PopupContainer
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
            delayChildren: 2,
            staggerChildren: 0.2,
            beforeEnter: (el) => {
              el.style.opacity = 0;
              el.style.transform = "scale(0)";
              console.log("before enter");
            },
            afterEnter: (el) => {
              el.style.opacity = 1;
              el.style.transform = "scale(1)";
              console.log("after enter");
            },
          }}
        >
          <div className="left">
            <div className="cls" onClick={handleClose}>
              Close
            </div>
            <div className="heading">
              <h1>Get In Touch</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name</label>
              <input required id="name" type="text" name="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <label htmlFor="email">Email Address</label>
              <input required id="email" type="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <label htmlFor="phone-number">Phone number</label>
              <input id="phone-number" type="tel" name="phone-number" />
              <ValidationError
                prefix="Phone number"
                field="phone-number"
                errors={state.errors}
              />

              <textarea
                placeholder="Write Your Query"
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button type="submit" disabled={state.submitting}>
                Subscribe us
              </button>
            </form>
          </div>
        </PopupContainer>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
