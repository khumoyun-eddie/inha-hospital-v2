import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RowItem from "../RowItem/RowItem";

const ORGANS_DATA = {
  rectum: {
    rows: [
      {
        rowTitle: "location",
        sections: [
          {
            selectType: "multiple",
            nameFor: "position",
            // buttonsList: ["upper", "mid", "lower"],
            buttonsList: [
              { label: "upper", hasInput: false, resultValue: "upper" },
              { label: "mid", hasInput: false, resultValue: "mid" },
              { label: "lower", hasInput: false, resultValue: "lower" },
            ],
          },
          {
            selectType: "single",
            nameFor: "sphincterInvasion",
            sectionTitle: "Sphincter invasion",
            // buttonsList: ["internal", "external", "internal + external"],
            buttonsList: [
              { label: "internal", hasInput: false, resultValue: "internal" },
              { label: "external", hasInput: false, resultValue: "external" },
              { label: "internal + external", hasInput: false, resultValue: "internal + external" },
            ],
          },
        ],
      },
      {
        rowTitle: "size",
        sections: [
          {
            selectType: "multiple",
            nameFor: "rectumSize",
            buttonsList: [
              { label: "craniaocaudal length(cm): ", hasInput: true, resultValue: "cm in craniaocaudal length" },
            ],
          },
        ],
      },
      {
        rowTitle: "morphology",
        sections: [
          {
            selectType: "multiple",
            nameFor: "shape",
            buttonsList: [
              { label: "ulcelative", hasInput: false, resultValue: "ulcelative" },
              { label: "polypoid", hasInput: false, resultValue: "polypoid" },
              {
                label: "semi-circumferential(o'clock): ",
                hasInput: true,
                resultValue: "semi-circumferential(o'clock)",
              },
              { label: "circumferential", hasInput: false, resultValue: "circumferential" },
            ],
          },
          {
            selectType: "single",
            nameFor: "mucinous",
            // buttonsList: ["mucinous(+)", "mucinous(-)"],
            buttonsList: [
              { label: "mucinous(+)", hasInput: false, resultValue: "mucinous(+)" },
              { label: "mucinous(-)", hasInput: false, resultValue: "mucinous(-)" },
            ],
          },
          {
            selectType: "multiple",
            nameFor: "peritonealReflection",
            sectionTitle: "peritoneal reflection",
            // buttonsList: ["above", "straddles", "below"],
            buttonsList: [
              { label: "above", hasInput: false, resultValue: "above" },
              { label: "straddles", hasInput: false, resultValue: "straddles" },
              { label: "below", hasInput: false, resultValue: "below" },
            ],
          },
          {
            selectType: "multiple",
            nameFor: "mrf",
            // buttonsList: ["MRF(+)", "MRF(-)", "EMVI(+)", "EMVI(-)"],
            buttonsList: [
              { label: "MRF(+)", hasInput: false, resultValue: "MRF(+)" },
              { label: "MRF(-)", hasInput: false, resultValue: "MRF(-)" },
              { label: "EMVI(+)", hasInput: false, resultValue: "EMVI(+)" },
              { label: "EMVI(-)", hasInput: false, resultValue: "EMVI(-)" },
            ],
          },
        ],
      },
      {
        rowTitle: "TMN Stage",
        sections: [
          {
            selectType: "single",
            nameFor: "tStage",
            // buttonsList: ["TX", "T0", "Tis", "T1", "T2", "T3ab", "T3cd", "T4a", "T4b"],
            buttonsList: [
              { label: "TX", hasInput: false, resultValue: "TX" },
              { label: "T0", hasInput: false, resultValue: "T0" },
              { label: "Tis", hasInput: false, resultValue: "Tis" },
              { label: "T1", hasInput: false, resultValue: "T1" },
              { label: "T2", hasInput: false, resultValue: "T2" },
              { label: "T3ab", hasInput: false, resultValue: "T3ab" },
              { label: "T3cd", hasInput: false, resultValue: "T3cd" },
              { label: "T4a", hasInput: false, resultValue: "T4a" },
              { label: "T4b", hasInput: false, resultValue: "T4b" },
            ],
          },
          {
            selectType: "single",
            nameFor: "nstages",
            // buttonsList: ["N0", "N1a", "N1b", "N2a", "N2b"],
            buttonsList: [
              { label: "N0", hasInput: false, resultValue: "N0" },
              { label: "N1a", hasInput: false, resultValue: "N1a" },
              { label: "N1b", hasInput: false, resultValue: "N1b" },
              { label: "N2a", hasInput: false, resultValue: "N2a" },
              { label: "N2b", hasInput: false, resultValue: "N2b" },
            ],
            subButtonsList: [
              { label: "mesorectal", hasInput: false, resultValue: "mesorectal" },
              { label: "internal iliac", hasInput: false, resultValue: "internal iliac" },
              { label: "opturator", hasInput: false, resultValue: "opturator" },
              { label: "mesosigmoid", hasInput: false, resultValue: "mesosigmoid" },
              { label: "presacral inf. mesenteric", hasInput: false, resultValue: "presacral inf. mesenteric" },
              { label: "rectalis superior", hasInput: false, resultValue: "rectalis superior" },
            ],
          },
          {
            selectType: "single",
            nameFor: "mstages",
            // buttonsList: ["M0", "M1a", "M1b", "M1c"],
            buttonsList: [
              { label: "M0", hasInput: false, resultValue: "M0" },
              { label: "M1a", hasInput: false, resultValue: "M1a" },
              { label: "M1b", hasInput: false, resultValue: "M1b" },
              { label: "M1c", hasInput: false, resultValue: "M1c" },
            ],
            subButtonsList: [
              {
                label: "external iliac, common iliac, inguinal LN are together as one organ",
                hasInput: false,
                resultValue: "external iliac, common iliac, inguinal LN are together as one organ",
              },
              { label: "brain", hasInput: false, resultValue: "brain" },
              { label: "liver", hasInput: false, resultValue: "liver" },
              { label: "lung", hasInput: false, resultValue: "lung" },
              { label: "adrenal gland", hasInput: false, resultValue: "adrenal gland" },
              { label: "kidney", hasInput: false, resultValue: "kidney" },
              { label: "ovary", hasInput: false, resultValue: "ovary" },
              { label: "bone", hasInput: false, resultValue: "bone" },
              { label: "peritoneal metastasis", hasInput: false, resultValue: "peritoneal metastasis" },
            ],
          },
          // {
          //   selectType: "single",
          //   buttonsList: ["Stage"],
          // },
        ],
      },
    ],
  },
  stomach: {
    rows: [
      {
        rowTitle: "location",
        sections: [
          {
            selectType: "multiple",
            nameFor: "position",
            // buttonsList: ["upper", "mid", "lower"],
            buttonsList: [
              { label: "upper", hasInput: false, resultValue: "upper" },
              { label: "mid", hasInput: false, resultValue: "mid" },
              { label: "lower", hasInput: false, resultValue: "lower" },
            ],
          },
          {
            selectType: "single",
            nameFor: "sphincterInvasion",
            sectionTitle: "Sphincter invasion",
            // buttonsList: ["internal", "external", "internal + external"],
            buttonsList: [
              { label: "internal", hasInput: false, resultValue: "internal" },
              { label: "external", hasInput: false, resultValue: "external" },
              { label: "internal + external", hasInput: false, resultValue: "internal + external" },
            ],
          },
        ],
      },
      {
        rowTitle: "size",
        sections: [
          {
            selectType: "multiple",
            nameFor: "rectumSize",
            buttonsList: [
              { label: "craniaocaudal length(cm): ", hasInput: true, resultValue: "cm in craniaocaudal length" },
            ],
          },
        ],
      },
      {
        rowTitle: "morphology",
        sections: [
          {
            selectType: "multiple",
            nameFor: "shape",
            buttonsList: [
              { label: "ulcelative", hasInput: false, resultValue: "ulcelative" },
              { label: "polypoid", hasInput: false, resultValue: "polypoid" },
              {
                label: "semi-circumferential(o'clock): ",
                hasInput: true,
                resultValue: "semi-circumferential(o'clock)",
              },
              { label: "circumferential", hasInput: false, resultValue: "circumferential" },
            ],
          },
          {
            selectType: "single",
            nameFor: "mucinous",
            // buttonsList: ["mucinous(+)", "mucinous(-)"],
            buttonsList: [
              { label: "mucinous(+)", hasInput: false, resultValue: "mucinous(+)" },
              { label: "mucinous(-)", hasInput: false, resultValue: "mucinous(-)" },
            ],
          },
          {
            selectType: "multiple",
            nameFor: "peritonealReflection",
            sectionTitle: "peritoneal reflection",
            // buttonsList: ["above", "straddles", "below"],
            buttonsList: [
              { label: "above", hasInput: false, resultValue: "above" },
              { label: "straddles", hasInput: false, resultValue: "straddles" },
              { label: "below", hasInput: false, resultValue: "below" },
            ],
          },
          {
            selectType: "multiple",
            nameFor: "mrf",
            // buttonsList: ["MRF(+)", "MRF(-)", "EMVI(+)", "EMVI(-)"],
            buttonsList: [
              { label: "MRF(+)", hasInput: false, resultValue: "MRF(+)" },
              { label: "MRF(-)", hasInput: false, resultValue: "MRF(-)" },
              { label: "EMVI(+)", hasInput: false, resultValue: "EMVI(+)" },
              { label: "EMVI(-)", hasInput: false, resultValue: "EMVI(-)" },
            ],
          },
        ],
      },
      {
        rowTitle: "TMN Stage",
        sections: [
          {
            selectType: "single",
            nameFor: "tStage",
            // buttonsList: ["TX", "T0", "Tis", "T1", "T2", "T3ab", "T3cd", "T4a", "T4b"],
            buttonsList: [
              { label: "TX", hasInput: false, resultValue: "TX" },
              { label: "T0", hasInput: false, resultValue: "T0" },
              { label: "Tis", hasInput: false, resultValue: "Tis" },
              { label: "T1", hasInput: false, resultValue: "T1" },
              { label: "T2", hasInput: false, resultValue: "T2" },
              { label: "T3ab", hasInput: false, resultValue: "T3ab" },
              { label: "T3cd", hasInput: false, resultValue: "T3cd" },
              { label: "T4a", hasInput: false, resultValue: "T4a" },
              { label: "T4b", hasInput: false, resultValue: "T4b" },
            ],
          },
          {
            selectType: "single",
            nameFor: "nstages",
            // buttonsList: ["N0", "N1a", "N1b", "N2a", "N2b"],
            buttonsList: [
              { label: "N0", hasInput: false, resultValue: "N0" },
              { label: "N1a", hasInput: false, resultValue: "N1a" },
              { label: "N1b", hasInput: false, resultValue: "N1b" },
              { label: "N2a", hasInput: false, resultValue: "N2a" },
              { label: "N2b", hasInput: false, resultValue: "N2b" },
            ],
            subButtonsList: [
              { label: "mesorectal", hasInput: false, resultValue: "mesorectal" },
              { label: "internal iliac", hasInput: false, resultValue: "internal iliac" },
              { label: "opturator", hasInput: false, resultValue: "opturator" },
              { label: "mesosigmoid", hasInput: false, resultValue: "mesosigmoid" },
              { label: "presacral inf. mesenteric", hasInput: false, resultValue: "presacral inf. mesenteric" },
              { label: "rectalis superior", hasInput: false, resultValue: "rectalis superior" },
            ],
          },
          {
            selectType: "single",
            nameFor: "mstages",
            // buttonsList: ["M0", "M1a", "M1b", "M1c"],
            buttonsList: [
              { label: "M0", hasInput: false, resultValue: "M0" },
              { label: "M1a", hasInput: false, resultValue: "M1a" },
              { label: "M1b", hasInput: false, resultValue: "M1b" },
              { label: "M1c", hasInput: false, resultValue: "M1c" },
            ],
            subButtonsList: [
              {
                label: "external iliac, common iliac, inguinal LN are together as one organ",
                hasInput: false,
                resultValue: "external iliac, common iliac, inguinal LN are together as one organ",
              },
              { label: "brain", hasInput: false, resultValue: "brain" },
              { label: "liver", hasInput: false, resultValue: "liver" },
              { label: "lung", hasInput: false, resultValue: "lung" },
              { label: "adrenal gland", hasInput: false, resultValue: "adrenal gland" },
              { label: "kidney", hasInput: false, resultValue: "kidney" },
              { label: "ovary", hasInput: false, resultValue: "ovary" },
              { label: "bone", hasInput: false, resultValue: "bone" },
              { label: "peritoneal metastasis", hasInput: false, resultValue: "peritoneal metastasis" },
            ],
          },
          // {
          //   selectType: "single",
          //   buttonsList: ["Stage"],
          // },
        ],
      },
    ],
  },
};

const Organ = () => {
  const { organ } = useParams();
  const [rows, setRows] = useState(ORGANS_DATA[organ].rows);
  useEffect(() => {
    setRows(ORGANS_DATA[organ].rows);
  }, [organ]);
  return (
    <div className='border-r-2 basis-3/4 border-blue-light'>
      {rows.map((row, i) => (
        <RowItem
          row={row}
          key={i}
        />
      ))}
    </div>
  );
};

export default Organ;
