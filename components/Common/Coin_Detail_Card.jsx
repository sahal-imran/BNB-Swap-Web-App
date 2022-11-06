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

function Coin_Detail_Card({ TVL, APY, Exchange_Rate }) {
  return (
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
            <Tooltip placement="top" title="Total BNB staked with Stader" arrow>
              <Box
                sx={{
                  ml: 0.5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AiOutlineInfoCircle color="rgba(0,0,0,0.6)" />
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
            {TVL}{" "}
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
            <Tooltip placement="top" title="Estimated Annualized Retuen" arrow>
              <Box
                sx={{
                  ml: 0.5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AiOutlineInfoCircle color="rgba(0,0,0,0.6)" />
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
            {APY + " %"}
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
                <AiOutlineInfoCircle color="rgba(0,0,0,0.6)" />
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
            {Exchange_Rate}
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
  );
}

export default Coin_Detail_Card;
