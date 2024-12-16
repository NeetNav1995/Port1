import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//project files
import { NavigationPath } from "../Helper/NavigationPaths";
import Layout from "../Components/CommonComponents/Layout";
import HomeBase from "../Components/Home/HomeBase";
import AboutBase from "../Components/About/AboutBase";
import SkillsBase from "../Components/Skills/SkillsBase";
import ProjectsBase from "../Components/Projects/ProjectsBase";
import ResumeBase from "../Components/Resume/ResumeBase";
import TestimonialBase from "../Components/Testimonial/TestimonialBase";
import ContactBase from "../Components/ContactInfo/ContactBase";
import ExtraBase from "../Components/ExtraActivities/ExtraBase";
import HldBase from "../Components/HldStructure/HldBase";
import NotFound from "../Components/CommonComponents/NotFound";

export default function ProtectedRoutes() {
  //define all comp here
  const routes = [
    { path: `${NavigationPath.HOME}`, component: <HomeBase /> },
    { path: `${NavigationPath.ABOUT}`, component: <AboutBase /> },
    { path: `${NavigationPath.SKILLS}`, component: <SkillsBase /> },
    { path: `${NavigationPath.PROJECTS}`, component: <ProjectsBase /> },
    { path: `${NavigationPath.RESUME}`, component: <ResumeBase /> },
    { path: `${NavigationPath.TESTIMONIALS}`, component: <TestimonialBase /> },
    { path: `${NavigationPath.CONTACT}`, component: <ContactBase /> },
    {
      path: `${NavigationPath.EXTRACURRICULAR_ACTIVITIES}`,
      component: <ExtraBase />,
    },
    { path: `${NavigationPath.HLD_STRUCTURE}`, component: <HldBase /> },
    { component: <NotFound /> },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes >
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Layout>{route.component}</Layout>}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}
