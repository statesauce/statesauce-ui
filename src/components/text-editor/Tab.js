import { Tab } from "react-tabs";
import styled from "styled-components";

const StyledTab = styled(Tab)`
  display: flex;
  flex: 1;
  justify-content: center;
  list-style: none;
  cursor: pointer;
  border-right: 1px solid #e5e5e5;
  padding-top: 10px;
  color: #a3a3a3;
  font-size: 14px;

  &.react-tabs__tab--selected {
    padding-bottom: 10px;
    font-weight: 600;
    color: #4b4b4b;
  }
`;

StyledTab.tabsRole = "Tab";

export default StyledTab;
