import React, { useState } from "react";
import QRCodeScanner from "../components/QRCodeScanner";
import { fetchBatchByQRCodeId } from "../customHooks/useBatch";
import BatchCard from "../components/BatchCard";
import { useUpdateInventory } from "../customHooks/useStock";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const InwardScreen = () => {
  const [qrCodeInput, setQrCodeInput] = useState("");
  const [resData, setResData] = useState<any>(null);
  const navigate = useNavigate();

  const { mutate: mutateInventory, status: _status } = useUpdateInventory();

  const handleInputChange = (e: any) => {
    setQrCodeInput(e.target.value);
  };

  const handleInputSubmit = async () => {
    if (qrCodeInput) {
      const res = await fetchBatchByQRCodeId(qrCodeInput);
      setResData(res);
    }
  };

  const onCancel = () => {
    setQrCodeInput("");
    setResData(null);
  };

  const onInward = () => {
    mutateInventory({ ...resData, action: "inward" });
    onCancel();
  };

  const onBackHandler = () => {
    navigate("/inventory");
  };

  return (
    <div>
      <Button onClick={onBackHandler}>Back</Button>
      <div className="flex flex-col mt-4">
        <h2 className="text-xl font-bold mb-4">Inward Batches</h2>
        <h2 className="text-xl font-bold mb-4">Scan QR Code</h2>
        <div className="flex flex-col">
          <div className="md:w-1/4">
            <QRCodeScanner setResData={setResData} />
          </div>

          <div className="flex flex-col md:w-1/2 mt-4 gap-2">
            <h3 className="italic">OR input the QR code identifier</h3>
            <input
              id="qrCodeInput"
              placeholder="QR Code identifier"
              value={qrCodeInput}
              onChange={handleInputChange}
              className="border rounded px-3 py-2 mb-2"
            />
            <Button onClick={handleInputSubmit}>Submit</Button>
          </div>
        </div>
      </div>
      {resData && (
        <div className="mt-4">
          <BatchCard batch={resData} onInward={onInward} onCancel={onCancel} />
        </div>
      )}
    </div>
  );
};

export default InwardScreen;
