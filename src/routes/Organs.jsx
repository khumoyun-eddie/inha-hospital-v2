import React from "react";
import { Route, Routes } from "react-router-dom";
import Organ from "../components/Organ/Organ";
import Results from "../components/Results/Results";
import RowItem from "../components/RowItem/RowItem";

const Organs = () => {
  const data = [
    {
      organ: "rectum",
      // rows:['location','size','morphology','tmn stage'],
      rows: [
        {
          rowTitle: "location",
          sections: [
            {
              selectType: "multiple",
              nameFor: "position",
              buttonsList: ["upper", "mid", "lower"],
            },
            {
              selectType: "single",
              nameFor: "sphincterInvasion",
              sectionTitle: "Sphincter invasion",
              buttonsList: ["internal", "external", "internal + external"],
            },
          ],
        },
        {
          rowTitle: "size",
          sections: [
            {
              selectType: "input",
              nameFor: "rectumSize",
              buttonsList: ["craniaocaudal length(cm)"],
            },
          ],
        },
        {
          rowTitle: "morphology",
          sections: [
            {
              selectType: "buttonWithInput",
              nameFor: "shape",
              buttonsList: [{ content: "Polypoid", hasInput: false }],
            },
            {
              selectType: "single",
              nameFor: "mucinous",
              buttonsList: ["mucinous(+)", "mucinous(-)"],
            },
            {
              selectType: "multiple",
              nameFor: "peritonealReflection",
              sectionTitle: "peritoneal reflection",
              buttonsList: ["above", "straddles", "below"],
            },
            {
              selectType: "multiple",
              nameFor: "mrf",
              buttonsList: ["MRF(+)", "MRF(-)", "EMVI(+)", "EMVI(-)"],
            },
          ],
        },
        {
          rowTitle: "TMN Stage",
          sections: [
            {
              selectType: "single",
              nameFor: "tStage",
              buttonsList: ["TX", "T0", "Tis", "T1", "T2", "T3ab", "T3cd", "T4a", "T4b"],
            },
            {
              selectType: "single",
              nameFor: "nstages",
              buttonsList: ["N0", "N1a", "N1b", "N2a", "N2b"],
              subButtonsList: [
                "mesorectal",
                "internal iliac",
                "opturator",
                "mesosigmoid",
                "presacral inf. mesenteric",
                "rectalis superior",
              ],
            },
            {
              selectType: "single",
              nameFor: "mstages",
              buttonsList: ["M0", "M1a", "M1b", "M1c"],
              subButtonsList: [
                "external iliac, common iliac, inguinal LN are together as one organ",
                "brain",
                "liver",
                "lung",
                "adrenal gland",
                "kindey",
                "ovary",
                "bone",
                "peritoneal metastasis",
              ],
            },
            {
              selectType: "single",
              buttonsList: ["Stage"],
            },
          ],
        },
      ],
      // location: {
      //   title: "Location",
      //   // label: "upper | mid | lower",
      //   types: [
      //     { type: "regular", label: "upper" },
      //     { type: "regular", label: "mid" },
      //     { type: "regular", label: "lower", value: "lower rectum" },
      //   ],
      //   section: {
      //     label: "sphincter invasion",
      //     types: [
      //       { type: "regular", label: "internal" },
      //       { type: "regular", label: "external" },
      //       { type: "regular", label: "internal + external" },
      //     ],
      //   },
      // },
      // size: {
      //   title: "Size",
      //   types: [{ type: "input", label: "craniaocaudal length", unit: "cm" }],
      // },
      // morphology: {
      //   title: "Morphology",
      //   types: [
      //     { type: "regular", label: "ulcerative" },
      //     { type: "regular", label: "polypoid" },
      //     { type: "input", label: "semi-circumferential", unit: "o'clock" },
      //     { type: "regular", label: "circumferential" },
      //   ],
      //   section: {
      //     label: "Peritoneal reflection",
      //   },
      // },
      // tmnStage: {
      //   title: "TMN Stage",
      // },
    },
  ];
  return (
    <main className='flex border-2 border-b-0 border-blue-light'>
      <Routes>
        <Route path=":organ" element={<Organ />} />
      </Routes>
     
      <Results />
    </main>
  );
};

export default Organs;
