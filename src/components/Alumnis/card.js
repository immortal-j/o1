import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
  subheader:{
   color:'#000',
   fontSize: '18px',
  },
  root: {
    minWidth: 287,
    minHeight:287,
    transition: '0.3s all ease-in-out',
    '&:hover':{
      marginTop:'-10px',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  typo:{
    color:'#22577A',
   fontSize:'18px',
  },
  personName:{
    fontSize: '20px',
    color: '#2A0944',
    [theme.breakpoints.up('sm')]: {
      fontSize:'25px',
    },
  },
  avatar: {
  resize:'contain',
  height:'60px',
  width:'60px',
  },
}));

export default function  UserCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [visible, setvisible]= React.useState("inline");
  const handleExpandClick = () => {
      setvisible("none");
   
  };
  const handlecontract = () => {
    setvisible("inline");
};
  return (
    <div>
     <img /> 
    <Card className={classes.root} style={{backgroundColor:"#FFAA4C",color:"#fff"}} elevation={3}>
      <CardHeader
        avatar={
          <Avatar aria-label="image" className={classes.avatar} src={props.user.image} >
          </Avatar>
        }
        action={
          <a href={props.user.linkedin}>
          <FontAwesomeIcon icon={faLinkedinIn} size="1.8x" color="#24e5af"/>
          </a>
        }
        title={<Typography className={classes.personName} >{props.user.name}</Typography>}
        subheader={<Typography className={classes.typo} color="textSecondary" fontSize='29px'>{props.user.position}</Typography>}
      />
      <CardContent>
        <Typography variant="body2"  component="p" className={classes.subheader}>
          {props.user.description1}
          <Button onClick={handleExpandClick} style={{display:`${visible}`,color:"#5089C6",fontFamily:"sans-serif"}}variant="body2"  component="p" >
            Read more
          </Button>
          <Typography style={{display:`${visible === 'none' ? 'inline' : 'none'}`}}variant="body2"  component="p" className={classes.subheader}> 
          {props.user.description2}
          </Typography>
          <Button onClick={handlecontract} style={{display:`${visible === 'none' ? 'inline' : 'none'}`,color:"#5089C6",}}variant="body2"  component="p">
            Read Less
          </Button>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
