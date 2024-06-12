import { Select } from "@headlessui/react";
import { useState } from "react";

type FacultyProps = {
  selectedFaculty: string;
  selectedDepartment: string;
  setSelectedDepartment: React.Dispatch<React.SetStateAction<string>>;
};

type FacultyOption = {
  value: string;
  field: string;
};

const facultyOptions: FacultyOption[] = [
  { value: "default", field: "まず学部を選択してください" },
];

const scienceDepartments: FacultyOption[] = [
  { value: "math", field: "数学科" },
  { value: "physics", field: "物理学科" },
  { value: "chemistry", field: "化学科" },
  { value: "bio", field: "生物学科" },
  { value: "informatics", field: "情報科学科" },
  { value: "earth_physics", field: "地球惑星物理学科" },
  { value: "astronomy", field: "天文学科" },
  { value: "earth_environment", field: "地球環境学科" },
  { value: "bio_chemistry", field: "生物化学科" },
  { value: "bio_informatics", field: "生物情報科学科" },
];

const engineeringDepartments: FacultyOption[] = [
  { value: "civil", field: "社会基盤学科" },
  { value: "architecture", field: "建築学科" },
  { value: "urban", field: "都市工学科" },
  { value: "mechanical", field: "機械工学科" },
  { value: "mechanical_informatics", field: "機械情報工学科" },
  { value: "precision", field: "精密工学科" },
  { value: "aeronautics", field: "航空宇宙工学科" },
  { value: "electrical", field: "電気電子工学科" },
  { value: "electronics", field: "電子情報工学科" },
  { value: "materials", field: "マテリアル工学科" },
  { value: "materials", field: "物理工学科" },
  { value: "applied_chemical", field: "応用化学科" },
  { value: "chemical", field: "化学システム工学科" },
  { value: "biotechnology", field: "化学生命工学科" },
  { value: "system", field: "システム創成学科" },
  { value: "mathematical", field: "計数工学科" },
];

const agricultureDepartments: FacultyOption[] = [
  { value: "agriculture", field: "農学科" },
  { value: "agriculture", field: "生物環境工学科" },
  { value: "agriculture", field: "森林科学科" },
  { value: "agriculture", field: "食品生命科学科" },
  { value: "agriculture", field: "地域環境科学科" },
  { value: "agriculture", field: "応用生命科学科" },
  { value: "agriculture", field: "国際農学科" },
  { value: "lifeChemistry", field: "生命化学·工学" },
  { value: "appliedBiology", field: "応用生物学" },
  { value: "forestBiology", field: "森林生物科学" },
  { value: "aquaticBiology", field: "水圏生物科学" },
  { value: "animalLifeScience", field: "動物生命システム科学" },
  { value: "bioMaterials", field: "生物素材化学" },
  { value: "greenEnvironment", field: "緑地環境学" },
  { value: "forestResourceScience", field: "森林環境資源科学" },
  { value: "woodScience", field: "木質構造科学" },
  { value: "bioEnvironmentalEngineering", field: "生物·環境工学" },
  { value: "agriculturalEconomics", field: "農業·資源経済学" },
  { value: "fieldScience", field: "フィールド科学" },
  { value: "internationalDevelopment", field: "国際開発農学" },
  { value: "veterinaryMedicine", field: "獣医学" },
];

const medicalDepartments: FacultyOption[] = [
  { value: "medicine", field: "医学科" },
  { value: "healthScience", field: "健康総合科学科" },
];

const economicsDepartments: FacultyOption[] = [
  { value: "economics", field: "経済学科" },
  { value: "finance", field: "金融学科" },
  { value: "management", field: "経営学科" },
];

const lawFacultyOptions: FacultyOption[] = [
  { value: "general", field: "法学総合コース" },
  { value: "profession", field: "法律プロフェッション・コース" },
  { value: "politics", field: "政治コース" },
];

