import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./AccordionElement.module.css";

function AccordionElement() {
  return (
    <>
      <div className={styles.heading}>
        <h1>FAQs</h1>
      </div>
      <div className={styles.accordion}>
        <div>
          <Accordion
            sx={{
              color: "var(--color-white)",
              bgcolor: "var(--color-black)",
              border:"1px solid var(--color-white)",
              borderRadius:"7px !important",
              overflow:"hidden !important",
              width:"700px"
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Is QTify free to use ?</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "var(--color-white)",
                color: "var(--color-black)"
                
              }}
            >
              <Typography>Yes! it is 100% free, and has 0% ads!</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              color: "var(--color-white)",
              bgcolor: "var(--color-black)",
              border:"1px solid var(--color-white)",
              marginTop:"10px",
              borderRadius:"7px !important",
              overflow:"hidden !important"
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "var(--color-primary)" }} />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                Can I download and listen to songs offline ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "var(--color-white)",
                color: "var(--color-black)",
              }}
            >
              <Typography>
                Sorry, unfortunately we don't provide the service to download
                any songs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default AccordionElement;
