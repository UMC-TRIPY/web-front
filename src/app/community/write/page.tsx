'use client';

import MainEditor from "@/components/editorcommunity/mainEditor";
import SelectCountry from "@/components/editorcommunity/selectCountry";
import TagEditor from "@/components/editorcommunity/tagEditor";
import CommonHeader from "@/components/maincommunity/CommonHeader";

export default function Page() {
    return (
        <div>
            <CommonHeader />
            <SelectCountry />
            <MainEditor />
            <TagEditor />
        </div>
    )
}