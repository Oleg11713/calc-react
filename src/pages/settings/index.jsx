import React from "react";

import SettingsTools from "../../components/settingsTools";

import { SettingsContainer, SettingsTitle } from "./styled";

const SettingsPage = () => {
  return (
    <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>
      <SettingsTools />
    </SettingsContainer>
  );
};

export default SettingsPage;
