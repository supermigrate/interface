import {
  EthereumIcon,
  BitcoinIcon,
  SolanaIcon,
  PolygonIcon,
  GrinIcon,
} from "@/public/icons";

const tableData = [
  {
    tokenName: "$NJOKU",
    tokenAddress: "0xc0ffee254729296a45a3885639AC7E10F9d54979",
    poolUrl: "https://uniswap.org/pool/0x123abc",
  },
  {
    tokenName: "$ETHOS",
    tokenAddress: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
    poolUrl: "https://uniswap.org/pool/0x234bcd",
  },
  {
    tokenName: "$LINKR",
    tokenAddress: "0xaBcdef38979deF123456789ABcDeF1234567890",
    poolUrl: "https://uniswap.org/pool/0x345cde",
  },
  {
    tokenName: "$DAIOS",
    tokenAddress: "0xDefa017DefA017DEfa017DEFA017dEFa017DeFA",
    poolUrl: "https://uniswap.org/pool/0x456def",
  },
  {
    tokenName: "$UNIK",
    tokenAddress: "0xDEF0123456789abcDEF0123456789abcdef01234",
    poolUrl: "https://uniswap.org/pool/0x567f01",
  },
  {
    tokenName: "$COMPQ",
    tokenAddress: "0xDEF0123456789abcDEF0123456789abcdef01234",
    poolUrl: "https://uniswap.org/pool/0x678f12",
  },
  {
    tokenName: "$AAVEY",
    tokenAddress: "0xABCDEf0123456789abcdef0123456789ABCDef01",
    poolUrl: "https://uniswap.org/pool/0x789f23",
  },
  {
    tokenName: "$SNXK",
    tokenAddress: "0xDEF0123456789abcDEF0123456789abcdef01234",
    poolUrl: "https://uniswap.org/pool/0x890f34",
  },
  {
    tokenName: "$MKRR",
    tokenAddress: "0xDEF0123456789abcDEF0123456789abcdef01234",
    poolUrl: "https://uniswap.org/pool/0x901f45",
  },
  {
    tokenName: "$YFIL",
    tokenAddress: "0xDEF0123456789abcDEF0123456789abcdef01234",
    poolUrl: "https://uniswap.org/pool/0x012f56",
  },
];

const walletOptions = [
  {
    text: "ETH",
    value: "0xAbc1234567890DeF1234567890ABcDeF12345678",
    icon: <EthereumIcon />,
  },
  {
    text: "BTC",
    value: "0xAbc1234567890DeF1234567890ABcDeF1234567",
    icon: <BitcoinIcon />,
  },
  {
    text: "SOL",
    value: "0xAbc1234567890DeF1234567890ABcDeF1234568",
    icon: <SolanaIcon />,
  },
  {
    text: "MATIC",
    value: "0xAbc1234567890DeF1234567890ABcDeF1235678",
    icon: <PolygonIcon />,
  },
];

const tokenOptions = [
  {
    text: "NJK",
    value: "NJOKU",
    icon: <GrinIcon />,
  },
  {
    text: "MST",
    value: "MEISTER",
    icon: <GrinIcon />,
  },
  {
    text: "CHO",
    value: "CHOCO",
    icon: <GrinIcon />,
  },
  {
    text: "ETH",
    value: "ETHOS",
    icon: <GrinIcon />,
  },
  {
    text: "LIN",
    value: "LINKR",
    icon: <GrinIcon />,
  },
  {
    text: "DAI",
    value: "DAIOS",
    icon: <GrinIcon />,
  },
  {
    text: "UNI",
    value: "UNIK",
    icon: <GrinIcon />,
  },
  {
    text: "COM",
    value: "COMPQ",
    icon: <GrinIcon />,
  },
  {
    text: "AAV",
    value: "AAVEY",
    icon: <GrinIcon />,
  },
  {
    text: "SNX",
    value: "SNXK",
    icon: <GrinIcon />,
  },
  {
    text: "MKR",
    value: "MKRR",
    icon: <GrinIcon />,
  },
  {
    text: "YFI",
    value: "YFIL",
    icon: <GrinIcon />,
  },
];

type Rate = {
  name: string;
  ETH: number;
  BTC: number;
  SOL: number;
  MATIC: number;
  [key: string]: number | string;
};

const rates: Rate[] = [
  { name: "NJOKU", ETH: 22000, BTC: 340000, SOL: 12000, MATIC: 3000 },
  { name: "MEISTER", ETH: 20000, BTC: 390000, SOL: 11000, MATIC: 9000 },
  { name: "CHOCO", ETH: 32000, BTC: 400000, SOL: 19000, MATIC: 13000 },
  { name: "ETHOS", ETH: 18000, BTC: 350000, SOL: 15000, MATIC: 5000 },
  { name: "LINKR", ETH: 15000, BTC: 360000, SOL: 16000, MATIC: 6000 },
  { name: "DAIOS", ETH: 17000, BTC: 330000, SOL: 14000, MATIC: 4000 },
  { name: "UNIK", ETH: 21000, BTC: 380000, SOL: 13000, MATIC: 7000 },
  { name: "COMPQ", ETH: 23000, BTC: 370000, SOL: 18000, MATIC: 8000 },
  { name: "AAVEY", ETH: 25000, BTC: 410000, SOL: 17000, MATIC: 10000 },
  { name: "SNXK", ETH: 26000, BTC: 420000, SOL: 20000, MATIC: 11000 },
  { name: "MKRR", ETH: 24000, BTC: 430000, SOL: 21000, MATIC: 12000 },
  { name: "YFIL", ETH: 28000, BTC: 450000, SOL: 22000, MATIC: 14000 },
];

export { walletOptions, tokenOptions, rates, tableData };
export type { Rate };
