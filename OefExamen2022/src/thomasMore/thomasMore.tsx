import { FunctionComponent, useState } from "react";
import {
  getAllCampuses,
  getAllMatchingPrograms,
  getAllStudyAreas,
} from "../API/thomasMore";
import Program from "../components/Program";
import BooleanRadioFieldSet from "./booleanRadioFieldSet";
import IProgram from "../models/IProgram";
import RadioFieldSet from "./RadioFieldSet";

interface ThomasMoreProps {}

const ThomasMore: FunctionComponent<ThomasMoreProps> = () => {
  const [dayOrEvening, setDayOrEvening] = useState<boolean | undefined>(
    undefined
  );
  const [campus, setCampus] = useState<string | undefined>(undefined);
  const [studyArea, setStudyArea] = useState<string | undefined>(undefined);
  const [visible, setVisible] = useState<boolean>(false);
  const programs: IProgram[] = getAllMatchingPrograms(
    campus,
    dayOrEvening,
    studyArea
  );
  // ROEP JE FILTER COMPONENTEN IN DEZE DIV OP.
  const filters = (
    <div className="filter-selection">
      <BooleanRadioFieldSet
        title="Day or evening"
        trueTitle="Day"
        falseTitle="Evening"
        currentValue={dayOrEvening}
        setCurrentValue={setDayOrEvening}
      />
      <RadioFieldSet
        title="Select a campus"
        options={getAllCampuses()}
        currentValue={campus}
        setCurrentValue={setCampus}
      />
      <RadioFieldSet
        title="Select a study area"
        options={getAllStudyAreas()}
        currentValue={studyArea}
        setCurrentValue={setStudyArea}
      />
    </div>
  );

  return (
    <>
      <h1>Programs at Thomas More</h1>
      <div className="filters">
        {visible ? (
          <>
            <button onClick={() => setVisible(false)}>Hide filters</button>
            {filters}
          </>
        ) : (
          <button onClick={() => setVisible(true)}>Change filters</button>
        )}
      </div>
      {programs.map((program, index) => (
        <Program
          key={index}
          name={program.name}
          campus={program.campus}
          day={program.day}
          english={program.english}
        />
      ))}
    </>
  );
};

export default ThomasMore;
