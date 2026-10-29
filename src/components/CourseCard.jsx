
import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { FaEdit, FaTrash } from "react-icons/fa";

const CourseCard = ({ course, onDelete, onEdit }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        p: 3,
        borderRadius: 4,
        backgroundColor: "#FFFEFB",
        border: "1px solid #F0E5D3",
        transition: "0.25s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 28px rgba(100, 75, 35, 0.09)",
          borderColor: "#E8A00A",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 800,
            color: "#292621",
            fontFamily: '"Nunito", sans-serif',
            overflowWrap: "anywhere",
          }}
        >
          {course.courseName}
        </Typography>

        <Box sx={{ display: "flex", gap: 1.5, flexShrink: 0, pt: 0.5 }}>
          <Box
            component="span"
            onClick={() => onEdit(course)}
            sx={{
              display: "flex",
              color: "#B87900",
              cursor: "pointer",
              fontSize: 18,
              "&:hover": { color: "#E8A00A" },
            }}
          >
            <FaEdit />
          </Box>

          <Box
            component="span"
            onClick={() => onDelete(course.id)}
            sx={{
              display: "flex",
              color: "#C65A4A",
              cursor: "pointer",
              fontSize: 17,
              "&:hover": { color: "#A93226" },
            }}
          >
            <FaTrash />
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          color: "#81796F",
          mt: 1.5,
          mb: 2.5,
          fontSize: 14,
          lineHeight: 1.8,
          overflowWrap: "anywhere",
        }}
      >
        {course.courseContents}
      </Typography>

      <Box
        sx={{
          borderTop: "1px solid #F0E5D3",
          pt: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography sx={{ color: "#81796F", fontSize: 14 }}>
          Duration:{" "}
          <Box component="span" sx={{ color: "#292621", fontWeight: 700 }}>
            {course.duration}
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "#E8A00A",
            fontWeight: 800,
            fontSize: 17,
          }}
        >
          ₹{course.fees}
        </Typography>
      </Box>
    </Paper>
  );
};

export default CourseCard;
