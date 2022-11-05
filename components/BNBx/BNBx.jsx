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

function BNBx() {
  const { Hamburgar, SetHamBurgar } = useContext(AppContext);
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={"/assets/bnb.svg"}
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
                  BNB
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
                    <VerifiedUserIcon
                      sx={{ fontSize: "16px", color: "#45BE21" }}
                    />
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
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
              background: "white",
              borderRadius: "8px",
              p: 2,
              mt: 4,
            }}
          >
            <Grid container columnSpacing={0} rowSpacing={{ md: 0, xs: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: { md: "center", xs: "space-between" },
                  alignItems: "center",
                  flexDirection: { md: "column", xs: "row" },
                  width: "100%",
                }}
                item
                md={3.8}
                xs={12}
              >
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.6)",
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  TVL
                  <Tooltip
                    placement="top"
                    title="Total BNB staked with Stader"
                    arrow
                  >
                    <Box
                      sx={{
                        ml: 0.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={"/assets/info.svg"}
                        alt="ico"
                        width={14}
                        height={14}
                        objectFit="contain"
                      />
                    </Box>
                  </Tooltip>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 600,
                    color: "rgba(0,0,0,1)",
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: { md: 2 },
                  }}
                >
                  57,586{" "}
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(0,0,0,0.6)", fontWeight: 500, ml: 0.5 }}
                  >
                    BNB
                  </Box>
                </Typography>
              </Grid>

              {/* Divider */}
              <Grid
                sx={{
                  display: { md: "flex", xs: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
                item
                md={0.3}
              >
                <Divider orientation="vertical" variant="middle" flexItem />
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  justifyContent: { md: "center", xs: "space-between" },
                  alignItems: "center",
                  flexDirection: { md: "column", xs: "row" },
                  width: "100%",
                }}
                item
                md={3.8}
                xs={12}
              >
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.6)",
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  APY
                  <Tooltip
                    placement="top"
                    title="Estimated Annualized Retuen"
                    arrow
                  >
                    <Box
                      sx={{
                        ml: 0.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={"/assets/info.svg"}
                        alt="ico"
                        width={14}
                        height={14}
                        objectFit="contain"
                      />
                    </Box>
                  </Tooltip>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 600,
                    color: "rgba(0,0,0,1)",
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: { md: 2 },
                  }}
                >
                  5.65 %
                </Typography>
              </Grid>

              {/* Divider */}
              <Grid
                sx={{
                  display: { md: "flex", xs: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
                item
                md={0.3}
              >
                <Divider orientation="vertical" variant="middle" flexItem />
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  justifyContent: { md: "center", xs: "space-between" },
                  alignItems: "center",
                  flexDirection: { md: "column", xs: "row" },
                  width: "100%",
                }}
                item
                md={3.8}
                xs={12}
              >
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.6)",
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  BNB/BNBx Exchange Rate
                  <Tooltip
                    placement="top"
                    title="Actual exchange rate may vary from the displayed value"
                    arrow
                  >
                    <Box
                      sx={{
                        ml: 0.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={"/assets/info.svg"}
                        alt="ico"
                        width={14}
                        height={14}
                        objectFit="contain"
                      />
                    </Box>
                  </Tooltip>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 600,
                    color: "rgba(0,0,0,1)",
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: { md: 2 },
                  }}
                >
                  1.0446{" "}
                  <Box
                    component={"span"}
                    sx={{ color: "rgba(0,0,0,0.6)", fontWeight: 500, ml: 0.5 }}
                  >
                    BNB
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BNBx;
