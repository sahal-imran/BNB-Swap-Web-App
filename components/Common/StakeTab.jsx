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

function StakeTab({
  BNB_Amount,
  BNBx_Amount,
  Amount,
  Change_input_f,
  You_get,
  isBNBx,
}) {
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
      {/* Coins info bar */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 500,
            color: "rgba(0,0,0,1)",
            textTransform: "capitalize",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { md: 2 },
          }}
        >
          My BNB :{" "}
          <Box
            component={"span"}
            sx={{ color: "rgba(0,0,0,1)", fontWeight: 600, ml: 0.5 }}
          >
            {BNB_Amount}
          </Box>
        </Typography>
        {/* Right */}
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
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 500,
              color: "rgba(0,0,0,1)",
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            My BNBx :{" "}
            <Box
              component={"span"}
              sx={{
                color: "rgba(0,0,0,1)",
                fontWeight: 600,
                ml: 0.5,
              }}
            >
              {BNBx_Amount}
            </Box>
          </Typography>
          <Button
            variant="contained"
            sx={{
              height: "100%",
              px: 1.5,
              boxShadow: "none",
              background: "#F3BA2F",
              borderRadius: "8px",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
              fontFamily: "Lato",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 600,
              "&:hover": { boxShadow: "none", background: "#F3BA2F" },
              ml: 2,
            }}
          >
            <AddCircleOutlineIcon sx={{ color: "black", mr: 1 }} />
            Add BNBx
          </Button>
        </Box>
      </Box>
      {/* Input */}
      <Box
        sx={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
          border: "2px solid #F3BA2F",
          overflow: "hidden",
          width: "100%",
          mt: 3,
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            width: { sm: "6%", xs: "10%" },
            position: "relative",
            height: { sm: "30px", xs: "24px" },
          }}
        >
          <Image
            src={isBNBx ? "/assets/bnb.svg" : "/assets/BNBx_Logo.webp"}
            alt="bnb"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box
          sx={{
            width: { sm: "86%", xs: "76%" },
            height: "100%",
          }}
        >
          <input
            value={Amount}
            onChange={(e) => Change_input_f(e.target.value)}
            type="number"
            style={{
              width: "100%",
              height: "100%",
              outline: "none",
              border: "none",
              boxShadow: "none",
              background: "transparent",
              fontFamily: "Lato",
              fontSize: "18px",
              fontWeight: 500,
              color: "black",
            }}
            placeholder="Enter BNB Amount"
          />
        </Box>
        <Box
          sx={{
            width: { sm: "8%", xs: "14%" },
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              height: "26px",
              minWidth: "40px",
              width: "40px",
              boxShadow: "none",
              background: "white",
              borderRadius: "8px",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 600,
              "&:hover": { boxShadow: "none", background: "#F3BA2F" },
            }}
          >
            max
          </Button>
        </Box>
      </Box>
      {/* You will get */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "16px",
            fontWeight: 500,
            color: "black",
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          You will get :
          <Box
            component={"span"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: 1,
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            <Box
              sx={{
                mr: 1,
                position: "relative",
                width: "30px",
                height: "30px",
              }}
            >
              <Image
                src={isBNBx ? "/assets/BNBx_Logo.webp" : "/assets/bnb.svg"}
                alt={"logo"}
                layout="fill"
                objectFit="contain"
              />
            </Box>
            {You_get}
          </Box>
          {
            isBNBx ? "BNBx" : "Binance"
          }
        </Typography>
      </Box>
      {/* Connect wallet popup */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          p: 1.5,
          borderRadius: "8px",
          overflow: "hidden",
          background: "#EBF8FF",
          mt: 5,
        }}
      >
        <AiOutlineInfoCircle color="#3182CE" />
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
          Connect your wallet now to start staking
        </Typography>
      </Box>

      {/* Connect wallet button */}
      <Button
        variant="contained"
        sx={{
          height: "60px",
          width: "100%",
          boxShadow: "none",
          background: "#F3BA2F",
          borderRadius: "8px",
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "uppercase",
          fontFamily: "Lato",
          fontSize: "20px",
          fontWeight: 800,
          "&:hover": { boxShadow: "none", background: "#F3BA2F" },
          mt: 3,
          textTransform: "unset",
        }}
      >
        Connect wallet
        <KeyboardArrowRightIcon sx={{ ml: 1 }} />
      </Button>
    </Box>
  );
}

export default StakeTab;
