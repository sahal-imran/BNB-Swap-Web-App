import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Anchorlink from "@mui/material/Link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaRedditAlien } from "react-icons/fa";
import Divider from "@mui/material/Divider";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HelpIcon from "@mui/icons-material/Help";
import { useContext } from "react";
import { AppContext } from "../../pages/layout";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

function Navigation() {
  const { Hamburgar, SetHamBurgar } = useContext(AppContext);
  const Router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: { lg: "flex", xs: "none" },
          justifyContent: "space-between",
          alignItems: "start",
          flexDirection: "column",
          px: 2,
          py: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
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
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "1.5rem",
                lineHeight: "",
                fontWeight: 800,
                color: "black",
                textTransform: "capitalize",
                ml: 0.5,
              }}
            >
              Stader
            </Typography>
          </Box>

          {/* Menu */}
          <Link href={""}>
            <Button
              sx={{
                background: "white",
                boxShadow: "none",
                fontFamily: "Lato",
                fontSize: "18px",
                lineHeight: "28px",
                fontWeight: 500,
                color: "black",
                textTransform: "capitalize",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 6,
                ml: 1,
                "&:hover": {
                  background: "#F0F1F5",
                },
              }}
            >
              <Image
                src={"/assets/Liquid.svg"}
                alt={"logo"}
                width={18}
                height={18}
                objectFit="contain"
              />
              <Box component={"span"} sx={{ ml: 1 }}>
                Liquid Staking
              </Box>
            </Button>
          </Link>
          <Link href={"/bnbx"}>
            <Anchorlink
              sx={
                Router.pathname === "/bnbx"
                  ? {
                      textDecoration: "none",
                      fontFamily: "Lato",
                      fontSize: "18px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "rgba(0,0,0,1)",
                      cursor: "pointer",
                      mt: 2,
                      ml: 6,
                    }
                  : {
                      textDecoration: "none",
                      fontFamily: "Lato",
                      fontSize: "18px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "rgba(0,0,0,0.4)",
                      cursor: "pointer",
                      mt: 2,
                      ml: 6,
                    }
              }
            >
              BNBx
            </Anchorlink>
          </Link>
          <Link href={"/binance"}>
            <Anchorlink
              sx={
                Router.pathname === "/binance"
                  ? {
                      textDecoration: "none",
                      fontFamily: "Lato",
                      fontSize: "18px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "rgba(0,0,0,1)",
                      cursor: "pointer",
                      mt: 1,
                      ml: 6,
                    }
                  : {
                      textDecoration: "none",
                      fontFamily: "Lato",
                      fontSize: "18px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "rgba(0,0,0,0.4)",
                      cursor: "pointer",
                      mt: 1,
                      ml: 6,
                    }
              }
            >
              Binance
            </Anchorlink>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 600,
              color: "black",
              textTransform: "unset",
              ml: 0.5,
            }}
          >
            Everything about BNBx
          </Typography>
          <Anchorlink
            sx={{
              width: "100%",
              height: "46px",
              border: "1px solid black",
              borderRadius: "8px",
              fontFamily: "Lato",
              fontSize: "16px",
              lineHeight: "30px",
              fontWeight: 600,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
              "&:hover": {
                background: "#F3BA2F",
              },
              mt: 2,
            }}
          >
            Learn more
          </Anchorlink>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 500,
              color: "rgba(0,0,0,0.6)",
              textTransform: "unset",
              ml: 0.5,
              mt: 6,
            }}
          >
            Join our Community
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 1.5,
            }}
          >
            {SocialLinks.map((item, index) => {
              return (
                <Anchorlink
                  target={"_blank"}
                  key={index}
                  href={item.URL}
                  sx={{
                    textDecoration: "none",
                    mr: 2,
                    "&:hover svg": {
                      transform: "scale(1.2)",
                      color: "#F3BA2F",
                      cursor: "pointer",
                    },
                  }}
                >
                  {item.Ico}
                </Anchorlink>
              );
            })}
          </Box>

          {/* Divider */}
          <Divider
            sx={{ width: "100%", mt: 5, mb: 3, background: "rgba(0,0,0,0.6)" }}
          />

          <Anchorlink
            href={"https://docs-new.staderlabs.com/category/binance/"}
            sx={{
              fontFamily: "Lato",
              fontSize: "18px",
              lineHeight: "24px",
              fontWeight: 500,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              textDecoration: "none",
              color: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                color: "black",
              },
              "&:hover svg": {
                color: "black",
              },
              mt: 3,
            }}
          >
            <FeedbackIcon
              sx={{
                color: "rgba(0,0,0,0.5)",
                fontSize: "18px",
                mr: 1,
                mt: 0.1,
              }}
            />
            FAQs
          </Anchorlink>
          <Anchorlink
            href={"https://t.me/staderlabs_bnb_official"}
            sx={{
              fontFamily: "Lato",
              fontSize: "18px",
              lineHeight: "24px",
              fontWeight: 500,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              textDecoration: "none",
              color: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                color: "black",
              },
              "&:hover svg": {
                color: "black",
              },
              mt: 2,
            }}
          >
            <HelpIcon
              sx={{
                color: "rgba(0,0,0,0.5)",
                fontSize: "18px",
                mr: 1,
                mt: 0.1,
              }}
            />
            Support
          </Anchorlink>
        </Box>
      </Box>

      <Drawer
        open={Hamburgar}
        onClose={() => SetHamBurgar(false)}
        direction="right"
        className="drawer"
        style={{ height: "100vh" }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            flexDirection: "column",
            px: 2,
            py: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
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
              <Typography
                sx={{
                  fontFamily: "Lato",
                  fontSize: "1.5rem",
                  lineHeight: "",
                  fontWeight: 800,
                  color: "black",
                  textTransform: "capitalize",
                  ml: 0.5,
                }}
              >
                Stader
              </Typography>
            </Box>

            {/* Menu */}
            <Link href={""}>
              <Button
                sx={{
                  background: "white",
                  boxShadow: "none",
                  fontFamily: "Lato",
                  fontSize: "18px",
                  lineHeight: "28px",
                  fontWeight: 500,
                  color: "black",
                  textTransform: "capitalize",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 6,
                  ml: 1,
                  "&:hover": {
                    background: "#F0F1F5",
                  },
                }}
              >
                <Image
                  src={"/assets/Liquid.svg"}
                  alt={"logo"}
                  width={18}
                  height={18}
                  objectFit="contain"
                />
                <Box component={"span"} sx={{ ml: 1 }}>
                  Liquid Staking
                </Box>
              </Button>
            </Link>
            <Link href={"/bnbx"}>
              <Anchorlink
                sx={
                  Router.pathname === "/bnbx"
                    ? {
                        textDecoration: "none",
                        fontFamily: "Lato",
                        fontSize: "18px",
                        lineHeight: "28px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,1)",
                        cursor: "pointer",
                        mt: 2,
                        ml: 6,
                      }
                    : {
                        textDecoration: "none",
                        fontFamily: "Lato",
                        fontSize: "18px",
                        lineHeight: "28px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.4)",
                        cursor: "pointer",
                        mt: 2,
                        ml: 6,
                      }
                }
              >
                BNBx
              </Anchorlink>
            </Link>
            <Link href={"/binance"}>
              <Anchorlink
                sx={
                  Router.pathname === "/binance"
                    ? {
                        textDecoration: "none",
                        fontFamily: "Lato",
                        fontSize: "18px",
                        lineHeight: "28px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,1)",
                        cursor: "pointer",
                        mt: 1,
                        ml: 6,
                      }
                    : {
                        textDecoration: "none",
                        fontFamily: "Lato",
                        fontSize: "18px",
                        lineHeight: "28px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.4)",
                        cursor: "pointer",
                        mt: 1,
                        ml: 6,
                      }
                }
              >
                Binance
              </Anchorlink>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                color: "black",
                textTransform: "unset",
                ml: 0.5,
              }}
            >
              Everything about BNBx
            </Typography>
            <Anchorlink
              sx={{
                width: "100%",
                height: "46px",
                border: "1px solid black",
                borderRadius: "8px",
                fontFamily: "Lato",
                fontSize: "16px",
                lineHeight: "30px",
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
                "&:hover": {
                  background: "#F3BA2F",
                },
                mt: 2,
              }}
            >
              Learn more
            </Anchorlink>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 500,
                color: "rgba(0,0,0,0.6)",
                textTransform: "unset",
                ml: 0.5,
                mt: 6,
              }}
            >
              Join our Community
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 1.5,
              }}
            >
              {SocialLinks.map((item, index) => {
                return (
                  <Anchorlink
                    target={"_blank"}
                    key={index}
                    href={item.URL}
                    sx={{
                      textDecoration: "none",
                      mr: 2,
                      "&:hover svg": {
                        transform: "scale(1.2)",
                        color: "#F3BA2F",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {item.Ico}
                  </Anchorlink>
                );
              })}
            </Box>

            {/* Divider */}
            <Divider
              sx={{
                width: "100%",
                mt: 5,
                mb: 3,
                background: "rgba(0,0,0,0.6)",
              }}
            />

            <Anchorlink
              href={"https://docs-new.staderlabs.com/category/binance/"}
              sx={{
                fontFamily: "Lato",
                fontSize: "18px",
                lineHeight: "24px",
                fontWeight: 500,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                textDecoration: "none",
                color: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  color: "black",
                },
                "&:hover svg": {
                  color: "black",
                },
                mt: 3,
              }}
            >
              <FeedbackIcon
                sx={{
                  color: "rgba(0,0,0,0.5)",
                  fontSize: "18px",
                  mr: 1,
                  mt: 0.1,
                }}
              />
              FAQs
            </Anchorlink>
            <Anchorlink
              href={"https://t.me/staderlabs_bnb_official"}
              sx={{
                fontFamily: "Lato",
                fontSize: "18px",
                lineHeight: "24px",
                fontWeight: 500,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                textDecoration: "none",
                color: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  color: "black",
                },
                "&:hover svg": {
                  color: "black",
                },
                mt: 2,
              }}
            >
              <HelpIcon
                sx={{
                  color: "rgba(0,0,0,0.5)",
                  fontSize: "18px",
                  mr: 1,
                  mt: 0.1,
                }}
              />
              Support
            </Anchorlink>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Navigation;

const SocialLinks = [
  {
    URL: "https://twitter.com/stader_bnb",
    Ico: (
      <AiOutlineTwitter
        style={{ transition: "all 0.4s ease" }}
        color="#8C8C8C"
        size={20}
      />
    ),
  },
  {
    URL: "https://t.me/staderlabs_bnb_official",
    Ico: (
      <FaTelegramPlane
        style={{ transition: "all 0.4s ease" }}
        color="#8C8C8C"
        size={20}
      />
    ),
  },
  {
    URL: "https://docs.google.com/forms/d/e/1FAIpQLSfQ3rKlt4N2cddjmxoxpjf2ayPIbEXjUF-_Rz6V7FlrJFTcLQ/viewform",
    Ico: (
      <HiMail
        style={{ transition: "all 0.4s ease" }}
        color="#8C8C8C"
        size={20}
      />
    ),
  },
  {
    URL: "https://www.reddit.com/r/StaderBNBofficial/",
    Ico: (
      <FaRedditAlien
        style={{ transition: "all 0.4s ease" }}
        color="#8C8C8C"
        size={20}
      />
    ),
  },
];
