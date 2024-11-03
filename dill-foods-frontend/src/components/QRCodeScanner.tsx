import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import { fetchBatchByQRCodeId } from "../customHooks/useBatch";

interface QRCodeScannerProps {
  setResData: any;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ setResData }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scannedData, setScannedData] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let qrScanner: QrScanner;

    const setupScanner = async () => {
      try {
        if (videoRef.current) {
          qrScanner = new QrScanner(
            videoRef.current,
            (result) => {
              handleScanResult(result);
            },
            {
              highlightScanRegion: true,
              highlightCodeOutline: true,
            }
          );

          await qrScanner.start();
        }
      } catch (e) {
        console.error("Error initializing QR Scanner:", e);
        setError("Error initializing camera");
      }
    };

    const handleScanResult = async (result: QrScanner.ScanResult) => {
      try {
        console.log("Decoded QR code:", result);
        setScannedData(result.data);
        if (result.data) {
          const res = await fetchBatchByQRCodeId(result.data);
          setResData(res);
        }
      } catch (e) {
        console.error("Error fetching batch data:", e);
        setError("Error fetching batch data");
      }
    };

    setupScanner();

    return () => {
      qrScanner?.stop();
      qrScanner?.destroy();
    };
  }, []);

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <video ref={videoRef} style={{ width: "100%" }} />
      {scannedData && (
        <p className="mt-4">
          <strong>Scanned Data:</strong> {scannedData}
        </p>
      )}
    </div>
  );
};

export default QRCodeScanner;
