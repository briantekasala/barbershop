import { Dropdown, IDropdownOption } from "@fluentui/react";

import * as React from "react";
import { useState } from "react";
import { PlannerService } from "../../../services/PlannerService";
import { DropDownDayOptions } from "../../../utils/DropDownDayOptions";
import { DropDownHoursOptions } from "../../../utils/DropDownHoursOptions";
import { DropDownWeekend } from "../../../utils/DropDownWeekendHours";

function PlanningAsker() {
  const [selectedDays, setSelectedDays] = useState<IDropdownOption[] | any>([]);
  const [selectedHours, setSelectedHours] = useState<IDropdownOption[] | any>(
    []
  );
  const [selectedSaturdayHours, setSelectedSaturdayHours] = useState<
    IDropdownOption[] | any
  >([]);
  const [selectedSundayHours, setSelectedSundaydayHours] = useState<
    IDropdownOption[] | any
  >([]);

  const userPlanning = new PlannerService("http://localhost:3005");

  const onDayOptions = (
    event: React.FormEvent<HTMLDivElement>,
    items: IDropdownOption<any> | undefined
  ) => {
    if (items) {
      setSelectedDays(
        items.selected
          ? [...selectedDays, items.text as string]
          : selectedDays.filter((text: string) => text !== items.text)
      );
    }
  };
  const onWeekHoursOptions = (
    event: React.FormEvent<HTMLDivElement>,
    items: IDropdownOption<any> | undefined
  ) => {
    if (items) {
      setSelectedHours(
        items.selected
          ? [...selectedHours, items.text as string]
          : selectedHours.filter((text: string) => text !== items.text)
      );
    }
  };

  const onSaturdayHoursOptions = (
    event: React.FormEvent<HTMLDivElement>,
    items: IDropdownOption<any> | undefined
  ) => {
    if (items) {
      setSelectedSaturdayHours(
        items.selected
          ? [...selectedSaturdayHours, items.text as string]
          : selectedSaturdayHours.filter((text: string) => text !== items.text)
      );
    }
  };
  const onSundayHoursOptions = (
    event: React.FormEvent<HTMLDivElement>,
    items: IDropdownOption<any> | undefined
  ) => {
    if (items) {
      setSelectedSundaydayHours(
        items.selected
          ? [...selectedSundayHours, items.text as string]
          : selectedSundayHours.filter((text: string) => text !== items.text)
      );
    }
  };

  const SavePlanner = () => {
    selectedDays.map((days: string) => {
      if (days === "Saturday") {
        userPlanning.makePlanning(days, selectedSaturdayHours);
      }
      if (days === "Sunday") {
        userPlanning.makePlanning(days, selectedSundayHours);
      }
      if (days !== "Saturday" && days !== "Sunday") {
        userPlanning.makePlanning(days, selectedHours);
      }
    });
    alert("Jouw Dagen zijn opgeslagen !");
  };
  return (
    <div className="planningDay">
      <p>Selecteer hier de dagen dat je wilt werken.</p>
      <Dropdown
        multiSelect
        options={DropDownDayOptions}
        onChange={onDayOptions}
      />
      <p>Geef in vanaf welk uur je wilt knippen in de week </p>
      <Dropdown
        multiSelect
        options={DropDownHoursOptions}
        onChange={onWeekHoursOptions}
      />
      <p>Geef in vanaf welk uur je wilt knippen op Zaterdag</p>
      <Dropdown
        multiSelect
        options={DropDownWeekend}
        onChange={onSaturdayHoursOptions}
      />
      <p>Geef in vanaf welk uur je wilt knippen op Zondag</p>
      <Dropdown
        multiSelect
        options={DropDownWeekend}
        onChange={onSundayHoursOptions}
      />
      <button onClick={SavePlanner}>Save</button>
    </div>
  );
}

export default PlanningAsker;
