import React from "react";
import ForSideAds from "../Generic/ForSideAds";
import SideNav from "./../Component/SideNav";
import { Adswrap, ChildrenWr, ContentWrapper, LayoutWr, PlaceBar, SideNavW } from "./style";

const LaoyoutS = ({ children }) => {
  return (
    <LayoutWr>
      <SideNavW>
        <SideNav />
      </SideNavW>
      <PlaceBar></PlaceBar>
      <ChildrenWr>
        <ContentWrapper>
        {children} 
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        </ContentWrapper>
        <div></div>
        <Adswrap >
        <ForSideAds />
        </Adswrap>
      </ChildrenWr>
    </LayoutWr>
  );
};

export default LaoyoutS;
