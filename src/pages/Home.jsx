
import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { FaArrowRightLong, FaBookOpen, FaClock, FaCoins } from "react-icons/fa6";
import heroImg from "../assets/heroimg.png";

const Home = () => {
  const features = [
    {
      icon: <FaBookOpen />,
      title: "Organize Courses",
      text: "Keep all your course details in one place.",
    },
    {
      icon: <FaClock />,
      title: "Track Durations",
      text: "Manage course timelines with ease.",
    },
    {
      icon: <FaCoins />,
      title: "Manage Fees",
      text: "Keep course fees organized and updated.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#FFFCF6", minHeight: "80vh", pb: 6 ,mx:5 }}>
      {/* Hero section */}
      <Grid
        container
        alignItems="center"
        spacing={1}
        sx={{ px: { xs: 3, md: 8 }, pt: { xs: 5, md: 7 } }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "inline-block",
              bgcolor: "#FFF0CE",
              color: "#8A5700",
              px: 2,
              py: 1,
              borderRadius: 5,
              mb: 2,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            SIMPLE · ORGANIZED · EFFICIENT
          </Box>

          <Typography
            sx={{
              fontSize: { xs: 38, sm: 48, md: 58 },
              fontWeight: 800,
              color: "#292621",
              lineHeight: 1.12,
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Manage your{" "}
            <Box component="span" sx={{ color: "#E8A00A" }}>
              Courses
            </Box>{" "}
            with clarity.
          </Typography>

          <Typography
            sx={{
              color: "#81796F",
              fontSize: { xs: 16, md: 19 },
              lineHeight: 1.8,
              mt: 2,
              mb: 3,
              maxWidth: 500,
            }}
          >
            A simple way to organize course details, track durations,
            and manage fees — all in one place.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              component={Link}
              to="/add-course"
              variant="contained"
              endIcon={<FaArrowRightLong />}
              sx={{
                bgcolor: "#E8A00A",
                color: "#fff",
                borderRadius: 8,
                px: 3.5,
                py: 1.4,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": { bgcolor: "#C98A08" },
              }}
            >
              Get Started
            </Button>

            <Button
              component={Link}
              to="/all-courses"
              variant="outlined"
              sx={{
                borderColor: "#E8A00A",
                color: "#6F4300",
                borderRadius: 8,
                px: 3.5,
                py: 1.4,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#FFF4D9",
                  borderColor: "#C98A08",
                },
              }}
            >
              View Courses
            </Button>
          </Box>
        </Grid>

        {/* Hero image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={heroImg}
            alt="Student organizing courses on a laptop"
            sx={{
              width: "100%",
              maxHeight: { xs: 340, md: 480 },
              objectFit: "contain",
              display: "block",
            }}
          />
        </Grid>
      </Grid>

      {/* Feature cards */}
      <Grid
        container
        spacing={3}
        sx={{ px: { xs: 3, md: 8 }, mt: { xs: 3, md: 5 } }}
      >
        {features.map((feature) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={feature.title}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 3,
                borderRadius: 4,
                border: "1px solid #F4E9D7",
                bgcolor: "#FFFEFB",
                transition: "0.25s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 28px rgba(180, 125, 30, 0.10)",
                },
              }}
            >
              <Box
                sx={{
                  minWidth: 60,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  bgcolor: "#FFF0CE",
                  color: "#E8A00A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 25,
                }}
              >
                {feature.icon}
              </Box>

              <Box>
                <Typography
                  sx={{ fontWeight: 800, color: "#292621", mb: 0.5 }}
                >
                  {feature.title}
                </Typography>
                <Typography sx={{ color: "#81796F", fontSize: 14, lineHeight: 1.7 }}>
                  {feature.text}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
