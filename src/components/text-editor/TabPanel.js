import { TabPanel } from "react-tabs";
import styled from "styled-components";

const StyledTabPanel = styled(TabPanel)`
  border-top: 1px solid #e5e5e5;
`;

StyledTabPanel.tabsRole = "TabPanel";

export default StyledTabPanel;
