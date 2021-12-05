import React from "react";
import "./App.css";

import { Container, Grid } from "@mui/material";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container className={"top_60"}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main_content">
              <Routes>
                <Route path="/portfolio" element={<Portfolio />} />

                <Route path="/" element={<Resume />} />
              </Routes>

            </div>
          </Router>


          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
export default App;
