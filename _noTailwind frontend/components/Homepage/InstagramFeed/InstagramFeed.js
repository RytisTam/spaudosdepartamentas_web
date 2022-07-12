import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Backdrop from "@mui/material/Backdrop";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import InstagramBackdrop from "./InstagramBackdrop";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const InstagramFeed = () => {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const [instaMediaID, setInstaMediaID] = useState();

  return (
    <section className="instagram-area ptb-100">
      <div className="section-title">
        <Typography variant="h2" component="h2">
          {router.locale == "lt" ? "Mūsų darbai" : "Our work"}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {router.locale == "lt" ? "Tegul įkvepia jus naujoms idėjoms" : "Let us inspire you with new ideas"}
        </Typography>
      </div>
      <div className="container">
        <ImageList variant="standart" cols={6} rowHeight={200}>
          {posts.map((item, index) => (
            <ImageListItem
              key={item.id}
              cols={index % 7 == 0 ? 2 : 1}
              rows={index % 7 == 0 ? 2 : 1}
            >
              <img
                onClick={() => {
                  handleToggle();
                  setInstaMediaID(item.id)
                }}
                src={item.media_url}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <InstagramBackdrop/>
          
          {/* <Card sx={{ maxWidth: 550 }}>
            <CardMedia
              component="img"
              height="300"
              image={instaImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {instaText}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card> */}
        </Backdrop>
      </div>
    </section>
  );
};

const posts = [
  {
    id: '18302590540044534',
    media_type: 'CAROUSEL_ALBUM',
    media_url: 'https://scontent.cdninstagram.com/v/t51.29350-15/292002818_1713209962374097_7979891112963816879_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Y4icLArOSvcAX9Dxf1s&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_FG43glrb4C0epUKr5BWJHORvthpPXl_FlY2yNBoac1g&oe=62C98953'
  },
  {
    id: '17935005497331665',
    media_type: 'VIDEO',
    media_url: 'https://scontent.cdninstagram.com/v/t66.30100-6/122928387_1090623971536803_446519031760024640_n.mp4?_nc_cat=102&vs=1084942545791839_3807317076&_nc_vs=HBkcFQAYJEdBTzlVd2VqTDJpdTZ0OERBRUQwZ1pHeFdqSUdicFIxQUFBRhUAAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvrOv%2Fb2toRAFQIoAkMzLBdANAAAAAAAABgcZGFzaF9jb250cm9sLWMtYmFzZWxpbmVfMV92MREAdewHAA%3D%3D&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5pZ3R2In0%3D&_nc_ohc=x5zHlH-jCQUAX8lfNNd&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-7LgHWz7BGB8pmaGVhmiAItq920nMsi50DAWtEYakMBQ&oe=62CB009F&_nc_rid=428d56ada7',
    caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: '17945415586903541',
    media_type: 'IMAGE',
    media_url: 'https://scontent.cdninstagram.com/v/t51.29350-15/289360145_4901719123270369_7924240285044709832_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Qt5xibs2VQEAX-eetTz&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9QqHKtCx-nVWNtRRpKGRtvBW7qWzxfv6CrsmMISjXZRA&oe=62CB3973'
  },
  {
    id: '17955990781850341',
    media_type: 'IMAGE',
    media_url: 'https://scontent.cdninstagram.com/v/t51.29350-15/289273610_574425267621641_4031646738034266827_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=mtaH87VMFiEAX_CjQtg&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-1vSL9mK6x6meLWD-N5-QvoE0k85LoG5V1a3LxNstD5w&oe=62CB3DCB'
  },
  {
    media_url: "/images/sd_insta_foto/5.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 5,
  },
  {
    media_url: "/images/sd_insta_foto/6.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 6,
  },
  {
    media_url: "/images/sd_insta_foto/7.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 7,
  },
  {
    media_url: "/images/sd_insta_foto/8.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 8,
  },
  {
    media_url: "/images/sd_insta_foto/1.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 9,
  },
  {
    media_url: "/images/sd_insta_foto/2.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 10,
  },
  {
    media_url: "/images/sd_insta_foto/3.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 11,
  },
  {
    media_url: "/images/sd_insta_foto/4.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 12,
  },
  {
    media_url: "/images/sd_insta_foto/5.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 13,
  },
  {
    media_url: "/images/sd_insta_foto/6.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 14,
  },
  {
    media_url: "/images/sd_insta_foto/7.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 15,
  },
  {
    media_url: "/images/sd_insta_foto/8.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 16,
  },
  {
    media_url: "/images/sd_insta_foto/5.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 17,
  },
  {
    media_url: "/images/sd_insta_foto/6.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 18,
  },
  {
    media_url: "/images/sd_insta_foto/7.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 19,
  },
  {
    media_url: "/images/sd_insta_foto/8.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 20,
  },
  {
    media_url: "/images/sd_insta_foto/5.jpg",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
    id: 21,
  },
];

export default InstagramFeed;
