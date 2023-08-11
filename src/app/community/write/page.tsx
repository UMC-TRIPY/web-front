'use client';

import MainEditor from "@/components/editorcommunity/mainEditor";
import SelectCountry from "@/components/editorcommunity/selectCountry";
import CommonHeader from "@/components/maincommunity/CommonHeader";

export default function Page() {
    return (
        <div>
            <CommonHeader />
            <SelectCountry />
            <MainEditor />
        </div>
    )
}