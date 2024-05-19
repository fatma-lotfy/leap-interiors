import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useMediaQuery, useTheme } from "@mui/material";
import logo from "../../assets/Images/logo.webp";

function AppHeader() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  let height;
  if (isSmallScreen) {
    height = 200;
  } else if (isLargeScreen) {
    height = 450;
  }
  return (
    <Card>
    <CardMedia
      component="img"
      alt="leap img"
      height={height}
      image={logo}
    />
    </Card>
  );
}

export default AppHeader;
