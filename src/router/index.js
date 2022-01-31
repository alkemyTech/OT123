import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import App from '../App'
import Home from '../screens/Home'
import Contacts from "../screens/Contacts";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
      <Route path="contacts" element={<Contacts />} />
    </Routes>
  </BrowserRouter>
);
