import { TabList } from "react-tabs";
import styled from "styled-components";

const StyledTabList = styled(TabList)`
  display: flex;
  padding: 0;
  margin: 0;
  width: 250px;
`;

StyledTabList.tabsRole = "TabList";

export default StyledTabList;
