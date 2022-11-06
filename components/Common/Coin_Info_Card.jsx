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

function Coin_Info_Card({Name,Icon}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={Icon}
        alt={"logo"}
        width={70}
        height={70}
        objectFit="contain"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          ml: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "1.6rem",
              lineHeight: "",
              fontWeight: 700,
              color: "black",
              textTransform: "capitalize",
            }}
          >
            {Name}
          </Typography>
          <Tooltip title="Click to know more on audits" arrow>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ml: 2,
                borderRadius: "8px",
                background: "white",
                px: 1,
                py: 0.5,
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  background: "white",
                },
              }}
            >
              <VerifiedUserIcon sx={{ fontSize: "16px", color: "#45BE21" }} />
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "16px",
                  lineHeight: "",
                  fontWeight: 500,
                  color: "rgba(0,0,0,0.8)",
                  textTransform: "capitalize",
                  ml: 0.5,
                }}
              >
                Safe & secured
              </Typography>
            </Button>
          </Tooltip>
        </Box>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "16px",
            fontWeight: 500,
            color: "black",
            textTransform: "capitalize",
            mt: 1,
          }}
        >
          Stake BNB & use BNBx in DeFi while earning staking rewards
        </Typography>
      </Box>
    </Box>
  );
}

export default Coin_Info_Card;
