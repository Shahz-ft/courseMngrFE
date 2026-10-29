import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,Button,
  Grid
} from "@mui/material";
import {  FaSearch } from "react-icons/fa";
import { deleteCourse, getCourses, updateCourse } from "../services/AllApi";

import { toast } from "react-toastify";
import CourseCard from "../components/CourseCard";
import Modal from '@mui/material/Modal';

const AllCourses = () => {

  const [coursesData,setCoursesData] = useState([])

  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const[searchVal , setSearchVal] = useState('')

  useEffect(()=>{
    getCoursesData()
  },[])

  const getCoursesData = async()=>{
    try {
      let apiResponse = await getCourses()

      if (apiResponse.status === 200){
        setCoursesData(apiResponse.data)
      }else{
        toast.error('Failed to get Course Datas')
      }

    } catch (error) {
      console.log(error)
      toast.error('Failed to get Course Datas')
    }
  }


  const ondeleteClick = async(id)=>{
    try {
      
      let apiResponse= await deleteCourse(id)
      if (apiResponse.status==200){
        toast.success('Deleted course Successfully')
        getCoursesData()
      }else{
        toast.error('Failed to Delete course')
      }
    } catch (error) {
      console.log(error)
      toast.error('Failed to Delete course')
    }
  }
  
  const onEditClick = (course) => {
  setSelectedCourse(course);
  handleOpen();
};

  const onUpdateClick = async()=>{
try {

  let apiResponse = await updateCourse(selectedCourse.id,selectedCourse)
   if (apiResponse.status === 200) {
      toast.success("Course updated successfully");
      handleClose();
      getCoursesData();
    } else {
      toast.error("Update failed");
    }
} catch (error) {
   console.log(error);
  toast.error("Update failed");
}
  }

  return (
    <Box
      sx={{
        minHeight: "80vh",
        backgroundColor: "#FFFCF6",
         px: { xs: 2, md: 6 },
      py: 5,
        mb: 0.5,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: "#292621",
          mb: 1,fontFamily: ' "Nunito", sans-serif '
        }}
      >
         Explore Your{" "}
      <Box component="span" sx={{ color: "#E8A00A" }}>
        Courses
      </Box>
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          color: "#81796F",
          mb: 4,mt:1,fontSize: 16,fontFamily: ' "Nunito", sans-serif '
        }}
      >
          View, organize, and manage all your courses in one place.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
        <TextField
          fullWidth
          value={searchVal}
          onChange={(e)=>setSearchVal(e.target.value)}
          placeholder="Search courses..."
          variant="outlined"
          size="small"
          sx={{
            maxWidth: 550,
            "& .MuiOutlinedInput-root": {
              height: 42,
              borderRadius: 2,
              fontSize: 16,
              backgroundColor: "#FFFEFB",
            "& fieldset": { borderColor: "#E9DFCF" },
            "&:hover fieldset": { borderColor: "#E8A00A" },
            "&.Mui-focused fieldset": { borderColor: "#E8A00A" },
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <FaSearch color="#81796F" />
                </InputAdornment>
              ),},
          }}
        />
      </Box>

<Box
  sx={{
   
    mx: 10,
  }}
>
  <Grid container spacing={6}>

    {
       
  coursesData?.filter((eachData)=>
  eachData.courseName?.toLowerCase().includes(searchVal.toLowerCase()))
  .map((eachData)=>(
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
    <CourseCard key={eachData.id} course={eachData} onDelete={ondeleteClick} onEdit={onEditClick}/>
    </Grid>
  )) 
  }

  </Grid>
  

</Box>
<Modal
  open={open}
  onClose={handleClose}
>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "#FFFCF6",
      boxShadow: 24,
      p: 4,
      borderRadius: 2,
      maxHeight: "85vh",
      overflowY: "auto"
    }}
  >
    <Typography variant="h6" sx={{ mb: 2,fontSize: 25,
            fontWeight: 700,
            color: "#292621" }}>
      Edit Course Details
    </Typography>

    <TextField
      label="Course Name"
      fullWidth
      margin="normal"
      value={selectedCourse?.courseName}
      onChange={(e) =>
        setSelectedCourse({
          ...selectedCourse,
          courseName: e.target.value
        })
      }
       sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
    />

    <TextField
      label="Course Contents"
      fullWidth
      multiline
      rows={3}
      margin="normal"
      value={selectedCourse?.courseContents }
      onChange={(e) =>
        setSelectedCourse({
          ...selectedCourse,
          courseContents: e.target.value
        })
      }
       sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
    />

    <TextField
      label="Duration"
      fullWidth
      margin="normal"
      value={selectedCourse?.duration}
      onChange={(e) =>
        setSelectedCourse({
          ...selectedCourse,
          duration: e.target.value
        })
      }
       sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
    />

    <TextField
      label="Course Fees"
      type="number"
      fullWidth
      margin="normal"
      value={selectedCourse?.fees }
      onChange={(e) =>
        setSelectedCourse({
          ...selectedCourse,
          fees: e.target.value
        })
      }
       sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
    />

    <Button
      variant="contained"
      onClick={onUpdateClick}
      sx={{ mt: 2, bgcolor: "#E8A00A" }}
    >
      UPDATE COURSE
    </Button>
  </Box>
</Modal>
      
    </Box>
  );
};

export default AllCourses;
