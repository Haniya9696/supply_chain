import { LoadingButton } from "@mui/lab";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm({})
  const sendForm = async (formData) => {

  }
  return (
    
    <Box
      sx={{
        backgroundImage: "linear-gradient(to right top, #445f89, #4f859d, #7aa8a9, #b1c9bc, #e5e9de)",
        position: "relative",
        height: "100vh"
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(sendForm)}
        sx={{
          borderRadius: 3,
          bgcolor: " white",
          boxShadow: 9,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 350,
          padding: 6
        }}>
        <Typography variant="h4"
          sx={{
            fontWeight: 600,
            textAlign: "center",
            fontFamily: "Barlow"
          }}>
          SignIn
        </Typography>
        <FormControl sx={{ marginY: 3, width: "100%" }}>

          <TextField label=" email" variant="outlined" type="email"
            {...register('email', {
              required: "Please Enter email",

            })}
          />
          {errors.email && <span role="alert" style={{ color: 'red' }}>{errors.email.message}</span>}
        </FormControl>
        <FormControl fullWidth>
                    <TextField fullWidth label=" password" variant="outlined" type="password" InputProps={{ disableUnderline: true }}
                      type="password"
                      {...register("password", {
                        required: "required",
                        minLength: {
                          value: 6,
                          message: "min length is 6"
                        }
                      })}

                    />

                  
          {errors.password && <span role="alert" style={{ color: 'red' }}>{errors.password.message}</span>}
        </FormControl>
        <LoadingButton type='submit' variant="contained"
          sx={{
            backgroundImage: "linear-gradient(to right top, #445f89, #4f859d, #7aa8a9, #b1c9bc, #e5e9de)",
            borderRadius: 1.5,
            p: 1.5, width: "100%",
            marginTop: 4,
            // bgcolor: "#3B5998"
          }}>
          LOGIN
        </LoadingButton>

      </Box>
    </Box>
  );
}

export default SignIn;
