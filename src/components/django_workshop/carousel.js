import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Avatar from "@material-ui/core/Avatar";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const data = [
  {
    name: "Akshay Mishra | Data Engineer @ Amazon",
    label: `I started my interview preparation journey from the first seminar of O(1). Things were explained very well in detail, from tips and tricks for interviews to resources for DSA and core subjects.CPL was one of the highlights for me as I was able to improve my problem solving skills significantly. I would recommend O(1) to every fresher looking for mentorship, guidance and a productive atmosphere to learn and grow.`,
    imgPath: "akshayMishra.png",
    linkedin: "https://www.linkedin.com/in/akshay-mishra-1303/",
  },
  {
    name: "Amarkumar Mishra | BackEnd Developer @ HackerEarth",
    label: `I participated in CPL organized by O(1) Coding Club in May 2020 and I was team leader of my team. As, CPL was a team game it not only helped me to enhance my codingskills but also helped me to understand- 1. How to collaboratively solve a problem as a team. 2. Other better approaches for the same problem that you find out after discussing with your team mates. I would highly recommend to participate in CPL contest organized by O(1) coding club.`,
    imgPath: "AmarKumarMishra.png",
    linkedin: "https://www.linkedin.com/in/amarkumar-m-48b08a172",
  },
  {
    name: "Sakshi Thakur | R&D @ VMware",
    label: `I have been helped a lot from O(1) club! Right from the first seminar, we have been guided in almost everything related to placements. I started participating rigorously in CPL aore subjects. As a fresher guidance and resources helped me to learn and grow.`,
    imgPath: "SakshiThakur.png",
    linkedin: "https://www.linkedin.com/in/sakshithakur1612",
  },
  {
    name: "Vishal Kriplani | Software Engineer @ Fivetran",
    label: `The CPL helped me to maintain the speed and accuracy of problem-solving. Senior-Junior interaction was increased during these events. The Knowledge sessions were quite informative.`,
    imgPath: "VishalKriplani.png",
    linkedin: "https://www.linkedin.com/in/vishal-kriplani-a33181190/",
  },
  {
    name: "Bhumika Nagrecha | SD Intern @ Bank of New York Mellon",
    label: `I started my interview preparation journey from the first seminar of O(1). Things were explained very well in detail, from tips and tricks for interviews to resources for DSA andin contest streaks which improved my coding skills due to which I could clear the off-campus coding test for a job opportunity at Bank Of New York in my 3rd year itself . So in a nutshell, O(1) club is a single point solution for complete placement guidance.`,
    imgPath: "BhumikaNagrecha.png",
    linkedin: "https://www.linkedin.com/in/bhumikanagrecha/",
  },
  {
    name: "Monica Dholwani | SDE Intern @ Fivetran",
    label: `O(1) Coding Club helped me achieve this opportunity. My mentors were always there to guide & train me.
    Initially I was not good at coding, I didn't even know what competitive coding is!
    All thanks to CodeRun program which helped me improve my coding skills and achieve a super dream job!`,
    imgPath: "monica.jpeg",
    linkedin: "https://www.linkedin.com/in/monica-dholwani/",
  },
  {
    name: "Halry Bhalodia | SDE-T Intern @ ZS Associates",
    label: `At first, I didn't know where to start so I talked to mentors in O(1), they helped me from the beginning till the time I got placed in a Dream company, and even after that.
    With the help of Coderun, I could set a target for every day to practice coding questions and track my progress which helped me find out my weak topics and suggest related questions for more practice.
    Also, I could secure the Runner up position in Top Women Coders of Regional Challenge by Capgemini by practicing coding questions in coderun.`,
    imgPath: "halry.jpeg",
    linkedin: "https://www.linkedin.com/in/monica-dholwani/",
  },
  {
    name: "Aditya Sharma | SDE Intern @ Persistent",
    label: `I am associated with O(1) coding club for a long time and gained a lot of knowledge regarding coding and placements through it.
    With the help of different sessions conducted by O(1) coding club, I was able to bag dream package placements with offers like SDE at Persistent Systems and SDE-T at ZS associates.
    O1 also helped me in my second year to bag summer internship at Microland Ltd. with their guidance.
    Coderun helped me a lot to prepare for the placement season.`,
    imgPath: "aditya.jpeg",
    linkedin: "https://www.linkedin.com/in/aditya-sharma-0b21a3197/",
  },
  {
    name: "Rohit Doshi | SDE-T Intern @ ZS Associates",
    label: `Back in my 2nd year, I was clueless about what skills were needed to be in a good company.
    Mentors at O(1) Coding Club showed me the path to follow to land a great job.
    What I understood was to trust the process and keep on enhancing my knowledge and expertise on the basics.
    If it weren't for O(1) coding club, I would've known this too late and might not have landed the job that I have now.`,
    imgPath: "rohit.jpeg",
    linkedin: "https://www.linkedin.com/in/rohit-bhavesh-doshi/",
  },
  {
    name: "Tejas Tapas | SDE Intern @ ULA",
    label: `I was a part of the O(1) Coding Club for the last 1 year where I participated in some of their initiatives like CPL, coderun and aptitude series.
    I got to learn in a competitive environment with like-minded students and improve DSA and CP skills.
    The coding question which I solved during the CodeRun program highly benefited me in all companies Online Assessment and Interview rounds.`,
    imgPath: "tejas.jpeg",
    linkedin: "https://www.linkedin.com/in/tejas-sudhir-tapas/",
  },

  {
    name: "Ashwin Walunj | PP @ Infosys",
    label: `So I joined the program called CodeRun conducted by the O(1) coding club, where we were provided with ladders of different levels and after every 3 days, we had doubt clearance sessions. What I understood was to trust the process and keep on enhancing your knowledge and expertise on the basics just combine this with a little bit of luck and you will also land a great job. Finally, I cleared the HackWithInfy and banged an offer for the role of power programmer. If it weren't for the O(1) coding club, I would've known this too late and might not have landed the job that I have now.`,
    imgPath: "ashwinalunj.jpg",
    linkedin: "https://www.linkedin.com/in/atharva-u-96436a191/",
  },
  {
    name: "Swaraj Chaudhari | FSE @ Accenture",
    label: `Observing myself before & after doing Coderun with  O(1) Coding Club, Now I am very confident. Now I know how exactly to proceed with a given problem. I would seriously recommend you to join the course. Coderun and the aptitude series helped a lot during the placement season.`,
    imgPath: "swaraj.jpg",
    linkedin: "https://in.linkedin.com/in/swaraj-chaudhari-860803180",
  },
  {
    name: "Atharva Upadhyay | PP @ Infosys",
    label: `O(1) coding club helped me alot to get focused and streamlined on what topics are important for each competitions/placement. Their personalised guidance and regular doubt sessions uplifted my problem solving skills and my confidence increased. Thank you O(1) coding club and specially Naman and Abhigyan sir to all your efforts in helping me to get such a wonderful placement. It was a great experience to learn and get inspired from you guys.`,
    imgPath: "atharvaupadhyay.jpg",
    linkedin: "https://www.linkedin.com/in/atharva-u-96436a191/",
  },
  {
    name: "Vignesh Pathak | FSE @ Accenture",
    label: `O1 Coding Club opened a new exciting world for me .  Without their training it would never been that friendly or postive entrance into the world of coding that helped me to get this far . It had played a crucial role in my academic life and my first successful Placement . Thank you for your invaluable help , you have opened new horizons for me !`,
    imgPath: "vignesh.jpg",
    linkedin: "https://www.linkedin.com/in/vighnesh-pathak-4018b7192/",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "-40px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 250,
    padding: theme.spacing(1),
    backgroundColor: "#8739f9",
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
  stepper: {
    background: "#8739f9",
    minWidth: "300px",
    maxWidth: "300px",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
  desc: {
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  title: {
    color: "#fff",
    fontSize: "25px",
    marginTop: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
}));

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Grid container justifyContent="center">
          <Grid container item xs={12} sm={12} justifyContent="center">
            <Avatar src={data[activeStep].imgPath} className={classes.large} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Typography className={classes.title}>
             <a style={{textDecoration:'none',color:'#fff'}} href={data[activeStep].linkedin} target="_blank"> {data[activeStep].name}</a>
            </Typography>
          </Grid>

          <Grid item xs={10} sm={10}>
            <Typography className={classes.desc}>
              {data[activeStep].label}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        interval={5000}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? "" : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <Grid container justifyContent="center">
        <MobileStepper
          className={classes.stepper}
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button
              className={classes.white}
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              className={classes.white}
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Grid>
    </div>
  );
}

export default Carousel;
