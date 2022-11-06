import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Anchorlink from "@mui/material/Link";
import Image from "next/image";
import { Fade as HamburgerIcon } from "hamburger-react";
import { useContext } from "react";
import { AppContext } from "../../pages/layout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Withdrawal() {
  return (
    <Box
      sx={{
        width: { md: "800px", xs: "100%" },
        minHeight: { md: "350px" },
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        mt: 4,
      }}
    >
      {/*Info popUp  */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          p: 1.5,
          borderRadius: "8px",
          overflow: "hidden",
          background: "#FFFFF0",
          mt: 5,
        }}
      >
        <Image
          src={"/assets/unstakeuser.svg"}
          alt={"logo"}
          width={24}
          height={22}
          objectFit="contain"
        />
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "16px",
            fontWeight: 500,
            color: "black",
            ml: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          You will be able to withdraw your tokens after the withdraw request
          has been processed. To unstake your amount go to Unstake Tab.
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "Lato",
          fontSize: "16px",
          fontWeight: 500,
          color: "black",
          mt: 12,
          textAlign: "center",
        }}
      >
        No claims found
      </Typography>
    </Box>
  );
}

export default Withdrawal;
