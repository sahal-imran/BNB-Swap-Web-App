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

// components

import Coin_Info_Card from "../Common/Coin_Info_Card";
import Coin_Detail_Card from "../Common/Coin_Detail_Card";
import StakeTab from "../Common/StakeTab";
import UnstakeTab from "../Common/UnstakeTab";
import Withdrawal from "../Common/Withdrawal";

function Binance() {
  const { Hamburgar, SetHamBurgar } = useContext(AppContext);
  const [Stake, SetStake] = useState(true);
  const [UnStake, SetUnStake] = useState(false);
  const [Withdraw, SetWithdraw] = useState(false);

  const [Amount, Set_Amount] = useState(null);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflowX: "auto",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          px: 3,
          py: 2,
        }}
      >
        {/* wallet Address, dark/bright button and hamburgar bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { lg: "end", xs: "space-between" },
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: { lg: "none", xs: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={"/assets/logoBlack.svg"}
              alt={"logo"}
              width={36}
              height={36}
              objectFit="contain"
            />
          </Box>
          {/* Wallet address card */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Connect wallet button */}
            <Button
              variant="contained"
              sx={{
                height: "56px",
                borderRadius: "8px",
                background: "#F3BA2F",
                boxShadow: "none",
                borderRadius: "8px",
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: 800,
                color: "black",
                textTransform: "capitalize",
                px: "1rem",
                ml: 3,
                "&:hover": { background: "#F3BA2F", boxShadow: "none" },
              }}
            >
              Connect wallet
            </Button>
            {/* If wallet will connected */}
            <Box
              sx={{
                height: "56px",
                px: "1rem",
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                background: "white",
              }}
            >
              <Image
                src={"/assets/bnb.svg"}
                alt={"logo"}
                width={24}
                height={24}
                objectFit="contain"
              />
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "20px",
                  lineHeight: "28px",
                  fontWeight: 600,
                  color: "black",
                  textTransform: "capitalize",
                  ml: 1.2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                0
                <Box
                  component={"span"}
                  sx={{ fontSize: "14px", fontWeight: 500, ml: 1 }}
                >
                  BNB
                </Box>
              </Typography>
              <Typography
                sx={{
                  display: { md: "block", xs: "none" },
                  fontFamily: "Lato",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "black",
                  textTransform: "capitalize",
                  background: "#F0F1F5",
                  borderRadius: "8px",
                  ml: 1,
                  px: 2,
                  py: 0,
                }}
              >
                0x2742...1cCe0
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                display: { lg: "flex", xs: "none" },
                minWidth: "56px",
                width: "56px",
                height: "56px",
                borderRadius: "8px",
                background: "white",
                boxShadow: "none",
                borderRadius: "8px",
                justifyContent: "center",
                alignItems: "center",
                p: 0,
                ml: 3,
                "&:hover": { background: "#F3BA2F", boxShadow: "none" },
              }}
            >
              <DarkModeIcon sx={{ color: "black" }} />
            </Button>
            <Button
              variant="contained"
              sx={{
                display: { lg: "none", xs: "flex" },
                minWidth: "56px",
                width: "56px",
                height: "56px",
                borderRadius: "8px",
                background: "white",
                boxShadow: "none",
                borderRadius: "8px",
                justifyContent: "center",
                alignItems: "center",
                p: 0,
                ml: 3,
                "&:hover": { background: "white", boxShadow: "none" },
              }}
            >
              <HamburgerIcon
                size={24}
                toggled={Hamburgar}
                toggle={SetHamBurgar}
                color="#F3BA2F"
                rounded
              />
            </Button>
          </Box>
        </Box>
        {/* main content */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            mt: 6,
          }}
        >
          {/* Coin info bar */}
          <Coin_Info_Card Name={"BNB"} Icon={"/assets/bnb.svg"} />

          {/* BNB info bar */}
          <Coin_Detail_Card
            TVL={"57,595"}
            APY={"5.92"}
            Exchange_Rate={"1.0448 "}
          />

          {/* Swap section */}
          <Box
            sx={{
              width: "100%",
              background: "white",
              borderRadius: "8px",
              p: { md: 2, xs: 1 },
              mt: 4,
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* Toggle buttons */}
            <Box
              sx={{
                width: { md: "800px", xs: "100%" },
                m: "auto",
              }}
            >
              <Grid container spacing={0}>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  item
                  xs={3.8}
                >
                  <Typography
                    onClick={() => {
                      SetStake(true);
                      SetUnStake(false);
                      SetWithdraw(false);
                    }}
                    sx={
                      Stake
                        ? {
                            fontFamily: "Lato",
                            fontSize: "18px",
                            fontWeight: 800,
                            color: "rgba(0,0,0,1)",
                            textTransform: "capitalize",
                            cursor: "pointer",
                          }
                        : {
                            fontFamily: "Lato",
                            fontSize: "18px",
                            fontWeight: 800,
                            color: "rgba(0,0,0,0.6)",
                            textTransform: "capitalize",
                            cursor: "pointer",
                          }
                    }
                  >
                    Stake
                  </Typography>
                </Grid>

                {/* Divider */}
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  item
                  md={0.3}
                >
                  <Divider
                    sx={{ height: "30px" }}
                    orientation="vertical"
                    variant="middle"
                    flexItem
                  />
                </Grid>

                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  item
                  xs={3.8}
                >
                  <Typography
                    onClick={() => {
                      SetStake(false);
                      SetUnStake(true);
                      SetWithdraw(false);
                    }}
                    sx={
                      UnStake
                        ? {
                            fontFamily: "Lato",
                            fontSize: "18px",
                            fontWeight: 800,
                            color: "rgba(0,0,0,1)",
                            textTransform: "capitalize",
                            cursor: "pointer",
                          }
                        : {
                            fontFamily: "Lato",
                            fontSize: "18px",
                            fontWeight: 800,
                            color: "rgba(0,0,0,0.6)",
                            textTransform: "capitalize",
                            cursor: "pointer",
                          }
                    }
                  >
                    Unstake
                  </Typography>
                </Grid>

                {/* Divider */}
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  item
                  md={0.3}
                >
                  <Divider
                    sx={{ height: "30px" }}
                    orientation="vertical"
                    variant="middle"
                    flexItem
                  />
                </Grid>

                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  item
                  xs={3.8}
                >
                  <Typography
                    onClick={() => {
                      SetStake(false);
                      SetUnStake(false);
                      SetWithdraw(true);
                    }}
                    sx={
                      Withdraw
                        ? {
                            fontFamily: "Lato",
                            fontSize: "18px",
                            fontWeight: 800,
                            color: "rgba(0,0,0,1)",
                            textTransform: "capitalize",
                            cursor: "pointer",
                          }
                        : {
                            fontFamily: "Lato",
                            fontSize: "18px",
                            fontWeight: 800,
                            color: "rgba(0,0,0,0.6)",
                            textTransform: "capitalize",
                            cursor: "pointer",
                          }
                    }
                  >
                    Withdraw
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            {/* Stake */}
            {Stake && (
              <StakeTab
                BNB_Amount={"0"}
                BNBx_Amount={"0"}
                Amount={Amount}
                Change_input_f={Set_Amount}
                You_get={0}
                isBNBx={false}
              />
            )}

            {/* Unstake */}
            {UnStake && (
              <UnstakeTab
                Balance={"0"}
                Amount={Amount}
                Change_input_f={Set_Amount}
                You_get={0}
                isBNBx={false}
              />
            )}

            {/* Widthdrawal */}
            {Withdraw && <Withdrawal />}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Binance;
