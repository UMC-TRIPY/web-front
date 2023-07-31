const currenyKey = process.env.NEXT_PUBLIC_EXCHANGE_KEY;
const today = new Date();
let date;
const loc = today.toString().indexOf(':');
const time = Number(today.toString().substring(loc - 2, loc));
if (today.getDay() === 6) {
    date = new Date(today.setDate(today.getDate() - 1));
} else if (today.getDay() === 0) {
    date = new Date(today.setDate(today.getDate() - 2));
} else if (time < 11) {
    date = new Date(today.setDate(today.getDate() - 1));
} else {
    date = today;
}
const year = date.getFullYear().toString();
const tempMonth = (date.getMonth() + 1).toString();
const month = tempMonth.length === 1 ? '0' + tempMonth : tempMonth;
const day = date.getDate().toString();
const dateValue = `${year}${month}${day}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    async rewrites() {
        return [
            {
                source: '/api/exchange',
                destination: `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${currenyKey}&searchdate=${dateValue}&data=AP01`
            }
        ];
    }
};

module.exports = nextConfig;