const literatureFacultyOptions: FacultyOption[] = [
  { value: "philosophy", field: "哲学" },
  { value: "chineseCulture", field: "中国思想文化学" },
  { value: "indianPhilosophy", field: "インド哲学仏教学" },
  { value: "ethics", field: "倫理学" },
  { value: "religiousStudies", field: "宗教学宗教史学" },
  { value: "aesthetics", field: "美学芸術学" },
  { value: "islamicStudies", field: "イスラム学" },
  { value: "japaneseHistory", field: "日本史学" },
  { value: "asianHistory", field: "東洋史学" },
  { value: "westernHistory", field: "西洋史学" },
  { value: "archaeology", field: "考古学" },
  { value: "artHistory", field: "美術史学" },
  { value: "linguistics", field: "言語学" },
  { value: "japaneseLanguage", field: "日本語日本文学（国語学）" },
  { value: "japaneseLiterature", field: "国文学" },
  { value: "chineseLiterature", field: "中国語中国文学" },
  { value: "indianLiterature", field: "インド語インド文学" },
  { value: "englishLiterature", field: "英語英米文学" },
  { value: "germanLiterature", field: "ドイツ語ドイツ文学" },
  { value: "frenchLiterature", field: "フランス語フランス文学" },
  { value: "slavicLiterature", field: "スラヴ語スラヴ文学" },
  { value: "southernEuropeanLiterature", field: "南欧語南欧文学" },
  { value: "contemporaryLiterature", field: "現代文芸論" },
  { value: "classicalStudies", field: "西洋古典学" },
  { value: "psychology", field: "心理学" },
  { value: "socialPsychology", field: "社会心理学" },
  { value: "sociology", field: "社会学" },
];
const liberalArtsFacultyOptions: FacultyOption[] = [
  { value: "internationalJapanese", field: "国際日本研究コース" },
  { value: "internationalEnvironmental", field: "国際環境学コース" },
  { value: "asianJapaneseStudies", field: "アジア・日本研究コース" },
  { value: "britishStudies", field: "イギリス研究コース" },
  { value: "italianMediterraneanStudies", field: "イタリア地中海研究コース" },
  { value: "germanStudies", field: "ドイツ研究コース" },
  { value: "frenchStudies", field: "フランス研究コース" },
  { value: "latinAmericanStudies", field: "ラテンアメリカ研究コース" },
  { value: "russianEasternEuropeanStudies", field: "ロシア東欧研究コース" },
  { value: "northAmericanStudies", field: "北米研究コース" },
  { value: "koreanStudies", field: "韓国朝鮮研究コース" },
  { value: "scienceTechnologyStudies", field: "科学技術論コース" },
  { value: "geographySpatialStudies", field: "地理・空間コース" },
  { value: "broadSystemsStudies", field: "広域システム/総合情報学コース" },
  { value: "sportsScience", field: "スポーツ科学コース" },
  { value: "mathematicalNaturalSciences", field: "数理自然科学コース" },
  { value: "materialScience", field: "物質基礎科学コース" },
  { value: "integrativeLifeSciences", field: "統合生命科学コース" },
  { value: "cognitiveBehavioralSciences", field: "認知行動科学コース" },
  { value: "internationalRelations", field: "国際関係論コース" },
  { value: "interdisciplinarySocialSciences", field: "相関社会科学コース" },
  { value: "comparativeLiterature", field: "比較文学比較芸術コース" },
  { value: "interdisciplinaryJapaneseCulture", field: "学際日本文化コース" },
  {
    value: "interdisciplinaryLinguistics",
    field: "学際言語科学コース、言語態・テクスト文化論コース",
  },
  { value: "culturalAnthropology", field: "文化人類学コース" },
  { value: "contemporaryThought", field: "現代思想コース" },
  { value: "culturalRepresentation", field: "表象文化論コース" },
];

const educationFacultyOptions: FacultyOption[] = [
  { value: "basicEducation", field: "基礎教育学専修" },
  { value: "japaneseEducationHistory", field: "日本教育史, 西洋教育史" },
  { value: "comparativeEducation", field: "比較教育社会学" },
  { value: "educationalPolicy", field: "教育実践・政策学" },
  { value: "educationalPsychology", field: "教育心理学" },
  { value: "physicalEducation", field: "身体教育学" },
  { value: "secondaryEducation", field: "附属中等教育学校" },
];

const pharmacyFacultyOptions: FacultyOption[] = [
  { value: "pharmaceuticalSciences", field: "薬科学科" },
  { value: "pharmacy", field: "薬学科" },
];

/**
 * @param props - The props object
 * @param props.selectedFaculty - The selected faculty
 * @param props.selectedDepartment - The selected department
 * @param props.setSelectedDepartment - The function to set the selected faculty
 * @returns Year input component
 */
export default function FacultyInput({
  selectedFaculty,
  selectedDepartment,
  setSelectedDepartment,
}: FacultyProps) {
  return (
    <div className="relative mb-6" data-twe-input-wrapper-init>
      <label
        htmlFor="year"
        className="block mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-300"
      >
        学科
      </label>
      <Select
        value={selectedDepartment}
        onChange={(event) => setSelectedDepartment(event.target.value)}
        name="year"
        className="peer block w-full rounded border-2 px-3 py-2 leading-6 outline-none transition-all duration-200 ease-linear focus:border-primary focus:outline-none"
        id="year"
      >
        {selectedFaculty === "default" && (
          <option value="default">まず学部を選択してください</option>
        )}
        {selectedFaculty === "science" && (
          <>
            {scienceDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "engineering" && (
          <>
            {engineeringDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "agriculture" && (
          <>
            {agricultureDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "medicine" && (
          <>
            {medicalDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "economics" && (
          <>
            {economicsDepartments.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "law" && (
          <>
            {lawFacultyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "arts" && (
          <>
            {literatureFacultyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "education" && (
          <>
            {educationFacultyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "pharmacy" && (
          <>
            {pharmacyFacultyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
        {selectedFaculty === "liberal_arts" && (
          <>
            {liberalArtsFacultyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.field}
              </option>
            ))}
          </>
        )}
      </Select>
    </div>
  );
}
