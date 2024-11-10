import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import RickAndMortyGif from "../../assets/rickandmorty.gif";
import Openvpn from "../../assets/openvpn.jpg";

export default function ImgMediaCard() {
  const projects = [
    {
      id: 1,
      title: "Rick and Morty",
      description:
        "An interactive web application that delves into the fantastic world of the beloved TV series, Rick and Morty—Made Possible using the Rick and Morty API.",
      image: RickAndMortyGif,
      imageAlt: "rick and morty",
      url: "https://koffisonv.github.io/rickandmortywiki/",
    },
    {
      id: 2,
      title: "Self Hosted VPN",
      description:
        "The goal of the project is to analyze network traffic through VPNs using Wireshark, to see the efficiency of different vpn protocols used in existing VPN software like NordVPN as well as a self-hosted VPN built from scratch.",
      image: Openvpn,
      imageAlt: "openvpn",
      url: "https://youtu.be/xHemKKHjR0s",
    }
  ];

  const handleExplore = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="flex justify-center whitespace-pre-line">
            <Card sx={{ maxWidth: 445 }} className="w-full">
              <CardActionArea onClick={() => handleExplore(project.url)}>
                <CardMedia
                  sx={{ height: 240 }}
                  image={project.image}
                  title={project.imageAlt}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="medium"
                  onClick={() => handleExplore(project.url)}
                >
                  Explore
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
