import React from "react";

import { Heart, Edit3, Download, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LogoVariationsStepProps {
  formData: FormData;
}

const LogoVariationsStep = () => {
  const mockLogos = Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    brandName: "BRAND NAME",
    gradient: `linear-gradient(135deg, ${getGradientColors(index)})`,
  }));

  function getGradientColors(index: number): string {
    const gradients = [
      "#60A5FA, #F59E0B", // Blue to yellow
      "#F59E0B, #EF4444", // Yellow to red
      "#EF4444, #EC4899", // Red to pink
      "#EC4899, #8B5CF6", // Pink to purple
      "#8B5CF6, #06B6D4", // Purple to cyan
      "#06B6D4, #10B981", // Cyan to green
    ];
    return gradients[index % gradients.length];
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground">
          Generated Logo Variations
        </h2>

        <Button className=" w-auto flex items-center gap-2 ml-auto justify-center p-3  rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-white bg-blue-500 font-medium transition-all">
          Regenerate
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockLogos.map((logo) => (
          <div
            key={logo.id}
            className="bg-card border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Logo Preview */}
            <div
              className="aspect-video flex items-center justify-center p-8"
              style={{
                background: "linear-gradient(135deg, #BFDBFE 0%, #E0E7FF 100%)",
              }}
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-lg mb-4 mx-auto flex items-center justify-center text-white font-bold text-xl"
                  style={{ background: logo.gradient }}
                >
                  {logo.brandName.charAt(0)}
                </div>
                <div className="text-foreground font-semibold text-sm">
                  {logo.brandName}
                </div>
                {/* {formData?.tagline && (
                  <div className="text-muted-foreground text-xs mt-1">
                    {formData?.tagline}
                  </div>
                )} */}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 border-t border-gray-300">
              <div className="flex justify-center gap-3">
                <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200">
                  <Edit3 className="w-5 h-5" />
                </button>
                <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200">
                  <Trophy className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoVariationsStep;
