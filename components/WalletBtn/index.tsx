// import Button from "@mui/material/Button";
// const WalletBtn = () => {
//   return (
//     <Button
//       variant="contained"
//       style={{ textTransform: "none" }}
//       className="bg-[#196ad4]"
//     >
//       Connect Wallet
//     </Button>
//   );
// };

// export default WalletBtn;

import { useEffect, useState } from "react";
import { hooks, metaMask } from "../Connectors/MetaMask";
import { Card } from "../Connectors/MetaMask/Card";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function WalletBtn() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  const [error, setError] = useState(undefined);

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug("Failed to connect eagerly to metamask");
    });
  }, []);

  return (
    <Card
      connector={metaMask}
      chainId={chainId}
      isActivating={isActivating}
      isActive={isActive}
      error={error}
      setError={setError}
      accounts={accounts}
      provider={provider}
      ENSNames={ENSNames}
    />
  );
}
