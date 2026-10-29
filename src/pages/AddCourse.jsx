import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { toast } from "react-toastify";
import { addCourse } from "../services/AllApi";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    courseName: "",
    courseContents: "",
    duration: "",
    fees: "",
  });
  const navigate = useNavigate();

  const onAddClick = async () => {
      if (
      !courseData.courseName.trim() ||
      !courseData.courseContents.trim() ||
      !courseData.duration.trim() ||
      !courseData.fees
    ) {
      toast.warning("Please fill in all fields");
      return;
    }

    try {
      let apiResponse = await addCourse(courseData);
      console.log(apiResponse);
      if (apiResponse.status === 201) {
        toast.success("Successfully Added Course");
        navigate("/all-courses");
      } else {
        toast.error("Something went wrong while adding course");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong  while adding course");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        backgroundColor: "#FFFCF6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        mb: 4, mt:4
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: "480px",
          p: 6,
          borderRadius: 6,
           backgroundColor: "#FFFEFB",
        border: "1px solid #F0E5D3",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            fontSize:30,
            color: "#E8A00A",
            mb: 1,
            fontFamily: '"Nunito", sans-serif',
          }}
        >
          +Add New Course
        </Typography>
          <Typography
        sx={{
          textAlign: "center",
          color: "#81796F",
          fontSize: 15,
          mb: 4,
          lineHeight: 1.7,
        }}
      >
        Fill in the details below to organize your course.
      </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <TextField
            label="Course Name"
            placeholder="e.g. MERN Stack Development"
            fullWidth
            value={courseData.courseName}
            onChange={(e) =>
              setCourseData({
                ...courseData,
                courseName: e.target.value,
              })
            }
            sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2.5,
              backgroundColor: "#FFFCF6",
              "& fieldset": { borderColor: "#E9DFCF" },
              "&:hover fieldset": { borderColor: "#E8A00A" },
              "&.Mui-focused fieldset": { borderColor: "#E8A00A" },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#B87900",
            },
          }}
          />

          <TextField
            label="Course Contents"
            placeholder="e.g. HTML, CSS, React, Node.js"
            multiline
            rows={3}
            fullWidth
            value={courseData.courseContents}
            onChange={(e) =>
              setCourseData({
                ...courseData,
                courseContents: e.target.value,
              })
            }
            sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2.5,
              backgroundColor: "#FFFCF6",
              "& fieldset": { borderColor: "#E9DFCF" },
              "&:hover fieldset": { borderColor: "#E8A00A" },
              "&.Mui-focused fieldset": { borderColor: "#E8A00A" },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#B87900",
            },
          }}
          />

          <TextField
            label="Duration"
            placeholder="e.g. 6 months"
            fullWidth
            value={courseData.duration}
            onChange={(e) =>
              setCourseData({
                ...courseData,
                duration: e.target.value,
              })
            }
            sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2.5,
              backgroundColor: "#FFFCF6",
              "& fieldset": { borderColor: "#E9DFCF" },
              "&:hover fieldset": { borderColor: "#E8A00A" },
              "&.Mui-focused fieldset": { borderColor: "#E8A00A" },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#B87900",
            },
          }}
          />

          <TextField
            label="Course Fee (₹)"
            placeholder="e.g. 45000"
            type="number"
            fullWidth
            value={courseData.fees}
            onChange={(e) =>
              setCourseData({
                ...courseData,
                fees: e.target.value,
              })
            }
            sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2.5,
              backgroundColor: "#FFFCF6",
              "& fieldset": { borderColor: "#E9DFCF" },
              "&:hover fieldset": { borderColor: "#E8A00A" },
              "&.Mui-focused fieldset": { borderColor: "#E8A00A" },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#B87900",
            },
          }}
          />

          <Button
            onClick={onAddClick}
            variant="contained"
            sx={{
              mt: 1,
            py: 1.5,
            borderRadius: 3,
            backgroundColor: "#E8A00A",
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: 700,
            textTransform: "none",
            boxShadow: "none",
            transition: "0.25s",
            "&:hover": {
              backgroundColor: "#C98A08",
              boxShadow: "0 6px 16px rgba(232, 160, 10, 0.2)",
              transform: "translateY(-2px)",
            },
          }}
           
          >
            Add Course
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddCourse;
