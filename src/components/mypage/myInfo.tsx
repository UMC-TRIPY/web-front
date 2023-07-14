import InfoInput from "./infoInput"

export default function MyInfo () {
    return (
        <div>
            <div className="text-3xl font-bold mx-4">
            기본정보
            </div>
            <div className="mx-4 py-4">
            <InfoInput label="이메일" placeholder="이메일"/>
            <InfoInput label="닉네임" placeholder="닉네임"/>
            <InfoInput label="국적과 지역" />
            <InfoInput label="성별" placeholder="성별"/>
            </div> 
        </div>
    )
}