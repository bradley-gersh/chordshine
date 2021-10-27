import React from "react";

const StaffLineUnit = () => <div className={"staff-line-unit"}></div>;

const StaffSpaceUnit = () => <div className={"staff-space-unit"}></div>;

const StaffLine = () => (
  <div className={"staff-line"}>
    <StaffSpaceUnit />
    <StaffLineUnit />
    <StaffSpaceUnit />
  </div>
);

const StaffSpace = () => (
  <div className={"staff-space"}>
    <StaffSpaceUnit />
    <StaffSpaceUnit />
    <StaffSpaceUnit />
  </div>
);

const Staff = () => (
  <div className={"staff"}>
    <StaffLine />
    <StaffSpace />
    <StaffLine />
    <StaffSpace />
    <StaffLine />
    <StaffSpace />
    <StaffLine />
    <StaffSpace />
    <StaffLine />
  </div>
);

const Gap = () => (
  <div className={"gap"}>
    <StaffSpace />
    <StaffSpace />
    <StaffSpace />
  </div>
);

export { Staff, Gap };
