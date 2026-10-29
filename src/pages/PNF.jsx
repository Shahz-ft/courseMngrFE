
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import errorImg from "../assets/Error 404.svg";

const PNF = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        mt:-4,
        backgroundColor: "#FFFCF6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 3,
      }}
    >
      <Box
        component="img"
        src={errorImg}
        alt="404 Page Not Found"
        sx={{
          width: "100%",
          maxWidth: "600px",
        }}
      />

      <Typography
        variant="h4"
        sx={{
          color: "#E8A00A",
          fontWeight: 700,
          mt: 2,
          fontFamily: "Nunito, sans-serif",
        }}
      >
        Oops! Page Not Found
      </Typography>

      <Typography sx={{ color: "#81796F", mt: 1, mb: 3 }}>
        The page you're looking for doesn't exist.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{
          backgroundColor: "#040404",
          borderRadius: 2,
          textTransform: "none",
          px: 4,
          "&:hover": {
            backgroundColor: "#D18F00",
          },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default PNF;
