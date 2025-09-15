// import React from "react";

// interface BasicInfoStepProps {
//   formData: FormData;
//   updateFormData: (data: Partial<FormData>) => void;
// }

// const BasicInfoStep: React.FC<BasicInfoStepProps> = ({
//   formData,
//   updateFormData,
// }) => {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-foreground mb-8">
//         Basic Info
//       </h2>

//       <div className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium text-foreground mb-3">
//             Brand Name
//           </label>
//           <input
//             type="text"
//             value={formData.brandName}
//             onChange={(e) => updateFormData({ brandName: e.target.value })}
//             placeholder="Enter Your Brand Name"
//             className="w-full px-6 py-4 border border-input rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-foreground mb-3">
//             Tagline (Optional)
//           </label>
//           <input
//             type="text"
//             value={formData.tagline}
//             onChange={(e) => updateFormData({ tagline: e.target.value })}
//             placeholder="Your Brand Tagline"
//             className="w-full px-6 py-4 border border-input rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasicInfoStep;
