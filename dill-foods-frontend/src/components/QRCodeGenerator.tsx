import React from "react";
import { QRCodeCanvas } from "qrcode.react";

interface QRCodeGeneratorProps {
  inputValue: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ inputValue }) => {
  return (
    <div className="text-center">
      {inputValue && (
        <QRCodeCanvas
          value={inputValue}
          size={256}
          level="H"
          includeMargin={true}
        />
      )}
    </div>
  );
};

export default QRCodeGenerator;
