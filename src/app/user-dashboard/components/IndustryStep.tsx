// import React from "react";
// import { FormData } from "./StepFOrm";
// import {
//   Monitor,
//   Utensils,
//   GraduationCap,
//   Shirt,
//   Home,
//   Heart,
//   Laptop,
// } from "lucide-react";

// interface IndustryStepProps {
//   formData: FormData;
//   updateFormData: (data: Partial<FormData>) => void;
// }

// const industries = [
//   { id: "technology", name: "Technology", icon: Monitor },
//   { id: "food-beverage", name: "Food & Beverage", icon: Utensils },
//   { id: "education", name: "Education", icon: GraduationCap },
//   { id: "fashion", name: "Fashion", icon: Shirt },
//   { id: "real-estate", name: "Real Estate", icon: Home },
//   { id: "health-wellness", name: "Health & Wellness", icon: Heart },
//   { id: "technology-2", name: "Technology", icon: Laptop },
//   { id: "technology-3", name: "Technology", icon: Monitor },
// ];

// const IndustryStep: React.FC<IndustryStepProps> = ({
//   formData,
//   updateFormData,
// }) => {
//   const handleIndustrySelect = (industryId: string) => {
//     updateFormData({ industry: industryId });
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-foreground mb-8">
//         Select Industry
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {industries.map((industry) => {
//           const Icon = industry.icon;
//           const isSelected = formData.industry === industry.id;

//           return (
//             <button
//               key={industry.id}
//               onClick={() => handleIndustrySelect(industry.id)}
//               className={`
//                 p-6 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center gap-3 min-h-[120px] justify-center
//                 ${
//                   isSelected
//                     ? "border-selection-selected bg-selection-selected-bg text-selection-selected"
//                     : "border-selection-border bg-background text-foreground hover:bg-selection-hover hover:border-selection-selected"
//                 }
//               `}
//             >
//               <Icon className="w-6 h-6" />
//               <span className="font-medium text-sm">{industry.name}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default IndustryStep;
