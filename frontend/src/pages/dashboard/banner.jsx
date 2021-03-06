import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import images from './bannerData';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function Banner(props) {
  const theme = useTheme();
  const maxSteps = images.length;

  return (
    <section style={{ marginRight: "60px", marginLeft: "60px", height: "100%", opacity: "0.9", marginTop: 151 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            position: "absolute",
            zIndex: 1,
            fontSize: 50,
            fontWeight: 500,
            color: "#ffffff",
            top: "100%",
            margin: "0 14%",
            padding: "5px 10px",
            textShadow: "0px 4px 4px rgb(255 19 19 / 70%)",
            textAlign: "center",
            letterSpacing: "-0.015rem",
            lineHeight: "1",
            fontFamily: "Ubuntu",
            background: "rgb(0 0 0 / 60%)"
          }}>
          {images[props.activeStep].label}
        </Typography>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={props.activeStep}
          onChangeIndex={props.handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(props.activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 100 + "%",
                    display: 'block',
                    overflow: 'hidden',
                    width: "100%",
                    position: "relative",
                    objectFit: "fill",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(props.activeStep - index) <= 2 ? (
              <a href={images[props.activeStep].recipePath} target="_blank" rel="noreferrer">
                <Button style={{
                  position: "absolute",
                  left: "45%",
                  right: "5%",
                  top: "122%",
                  bottom: "0%",
                  background: "#18A0FB",
                  borderRadius: "6px",
                  height: "50px",
                  width: "150px"
                }}>
                  <p style={{ textAlign: "center", color: '#ffffff', marginTop: "20px" }}>Read More</p>
                </Button>
              </a>
            ) : null}
          </div>
        ))}

        <Button style={{ position: "absolute", top: "70%", right: "5%" }} onClick={props.handleNext} disabled={props.activeStep === maxSteps - 1}>
          <img src="./images/arrow_forward.svg" alt="Arrow Forward" style={{ height: "80px", color: "white" }} />
        </Button>

        <Button style={{ position: "absolute", top: "70%", left: "5%", transform: "rotate(180deg)" }} onClick={props.handleBack} disabled={props.activeStep === 0}>
          <img src="./images/arrow_forward.svg" alt="Arrow Forward" style={{ height: "80px", color: "white" }} />
        </Button>

      </Box>
    </section>
  );
}

export default Banner;

