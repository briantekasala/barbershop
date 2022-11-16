import { Dropdown } from '@fluentui/react';
import * as React from 'react';
import { DropDownDayOptions } from '../../../utils/DropDownDayOptions';
import { DropDownHoursOptions } from '../../../utils/DropDownHoursOptions';
import { DropDownWeekend } from '../../../utils/DropDownWeekendHours';

function PlanningAsker() {
    return (  <div className="planningDay"> 
    <p>Selecteer hier de dagen dat je wilt werken.</p>
    <Dropdown multiSelect options={DropDownDayOptions} />
    <p>Geef in  vanaf welk uur je wilt knippen in de week </p>
    <Dropdown multiSelect options={DropDownHoursOptions}/>
    <p>Geef in vanaf welk uur je wilt knippen op Zaterdag </p>
    <Dropdown multiSelect options={DropDownWeekend}/>
    <p>Geef in vanaf welk uur je wilt knippen op Zondag </p>
    <Dropdown multiSelect options={DropDownWeekend}/>
    <button>Save</button>
  </div> );
}

export default PlanningAsker;
